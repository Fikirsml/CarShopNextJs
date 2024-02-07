import Image from 'next/image'
import React from 'react'


const Footer = () => {
  return (
   <footer className='flex flex-col text-black-100 mt-5 border-t border-grey-100'>
    <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
      <div className='flex flex-col justify-start items-start gap-6'>
        <Image
        src="/logo.svg"
        alt='car img'
        width={118}
        height={18}
        className="object-contain"
        />
        <p className='text-base text-gray-700 '>Car Hub <br />
        All Rights Reserved &copy;</p>

        <div className="footer_links">
          
        </div>

      </div>

    </div>

   </footer>
  )
}

export default Footer