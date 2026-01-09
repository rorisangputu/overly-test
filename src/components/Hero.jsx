
import React from 'react'
import { FaCircleDot } from 'react-icons/fa6'
import { FiPlus } from 'react-icons/fi'

const Hero = () => {
    return (
        <div className='page-container'>
            <div className="content-container">
                {/* Starts disappear on scroll but into the center of the screen. Maybe make this better */}
                <div className='fixed top-30 grid grid-cols-3 gap-40'>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,].map((grid) => (
                        <FiPlus key={grid} className='text-neutral-300' />
                    ))}
                </div>
                <div className='text-neutral-200 h-[85vh] flex flex-col justify-center space-y-9 '>
                    {/* Text 1 */}
                    <h1 className='text-4xl leading-12'>One Solution, Unlimited Possibilities.</h1>
                    {/* Text 2: Last text to leave. y:-100 at same time as Logo */}
                    <div className='flex'>
                        <h2 className='text-right font-extralight max-w-[11rem] text-3xl'>The Creative Agency --</h2>
                    </div>
                    {/* Text 3 and Text 1 must leave first when screen scrolls down */}
                    <div className='flex space-x-5'>
                        <FaCircleDot className='text-orange-600 h-7 w-7' />
                        <p className='text-2xl'>Freedom beyond the traditional project scope</p>
                    </div>
                </div>
                {/* Logo: Must Move to nav when scroll. Can disappear and then logo appears in nav but when scroll should go towards logo corner */}
                <h1 className='fixed bottom-30 font-bold text-9xl right-2 text-orange-700'>
                    Overly
                </h1>
            </div>
        </div>
    )
}

export default Hero