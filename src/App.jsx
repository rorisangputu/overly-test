import { useState } from 'react'
import Hero from './components/Hero'
import Loader from './components/Loader'

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* {loading && <Loader onComplete={() => setLoading(false)} />}
      {!loading && <Hero />} */}

      <Hero />
    </>
  )
}

export default App