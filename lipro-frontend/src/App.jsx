import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LogIn from './pages/LogIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<<<<<<< HEAD
      <LogIn />
=======
      <h1 className='text-xl font-bold text-blue-500'>LiPro Application</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
>>>>>>> fb68a7ae78a3a58a0eca63154c84fabc172b1d66
    </>
  )
}

export default App
