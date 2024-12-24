import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from 'gsap';
import Link from 'next/link';
const Hero = () => {
    gsap.registerPlugin(ScrollTrigger);
    const el = useRef()
    useEffect(() => {

        const tls2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero",
                start: "top 50%",
                end: "top -50%",
                toggleActions: "play none none reverse",

            }
        });
        gsap.fromTo("#element3", { y: 10 }, { y: 0, duration: 1, repeat: -1, yoyo: true })
        gsap.fromTo("#element4", { y: 10 }, { y: 0, duration: 1.2, repeat: -1, yoyo: true })
        gsap.fromTo("#element5", { y: 10 }, { y: 0, duration: 1.4, repeat: -1, yoyo: true })
        tls2.fromTo("#name1", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: .5, ease: "power1.inOut" })
            .fromTo(".hero h1", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: .5, ease: "power1.inOut" }).
            fromTo("#typed", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: .5, ease: "power1.inOut" })
            .fromTo("#parahero", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: .5, ease: "power1.inOut" })
            .fromTo("#btnchck", { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: .5, ease: "power1.inOut" })
        const typed = new Typed(el.current, {
            strings: [" Domain Names Consultant", "App Developer", "Web Developer", "Web Scraper / AUTOMATER"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 200,
            backSpeed: 200,
            backDelay: 170,
            loop: true
        });
    }, [])
    return (
        <div id='hero' className='container flex items-center pt-3  hero  '>
            <div className=' w-[90%] lg:w-[70%]'>
                <img src='./particle3.png' id='element1' />
                <img src='./world.png' id='element2' />
                <img src='./element3.png' id='element3' />
                <img src='./phn.png' id='element4' />
                <img src='./dmn.png' id='element5' />
                <span id='name1' className=' block text-light font-bold font-prmr  text-xl lg:text-2xl '>Hi, MY NAME IS</span>
                <h1 className='font-prmr text-3xl  md:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-blue-100 via-[#00B7C2] to-light bg-clip-text text-transparent '>SOUFIANE TAKI</h1>
                <p id='typed' className='font-prmr font-bold  text-light text-xl lg:text-4xl'>  <span ref={el}></span> </p>
                <p id='parahero' className='text-blue-100 mt-2 font-bold'>I am a web developer with over 4 years of experience, mastering React.js, Next.js, Node.js, JavaScript, React Native, Python, C#, C++, SQL Server, and MongoDB. Additionally, I am a domain name seller and consultant as well as a skilled web scraper, offering tailored solutions and innovative strategies to help businesses succeed in the digital landscape.</p>
                <div id='btnchck' className='font-scnd w-fit text-2xl'> <Link href={"/#projectcontainer"}>Check My Projects</Link></div>
            </div>

        </div>
    );
}

export default Hero;
