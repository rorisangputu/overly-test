import { motion, AnimatePresence } from 'motion/react'
import React, { useState } from 'react'

const Nav = ({ isScrolled }) => {
    const [isOpen, setIsOpen] = useState(false)




    return (
        <>
            <div className='sticky top-0 w-full py-10 z-50'>
                <div className={`content-container mx-auto flex items-center ${isScrolled ? "justify-between" : "justify-end"}`}>
                    {isScrolled && <h1 className='logo text-2xl font-bold'>Overly</h1>}
                    <div className='flex justify-between items-center relative z-50'>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.3 }}
                                    className='fixed left-5 flex space-x-3 items-center'
                                >
                                    {socials.map((soc) => (
                                        <a key={soc.id} href={soc.link} target='_blank' rel='noopener noreferrer' className='text-white hover:text-orange-500 transition-colors'>
                                            <p className='text-2xl underline text-orange-600'>{soc.title}</p>
                                        </a>
                                    ))}


                                </motion.div>
                            )}
                        </AnimatePresence>

                        <motion.div
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className='space-y-1 cursor-pointer col-end'
                        >
                            <motion.div
                                className='h-1 w-20 bg-orange-600 origin-center'
                                animate={{
                                    rotate: isOpen ? 45 : 0,
                                    y: isOpen ? 6 : 0
                                }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                            />
                            <motion.div
                                className='h-1 w-20 bg-orange-600 origin-center'
                                animate={{
                                    rotate: isOpen ? -45 : 0,
                                    y: isOpen ? -2 : 0
                                }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ y: '-100%', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: '-100%' }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className='fixed inset-0 bg-black/30 backdrop-blur-sm z-40'
                    >
                        <div className='h-full w-full flex items-start justify-end mt-32 px-8 md:px-24'>
                            <nav className='space-y-2 text-right'>
                                {menuItems.map((item, i) => (
                                    <motion.div
                                        key={item}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                                    >
                                        <a
                                            href={`#${item.toLowerCase()}`}
                                            className='text-5xl md:text-7xl  font-inter text-white hover:text-orange-500 transition-colors block'
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item}
                                        </a>
                                    </motion.div>
                                ))}
                                <div className='pt-5'>
                                    {policy.map((item, i) => (
                                        <motion.div
                                            key={item}
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                                        >
                                            <a
                                                href={`#${item.toLowerCase()}`}
                                                className='py-1 text-2xl font-light font-inter text-white hover:text-orange-500 transition-colors block'
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item}
                                            </a>
                                        </motion.div>
                                    ))}
                                </div>
                                <div className='max-w-52 pt-5'>
                                    <p className='text-2xl text-white leading-6'>
                                        We are based in <span className='text-orange-600 font-bold'>Johannesburg</span> and work remotely.</p>
                                </div>
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Nav
const menuItems = ['Home', 'About', 'Work', 'Services', 'Contact']
const policy = ['Privacy Policy', 'Terms of Service', 'Disclaimer']
const socials = [
    {
        id: 1,
        link: "www.whatsapp.com",
        title: "WA",
    },
    {
        id: 2,
        link: "www.x.com",
        title: "X",
    },
    {
        id: 3,
        link: "www.linkedin.com",
        title: "LI",
    },
    {
        id: 4,
        link: "www.instagram.com",
        title: "IG",
    },
]