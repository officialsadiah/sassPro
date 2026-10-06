
import React from 'react'
import Image from '../components/Image'
import { HiOutlineChevronRight } from "react-icons/hi";
const IndustryCard = ({src,title,text,}) => {
  return (
  
                <div className='w-[366px] h-[465px] shadow-2xl rounded-lg '>
                <div className="w-[346px] h-[220px] mx-auto ">
                <Image src={src} className="w-full mt-[12px]"/>
                </div>
                <div className='p-[30px]'>
                    <h4 className='text-[22px] text-Forthclr font-raleway font-bold'>{title}</h4>
                    <p className='pt-[21px] pb-[26px] text-base text-[#495E6C] font-roboto font-normal leading-[27px]'>{text}</p>
                    <a className='text-base text-secondary font-semibold font-raleway' href="">See More <HiOutlineChevronRight className='inline-block' /></a>
                </div>
            </div>
  )
}

export default IndustryCard