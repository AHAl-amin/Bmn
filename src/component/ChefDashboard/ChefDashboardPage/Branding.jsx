// BrandSettings.jsx
import React, { useState } from 'react';
import { FiUpload } from 'react-icons/fi';

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
    <div className='px-14'>

      <h2 className="text-[34px] text-[#5B21BD] font-bold mb-4">Branding</h2>
      <p className="mb-6 text-[#9E9E9E]">
        Customize your brand appearance and settings
      </p>
      <div className=" flex items-center justify-center ">

        <div className="flex w-full gap-10">

          {/* Left Section: Form */}
          <div className="w-1/2  ">
            <h2 className="text-3xl text-[#5B21BD] font-semibold mb-4">Brand Settings</h2>
            <form>
              <div className="mb-4">
                <label className="block text-xl font-medium text-[#5B21BD] mb-1">Brand Name</label>
                <input
                  type="text"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  placeholder="Enter your brand name"
                  className="w-full p-2 border bg-white border-[#CCBAEB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#CCBAEB]"
                />
              </div>

              <div className="mb-4">
                <label className="block text-xl  font-medium text-[#5B21BD] mb-1">Tagline</label>
                <input
                  type="text"
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  placeholder="Enter a catchy tagline"
                  className="w-full p-2 border rounded-md bg-white focus:outline-none focus:ring-1 border-[#CCBAEB]  focus:ring-[#CCBAEB]"
                />
              </div>

              <div className="mb-4">
                <label className="block text-xl font-medium text-[#5B21BD] mb-1">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your brand..."
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 bg-white border-[#CCBAEB]  focus:ring-[#CCBAEB]"
                  rows="4"
                />
              </div>

              <div className="flex gap-4 mb-4">
              <div>
                  <label className="block text-xl font-medium text-[#5B21BD] mb-2">Secondary Color</label>
               <div className='flex gap-4'>
               <input
                    type="color"
                    value={primaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                    className="w-10 h-10 border bg-white border-[#CCBAEB] rounded-md cursor-pointer"
                  />
                  <p className='border bg-white border-[#CCBAEB] py-2 px-6  rounded-md '>#10b981</p>
               </div>
                </div>
                <div>
                  <label className="block text-xl font-medium text-[#5B21BD] mb-2">Secondary Color</label>
               <div className='flex gap-4'>
               <input
                    type="color"
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                    className="w-10 h-10 border bg-white border-[#CCBAEB] rounded-md cursor-pointer"
                  />
                  <p className='border bg-white border-[#CCBAEB] py-2 px-6  rounded-md '>#10b981</p>
               </div>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-xl font-medium text-[#5B21BD] mb-3">Logo</label>
                <div className="border-2 border-dashed border-gray-300 rounded-md bg-white px-4 py-10 flex flex-col text-center justify-center items-center gap-2 ">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="hidden "
                    id="logo-upload"
                  />
                  <label htmlFor="logo-upload" className="cursor-pointer text-[#5B21BD]">
                    <FiUpload className='text-[25px] mx-auto' />
                    <span>Drag & Drop Files Here</span>
                  </label>
                  {logo && <img src={logo} alt="Uploaded Logo" className="mt-2 w-20 h-20 mx-auto" />}
                  <button
                    type="submit"
                    className="bg-[#5B21BD] text-white w-[150px] px-4 py-2 rounded-md cursor-pointer "
                  >
                    Save Brand
                  </button>
                </div>
              </div>

            </form>
          </div>

          {/* Right Section: Preview */}
          <div className='w-1/2 mt-22'

          >
            <div className='bg-[#EFE9F8] border text-[#5B21BD] p-4 rounded-[10px] flex gap-10'>

              <img src="https://i.ibb.co.com/pBTdN8Bn/image-2.jpg" alt="" className='rounded-b-[10px]' />
              <div className='space-y-2'>
                <h1 className='text-[50px] text-[#5B21BD]'>pappu</h1>
                <p className='text-[18px] text-[#666666]'> Delicious recipes made simple</p>
                <p className='text-[#666666] text-xl'>Jamie's Kitchen offers personalized AI-powered recipes tailored to your preferences and dietary needs. Discover a world of culinary delights with our expert guidance.</p>
              </div>

            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Branding;