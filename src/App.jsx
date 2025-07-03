import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import previewLogo from './images/Preview.png'
import TermsAndConditions from './pages/TermsAndConditions'
import Login from './pages/Login'
import Signup from './pages/Signup'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showSplash, setShowSplash] = useState(true)
  const [showTerms, setShowTerms] = useState(true)
  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (showSplash) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: '#fff',
      }}>
        <img src={previewLogo} alt="Logo" style={{ width: 200, height: 200 }} />
      </div>
    )
  }

  if (showTerms) {
    return <TermsAndConditions onAgree={() => { setShowTerms(false); setShowLogin(true); }} />
  }

  if (showLogin) {
    return <Login onSignup={() => { setShowLogin(false); setShowSignup(true); }} />
  }

  if (showSignup) {
    return <Signup onLogin={() => { setShowSignup(false); setShowLogin(true); }} />
  }

  return (
    <>
      <div className="flex flex-col items-center mt-8">
        <img src={previewLogo} className="w-24 h-24 mb-4" alt="SureStay logo" />
        <h1 className="text-3xl font-bold mb-2">SureStay</h1>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Welcome to SureStay!
      </p>
    </>
  )
}

export default App
