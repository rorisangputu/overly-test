import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Services = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

    return (
        <section id='services'
            ref={targetRef}
            className="relative h-[300vh] w-full bg-neutral-950"
        >
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className="group relative w-screen h-screen overflow-hidden flex-shrink-0"
                        >
                            {/* Background effect layer - this can have absolute inset-0 */}
                            <div className="absolute inset-0 z-0 bg-neutral-900 transition-transform duration-300 group-hover:scale-110"></div>

                            {/* Content layer - this stays relative */}
                            <div className="relative z-10 flex items-center justify-center h-full">
                                <div className="w-[80%] mx-auto text-white font-mono">
                                    <span className="text-sm text-gray-500 uppercase tracking-widest">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <h2 className="text-7xl font-bold mt-4 mb-6">
                                        {service.title}
                                    </h2>
                                    <p className="text-xl text-gray-400 max-w-2xl">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Services

const services = [
    {
        id: 1,
        title: "Brand Strategy",
        description: "We craft compelling brand narratives that resonate with your audience and set you apart from the competition."
    },
    {
        id: 2,
        title: "Web Development",
        description: "Custom websites and applications built with cutting-edge technology and pixel-perfect attention to detail."
    },
    {
        id: 3,
        title: "Digital Marketing",
        description: "Data-driven campaigns that amplify your message and drive measurable results across all channels."
    },
    {
        id: 4,
        title: "UI/UX Design",
        description: "Beautiful, intuitive interfaces that delight users and enhance every interaction with your product."
    }
]