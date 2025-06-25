import Image from 'next/image'
import React from 'react'
import HeroCar from './../../../public/herocar.png'

const DesktopHero = () => {
  return (
    <>
      <section className='w-full'>
        <div className='mx-35 mt-[200px]'>
          <ul className='flex justify-between items-center font-dmsans text-[44px] font-normal text-white  text-center'>
            <li>Fast</li>
            <li className='ml-40'>Mobile</li>
            <li>Guaranteed</li>
          </ul>
        </div>

        <div className='hero-container'>
          <div className='hero-scroll'>
            <div className='RightToLeft'>
              <p>Flawless dent repair without the paint</p>
              <p>Flawless dent repair without the paint</p>
            </div>
          </div>
        </div>

        <div className='flex justify-center items-center mt-[-300px]'>
          <Image src={HeroCar} alt='hero-car'/>
        </div>

        
      </section>
    </>
  )
}

export default DesktopHero