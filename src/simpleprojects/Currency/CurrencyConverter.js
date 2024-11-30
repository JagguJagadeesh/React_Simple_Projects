import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import InputBox from './InputBox'
import useCurrencyinfo from './useCurrencyinfo'
import { MdOutlineSwapVert } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";



function CurrencyConverter() {
  const [amount, setAmount] = useState(1)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState()

  const currencyInfo = useCurrencyinfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
  
  return (
    <div>
    <div className='bg-slate-500 w-screen h-screen flex items-center justify-center'>
        <div className="w-[52rem] h-[32rem] opacity-85  bg-slate-300  text-black shadow-lg shadow-black flex flex-col items-center gap-10 pt-6 p-6 rounded-lg ">
          <h3 className='text-4xl italic font-serif text-black  '>Currency Converter</h3>
          <form
            onSubmit={(e) => {
                e.preventDefault();
                convert()
                
            }}
        >
            <div className="w-full mb-1">
                <InputBox
                    label="From"
                    amount={amount}
                    currencyOptions={options}
                    onCurrencyChange={(_currency) => setAmount(amount)}
                    selectCurrency={from}
                    onAmountChange={(amount) => setAmount(amount)}
                />
            </div>
            <div className="relative w-full h-0.5">
                <button
                    type="button"
                    className="absolute opacity-85 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full bg-slate-900 text-white px-8 py-2"
                    onClick={swap}
                >
                  <MdOutlineSwapVert/>
                </button>
            </div>
            <div className="w-full mt-1 mb-4">
                <InputBox
                    label="To"
                    amount={convertedAmount}
                    currencyOptions={options}
                    onCurrencyChange={(currency) => setTo(currency)}
                    selectCurrency={to}
                    onAmountChange={(convertedAmount)=>{setConvertedAmount(convertedAmount)}}
                />
            </div>
            <button type="submit" className="w-full opacity-90 bg-blue-600 text-white px-4 py-3 rounded-lg">
                Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
    <Link to='/' className='bg-red-500 mt-[32rem] ml-[70rem] p-3  rounded-md fixed' >{<IoMdArrowRoundBack/>}</Link>
    </div>
    </div>
  )
}

export default CurrencyConverter