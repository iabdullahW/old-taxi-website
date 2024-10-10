import React from 'react'
import mainImage from "./../images/business-people-sitting-in-minivan-taxi-2023-11-27-04-59-02-utc-scaled.jpg"
import "./Hero.css"

const Hero = () => {
  return (
    <>
   <div class="img">
  <div class="img-content  w-[30%] flex flex-col  gap-y-3 mx-96  h-full justify-center max-[768px]:mx-32 max-[768px]:w-[50%] max-[425px]:w-[100%] max-[425px]:mx-1">
    <h1 className='text-yellow-500 font-semibold text-lg'>Welcome to AK Taxis, Reliable Taxi Services In Wallingford  and <br></br> Surrounding areas</h1>
    <p className='font-medium max-[425px]:text-sm'>Experience the convenience and comfort of seamless transportation with AK Taxis. Whether you’re heading to the airport, running errands around town, or attending a special event, our reliable service ensures you arrive safely and on time. With a fleet of well-maintained vehicles and professional drivers, we’re committed to providing you with a hassle-free travel experience. Book your ride with AK Taxis today and discover a new standard in transportation excellence</p>
  </div>
</div>

    
    </>
  )
}

export default Hero