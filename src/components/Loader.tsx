import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const loadertl = gsap.timeline();
  useGSAP(() => {
    loadertl
      .fromTo(
        "#logo",
        {
          y: -500,
          x: 45,
          rotation: 180,
          opacity: 0,
        },
        {
          y: 0,
          x: 45,
          rotation: 360,
          opacity: 1,
          duration: 4,
          ease: "power3.out",
        }
      )
      .to("#logo", {
        x: 0,
        duration: 0.8,
        ease: "power2.inOut",
      })
      .fromTo(
        "#logo-text",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          ease: "expo.out",
        }
      )
      .to("#bg", {
        opacity: 0,
        duration: 0.5,
        ease: "power4.inOut",
        onComplete: onComplete, // Call this when animation finishes
      });
  }, []);

  return (
    <div id="bg" className="w-full h-screen bg-black flex-center">
      <div className="flex items-center">
        <img id="logo" src="/overly-logo.png" alt="" className="w-[30vh]" />
        <h1 id="logo-text" className="text-7xl font-bold -ml-12 mt-26">
          verly
        </h1>
      </div>
    </div>
  );
};

export default Loader;
