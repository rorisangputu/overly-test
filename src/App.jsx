
import Hero from './components/Hero'
import Loader from './components/Loader'
import Work from './components/Work';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Services from './components/Services';
import Nav from './components/Nav';
import { useState } from 'react';

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  return (
    <>
      <Nav isScrolled={isScrolled} />
      <Hero isScrolled={setIsScrolled} />

    </>
  )
}

export default App