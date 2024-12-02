import React, { useState } from 'react'
import ReactProfile from 'react-profile';
import "react-profile/themes/default.min.css";

import DefaultImg from '../../Images/defaultimg.jpeg'



function ImageEditer() {
    const [image,setImage] = useState(DefaultImg);
    const [edit,setEdit] = useState(false);


    const handleInput = (e) => {
        const file = e.target.files[0];
        setImage(URL.createObjectURL(file))
    }
    const handleCancel = () => {
        setEdit(false); // Close the editor without saving
        setImage(null)
      };
    
      const handleDone = (exportObject) => {
        if (exportObject) {
          console.log("Exported Object:", exportObject);
          const { getDataURL } = exportObject; 
          setImage(getDataURL); 
        }
        setEdit(false);
        // setImage(updatedIMG); // Close the editor
      };

  return (
    <div className='flex flex-col'>
    <div className='flex '>
        <div className='w-1/3 h-screen p-6 flex flex-col gap-2 items-center justify-center bg-gradient-to-t from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
            <h1 className='text-center font-extralight text-4xl mb-2 text-white'>Upload Your Image Here...</h1>
            <div className='w-72 h-60'>
                <div className="flex items-center  justify-center w-full">
                    <label for="dropzone-file" className="flex  flex-col items-center justify-center w-full h-64 border-2  border-dashed rounded-lg cursor-pointer bg-gradient-to-b from-indigo-500 via-[#8b5cf6] to-green-500 dark:bg-gray-700 hover:bg-[#8b5cf6] ">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <p className="mb-2 text-sm text-white"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-white"> PNG, JPG  (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" onChange={handleInput} type="file" className="hidden " />
                    </label>
                </div> 
            </div>
            <button onClick={()=>setEdit(true)} className=' text-2xl px-16 py-4 mt-8 rounded-lg border-2 border-solid text-white hover:bg-green-500 bg-green-400'>Edit</button>
        </div>
        <div className='w-2/3 p-10 h-screen flex items-center justify-center bg-gradient-to-t from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
            <div className='h-full flex items-center justify-center'>
                {
                    image &&  
                    <div className='border-2 rounded border-solid p-2' >
                    <a
                    href={image}
                    download="UpdatedIMG"
                    className=""
                    >
                    <img
                        src={image} 
                        alt="Hover to change"
                        className="w-[42rem] hover:border-2 border-dashed h-96 object-cover rounded "
                    />
                    </a>
                    </div> 
                }
            </div>
        </div>
    </div>
        <div>
            {
                edit && image && 
                <ReactProfile 
                src={image}
                onCancel={handleCancel}
                onDone={handleDone} />
            }
        </div>
    </div>
  )
}

export default ImageEditer 