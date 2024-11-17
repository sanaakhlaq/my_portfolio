import React from 'react'

const Skills = () => {
  return (
    <div id="Skills" className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="zoom-in-up">
          <h2 className='text-4xl md:text-5xl bg-blue-400'>Technologies I Work With</h2>
          <p className='text-gray-300 pt-2'>
          I specialize in building modern, responsive web applications using HTML, CSS, Tailwind CSS, and React. Proficient in Next.js and TypeScript, I create efficient, scalable, and dynamic user interfaces. My focus is on delivering clean, maintainable code and seamless user experiences.
          </p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-blue-400 text-3xl sm:tex-4xl'>
        <div className='space-y-2'>
        <h2 data-aos="zoom-in-up">Typescript</h2>
        <h2 data-aos="zoom-in-up">React.js</h2>
        <h2 data-aos="zoom-in-up">Next.js</h2>
        </div>
        <div className='space-y-2'>
        <h2 data-aos="zoom-in-up">Tailwind</h2>
        <h2 data-aos="zoom-in-up">CSS</h2>
        <h2 data-aos="zoom-in-up">Node.js</h2>
        </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills