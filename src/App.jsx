import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Loader from './components/Loader'
import Work from './components/Work';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Services from './components/Services';

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* {loading && <Loader onComplete={() => setLoading(false)} />}
      {!loading && <Hero />} */}
      {/* Sticky Navbar - appears on scroll */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 font-mono font-semibold text-lg ${isScrolled ? 'translate-y-0 opacity-100 ' : '-translate-y-full opacity-0'
        }`}>
        <div className='w-[90%] mx-auto py-4 flex items-center justify-center'>
          {/* Logo */}
          <a href='#nav-container' className='flex items-center'>
            <img id='logo' src="/overly-logo.png" alt="Logo" className="w-12 h-12" />
          </a>
        </div>
      </nav>
      <Hero />
      <Work />
      <Services />
    </>
  )
}

export default App