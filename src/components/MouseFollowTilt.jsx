"use client";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useState } from "react";

const MouseFollowTilt = () => {
    // Track mouse position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

    useEffect(() => {
        // Set initial dimensions
        setDimensions({ width: window.innerWidth, height: window.innerHeight });

        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Mouse Y: top (0) = tilt back (-20deg), bottom (height) = tilt forward (+20deg)
    const rotateX = useSpring(
        useTransform(mouseY, [0, dimensions.height], [20, -10]),
        { stiffness: 300, damping: 20 }
    );

    // Mouse X: left (0) = tilt left (-20deg), right (width) = tilt right (+20deg)
    const rotateY = useSpring(
        useTransform(mouseX, [0, dimensions.width], [50, -40]),
        { stiffness: 300, damping: 20 }
    );

    return (
        <div className="flex items-center justify-center">
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="w-64 h-64"
            >
                < img
                    src="/overly-svg.svg"
                    alt="Logo"
                    className="w-full h-full object-contain"
                />
            </motion.div>
        </div>
    );
};

export default MouseFollowTilt;