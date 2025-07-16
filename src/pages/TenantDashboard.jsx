import { useState } from 'react'
import previewLogo from '../images/Preview.png'
import { FiSearch, FiDollarSign, FiTool, FiFileText, FiSettings, FiLogOut, FiHome } from 'react-icons/fi'

export default function TenantDashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#0E0EAE] text-white">
        <div className="p-6">
          <div className="flex items-center mb-8">
            <img src={previewLogo} alt="SureStay logo" className="w-8 h-8 mr-3" />
            <h1 className="text-lg font-semibold">Tenant</h1>
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
              <FiHome className="mr-3 h-5 w-5" />
              Overview
            </button>
            <button
              onClick={() => setActiveTab('search')}
              className={`w-full flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'search'
                  ? 'bg-white/20 text-white'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              <FiSearch className="mr-3 h-5 w-5" />
              Find Property
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
              onClick={() => setActiveTab('maintenance')}
              className={`w-full flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'maintenance'
                  ? 'bg-white/20 text-white'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              <FiTool className="mr-3 h-5 w-5" />
              Maintenance
            </button>
            <button
              onClick={() => setActiveTab('lease')}
              className={`w-full flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'lease'
                  ? 'bg-white/20 text-white'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              <FiFileText className="mr-3 h-5 w-5" />
              Lease
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
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-900">
              {activeTab === 'overview' && 'Dashboard Overview'}
              {activeTab === 'search' && 'Find Your Perfect Home'}
              {activeTab === 'payments' && 'Payment History'}
              {activeTab === 'maintenance' && 'Maintenance Requests'}
              {activeTab === 'lease' && 'Lease Information'}
              {activeTab === 'settings' && 'Account Settings'}
            </h2>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          {activeTab === 'overview' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <FiHome className="h-6 w-6 text-gray-400" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">Current Property</dt>
                          <dd className="text-lg font-medium text-gray-900">3 Bedroom Apt</dd>
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
                          <dt className="text-sm font-medium text-gray-500 truncate">Monthly Rent</dt>
                          <dd className="text-lg font-medium text-gray-900">₦500,000</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <FiTool className="h-6 w-6 text-gray-400" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">Open Requests</dt>
                          <dd className="text-lg font-medium text-gray-900">2</dd>
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
                      <p className="text-sm font-medium text-gray-900">Rent payment due in 5 days</p>
                      <p className="text-sm text-gray-500">Due: March 15, 2024</p>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Due Soon
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Maintenance request updated</p>
                      <p className="text-sm text-gray-500">1 day ago</p>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      In Progress
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'search' && (
            <div>
              <div className="bg-white shadow rounded-lg p-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <input
                      type="text"
                      placeholder="Enter location"
                      className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#0E0EAE] focus:border-[#0E0EAE]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                    <select className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#0E0EAE] focus:border-[#0E0EAE]">
                      <option>Any</option>
                      <option>Apartment</option>
                      <option>House</option>
                      <option>Studio</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                    <select className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#0E0EAE] focus:border-[#0E0EAE]">
                      <option>Any</option>
                      <option>₦100k - ₦300k</option>
                      <option>₦300k - ₦500k</option>
                      <option>₦500k+</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <button className="w-full bg-[#0E0EAE] text-white px-4 py-2 rounded-md hover:bg-[#0E0EAE]/90">
                      Search
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white shadow rounded-lg overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">3 Bedroom Apartment</h3>
                    <p className="text-sm text-gray-500 mb-4">Lekki, Lagos</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-[#0E0EAE]">₦500,000/month</span>
                      <button className="bg-[#0E0EAE] text-white px-4 py-2 rounded-md text-sm hover:bg-[#0E0EAE]/90">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
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
                        <h3 className="text-lg font-medium text-gray-900">March 2024 Rent</h3>
                        <p className="text-sm text-gray-500">Due: March 15, 2024</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          Due Soon
                        </span>
                        <span className="text-sm font-medium text-gray-900">₦500,000</span>
                      </div>
                    </div>
                  </li>
                  <li className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">February 2024 Rent</h3>
                        <p className="text-sm text-gray-500">Paid: February 15, 2024</p>
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

          {activeTab === 'maintenance' && (
            <div>
              <div className="mb-6">
                <button className="bg-[#0E0EAE] text-white px-4 py-2 rounded-md hover:bg-[#0E0EAE]/90">
                  New Request
                </button>
              </div>
              <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                  <li className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">Leaking Faucet</h3>
                        <p className="text-sm text-gray-500">Kitchen sink faucet is leaking</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          In Progress
                        </span>
                        <span className="text-sm text-gray-500">2 days ago</span>
                      </div>
                    </div>
                  </li>
                  <li className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">Electrical Issue</h3>
                        <p className="text-sm text-gray-500">Power outlet not working</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Completed
                        </span>
                        <span className="text-sm text-gray-500">1 week ago</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'lease' && (
            <div>
              <div className="bg-white shadow rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Current Lease</h3>
                    <dl className="space-y-3">
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Property</dt>
                        <dd className="text-sm text-gray-900">3 Bedroom Apartment, Lekki</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Lease Start</dt>
                        <dd className="text-sm text-gray-900">January 1, 2024</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Lease End</dt>
                        <dd className="text-sm text-gray-900">December 31, 2024</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Monthly Rent</dt>
                        <dd className="text-sm text-gray-900">₦500,000</dd>
                      </div>
                    </dl>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Documents</h3>
                    <div className="space-y-2">
                      <button className="w-full text-left p-3 border border-gray-200 rounded-md hover:bg-gray-50">
                        <div className="flex items-center">
                          <FiFileText className="h-5 w-5 text-gray-400 mr-3" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">Lease Agreement</p>
                            <p className="text-xs text-gray-500">PDF • 2.3 MB</p>
                          </div>
                        </div>
                      </button>
                      <button className="w-full text-left p-3 border border-gray-200 rounded-md hover:bg-gray-50">
                        <div className="flex items-center">
                          <FiFileText className="h-5 w-5 text-gray-400 mr-3" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">House Rules</p>
                            <p className="text-xs text-gray-500">PDF • 1.1 MB</p>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
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
                      defaultValue="Tenant Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#0E0EAE] focus:border-[#0E0EAE] sm:text-sm"
                      defaultValue="tenant@example.com"
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