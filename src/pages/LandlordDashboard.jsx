import { useState } from 'react'
import previewLogo from '../images/Preview.png'
import { FiHome, FiUsers, FiDollarSign, FiSettings, FiLogOut } from 'react-icons/fi'
import { BsEye, BsTextRight, BsXLg } from "react-icons/bs";
import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadButton } from "react-uploader";
import { UploadDropzone } from "react-uploader";


export default function LandlordDashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState('overview')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [properties, setProperties] = useState([])

  const uploader = Uploader({
      apiKey: "free" // Get production API keys from Bytescale
  });
  const options = { multi: true };

  return (
    <div className="min-h-screen bg-white flex relative">
      {/* Sidebar (Mobile + Desktop) */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#0E0EAE] text-white transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:flex`}
      >
        <div className="p-6 w-full">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-lg font-semibold">SureStay</h1>
            <button
              className="md:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <BsXLg className="h-5 w-5 text-white" />
            </button>
          </div>
          <nav className="space-y-2">
            <button
              onClick={() => { setActiveTab('overview'); setSidebarOpen(false); }}
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
              onClick={() => { setActiveTab('properties'); setSidebarOpen(false); }}
              className={`w-full flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'properties'
                  ? 'bg-white/20 text-white'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              <FiHome className="mr-3 h-5 w-5" />
              Listings
            </button>
            <button
              onClick={() => { setActiveTab('tenants'); setSidebarOpen(false); }}
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
              onClick={() => { setActiveTab('ListProperties'); setSidebarOpen(false); }}
              className={`w-full flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'payments'
                  ? 'bg-white/20 text-white'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              <FiDollarSign className="mr-3 h-5 w-5" />
              List Properties
            </button>
            <button
              onClick={() => { setActiveTab('settings'); setSidebarOpen(false); }}
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

      {/* Backdrop for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 w-full md:w-[80%]">
        {/* Header */}
        <header className="bg-white shadow-sm border-b flex items-center justify-between px-6 py-4 md:py-8">
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setSidebarOpen(true)}
          >
            <BsTextRight className="h-6 w-6" />
          </button>
          <h2 className="text-xl font-semibold text-gray-900">
            {activeTab === 'overview' && 'Dashboard'}
            {activeTab === 'properties' && 'My Properties'}
            {activeTab === 'tenants' && 'Tenant Management'}
            {activeTab === 'ListProperties' && 'List Properties'}
            {activeTab === 'settings' && 'Account Settings'}
          </h2>
        </header>

        {/* Main Content */}
        <main className="p-6">
          {activeTab === 'overview' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5 flex items-center">
                    <FiHome className="h-6 w-6 text-gray-400" />
                    <div className="ml-5">
                      <dt className="text-sm font-medium text-gray-500">Total Properties</dt>
                      <dd className="text-lg font-medium text-gray-900">12</dd>
                    </div>
                  </div>
                </div>
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5 flex items-center">
                    <FiUsers className="h-6 w-6 text-gray-400" />
                    <div className="ml-5">
                      <dt className="text-sm font-medium text-gray-500">Active Tenants</dt>
                      <dd className="text-lg font-medium text-gray-900">8</dd>
                    </div>
                  </div>
                </div>
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5 flex items-center">
                    <FiDollarSign className="h-6 w-6 text-gray-400" />
                    <div className="ml-5">
                      <dt className="text-sm font-medium text-gray-500">Monthly Revenue</dt>
                      <dd className="text-lg font-medium text-gray-900">₦2.4M</dd>
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
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              {properties.length === 0 ? (
                <div className="px-6 py-12 text-center text-gray-500 text-lg">No properties Listed</div>
              ) : (
                <ul className="divide-y divide-gray-200">
                  {properties.map((property, idx) => (
                    <li className="px-6 py-4" key={idx}>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">{property.name}</h3>
                          <p className="text-sm text-gray-500">{property.location}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {property.status}
                          </span>
                          <span className="text-sm font-medium text-gray-900">{property.price}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {activeTab === 'tenants' && (
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
          )}

          {activeTab === 'ListProperties' && (
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                <li className="px-6 py-4">
                   <UploadDropzone uploader={uploader}
                  options={options}
                  onUpdate={files => alert(files.map(x => x.fileUrl).join("\n"))}
                  width="600px"
                  height="375px" />
                  
                </li>
              </ul>

               
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-white shadow rounded-lg p-6 space-y-6">
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
          )}
        </main>
      </div>
    </div>
  )
}
