import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import previewLogo from './images/Preview.png'
import TermsAndConditions from './pages/TermsAndConditions'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ChooseRole from './pages/ChooseRole'
import './App.css'

function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.replace('/terms');
    }, 2000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <img src={previewLogo} alt="Logo" className="w-52 h-52 object-contain" />
    </div>
  )
}

function AppRoutes() {
  const [role, setRole] = useState(null)
  const navigate = useNavigate()

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/splash" replace />} />
      <Route path="/splash" element={<SplashScreen />} />
      <Route path="/terms" element={<TermsAndConditions onAgree={() => navigate('/choose-role')} />} />
      <Route path="/choose-role" element={<ChooseRole onSelectRole={selectedRole => { setRole(selectedRole); navigate('/login'); }} />} />
      <Route path="/login" element={<Login onSignup={() => navigate('/signup')} onLoginSuccess={() => {}} />} />
      <Route path="/signup" element={<Signup onLogin={() => navigate('/login')} onOtp={() => {}} />} />
    </Routes>
  )
}

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}
