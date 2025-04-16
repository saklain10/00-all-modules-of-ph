import React, { useState } from 'react';
import Link from './link';
import { Menu,CircleX } from 'lucide-react';



const navLinks = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Portfolio", path: "/portfolio" },
    { id: 5, name: "Contact", path: "/contact" },
];

const Navbar = () => {
    const [open, setOpen] = useState(true)

    const Links =  navLinks.map(route => <Link key={route.id} route={route}></Link>);

    return (
        <nav className='flex justify-between mx-10 mt-10'>
        <span className='flex ' onClick={() => setOpen(!open)}>
            {
            open ? 
            <CircleX className='md:hidden'></CircleX> : <Menu className='md:hidden '></Menu>
            }
            <ul className={`md:hidden absolute duration-1000 bg-green-500 ${open ? 'top-8':'-top-40'}`}>
                {Links}
            </ul>
        
        
        <h3 className='items-center text-center ml-4'>My Navbar</h3>
        </span>
        <ul className='md:flex hidden'>
            {
               Links
            }
        </ul>
        
        {/* <ul className='flex'>
                <li className='m-10'><a href="">Home</a></li>
                <li className='m-10'><a href="">About</a></li>
                <li className='m-10'><a href="">Blog</a></li>
            </ul> */}

        <button className='bg-blue-400 p-2 rounded-md hover:bg-green-400'>Sign In</button>
    </nav>
);
}




export default Navbar;