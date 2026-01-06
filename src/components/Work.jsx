import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GoArrowDownRight } from 'react-icons/go'

gsap.registerPlugin(ScrollTrigger)

const Work = () => {
    const projectsRef = useRef([])

    useGSAP(() => {
        // Animate header
        gsap.fromTo('#header', {
            opacity: 0,
            y: -50
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: '.page',
                start: 'top 80%',
                once: true
            }
        })

        // Stagger animate projects on scroll
        gsap.fromTo('.project-item', {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.projects-container',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        })
    })

    return (
        <div id='work' className='min-h-screen bg-neutral-950 w-full text-white page'>
            <div className="w-[90%] mx-auto py-16 font-mono">
                <div className='flex justify-between'>
                    <div id='header' className='flex flex-col justify-between mt-2'>
                        <h1 className='text-5xl leading-10'>Work</h1>
                        <p className='text-xs border-b border-dotted py-3 max-w-xs'>A collection of our most recent works. <br />Clients and mock-ups.</p>
                    </div>
                    <a href='#services' className='flex flex-col justify-end items-end'>
                        <p className='text-xl'>Services</p>
                        <GoArrowDownRight className='h-7 w-7' />
                    </a>
                </div>
                <div className='py-5 projects-container'>
                    {projects.map((proj, index) => (
                        <motion.div
                            key={proj.id}
                            ref={el => projectsRef.current[index] = el}
                            className='project-item flex p-5 items-center justify-between shadow-lg drop-shadow-white border-b border-gray-800 hover:bg-gray-900/30 transition-colors cursor-pointer'
                            whileHover={{ x: 10 }}
                        >
                            <h2 className='text-xl font-light w-5'>{String(proj.id).padStart(2, '0')}</h2>
                            <div className='flex flex-col space-y-1 flex-1 px-8'>
                                <h1 className='text-3xl font-medium'>{proj.name}</h1>
                                <p className='text-xs font-light text-gray-400'>{proj.description}</p>
                            </div>
                            <div className='relative'>
                                {/* Shadow/base layer */}
                                <div className='absolute top-2 left-2 w-32 h-20 bg-gray-700/50 rounded-sm'></div>
                                {/* Main image container with 3D effect */}
                                <div className='relative w-32 h-20 border border-gray-700 overflow-hidden rounded-sm shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:translate-x-1' style={{
                                    boxShadow: '4px 4px 12px rgba(255, 255, 255, 0), -2px -2px 8px rgba(255, 255, 255, 0.02)'
                                }}>
                                    <img src={proj.image} alt={proj.name} className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500' />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Work

const projects = [
    {
        id: 1,
        name: "CMMG",
        description: "Record Label Website and Library",
        image: "https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?q=80&w=870&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "NexGen Finance",
        description: "Banking App with Real-time Analytics",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=870&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Bloom & Co",
        description: "E-commerce Platform for Sustainable Fashion",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=870&auto=format&fit=crop"
    },
    {
        id: 4,
        name: "Velocity Fitness",
        description: "Workout Tracking and Social Fitness App",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=870&auto=format&fit=crop"
    },
    {
        id: 5,
        name: "Artisan Roasters",
        description: "Coffee Subscription Service & Brewing Guide",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=870&auto=format&fit=crop"
    },
    {
        id: 6,
        name: "TechPulse",
        description: "Tech News Aggregator with AI Curation",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=870&auto=format&fit=crop"
    },
    {
        id: 7,
        name: "Haven Properties",
        description: "Real Estate Platform with Virtual Tours",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=870&auto=format&fit=crop"
    },
    {
        id: 8,
        name: "Mindful",
        description: "Meditation and Mental Wellness App",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=870&auto=format&fit=crop"
    }
]