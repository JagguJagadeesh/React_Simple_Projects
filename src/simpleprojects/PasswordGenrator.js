import React,{useState,useCallback, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom'
import { GrRefresh } from "react-icons/gr";
import { IoMdArrowRoundBack } from "react-icons/io";



function PasswordGenrator() {
    //using useState
    const [length,setlength] = useState(6);
    const [num,setnum] = useState(false);
    const [char,setchar] = useState(false);
    const [refresh,setrefresh] = useState(false);
    const [copy,setcopy] = useState('Copy');
    const [password,setpassword] = useState('');
    // using useRef
    const inputRef = useRef();


    const genratePassword = useCallback(()=>{
        let pass = "";
        let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
        if(num) str+="1234567890";
        if(char) str+="!@#$%^&*|"
        for(let i=1;i<length;i++){
            const c = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(c);
        }
        setpassword(pass);
    },[length,num,char])

    useEffect(()=>{
        genratePassword();
        setrefresh(false);
    },[genratePassword,refresh])

    const copyPassword = () =>{
        window.navigator.clipboard.writeText(password);
        inputRef.current.select()
        inputRef.current.focus()
        setcopy('Copied')
    }

  return (
    <>
    <div className='bg-white w-screen h-screen flex items-center justify-center'>
        <div className='w-[38rem] h-96 bg-black text-white shadow-lg shadow-black flex flex-col items-center gap-4 pt-10 p-6 rounded-lg '>
            <h3 className='text-3xl italic font-semibold'>PassWord Generator</h3>
            <div className='flex w-full h-14 rounded-sm'>
                <input 
                    type="text"
                    value={password} 
                    className='w-4/5 text-black text-lg font-bold pl-3 rounded-s-lg' 
                    placeholder='Password'
                    ref={inputRef} />
                <button className='bg-blue-500 text-center w-1/5  rounded-e-lg' onClick={copyPassword}>{copy}</button>
            </div>

            <hr className='text-white w-full'/>

            <h1 className='text-xl text-start font-serif'>Choose Required Options. . . .</h1>
            <div>
                <ul className='flex flex-col mt-2 gap-4'>
                    <li>
                        <label htmlFor="length">Range {length} : </label>
                        <input type="range" defaultValue={6} onChange={(event)=>{setlength(event.target.value)}} min={4} max={100} />
                    </li>
                    <li>
                        <label htmlFor="number">Numbers : </label>
                        <input type="checkbox" onChange={(e)=>{setnum(e.target.value)}} />
                    </li>
                    <li>
                        <label htmlFor="character">Characters : </label>
                        <input type="checkbox" onChange={(e)=>{setchar(e.target.value)}} />
                    </li>
                    <li className='text-center'>
                        <button className='bg-green-500  rounded-lg pl-8 pr-8 p-2 ' onClick={()=>{setrefresh(true)}} ><GrRefresh/></button>
                    </li>
                </ul>
            </div>
        </div>
    <Link to='/' className='bg-red-500 mt-[32rem] ml-[70rem] p-3 rounded-md fixed' >{<IoMdArrowRoundBack/>}</Link>
    </div>
    </>
  )
}

export default PasswordGenrator