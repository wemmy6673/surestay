import { useState } from 'react'
import previewLogo from '../images/Preview.png'
import { FiHome, FiUsers, FiDollarSign, FiSettings, FiLogOut } from 'react-icons/fi'
import { BsEye } from "react-icons/bs";

export default function LandlordDashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <div className="w-[20%] bg-[#0E0EAE] text-white">
        <div className="p-6">
          <div className="flex items-center mb-8">
            <img src={previewLogo} alt="SureStay logo" className="w-8 h-8 mr-3" />
            <h1 className="text-lg font-semibold">Landlord</h1>
          </div>
          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'overview'
                  ? 'bg-white/20 text-white'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              <BsEye className='mr-3 h-5 w-5'/>
              Overview
            </button>
            <button
              onClick={() => setActiveTab('properties')}
              className={`w-full flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'properties'
                  ? 'bg-white/20 text-white'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              <FiHome className="mr-3 h-5 w-5" />
              Properties
            </button>
            <button
              onClick={() => setActiveTab('tenants')}
              className={`w-full flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'tenants'
                  ? 'bg-white/20 text-white'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              <FiUsers className="mr-3 h-5 w-5" />
              Tenants
            </button>
            <button
              onClick={() => setActiveTab('payments')}
              className={`w-full flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'payments'
                  ? 'bg-white/20 text-white'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              <FiDollarSign className="mr-3 h-5 w-5" />
              Payments
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'settings'
                  ? 'bg-white/20 text-white'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              <FiSettings className="mr-3 h-5 w-5" />
              Settings
            </button>
          </nav>
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <button
            onClick={onLogout}
            className="w-full flex items-center px-4 py-3 rounded-lg text-sm font-medium text-white/80 hover:bg-white/10 transition-colors"
          >
            <FiLogOut className="mr-3 h-5 w-5" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 w-[80%]">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="px-6 py-4 md:py-8">
            <h2 className="text-xl font-semibold text-gray-900">
              {activeTab === 'overview' && 'Dashboard'}
              {activeTab === 'properties' && 'My Properties'}
              {activeTab === 'tenants' && 'Tenant Management'}
              {activeTab === 'payments' && 'Payment History'}
              {activeTab === 'settings' && 'Account Settings'}
            </h2>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          {activeTab === 'overview' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <FiHome className="h-6 w-6 text-gray-400" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">Total Properties</dt>
                          <dd className="text-lg font-medium text-gray-900">12</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <FiUsers className="h-6 w-6 text-gray-400" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">Active Tenants</dt>
                          <dd className="text-lg font-medium text-gray-900">8</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <FiDollarSign className="h-6 w-6 text-gray-400" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">Monthly Revenue</dt>
                          <dd className="text-lg font-medium text-gray-900">₦2.4M</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activities</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">New tenant application received</p>
                      <p className="text-sm text-gray-500">2 hours ago</p>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      New
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Rent payment received</p>
                      <p className="text-sm text-gray-500">1 day ago</p>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Payment
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'properties' && (
            <div>
              <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                  <li className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">3 Bedroom Apartment</h3>
                        <p className="text-sm text-gray-500">Lekki, Lagos</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Occupied
                        </span>
                        <span className="text-sm font-medium text-gray-900">₦500,000/month</span>
                      </div>
                    </div>
                  </li>
                  <li className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">2 Bedroom Flat</h3>
                        <p className="text-sm text-gray-500">Victoria Island, Lagos</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          Available
                        </span>
                        <span className="text-sm font-medium text-gray-900">₦350,000/month</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'tenants' && (
            <div>
              <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                  <li className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">John Doe</h3>
                        <p className="text-sm text-gray-500">3 Bedroom Apartment - Lekki</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Active
                        </span>
                        <span className="text-sm text-gray-500">Due: 15th March</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'payments' && (
            <div>
              <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                  <li className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">John Doe</h3>
                        <p className="text-sm text-gray-500">March 2024 Rent</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Paid
                        </span>
                        <span className="text-sm font-medium text-gray-900">₦500,000</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <div className="bg-white shadow rounded-lg p-6">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#0E0EAE] focus:border-[#0E0EAE] sm:text-sm"
                      defaultValue="Landlord Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#0E0EAE] focus:border-[#0E0EAE] sm:text-sm"
                      defaultValue="landlord@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                      type="tel"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#0E0EAE] focus:border-[#0E0EAE] sm:text-sm"
                      defaultValue="+234 801 234 5678"
                    />
                  </div>
                  <div className="pt-4">
                    <button className="bg-[#0E0EAE] text-white px-4 py-2 rounded-md hover:bg-[#0E0EAE]/90">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
} 