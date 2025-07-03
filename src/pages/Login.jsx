import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import previewLogo from '../images/Preview.png'
import { FiEye, FiEyeOff } from 'react-icons/fi'

export default function Login({ onSignup }) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex flex-col justify-start items-center bg-white p-6 px-6 sm:px-6 mt-4">
      <div className="fixed left-1/2 top-8 transform -translate-x-1/2 z-50 w-full max-w-md px-4 sm:px-8">
        <div className="w-full p-6 bg-white">
          <div className="flex justify-center mb-4">
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
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                // Replace with real login logic
                alert(JSON.stringify(values, null, 2))
                setSubmitting(false)
              }, 400)
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
                    className="w-full px-3 py-2 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
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
                      className="w-full px-3 py-2 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 pr-10"
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
            <button
              className="ml-2 text-[#0E0EAE] font-semibold hover:underline"
              onClick={onSignup}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 