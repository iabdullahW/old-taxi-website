import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import texi from "./images/ak-taxis-e1716533194952.png"
import About from './components/About'
import Services from './components/Services'
import TaxiRates from './components/TaxiRates'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'



const App = () => {
  return (
    <>
    <div className='relative w-full'>
      <div>

    <Navbar/>
      </div>
      <div className='w-[60%] mx-[350px] h-[11vh] bg-white absolute z-50 mt-[-30px] rounded-xl max-[768px]:hidden'>
        
       <div className='flex items-center list-none gap-x-7 px-10'>
          <img src={texi} className='h-[100px]'/>
          <li>Home</li>
          <li>Services</li>
          <li>Fleet</li>
          <li>Special Offers</li>
          <li>Contact</li>
       </div>
      </div>
    <div>

    <Hero/>
    </div>
    </div>
    <div>
      <About/>
      <Services/>
      <TaxiRates/>
      <ContactForm/>
      <Footer/>
    </div>
    </>
    
    
  )
}

export default App