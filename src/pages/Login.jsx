import { useState, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import previewLogo from '../images/Preview.png'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { Link } from 'react-router-dom'


export default function Login({ onSignup, onLoginSuccess }) {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#0E0EAE] border-solid"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col justify-start items-center bg-white p-6 px-6 sm:px-6 mt-1">
      <div className="fixed left-1/2 top-8 transform -translate-x-1/2 z-50 w-full max-w-md lg:max-w-xl px-4 sm:px-8">
        <div className="w-full p-6 bg-white">
          <div className="flex justify-center mb-0">
            <img src={previewLogo} alt="SureStay logo" className="w-36 h-36 object-contain" />
          </div>
          <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
              const errors = {}
              if (!values.email) {
                errors.email = 'Email is required'
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
              }
              if (!values.password) {
                errors.password = 'Password is required'
              } else if (values.password.length < 6) {
                errors.password = 'Password must be at least 6 characters'
              }
              return errors
            }}
            onSubmit={async (values, { setSubmitting }) => {
              setError('');
              setLoading(true);
              try {
                const data = await login(values);
                localStorage.setItem('token', data.token);
                onLoginSuccess?.(data.user);
              } catch (err) {
                setError(err.message);
              }
              setLoading(false);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <div className="relative mb-4">
                  <label htmlFor="email" className="absolute -top-3 left-3 px-1 text-sm font-medium z-20 -mt-1">Email</label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className="w-full lg:max-w-lg px-3 py-2 sm:py-4 lg:px-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 lg:text-lg"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1 text-left ml-1" />
                </div>
                <div className="relative mb-4">
                  <label htmlFor="password" className="absolute -top-3 left-3 px-1 text-sm font-medium z-20 -mt-1">Password</label>
                  <div className="relative">
                    <Field
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      id="password"
                      className="w-full lg:max-w-lg px-3 py-2 sm:py-4 lg:px-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 pr-10 lg:text-lg"
                    />
                    <button
                      type="button"
                      tabIndex={-1}
                      className="absolute inset-y-0 right-2 flex items-center text-gray-500"
                      onClick={() => setShowPassword(v => !v)}
                    >
                      {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                    </button>
                  </div>
                  <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1 text-left ml-1" />
                </div>
                {error && <div className="text-red-500 text-center mb-2">{error}</div>}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0E0EAE] text-white rounded px-6 py-3 sm:py-5 text-base font-semibold transition-opacity duration-200 mt-2 disabled:opacity-60"
                >
                  {isSubmitting ? 'Logging in...' : 'Login'}
                </button>
              </Form>
            )}
          </Formik>
          <div className="mt-4 text-center">
            <span className="text-gray-600">Don't have an account?</span>
            <Link to="/signup">
              <button
                className="ml-2 text-[#0E0EAE] font-semibold hover:underline"
                onClick={onSignup}
              >
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 