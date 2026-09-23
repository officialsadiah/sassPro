import React from 'react'
import { FaAngleDown } from "react-icons/fa6";

const ListItem = ({text,design,type}) => {
  return (
    <>
    <ul>
          <li className={` text-base text-primary font-medium font-inter ${design}`}>
          {text}
          
          {
           type && <FaAngleDown className='inline ml-1'/>
            }
            </li>
        </ul>
        </>
  )
}

export default ListItem