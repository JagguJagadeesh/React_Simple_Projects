import React from 'react'

function Cell({
    onClick,
    className='',
    ...props
}) {
  return (
    <input 
      type='button' 
      onClick={onClick} 
      className={`w-24 h-24 text-slate-300 cursor-pointer rounded-md border-2 border-violet-700 ${className}`} 
      {...props} />
  )
}

export default Cell