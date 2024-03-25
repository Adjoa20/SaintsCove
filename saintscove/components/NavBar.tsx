'use client'

import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const currentPath = usePathname();
  console.log(currentPath)

  return (
    <nav className="w-full h-16 lg:h-20 border-b-[0px] fixed top-0 z-10">
    <div className="max-h-screen-2xl mx-4 lg:mx-25 px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center flex-shrink-0">
            <Logo />
        </Link>
        <div className="lg:hidden">
            <button className="block text-black hover:text-zinc-400 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </div>
        <div className="hidden lg:flex lg:flex-grow justify-end">
            <Link href="/about" className="flex mt-4 lg:mt-0 text-black hover:text-zinc-400 transition-colors mr-4 font-bold justify-between items-center">About/Missions</Link>
            <Link href="/connect" className="flex mt-4 lg:mt-0 text-black hover:text-zinc-400 transition-colors mr-4 font-bold justify-between items-center">Connect</Link>
            {/* <Link href="/media" className="flex mt-4 lg:mt-0 text-black hover:text-zinc-400 transition-colors mr-4 font-bold justify-between items-center">Media</Link> */}
            <Link href="/team" className="flex mt-4 lg:mt-0 text-black hover:text-zinc-400 transition-colors mr-4 font-bold justify-between items-center">Meet The Team</Link>
            <Link href="/admin" className="flex mt-4 lg:mt-0 text-black hover:text-zinc-400 transition-colors mr-4 font-bold justify-between items-center">Admin</Link>
        </div>
    </div>
</nav>

  )
}

export default Navbar
