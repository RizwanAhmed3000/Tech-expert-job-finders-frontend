import React from 'react'

const ButtonCmp = ({text, link}) => {
  return (
    <div>
         <button className='bg-theme-red overflow-hidden p-4 text-2xl text-white rounded-2xl  before:transition-all before:duration-[1200ms] relative z-[10] before:content-[""] before:absolute before:z-[-1] before:w-full before:h-full before:bg-theme-yellow before:top-0 before:left-0  before:translate-x-[-125%]  hover:before:translate-x-[0%] before:rounded-2xl'>
          {text}
        </button>
    </div>
  )
}

export default ButtonCmp