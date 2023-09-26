"use client";
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <header className='flex justify-center'>
      <motion.div 
      initial  = {{y:-100, opacity: 0 }}
      animate  = {{y: 0,  opacity: 1 }}
      className="py-1 mb-2 px-10 fixed w-1/2 mt-6 border-opacity-0 bg-white bg-opacity-70 shadow-lg shadow-blue-950 backdrop-blur-[0.5rem] rounded-full">
        <div className="flex justify-between text-white">
          <div>
          <Image src="/logo2.png" width={50} height={50} alt='flame logo image' className=" ease-in-out hover:scale-110 duration-200 hover:animate-pulse" />
          </div>
          <ul className='flex items-center justify-evenly w-1/2'>
            <li className="nav-item">
            <Link className="nav-link active" href='#home' >Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" href='#portfolio' >Portfolio</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" href='#contact' >Contact</Link>
            </li>
          </ul>
          </div>
        </motion.div>
    </header>
  )
}

export default Navbar