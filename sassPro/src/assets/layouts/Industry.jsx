import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
 import IndustryCard from '../components/IndustryCard'
import industryOne from '../Industryone.png'
import industryTwo from '../Industrytwo.png'
import industryThree from '../Industrythree.png'
import industryFour from '../Industryfour.png'
import industryFive from '../Industryfive.png'
import industrySix from '../Industrysix.png'
import Flex from '../components/Flex'


const Industry = () => {
  return (
    <section className='mb-32'>
        <Container>
            
            <Heading className=" mx-auto text-center mt-28 mb-14 " text='Industries in focus'/>
                <Flex className=" justify-between flex-wrap gap-y-7">
                    <IndustryCard src={industryOne} title="FinTech" text="Psum dolor sit amet, consectetur 
                    adipiscing elit. Nisi, maecenas orci sit pellentesque eget." />
                    <IndustryCard src={industryTwo} title="Telecom" text="Psum dolor sit amet, consectetur 
                    adipiscing elit. Nisi, maecenas orci sit pellentesque eget." />
                    <IndustryCard src={industryThree} title="Retail" text="Psum dolor sit amet, consectetur 
                    adipiscing elit. Nisi, maecenas orci sit pellentesque eget." />
                    <IndustryCard src={industryFour} title="Transportation" text="Psum dolor sit amet, consectetur 
                    adipiscing elit. Nisi, maecenas orci sit pellentesque eget." />
                    <IndustryCard src={industryFive} title="eLearning" text="Psum dolor sit amet, consectetur 
                    adipiscing elit. Nisi, maecenas orci sit pellentesque eget." />
                    <IndustryCard src={industrySix} title="Artificial Intelligence" text="Psum dolor sit amet, consectetur 
                    adipiscing elit. Nisi, maecenas orci sit pellentesque eget." />
                </Flex>
        </Container>
    </section>
  )
}

export default Industry