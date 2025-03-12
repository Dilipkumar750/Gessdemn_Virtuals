import React from 'react'
import Hero from './Hero'
import About from './About'
import Features from './Features'
import OurServices from './OurServices'
import Steps from './Steps'
import Contact from './Contact'

const Home = () => {
  return (
    <div className=''>
      <Hero/>
      <About/>
      <Features/>
      <OurServices/>
      <Steps/>
      <Contact/>
    </div>
  )
}

export default Home
