/* eslint-disable no-unused-vars */
import { useState } from 'react'
import LandingPages from './pages/LandingPages'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <LandingPages />
    </>
  )
}

export default App;
