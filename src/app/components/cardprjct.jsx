import { Eye } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

const Cardprjct = ({image,category,title,para,link}) => {
    return (
        <div className='cardproejct w-[90%] md:w-[45%] '>
            <img src={image} alt="" />
            <span className='category'>{category}</span>
            <span className='font-scnd text-light  text-2xl mt-2 ml-2'>{title}</span>
            <p className='font-prmr font-bold text-blue-100 mx-1'>{para}</p>
            <Link href={link}><div  > <Eye/> Watch Live Demo </div></Link>
        </div>
    );
}

export default Cardprjct;
