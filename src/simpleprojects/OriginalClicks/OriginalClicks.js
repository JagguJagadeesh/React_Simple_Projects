import React, { useState } from "react";
import { GrPowerReset } from "react-icons/gr";
import Cell from './Cell.js'

const OriginalClicks = () => {
  const [matrix,setMatrix] = useState([
    ['','',''],
    ['','',''],
    ['','','']
  ])
  const [trackIndexes,setTrackIndexes] = useState([])
  
  function handleClick(rowIndex,colIndex) {
    const updateMatrix = [...matrix]
    updateMatrix[rowIndex][colIndex] = 'green'
    setMatrix(updateMatrix)
    const updatedTrackIndexes = [...trackIndexes, { row: rowIndex, col: colIndex }];
    setTrackIndexes(updatedTrackIndexes);
    if(trackIndexes.length===9) changeColorToOrange();
  }
  // console.log(trackIndexes)
  function changeColorToOrange() {
  trackIndexes.forEach((item, index) => {
    setTimeout(() => {
      setMatrix(prevMatrix => {
        const newMatrix = prevMatrix.map(row => [...row]); 
        newMatrix[item.row][item.col] = 'orange';
        return newMatrix;
      });
    }, index * 1000); 
  });
}

function handleReset(){
  const updatedMatrix = [...matrix]
  for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
      updatedMatrix[i][j]=''
    }
  }
  setMatrix(updatedMatrix)
  setTrackIndexes([])
}


  return (
    <div className="h-screen flex flex-col gap-3 items-center justify-center bg-gray-200">
      <div className="grid grid-cols-3 gap-2">
        {matrix.map((row, rowIndex) =>
          row.map((color, colIndex) => (
            <Cell
              key={rowIndex}
              onClick={() => handleClick(rowIndex, colIndex)}
              className={`w-24 h-24 flex items-center justify-center border cursor-pointer ${
                color === "green"
                  ? "bg-green-500"
                  : color === "orange"
                  ? "bg-orange-500"
                  : "bg-white"
              }`}
            />
          ))
        )}
      </div>
      <div>
        <button onClick={handleReset} className="text-2xl p-2 outline outline-gray-600 rounded hover:text-white hover:bg-black duration-200" ><GrPowerReset/></button>
      </div>
    </div>
  );
};


export default OriginalClicks