import { useState } from 'react'
import Hero from './components/Hero'
import Loader from './components/Loader'
import Work from './components/Work';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* {loading && <Loader onComplete={() => setLoading(false)} />}
      {!loading && <Hero />} */}

      <Hero />
      <Work />
    </>
  )
}

export default App