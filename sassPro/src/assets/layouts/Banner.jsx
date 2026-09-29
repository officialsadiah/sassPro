import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import SubHead from '../components/SubHead'
import Image from '../components/Image'
import banner from '../banner.png'
import Button from '../components/Button'

const Banner = () => {
  return (
    <>
    <section className='bg-greenbg pt-40 pb-[200px] relative'>
        <Container>
            <Flex>
                <div className='w-1/2'>
                <h5 className='text-lg text-offwhite font-bold font-raleway'>Business & Technologies</h5>
                <h2 className=' leading-[61px] pt-3 pb-11 text-[52px] text-offwhite font-bold font-raleway'>We help tech companies deliver great software</h2>
                <SubHead className='w-[536px]' text="Since 1999. For millions of users. We transform businesses with powerful and" />
                <SubHead className='w-[536px]' text="adaptable digital solutions that satisfy the needs of today and unlock the opportunities of tomorrow." />

                <div className='w-[561px] relative mt-11'>
                    <input  className = "w-full p-4 rounded-md" type="text" />
                    <Button className="rounded-l-none absolute top-1/2 -translate-y-1/2 right-0 h-full py-3" text="Request for Demo"/>
                </div>
                </div>
                
                
                <div className='w-1/2 absolute top-1/2 -translate-y-1/2 right-0'>
                <Image src={banner} alt="Banner Picture" />
                </div>
            </Flex>
        </Container>
    </section>
    </>
  )
}

export default Banner