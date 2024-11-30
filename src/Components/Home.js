import React from 'react'
import { Link } from 'react-router-dom';
import PasswordGenratorimge from '../Images/PasswordGenretorimg.jpeg';
import CurrencyConverterimg from '../Images/currencyconverter.jpeg';
import TaskManagerimg from '../Images/taskmanager.jpeg';


function Home() {
    
  return (
    <div >
        <p className='text-center text-4xl  pt-2 p-0 bg-slate-300  font-my'>All My Simple Projects...</p>
        
        <div className='grid md:grid-cols-9 sm:grid-cols-6 gap-4 p-10  pt-4   bg-slate-300 '>
        <Link to='/currencyconvert' className='bg-white p-2 rounded-lg col-span-3 flex flex-col gap-4 items-center hover:shadow-2xl h-80'>
            <img src={CurrencyConverterimg} className='h-64 rounded-lg' alt="Projects" />
            <h1 className='text-xl font-extrabold'>Currency Converter</h1>
        </Link>
        <Link to='/taskmanager' className='bg-white p-2 rounded-lg col-span-3 flex flex-col gap-4 items-center hover:shadow-2xl h-80'>
            <img src={TaskManagerimg} className='h-64 rounded-lg'  alt="Projects" />
            <h1 className='text-xl font-extrabold '>Task Manager</h1>
        </Link>
        <Link to='/passwordgen' className='bg-white p-1 rounded-lg col-span-3 flex flex-col gap-4 items-center hover:shadow-2xl h-80'>
            <img src={PasswordGenratorimge} className='h-64' alt="Projects" />
            <h1 className='text-xl font-extrabold'>Password Generator</h1>
        </Link>
        
        <Link to='/passwordgen' className='col-span-3 '>
            <img src={PasswordGenratorimge} alt="Projects" />
        </Link>
        
        </div>
    </div>
  )
}

export default Home