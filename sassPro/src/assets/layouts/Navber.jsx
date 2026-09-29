import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../logo.png'
import ListItem from '../components/ListItem'
import Button from '../components/Button'


const Navber = () => {
  return (
    <nav className='bg-greenbg py-6'>
    <Container>
        <Flex className='justify-between items-center'>
            <Image src={Logo} alt="Logo Image" />
            <Flex className=' items-center gap-x-[35px]'>
                <ul className='flex gap-x-[30px]'>
                    <ListItem  type={true} text="Home"/>
                    <ListItem type={true} text="Pages"/>
                    <ListItem text="About Us"/>
                    <ListItem text="Services"/>
                    <ListItem text="Blog"/>
                    <ListItem text="Contact"/>
        
                </ul>
                <Button text="Let's talk" />
            </Flex>
        </Flex>
    </Container>
    </nav>
  )
}

export default Navber