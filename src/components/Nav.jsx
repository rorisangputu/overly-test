import { motion, AnimatePresence } from 'motion/react'
import React, { useState } from 'react'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const menuItems = ['Home', 'Services', 'Work', 'About', 'Contact']

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
                                    <a href='https://whatsapp.com' target='_blank' rel='noopener noreferrer' className='text-white hover:text-orange-500 transition-colors'>
                                        <p className='text-2xl underline'>WA</p>
                                    </a>
                                    <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='text-white hover:text-orange-500 transition-colors'>
                                        <p className='text-2xl underline'>X</p>
                                    </a>
                                    <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='text-white hover:text-orange-500 transition-colors'>
                                        <p className='text-2xl underline'>LI</p>
                                    </a>
                                    <a href='https://github.com' target='_blank' rel='noopener noreferrer' className='text-white hover:text-orange-500 transition-colors'>
                                        <p className='text-2xl underline'>IG</p>
                                    </a>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <motion.div
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className='space-y-1 cursor-pointer col-end'
                        >
                            <motion.div
                                className='h-1 w-20 bg-orange-500 origin-center'
                                animate={{
                                    rotate: isOpen ? 45 : 0,
                                    y: isOpen ? 6 : 0
                                }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                            />
                            <motion.div
                                className='h-1 w-20 bg-orange-500 origin-center'
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
                        initial={{ y: '-100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '-100%' }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className='fixed inset-0 bg-black/40 backdrop-blur-sm z-40'
                    >
                        <div className='h-full w-full flex items-center justify-end px-12 md:px-24'>
                            <nav className='space-y-8 text-right'>
                                {menuItems.map((item, i) => (
                                    <motion.div
                                        key={item}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                                    >
                                        <a
                                            href={`#${item.toLowerCase()}`}
                                            className='text-5xl md:text-7xl font-bold text-white hover:text-orange-500 transition-colors block'
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item}
                                        </a>
                                    </motion.div>
                                ))}
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Nav