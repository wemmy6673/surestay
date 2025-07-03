import { useState, useRef } from 'react'
import previewLogo from '../images/Preview.png'

export default function TermsAndConditions({ onAgree }) {
  const [scrolledToBottom, setScrolledToBottom] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const termsRef = useRef(null)

  const handleScroll = () => {
    const el = termsRef.current
    if (el) {
      if (el.scrollTop + el.clientHeight >= el.scrollHeight - 2) {
        setScrolledToBottom(true)
      }
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-start items-center bg-white p-6 px-6 sm:px-6 mt-0">
      <div className="fixed left-1/2 top-8 transform -translate-x-1/2 z-50 w-full max-w-lg px-4 sm:px-8">
        <div className="w-full text-left px-4 sm:px-6 mb-6 bg-white">
          <div className="flex justify-center mb-0">
            <img src={previewLogo} alt="Logo" className="w-40 h-40 object-contain" />
          </div>
          <h2 className="text-2xl font-bold mb-2 text-center">Terms and Conditions</h2>
          <div
            ref={termsRef}
            onScroll={handleScroll}
            className="text-base leading-relaxed overflow-y-auto border border-gray-300 rounded p-2 bg-white text-justify"
            style={{ maxHeight: 300 }}
          >
            By using SureStay, you agree to abide by our terms and conditions. 
            SureStay is a platform designed to connect landlords and tenants directly, 
            eliminating middlemen and reducing fraudulent practices in Nigeria's real estate sector. 
            Users must be at least 18 years old and must register with accurate personal information, 
            including verifiable National Identification Number (NIN) and other documents as required 
            for identity and property ownership verification. Landlords are solely responsible for the 
            accuracy and legitimacy of their property listings, while tenants are expected to use the 
            platform ethically and truthfully. Any attempt to impersonate, provide false information,
            act as an unverified agent, or misrepresent property ownership will lead to immediate suspension
            or termination of the account. TrueLease does not act as a broker or middleman and bears no responsibility
            for the safety, legality, or accuracy of listings or users, nor for any financial losses, physical meetups, 
            or transactions that occur outside the platform. Users are strongly advised to conduct physical inspections 
            and due diligence before finalizing any rental agreements. TrueLease reserves the right to verify users, 
            remove suspicious listings, and terminate accounts that violate these terms. All information provided is 
            protected under our Privacy Policy and used strictly for verification purposes. These terms are governed 
            by the laws of the Federal Republic of Nigeria and may be updated periodically. 
            Continued use of the platform after any changes constitutes acceptance of the revised terms. 
          </div>
        </div>
        <div className="flex flex-col items-start w-full px-2 sm:px-0">
          <label className="mb-4 text-base flex items-center">
            <input
              type="checkbox"
              checked={agreed}
              onChange={e => setAgreed(e.target.checked)}
              className="mr-2 accent-blue-800 w-5 h-5"
              disabled={!scrolledToBottom}
            />
            I agree to the terms & conditions
          </label>
          <button
            className={`w-full bg-[#0E0EAE] text-white rounded px-6 py-3 text-base font-semibold transition-opacity duration-200 ${agreed ? 'opacity-100 cursor-pointer' : 'opacity-60 cursor-not-allowed'}`}
            disabled={!agreed}
            onClick={onAgree}
          >
            Agree & Continue
          </button>
          {!scrolledToBottom && (
            <span className="text-xs text-gray-500 mt-2">Scroll to the bottom to enable the checkbox</span>
          )}
        </div>
      </div>
    </div>
  )
} 