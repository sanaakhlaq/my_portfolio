import React from 'react'
import Heading from './Heading'
import Card from './Card'




const data = [
    {
        id:0,
        title:"Dynamic Resume Builder",
        desc:"Developed a dynamic resume builder to create customizable resumes with flexible design options",
        img:"/projects_01.jpg",
        tags:["Typescript","Node","HTML","CSS"],
    },
    {
        id:1,
        title:"Static Interactive Builder",
        desc:"Built a static resume builder with HTML, CSS, and TypeScript for creating simple, structured resumes.",
        img:"/projects_02.jpg",
        tags:["HTML","CSS","Typescript","Node"],
    },
    {
        id:2,
        title:"Todo List",
        desc:"A React and Typescript base app Organize daily tasks and work consistently toward long-term goals.Dedicate some time each day to long-term goals.",
        img:"/projects_03.jpg",
        tags:["Typescript","css","Node","HTML"],
    },
]

const Projects = () => {
  return (
    <div id='Projects' className='container pt-32 text-1xl'>
        <Heading title='My Projects'/>
        <div className='grid gap-10 x1:gap-0 x1:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map ((el) =>(<Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            />))}
            

        </div>

    </div>
  )
}

export default Projects