import React from 'react'
import Image from '../components/Image'
import Flex from '../components/Flex'

const AboutCard = ({src,title,text}) => {
  return (
                <Flex className='items-center gap-x-5'>
                <Image src={src} alr=""/>
                <div>
                    <h2 className='texy-[30px] text-secondary  font-bold font-inter'>{title}</h2>
                    <p className='text-[16px] text-[#495E6C] font-semibold font-raleway'>{text}</p>
                </div>
            </Flex>
  )
}

export default AboutCard