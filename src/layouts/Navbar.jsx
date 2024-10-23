import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className="w-full ">
            <ul className="flex gap-6 p-3 border-b-2 text-white border-white">
                <Link href='/' className='focus:text-red-400'>Home</Link>
                <Link href='/add-to-do'>To Do</Link>
            </ul>
        </nav>
    )
}

export default Navbar