import React from 'react'
import { Link } from 'react-router-dom';
import PasswordGenratorimge from '../Images/PasswordGenretorimg.jpeg';
import CurrencyConverterimg from '../Images/currencyconverter.jpeg';
import TaskManagerimg from '../Images/taskmanager.jpeg';
import ImageEiditerimg from '../Images/imageediterimg.jpeg'
import Mulitilang from '../Images/multilangimg.jpg'


function Home() {
    
  return (
    <div >
        <p className='text-center text-4xl  pt-2 p-0 bg-slate-300  font-my'>All My Simple Projects...</p>
        
        <div className='grid md:grid-cols-18 sm:grid-cols-12 gap-4 p-10  pt-4   bg-slate-300 '>
        <Link to='/imgeditor' className='bg-white p-4 rounded-lg h-[32rem] col-span-6 flex flex-col gap-4 items-center hover:shadow-2xl '>
            <img src={ImageEiditerimg} className='h-64 rounded' alt="Projects" />
            <h1 className='text-xl font-extrabold'>Image Editor</h1>
            <p className='text-md font-light m-4 mt-2'>The Image Editor is a React-based application that allows users to edit and customize images directly in their browser. It offers a variety of tools such as cropping, resizing, rotating, adjusting brightness/contrast, and applying filters. The app provides a user-friendly interface, making it easy for users to enhance their photos quickly. With its responsive design.</p>
        </Link>
        <Link to='/languagetranslator' className='bg-white p-4 pt-4 rounded-lg h-[32rem] col-span-6 flex flex-col gap-4 items-center hover:shadow-2xl '>
            <img src={Mulitilang} className='h-64 rounded ' alt="Projects" />
            <h1 className='text-xl font-extrabold'>MultiLang Translator</h1>
            <p className='text-md font-light m-4 mt-1'>The MultiLang Translation application allows users to translate text dynamically between languages. It features an input box for entering text and selecting the source language, and an output box for the translated text with a target language selector</p>
        </Link>
        <Link to='/currencyconvert' className='bg-white p-2 pt-4 rounded-lg h-[32rem]  col-span-6 flex flex-col gap-4 items-center hover:shadow-2xl '>
            <img src={CurrencyConverterimg} className='h-64 rounded-lg' alt="Projects" />
            <h1 className='text-xl font-extrabold'>Currency Converter</h1>
            <p className='text-md font-light m-4 mt-2'>The Currency Converter is a React-based application designed to provide real-time currency exchange functionalities. It allows users to select two currencies and input an amount to see its equivalent value in the target currency using live exchange rates fetched from an API. With its responsive design and intuitive interface, This tool is ideal for travelers, businesses, or anyone dealing with multiple currencies.</p>
        </Link>
        <Link to='/taskmanager' className='bg-white p-2 pt-4 rounded-lg h-[32rem] col-span-6 flex flex-col gap-4 items-center hover:shadow-2xl '>
            <img src={TaskManagerimg} className='h-64 rounded-lg'  alt="Projects" />
            <h1 className='text-xl font-extrabold '>Task Manager</h1>
            <p className='text-md font-light m-4 mt-2'>The Task Manager is a React-based application that helps users efficiently organize and track their tasks. It allows users to create, edit, delete, and mark tasks as complete, providing a clear overview of their to-do list. Featuring a clean and responsive design, the app ensures a seamless user experience across all devices. Ideal for individuals and teams, it simplifies task management and boosts productivity.</p>
        </Link>
        <Link to='/passwordgen' className='bg-white p-1 pt-4 rounded-lg h-[32rem] col-span-6 flex flex-col gap-4 items-center hover:shadow-2xl '>
            <img src={PasswordGenratorimge} className='h-64' alt="Projects" />
            <h1 className='text-xl font-extrabold'>Password Generator</h1>
            <p className='text-md font-light m-4 mt-1'>The Password Generator is a React-based application that helps users create strong, secure passwords with ease. It allows users to customize password length and select character types (uppercase, lowercase, numbers, symbols) to generate a unique, random password. With a simple and intuitive interface, Ideal for enhancing online security.</p>
        </Link>        
        </div>
    </div>
  )
}

export default Home