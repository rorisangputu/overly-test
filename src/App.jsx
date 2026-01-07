
import Hero from './components/Hero'
import Loader from './components/Loader'
import Work from './components/Work';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Services from './components/Services';
import Nav from './components/Nav';

gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <>
      <Nav />
      <div className='container h-screen'>
        <h1>Hello</h1>
      </div>
    </>
  )
}

export default App