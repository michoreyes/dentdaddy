import React from 'react'
import Logo from "../../../public/ddrlogo.png";
import Image from 'next/image';

const Header = () => {
  return (
    <header className='w-full flex justify-between items-center h-[116px] px-[80px] py-[24px]'>
      <div className='h-16 w-auto flex items-center'>
        <Image src={Logo} alt="Dent Daddy Logo" height={200} width={200} priority
        />
      </div>
      <div className='flex justify-center items-center gap-8 text-[16px] font-semibold text-[#000000]'>
        <ul className='flex gap-20 font-dmsans text-lg text-white font-medium'>
          <li>Services</li>
          <li>About Us</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  )
}

export default Header