import React from 'react';
import Link from 'next/link';
const Nav = () => {
   
    return (
        <div className='bg-dark nav  container flex  items-center justify-center text-xl text-blue-100 font-scnd py-4 '>
            <ul className='flex items-center justify-center gap-x-3 '>
                <li > <Link href="/#hero"> About</Link> </li>
                <li> <Link href="/#services"> Services</Link> </li>
                <li> <Link href="/#projectcontainer"> Work</Link>  </li>
                <li> <Link href="/#contact"> Contact</Link> </li>
            </ul>
        </div>
    );
}

export default Nav;
