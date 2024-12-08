import React, { useReducer } from 'react'
// import Task from './Task';
import { IoMdAdd } from "react-icons/io";

const tasks = [];

function reducer(state,action){
    switch (action.type) {
        case "ADD_TASK":
            return [...state,{
                id:state.length+1,
                text:action.payload
            }]
        case "DELETE_TASK":
            return state.filter(d => d.id !== action.payload)
    
        default:
            return state;
    }
}

function TaskManager() {
    const [state,dispatch] = useReducer(reducer,tasks);
    
  return (
    <div className='w-screen h-screen bg-slate-300'>
        {/* Input Task */}
        <section className='px-60  pt-16'>
            <p className='text-3xl text-center mb-4'>Task Manager</p>
            <div className='flex'>
                <input type="text" placeholder='Enter Task ' onBlur={(e)=>{dispatch({type:"ADD_TASK", payload:e.target.value})}} className='w-5/6 p-4  border-y-2 border-s-2 border-indigo-500 rounded-s-lg' />
                <button  className='w-1/6 bg-blue-500 border-2  border-black rounded-e-lg text-4xl ' ><IoMdAdd className='ml-10'/></button>
            </div>
        </section><br />
        {/* Tasks  */}
        <section className='px-60 text-start'>
            <div className='h-80 overflow-y-auto flex flex-col gap-4'>
                {
                    state.map((items)=>
                        <div className='flex gap-1'>
                                    <div className='w-10/12 pl-10 text-2xl text-white bg-indigo-500 p-3 rounded-lg' >{items.text}</div>
                                    <button className='w-2/12 bg-red-600 p-3 rounded-lg'  onClick={()=>dispatch({type:"DELETE_TASK",payload:items.id})}>Remove</button>
                                </div>
                    )
                }
            </div>
        </section>
    </div>
  )
}

export default TaskManager