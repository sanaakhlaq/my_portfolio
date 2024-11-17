

import React from 'react'
import Navbar from './Navbar';
import Image from 'next/image';


const Hero = () => {
  return (
    <div id="hero" className="min-h-screen bg-black lg:bg-[15%]bg-cover"
       style={{backgroundSize:"35%", backgroundPosition:"left 100px, top 100px"}}
    >
  
      <Navbar/>
      <div className='container grid lg:grid-cols-2 h-[calc(70vh-60px)]'>
        <div className='hidden lg:block ml-5 -mt-14'>
        <div>
            <Image
             src="/sana_image.png"
             alt='my image'
             height={650}
             width={450}
             className="w-400 h-300 rounded-full object-cover"
             
             
             
            />
          </div>
        </div>
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justyfy center items-center'>
          <div>
            <p data-aos="zoom-in-up">I am</p>
            <p data-aos="zoom-in-up">Sana</p>
            <p data-aos="zoom-in-up">Akhlaq</p>
          </div>
         
        </div>
      </div>
    </div>
    
    
  )
}

export default Hero