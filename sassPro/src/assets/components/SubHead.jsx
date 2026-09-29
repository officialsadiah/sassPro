import React from 'react'

const SubHead = ({className, text}) => {
  return (
    <p className={`text-base text-offwhite font-normal font-roboto leading-[27px] ${className}`}>
            {text}
    </p>
  )
}

export default SubHead