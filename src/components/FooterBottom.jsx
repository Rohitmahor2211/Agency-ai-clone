import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

const FooterBottom = () => {
  return (
    <>
        <div className='p-2 px-1 mt-2 pt-6 w-[93%] m-auto border-t border-t-gray-400 flex justify-between max-sm:w-full max-md:w-[98%] max-md:px-0'>
            <p className='text-sm'>Copyright 2025 © GreatStack - All Right Reserved.</p>
            <div className='flex gap-4 items-center'>
                <Facebook size={20}/>
                <Twitter size={20}/>
                <Instagram size={20}/>
                <Linkedin size={20}/>
            </div>
        </div>
    </>
  )
}

export default FooterBottom
