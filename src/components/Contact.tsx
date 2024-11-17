import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="Contact" className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl bg-blue-400'data-aos="zoom-in-up">Connect With Me</h2>
                <p className='text-gray-400 text-[18px] pt-2' data-aos="zoom-in-up">
                    Drop me a line,give me a call,or send me a message by submitting the form
                </p>
                <div className=' flex gap-3 items-center' data-aos="zoom-in-up">
                <AiOutlineMail size={30}/> ikhlaq.ikea@gmail.com
            </div>
            <div className=' flex gap-3 items-center' data-aos="zoom-in-up">
            <BsTelephone size={30} /> 0321-8948714
            </div>
        </div>
        <div className='space-y-8'>
            
        <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor="name">Name</label>
                <input type="text"
                className='h-[40px] bg-transparent border-blue-400' 
                id='name'/>
            </div>
            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor="email">Email</label>
                <input type="text"
                className='h-[40px] bg-transparent border-blue-400' 
                id='email'/>
            </div>
            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor="msg">Message</label>
                <textarea
                className='bg-transparent border-blue-400'
                id='msg'rows={8}>
                </textarea>
            </div>
            <button className='border-blue-400 bg-blue-400 p-2 px-6' data-aos="zoom-in-up">Send</button>
        </div>
    </div>
    </div>
  )
}

export default Contact