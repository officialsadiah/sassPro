import React from 'react'
import Container from '../components/Container' 
import Heading from '../components/Heading' 
import SubHeading from '../components/SubHead' 
import Flex from '../components/Flex' 
import Image from '../components/Image' 
import productA from '../productA.png'
import productB from '../productB.png'
import product from '../product.png'

const Product = () => {
  return (
    <section className='pt-[113px] pb-16 bg-[#F3F3F3] '>
        <Container>
            <Heading  className="w-[369px] text-center mx-auto" text="All product work with several devices."/>
            <SubHeading className="mt-7 mb-9 w-[454px] text-center mx-auto !text-[#495E6C]" text="A great SaaS UI/UX design can make your product addictive and uncomfortable to give up." />
            <Flex className='gap-5 justify-center mb-14'>
                <Image src={productA}/>
                <Image src={productB}/>
            </Flex>
            <Image className="mx-auto" src={product}/>
        </Container>
    </section>
   
  )
}

export default Product