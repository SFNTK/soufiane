"use client"
import React, { useState } from 'react';
import Nav from './components/nav';
import Hero from './components/hero';
import Banda from './components/banda';
import ServicesSection from './components/ServicesSection';
import Projects from './components/projects';
import { Contact } from 'lucide-react';
import Contactsection from './components/contact';
import Callaction from './components/callaction';
import Footer from './components/footer';


const LandingPage = () => {


  return (
   <div className='bg-dark w-full '>
    <div className='container'>
       <Nav/>
   <Hero/>
   <Banda/>
   <ServicesSection/>
   <Projects/>
   <Callaction/>
   <Contactsection/>

    </div>
     <Footer/>
  </div>
  );
};



export default LandingPage;

