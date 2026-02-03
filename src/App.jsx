import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import previewLogo from './images/Preview.png'
import TermsAndConditions from './pages/TermsAndConditions'
import Login from './pages/Login'
import Signup from './pages/Signup'
// import ChooseRole from './pages/ChooseRole'
import LandlordDashboard from './pages/LandlordDashboard'
import ProtectedRoute from './ProtectedRoute'
import { AuthProvider } from './AuthContext'
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

  const handleLoginSuccess = (user) => {
    // For now, use the stored role to determine dashboard
    if (role === 'landlord') {
      navigate('/landlord-dashboard');
    } else if (role === 'tenant') {
      navigate('/tenant-dashboard');
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    setRole(null);
    navigate('/login');
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/splash" replace />} />
      <Route path="/splash" element={<SplashScreen />} />
      <Route path="/terms" element={<TermsAndConditions onAgree={() => navigate('/login')} />} />
      <AuthProvider >
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/landlord-dashboard" element={<ProtectedRoute><LandlordDashboard /></ProtectedRoute>} />
      <Route path="/" element={<Navigate to="/landlord-dashboard" replace />} />

          {/* 404 - Redirect to dashboard */}
          <Route path="*" element={<Navigate to="/landlord-dashboard" replace />} />
      </AuthProvider>

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
