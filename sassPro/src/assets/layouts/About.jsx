import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { FaStar } from 'react-icons/fa'
import Heading from '../components/Heading'
import AboutOne from '../aboutone.png'
import AboutTWO from '../abouttwo.png'
import AboutThree from '../aboutthree.png'
import AboutCard from '../components/AboutCard'

const About = () => {
  return (
    <section>
        <Container>
            <div className=' p-[50px] bg-offwhite rounded-lg shadow-2xl my-10 '>
            <Flex className=' border-b border-[rgba(17,47,66,0.10)] justify-between '>
                <div>
                    <h5 className='text-sm text-secondary font-raleway font-bold pb-4'>Who we are?</h5>
                    <Heading className='w-[759px] leading-[48px]' text="More than 5,000 users around the world are
already using STDEV actively"/>
                </div>


                <div className='mb-10 w-[186px] h-[177px] bg-[#CFDDDB] rounded-md gap-y-2 flex flex-col items-center justify-center'>
                    <h2 className='text-[50px] font-inter font-bold text-forthclr'>4.8</h2>
                    <ul className='flex gap-x-1'>
                        <li><FaStar className='text-base text-[#FF7282]'/></li>
                        <li><FaStar className='text-base text-[#FF7282]'/></li>
                        <li><FaStar className='text-base text-[#FF7282]'/></li>
                        <li><FaStar className='text-base text-[#FF7282]'/></li>
                        <li><FaStar className='text-base text-[#FF7282]'/></li>
                    </ul>
                    <p className='text-base text-[#495E6C] font-normal font-roboto'>35 Reviews</p>
                </div>
            </Flex>
            <Flex className="justify-around pt-6">
            <AboutCard src={AboutOne} title="70+" text="Professionals"/>
            <AboutCard src={AboutTWO} title="22 Years" text="Year of experience"/>
            <AboutCard src={AboutThree} title="$40+M" text="Fundraised by customers"/>
            </Flex>
            </div>
        </Container>
    </section>
  )
}

export default About