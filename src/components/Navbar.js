import React from 'react'
import { MdOutlinePhone } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

const Navbar = () => {
  return (
    <>
    <div className='h-[8vh] w-full bg-gray-800 text-white '>
    <div className='w-[80%]   p-3 max-[768px]:w-full max-[425px]:text-xs'>
           <li className='list-none flex justify-center gap-x-4 max-[425px]:gap-x-1'>
            <ul className='flex items-center gap-x-3'>
            <MdOutlinePhone className='text-yellow-500 text-2xl'/>
            <p>07365809732</p>
            </ul>
            <ul className='flex items-center gap-x-3'>
            <MdOutlinePhone className='text-yellow-500 text-2xl' />
            <p>07904651397</p>
            </ul>
            <ul className='flex items-center gap-x-3'>
            <FaEnvelope  className='text-yellow-500 text-2xl' />
            <p>bookings@aktaxis.co.uk</p>
            </ul>
            <ul className='flex items-center gap-x-3'>
            <MdLocationPin  className='text-yellow-500 text-2xl max-[768px]:text-sm max-[700px]:hidden'/>
            <p className='max-[768px]:text-sm max-[700px]:hidden'>Saint Mary Street Wallingford, OX10 OEL</p>
            </ul>
            </li> 
    </div>   
    </div>
    
    </>
  )
}

export default Navbar