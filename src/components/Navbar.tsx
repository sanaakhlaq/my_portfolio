
import React from "react";


import { AiOutlineMenu } from "react-icons/ai";


const Navbar = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className='text-xl font-normal'>Sana Akhlaq</div>
            <ul className='gap-10 lg:gp-16 hidden md:flex'>
            <li className='menueLink'><a href='#Hero'>Home</a></li>
            <li className='menueLink'><a href='#about'>About</a></li>
            <li className='menueLink'><a href='#Projects'>Projects</a></li>
          <li className="menueLink"><a href="#Skills">Skills</a></li>
          <li className='menueLink'><a href='#Contact'>Contact</a></li>
            
            

            </ul>
            <AiOutlineMenu className='md:hidden'size={30} />
        </div>

    </div>
  )
}

export default Navbar