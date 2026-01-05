import React, { useEffect, useState } from 'react'
import MouseFollowTilt from './MouseFollowTilt'
import { motion } from 'motion/react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const Hero = () => {
   

    useGSAP(() => {
        gsap.fromTo(
            '.nav-links',
            { opacity: 0, y: 10 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out',
                stagger: 0.9,
                delay: 1,
            }
        )
    }, [])

    return (
        <>
           

            {/* Original Hero Section */}
            <div id='nav-container' className='relative w-full text-neutral-800 h-screen font-mono font-light text-lg'>
                <nav className='nav-links w-[90%] mx-auto h-full py-10 flex flex-col justify-between'>
                    <div id='links' className='flex justify-between'>
                        <motion.a
                            href="/"
                            className="relative overflow-hidden border-b px-3 py-2"
                            initial="rest"
                            whileHover="hover"
                            animate="rest"
                        >
                            <motion.span variants={bgVariant} className="absolute inset-0 bg-black" />
                            <motion.span variants={textVariant} className="relative z-10">Home</motion.span>
                        </motion.a>

                        <motion.a
                            href="#work"
                            className="relative overflow-hidden border-b px-3 py-2"
                            initial="rest"
                            whileHover="hover"
                            animate="rest"
                        >
                            <motion.span variants={bgVariant} className="absolute inset-0 bg-black" />
                            <motion.span variants={textVariant} className="relative z-10">Work</motion.span>
                        </motion.a>
                    </div>
                    <div id='links' className='flex justify-between'>
                        <motion.a
                            href="#about"
                            className="relative overflow-hidden border-b px-3 py-2"
                            initial="rest"
                            whileHover="hover"
                            animate="rest"
                        >
                            <motion.span variants={bgVariant} className="absolute inset-0 bg-black" />
                            <motion.span variants={textVariant} className="relative z-10">About</motion.span>
                        </motion.a>

                        <motion.a
                            href="#contact"
                            className="relative overflow-hidden border-b px-3 py-2"
                            initial="rest"
                            whileHover="hover"
                            animate="rest"
                        >
                            <motion.span variants={bgVariant} className="absolute inset-0 bg-black" />
                            <motion.span variants={textVariant} className="relative z-10">Contact</motion.span>
                        </motion.a>
                    </div>
                </nav>

                {/* Center the logo perfectly */}
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
                    <MouseFollowTilt />
                </div>
            </div>


        </>
    )
}

export default Hero

const bgVariant = {
    rest: {
        y: "100%",
    },
    hover: {
        y: "0%",
        transition: {
            duration: 0.35,
            ease: "easeInOut",
        },
    },
}

const textVariant = {
    rest: {
        color: "#262626",
    },
    hover: {
        color: "#ffffff",
        transition: {
            duration: 0.2,
            ease: "easeInOut",
        },
    },
}