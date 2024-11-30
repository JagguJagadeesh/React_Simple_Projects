import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "",
    amountDisable = false,
    currencyDisable = false,
}) {
   const amountInputId = useId()

    return (
        <div className='bg-black text-white p-3 opacity-95 rounded-lg text-sm flex '>
            <div className="w-1/2 p-4">
                <label htmlFor={amountInputId}  className="text-white mb-2 inline-block">
                    {label}
                </label>
                <div className='rounded-xl outline-1'>
                    <input
                        id={amountInputId}
                        className=" text-xl w-full bg-transparent py-1.5"
                        type="number"
                        placeholder="Amount"
                        disabled={amountDisable}
                        value={amount}
                        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    />
                </div>
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-white mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-black cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;