import { useState } from 'react'
import previewLogo from '../images/Preview.png'
import {useAuth} from '../AuthContext'
import { FiHome, FiUsers, FiDollarSign, FiSettings, FiLogOut } from 'react-icons/fi'
import { BsEye, BsTextRight, BsXLg } from "react-icons/bs";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadButton } from "react-uploader";
import { UploadDropzone } from "react-uploader";
import { BsTrash3 } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



export default function LandlordDashboard({ onLogout }) {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [properties, setProperties] = useState([])
  const [uploadedUrls, setUploadedUrls] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [propertyAddress, setPropertyAddress] = useState("");
  const [houseType, setHouseType] = useState("");
  const [customDescription, setCustomDescription] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [propertyToDeleteIndex, setPropertyToDeleteIndex] = useState(null);



  const uploader = Uploader({
      apiKey: "free" // Get production API keys from Bytescale
  });
  const options = { multi: true };

  const handleUpload = (files) => {
    const urls = files.map(file => file.fileUrl);
    setUploadedUrls(urls);
  };
    const handleSubmit = (e) => {
      e.preventDefault();

    const newProperty = {
    name: houseType === "Others" ? customDescription : houseType,
    location: `${propertyAddress}, ${selectedState}`,
    status: "Pending",
    price: "₦‎ Negotiable",
    images: uploadedUrls,
      };

        setProperties((prev) => [newProperty, ...prev]);

        // Reset form
        setHouseType("");
        setCustomDescription("");
        setSelectedState("");
        setPropertyAddress("");
        setUploadedUrls([]);

         toast.success("Property added");
      };
      const handleDeleteProperty = (indexToDelete) => {
            const updatedProperties = properties.filter((_, index) => index !== indexToDelete);
             setProperties(updatedProperties);
             
            const confirmDelete = window.confirm("Are you sure you want to delete this property?");
            if (confirmDelete) {
              const updatedProperties = [...properties];
              updatedProperties.splice(index, 1);
              setProperties(updatedProperties);
              toast.success("Property deleted");
            }
      };

      
        const isFormValid = () => {
          const hasValidType = houseType && (houseType !== "Others" || customDescription.trim() !== "");
          return (
            hasValidType &&
            selectedState &&
            propertyAddress.trim() !== "" &&
            uploadedUrls.length > 0
          );
        };

        


      


  return (
    <div className="min-h-screen bg-white flex relative">
      <ToastContainer position="top-right" autoClose={1000} />
      {/* Sidebar (Mobile + Desktop) */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 md:w-[30%] lg:w-[20%] bg-[#0E0EAE] text-white transform ${
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
              <BsReverseLayoutTextSidebarReverse className="mr-3 h-5 w-5" />
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
      <div className="flex-1 w-full md:w-[70%] lg:w-[80%]">
        {/* Header */}
        <header className="bg-white shadow-sm border-b flex flex-row-reverse lg:flex-row items-center justify-between px-6 py-4 md:py-8">
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
                          <li className="px-6 py-6" key={idx}>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                              
                              {/* Images */}
                              {property.images && property.images.length > 0 && (
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 w-full sm:w-1/2">
                                  {property.images.map((url, index) => (
                                    <img
                                      key={index}
                                      src={url}
                                      alt={`Property ${index + 1}`}
                                      className="w-full h-24 object-cover rounded shadow-sm"
                                    />
                                  ))}
                                </div>
                              )}

                              {/* Property Info */}
                              <div className="flex-1">
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">{property.name}</h3>
                                <p className="text-sm text-gray-600 mb-2">{property.location}</p>
                                <div className="flex items-center gap-4">
                                  <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                    {property.status}
                                  </span>
                                  <span className="text-sm font-medium text-gray-900">{property.price}</span>

                                

                                   <BsTrash3 onClick={() => {
                                     setPropertyToDeleteIndex(idx);
                                     setShowDeleteModal(true);
                                   }} className='cursor-pointer'/>

                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
)}
            {showDeleteModal && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
                  <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
                  <p className="mb-6">Are you sure you want to delete this property?</p>
                  <div className="flex justify-end space-x-4">
                    <button
                      onClick={() => setShowDeleteModal(false)}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => {
                        const updatedProperties = [...properties];
                        updatedProperties.splice(propertyToDeleteIndex, 1);
                        setProperties(updatedProperties);
                        setShowDeleteModal(false);
                        setPropertyToDeleteIndex(null);
                        toast.success("Property deleted");
                      }}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
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
  <form className="max-w-3xl mx-auto p-6 items-center justify-center">
    <h2 className="text-xl font-semibold mb-4">List a New Property</h2>

    {/* House Type Selection */}
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Select Type of Apartment
      </label>
      <select
        className="w-full border border-gray-300 bg-white rounded-md p-4 focus:ring-[#0E0EAE] focus:border-[#0E0EAE]"
        value={houseType}
        onChange={(e) => setHouseType(e.target.value)}
        required
      >
        <option value="">-- Select --</option>
        <option value="Single-room">Single-room</option>
        <option value="Self-contain">Self-contain</option>
        <option value="One-bedroom apartment">One-bedroom apartment</option>
        <option value="Two-bedroom apartment">Two-bedroom apartment</option>
        <option value="Others">Others</option>
      </select>
    </div>

    {/* Custom Description if "Others" is selected */}
    {houseType === "Others" && (
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Describe the Apartment
        </label>
        <input
          type="text"
          value={customDescription}
          onChange={(e) => setCustomDescription(e.target.value)}
          placeholder="Enter apartment description..."
          className="w-full border border-gray-300 rounded-md p-4 focus:ring-[#0E0EAE] focus:border-[#0E0EAE]"
          required
        />
      </div>
    )}

    {/* State Selection */}
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Select State
      </label>
      <select
        className="w-full border border-gray-300 bg-white rounded-md p-4 focus:ring-[#0E0EAE] focus:border-[#0E0EAE]"
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
        required
      >
        <option value="">-- Select State --</option>
        {[
          "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
          "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa",
          "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger",
          "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara",
          "FCT - Abuja"
        ].map((state) => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>
    </div>

    {/* Address Field */}
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Property Address
      </label>
      <input
        type="text"
        value={propertyAddress}
        onChange={(e) => setPropertyAddress(e.target.value)}
        placeholder="Enter full address of the property"
        className="w-full border border-gray-300 rounded-md p-4 focus:ring-[#0E0EAE] focus:border-[#0E0EAE]"
        required
      />
    </div>

    {/* Image Uploader */}
    <div className="mb-6">
      <UploadDropzone
        uploader={uploader}
        options={options}
        onUpdate={handleUpload}
        width="100%"
        height="350px"
      />
    </div>

    {/* Thumbnails */}
    {uploadedUrls.length > 0 && (
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Uploaded Images</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {uploadedUrls.map((url, index) => (
            <div key={index} className="w-full h-32 overflow-hidden rounded shadow">
              <img
                src={url}
                alt={`Uploaded ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    )}

    {/* Submit Button */}
    <div className="flex justify-center w-full">
     <button
      type="submit"
      onClick={handleSubmit}
      disabled={!isFormValid()}
      className={`px-8 py-5 w-full rounded transition text-white ${
      isFormValid()
         ? "bg-[#0E0EAE] hover:bg-[#0c0c9e]"
        : "bg-gray-400 cursor-not-allowed"
        }`}
        >
             List Property
        </button>

    </div>
  </form>
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
