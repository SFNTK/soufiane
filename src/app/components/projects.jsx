'use client'
import React, { useEffect, useState } from 'react';
import Cardprjct from './cardprjct';

const Projects = () => {
    const data=[{
        image:"./main.webp",
        id:1,
        title:"Diamond Bright",
        category:"WEB DEVELOPEMENT",
        link:"https://diamond-bright.vercel.app/",
        para:`Diamond Bright is an agency specializing in cleaning services. We developed a multi-page website to highlight their mission, reasons to choose them, past projects, testimonials, and contact details. The site features a responsive and user-centric design, along with a comprehensive appointment form and a mini admin dashboard for managing bookings efficiently.`
    },{id:2,
        image:"./main2.webp",
        title:"Charlotte Ultimate Cleaning",
        category:"WEB DEVELOPEMENT",
        link:"https://charlotte-ultimate.vercel.app/",
        para:`Charlotte Ultimate Cleaning is a cleaning service agency for which we created a professional and modern landing page. The site features well-structured sections, including a hero banner, about, services, pricing, reasons to choose them, and a contact form, offering a clear and engaging presentation of the agency's offerings.` }
        ,{id:3,
            image:"./decor.jpg",
            title:"hdecor",
            link:"https://hdecor.vercel.app/",
            category:"WEB DEVELOPEMENT",
            para:`Hdecor is an interior design agency for which we created a professional and modern landing page. The site features well-structured sections, including a captivating hero banner, an about section, services offered, a gallery of designs, reasons to choose them, and a contact form, providing a clear and engaging showcase of the agency's expertise and creativity.` }
    ];
    const[contentcrds,setcontent]=useState()
    useEffect(()=>{
const dt=data.map(item=>{
    return <Cardprjct link={item.link} key={item.id} category={item.category} image={item.image} para={item.para} title={item.title}/>
})
setcontent(dt)
    },[])
    return (
        <div id='projectcontainer'>
<h2 className='text-center text-light font-scnd mb-16 text-5xl'>MY PROJECTS</h2>
            <div id='cardproejctcontainer'>
{contentcrds}
            </div>
                </div>
    );
}

export default Projects;
