import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ModeTogle'

function NavBar() {
  return (
    <nav className='w-full relative flex items-center justify-between max-w-2xl mx-auto px-4 py-5'>
    <Link href={"/"} className='font-bold text-4xl'>
        Blog <span className='text-primary'> Hub</span>
    
    </Link>
    <ModeToggle></ModeToggle>

    </nav>
  )
}

export default NavBar