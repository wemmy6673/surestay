import { useState } from 'react'
import previewLogo from '../images/Preview.png'
import { verifyOtp } from '../api'

export default function Otp({ email, onSubmit, onResend, onSuccess }) {
  const [otp, setOtp] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    setMessage('')
    try {
      await verifyOtp({ email, otp })
      onSuccess?.()
    } catch (err) {
      setError(err.message)
    }
    setSubmitting(false)
  }

  return (
    <div className="min-h-screen flex flex-col justify-start items-center bg-white p-6 px-2 sm:px-4 mt-4">
      <div className="fixed left-1/2 top-8 transform -translate-x-1/2 z-50 w-full max-w-md px-4 sm:px-8">
        <div className="w-full p-3 bg-white rounded-lg shadow">
          <div className="flex justify-center mb-4">
            <img src={previewLogo} alt="SureStay logo" className="w-36 h-36 object-contain" />
          </div>
          <h2 className="text-2xl font-bold mb-6 text-center">Enter OTP</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative mb-4">
              <label htmlFor="otp" className="absolute -top-3 left-3 px-1 text-sm font-medium z-20 -mt-1">OTP Code</label>
              <input
                type="text"
                name="otp"
                id="otp"
                maxLength={6}
                value={otp}
                onChange={e => setOtp(e.target.value.replace(/\D/g, ''))}
                className="w-full px-3 py-2 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 text-center tracking-widest text-lg"
                autoComplete="one-time-code"
                inputMode="numeric"
                pattern="[0-9]*"
              />
              {message && <div className="text-red-500 text-sm mt-1 text-left ml-1">{message}</div>}
              {error && <div className="text-red-500 text-center mb-2">{error}</div>}
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-[#0E0EAE] text-white rounded px-6 py-3 sm:py-5 text-base font-semibold transition-opacity duration-200 mt-2 disabled:opacity-60"
            >
              {submitting ? 'Verifying...' : 'Verify OTP'}
            </button>
          </form>
          <div className="mt-4 text-center">
            <span className="text-gray-600">Didn't receive the code?</span>
            <button
              className="ml-2 text-[#0E0EAE] font-semibold hover:underline"
              onClick={onResend}
              disabled={submitting}
            >
              Resend OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 