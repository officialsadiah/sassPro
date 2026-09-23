import React from 'react'

const Button = ({text,dynamicVal}) => {
  return (

    <>
    <button className={`py-5 px-12 bg-secondary font-raleway font-semibold text-base
     text-offwhite rounded-md border border-transparent hover:bg-transparent hover:text-secondary
     hover:border-secondary duration-300 ${dynamicVal}`}>{text}</button>
    </>
  )
}

export default Button

// py-5 is 20pageXOffset, py-12 is 48px