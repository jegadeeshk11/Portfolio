import React, { useState } from 'react'
import { Bars3Icon} from '@heroicons/react/24/solid'
const Header = () => {
    const[togglemenu,settogglemenu]=useState(false)
  return (
    <header className="flex justify-between px-3 py-4    bg-zinc-100 text-black">
        <a className="font-bold  text-black" href='/#'>My Portfolio</a>
        <nav  className="hidden md:block">
        <ul className="flex space-x-4   text-black font-bold" >
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Resume">Resume</a></li>
            <li><a href="#Contact">Contact</a></li>
        </ul>
        </nav>
       {togglemenu && <nav  className="block md:hidden ">
        <ul onClick={()=>settogglemenu(!togglemenu)} className="flex flex-col mobile-nav">
        <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Resume">Resume</a></li>
            <li><a href="#Contact">Contact</a></li>
        </ul>
        </nav>}
        <button onClick={()=> settogglemenu(!togglemenu)}   className='block md:hidden'><Bars3Icon className='text-black h-5'/></button>
    </header>
  )
}

export default Header