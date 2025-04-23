// BrandSettings.jsx
import React, { useState } from 'react';

const Branding = () => {
  const [brandName, setBrandName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [primaryColor, setPrimaryColor] = useState('#41b854');
  const [secondaryColor, setSecondaryColor] = useState('#8b50b0');
  const [logo, setLogo] = useState(null);

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setLogo(URL.createObjectURL(file));
    }
  };

  return (
    <div className=" flex items-center justify-center px-10">
      <div className="flex w-full gap-10">
        {/* Left Section: Form */}
        <div className="w-1/2 p-6 ">
          <h2 className="text-xl font-semibold mb-4">Brand Settings</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Brand Name</label>
              <input
                type="text"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                placeholder="Enter your brand name"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Tagline</label>
              <input
                type="text"
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
                placeholder="Enter a catchy tagline"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe your brand..."
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
              />
            </div>

            <div className="flex gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Primary Color</label>
                <input
                  type="color"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="w-12 h-12 border rounded-md cursor-pointer"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Secondary Color</label>
                <input
                  type="color"
                  value={secondaryColor}
                  onChange={(e) => setSecondaryColor(e.target.value)}
                  className="w-12 h-12 border rounded-md cursor-pointer"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Logo</label>
              <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  className="hidden"
                  id="logo-upload"
                />
                <label htmlFor="logo-upload" className="cursor-pointer text-blue-500">
                  Drag & Drop Files Here
                </label>
                {logo && <img src={logo} alt="Uploaded Logo" className="mt-2 w-20 h-20 mx-auto" />}
              </div>
            </div>

            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Save Brand
            </button>
          </form>
        </div>

        {/* Right Section: Preview */}
        <div className='w-1/2 mt-22'
         
        >
              <div className='bg-[#EFF6FF] border border-[#0077B6] p-4 rounded-[10px] flex gap-10'>

                <img src="https://i.ibb.co.com/pBTdN8Bn/image-2.jpg" alt="" className='rounded-b-[10px]' />
                <div className='space-y-2'>
                  <h1 className='text-[50px] text-[#0077B6]'>pappu</h1>
                  <p className='text-[18px] text-[#666666]'> Delicious recipes made simple</p>
                  <p className='text-[#666666] text-sm'>Jamie's Kitchen offers personalized AI-powered recipes tailored to your preferences and dietary needs. Discover a world of culinary delights with our expert guidance.</p>
                </div>

              </div>

         
        </div>
      </div>
    </div>
  );
};

export default Branding;