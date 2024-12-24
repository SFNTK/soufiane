import React from 'react';
import { Mail } from 'lucide-react';

const Footer = () => {
    return (
        <div id='footer' className='container'>
            <div id='contactinfo' className=' flex justify-between flex-col md:flex-row gap-x-5 gap-y-3 flex-wrap '>

                <div className='flex font-prmr font-bold   gap-x-1 items-center  text-dark'><img id='contactimg' src="./image1copy2.jpeg" alt="" /> <span>SOUFIANE TAKI</span></div>
                <div className='flex gap-x-1 font-prmr   items-center text-dark'><Mail />contact@soufianetaki.info</div>
                <div className='flex gap-x-1 font-prmr   items-center  text-dark'><Mail />sfentaki@gmail.com</div>
                <div className='flex gap-x-1 font-prmr  items-center  text-dark'><Mail />takisfen@gmail.com</div>




            </div>
            <p className='text-center font-prmr font-bold '>&copy; {new Date().getFullYear()} | Designed By Soufiane Taki | All rights reserved </p>
        </div>
    );
}

export default Footer;
