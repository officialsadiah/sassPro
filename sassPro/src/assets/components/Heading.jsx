import React from 'react'

const Heading = ({className,text}) => {
  return (
    <h3 className={`font-bold font-raleway text-4xl text-forthclr ${className}`}>{text}</h3>
  )
}

export default Heading