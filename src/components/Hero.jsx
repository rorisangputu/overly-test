import React from 'react'
import MouseFollowTilt from './MouseFollowTilt'

const Hero = () => {
    return (
        <div className='relative w-full text-black border h-screen'>
            <nav className='w-[90%] mx-auto h-full py-10 flex flex-col justify-between'>
                <div className='flex justify-between'>
                    <a href="" className='border-b pb-1 hover:opacity-70 transition-opacity'>Home</a>
                    <a href="" className='border-b pb-1 hover:opacity-70 transition-opacity'>Work</a>
                </div>
                <div className='flex justify-between'>
                    <a href="" className='border-b pb-1 hover:opacity-70 transition-opacity'>About</a>
                    <a href="" className='border-b pb-1 hover:opacity-70 transition-opacity'>Contact</a>
                </div>
            </nav>
            {/* Center the logo perfectly */}
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
                <MouseFollowTilt />
            </div>
        </div>
    )
}

export default Hero