import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='flex flex-col justify-center items-center gap-10  bg-[#fff]'>
        <h1 className='text-blue-500 text-[3em] animate-pulse font-bold  '> ReelTime</h1>
        <h2 className='text-fuchsia-700 font-extrabold' >Home of all Tv-shows</h2>
        <Link className='text-blue-500  font-bold hover:underline animate-pulse' to="/">Back to Home</Link>

    </div>
  )
}

export default Header