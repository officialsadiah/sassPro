import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Heading from '../components/Heading'
import SubHead from '../components/SubHead'
import Button from '../components/Button'
import engage from '../engage.png'


const Engage = () => {
  return (
    <section className='mt-28 mb-15'>
        <Container>
            <Flex className="items-center justify-center gap-10">
                <Image src={engage}/>
                <div>
                    <Heading className="w-[443px]" text="Don’t just engage, make it engaging."/>
                    <SubHead className="w-[531px] !text-[#495E6C] mt-6" text="Since 1999. For millions of users. We transform businesses with powerful and"/>
                    <SubHead className="w-[531px] !text-[#495E6C]" text="adaptable digital solutions."/>
                    <SubHead className="w-[531px] !text-[#495E6C] mb-11" text="Psum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra purus imperdiet a. Ut nisl est at ultricies neque ornare tellus tellus enim."/>
                    <Button text="Read More"/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Engage