import React, { useContext } from 'react'
import { ThemeContextProvider } from '../comtextApi/ThemeContext'

const FooterRightSide = () => {
    const {theme} = useContext(ThemeContextProvider)
  return (
   <>
        <div className='max-md:pt-6'>
            <h1 className='text-base font-medium max-md:px-2'>Subscribe to our newsletter</h1>
            <p className='text-sm font-normal py-2 max-md:px-2'>The latest news, articles, and resources, sent to your inbox weekly.</p>
            <div className='py-2 w-full mt-2 flex gap-2 max-md:px-2'>
                <input type="text" placeholder='Enter Your Email'
                    className={`border py-3 w-[73%] rounded-sm px-3 ${theme?'placeholder:text-white':'placeholder:text-gray-600'}
                    max-sm:w-[80%] max-md:w-[88%]`}
                />
                <button className='bg-blue-800 py-3 px-4 text-white text-base rounded-sm
                max-md:px-5
                '>Subscribe</button>
            </div>
        </div>
   </>
  )
}

export default FooterRightSide
