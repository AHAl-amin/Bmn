// import React from 'react'
// import { Link } from 'react-router-dom';

// function ChefRecipesDettilsView() {

  
//         const [formData, setFormData] = React.useState({
//           title: '',
//           category: 'Desserts',
//           description: '',
//           image: null
//         });
  
//         const handleInputChange = (e) => {
//           const { name, value } = e.target;
//           setFormData({ ...formData, [name]: value });
//         };
  
//         const handleFileChange = (e) => {
//           const file = e.target.files[0];
//           if (file) {
//             setFormData({ ...formData, image: URL.createObjectURL(file) });
//           }
//         };
  
//         const handleSubmit = () => {
//           console.log('Form Data:', formData);
//         };
//   return (
//     <div>
//          <div className=" px-12 py-6 ">
//             <h1 className='text-[34px] font-semibold text-[#0077B6] my-2'>Recipes Details view</h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Left Side */}
           
//               <div>
//                 <label className="block text-xl font-medium text-[#0077B6] mb-2">Recipe Title</label>
//                 <input
//                   type="text"
//                   name="title"
//                   value={formData.title}
//                   onChange={handleInputChange}
//                   placeholder="Classic Chocolate Soufflé"
//                   className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 "
//                 />
//               </div>

//               <div>
//                 <label className="block text-xl font-medium text-[#0077B6]  mb-2">Category</label>
//                 <select
//                   name="category"
//                   value={formData.category}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border text-[#999999] border-gray-300 rounded-md focus:outline-none focus:ring-2 "
//                 >
//                   <option value="Desserts">Desserts</option>
//                   <option value="Main Course">Main Course</option>
//                   <option value="Appetizers">Appetizers</option>
//                   <option value="Beverages">Beverages</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-xl font-medium text-[#0077B6] mb-2">Description</label>
//                 <textarea
//                   name="description"
//                   value={formData.description}
//                   onChange={handleInputChange}
//                   placeholder="A light and airy dessert with a molten center"
//                   className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2  h-24 resize-none"
//                 />
//               </div>

//             {/* Right Side */}
//             <div>
//               <label className="block text-xl font-medium text-[#0077B6] mb-2">Upload Image</label>
//               <div className="w-full h-24 border border-gray-300  rounded-md flex items-center justify-center bg-gray-50">
//                 {formData.image ? (
//                   <img src={formData.image} alt="Uploaded Preview" className="max-h-full max-w-full object-contain" />
//                 ) : (
//                   <label className="cursor-pointer">
//                     <span className="text-[#0077B6] ">Upload Image</span>
//                     <input
//                       type="file"
//                       accept="image/*"
//                       onChange={handleFileChange}
//                       className="hidden"
//                     />
//                   </label>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* other secton */}

//           <div className="">
//             <h2 className="text-xl font-semibold text-[#0077B6]  py-4">Recipe Indigent</h2>


//             <div className='space-y-6'>
//               <div className='flex text-[#999999] gap-6 '>
//                 <p className='w-4/10 border border-[#999999] rounded-[10px] py-3 px-3'>Dark chocolate</p>
//                 <p className='w-2/10 border border-[#999999] rounded-[10px] text-center py-3 px-3'>200g</p>
//                 <p className='w-4/10 border border-[#999999] rounded-[10px] py-3 px-3'>70% cocoa solids</p>
//               </div>
//               <div className='flex text-[#999999] gap-6 '>
//                 <p className='w-4/10 border border-[#999999] rounded-[10px] py-3 px-3'>Dark chocolate</p>
//                 <p className='w-2/10 border border-[#999999] rounded-[10px] text-center py-3 px-3'>200g</p>
//                 <p className='w-4/10 border border-[#999999] rounded-[10px] py-3 px-3'>70% cocoa solids</p>
//               </div>
//               <div className='flex text-[#999999] gap-6 '>
//                 <p className='w-4/10 border border-[#999999] rounded-[10px] py-3 px-3'>Dark chocolate</p>
//                 <p className='w-2/10 border border-[#999999] rounded-[10px] text-center py-3 px-3'>200g</p>
//                 <p className='w-4/10 border border-[#999999] rounded-[10px] py-3 px-3'>70% cocoa solids</p>
//               </div>
//               <div className='flex text-[#999999] gap-6 '>
//                 <p className='w-4/10 border border-[#999999] rounded-[10px] py-3 px-3'>Dark chocolate</p>
//                 <p className='w-2/10 border border-[#999999] rounded-[10px] text-center py-3 px-3'>200g</p>
//                 <p className='w-4/10 border border-[#999999] rounded-[10px] py-3 px-3'>70% cocoa solids</p>
//               </div>
//               <div className='flex text-[#999999] gap-6 '>
//                 <p className='w-4/10 border border-[#999999] rounded-[10px] py-3 px-3'>Dark chocolate</p>
//                 <p className='w-2/10 border border-[#999999] rounded-[10px] text-center py-3 px-3'>200g</p>
//                 <p className='w-4/10 border border-[#999999] rounded-[10px] py-3 px-3'>70% cocoa solids</p>
//               </div>
//             </div>
//           </div>
// {/* other */}
//           <div className="">
//             <h2 className="text-xl font-semibold text-[#0077B6]  py-4">RInstructions:</h2>


//             <div className='space-y-6 text-[#999999]'>


//               <p className='w-full border border-[#999999] rounded-[10px] py-3 px-3'>1. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.</p>
//               <p className='w-full border border-[#999999] rounded-[10px] py-3 px-3'>1. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.</p>
//               <p className='w-full border border-[#999999] rounded-[10px] py-3 px-3'>1. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.</p>
//               <p className='w-full border border-[#999999] rounded-[10px] py-3 px-3'>1. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.</p>


//             </div>
//           </div>
//           {/* other */}

//           <div className="">
//             <h2 className="text-xl font-semibold text-[#0077B6]  py-4">Chefs note:</h2>

//             <div className='space-y-6 text-[#999999]'>


//               <p className='w-full border border-[#999999] rounded-[10px] py-3 px-3'>1. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.</p>
//               <p className='w-full border border-[#999999] rounded-[10px] py-3 px-3'>1. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.</p>
//               <p className='w-full border border-[#999999] rounded-[10px] py-3 px-3'>1. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.</p>
//               <p className='w-full border border-[#999999] rounded-[10px] py-3 px-3'>1. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.</p>


//             </div>
//           </div>

      
//         </div>
//        <div className='mb-10'>
//        <Link to='/chef_dashboard/chef_recipese_edit_page' className='text-xl text-white bg-[#0077B6] py-1 px-5 rounded-[10px] ml-12 cursor-pointer  '>Edit</Link>
//        </div>

//     </div>
//   )
// }

// export default ChefRecipesDettilsView

import React from 'react';
import { Link } from 'react-router-dom';

function ChefRecipesDettilsView() {
  const [formData, setFormData] = React.useState({
    title: '',
    category: 'Desserts',
    description: '',
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
  };

  return (
    <div>
      <div className="px-12 py-6">
        <h1 className="text-[34px] font-semibold text-[#0077B6] my-2">Recipes Details view</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Side */}
          <div>
            <label className="block text-xl font-medium text-[#0077B6] mb-2">Recipe Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Classic Chocolate Soufflé"
              className="w-full p-2 border bg-[#FFFFFF] border-[#B0D5E8] rounded-md focus:outline-none focus:ring-2"
            />
          </div>

          <div>
            <label className="block text-xl font-medium text-[#0077B6] mb-2">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full p-2 border bg-[#FFFFFF] border-[#B0D5E8] text-[#999999] rounded-md focus:outline-none focus:ring-2"
            >
              <option value="Desserts">Desserts</option>
              <option value="Main Course">Main Course</option>
              <option value="Appetizers">Appetizers</option>
              <option value="Beverages">Beverages</option>
            </select>
          </div>

          <div>
            <label className="block text-xl font-medium text-[#0077B6] mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="A light and airy dessert with a molten center"
              className="w-full p-2 border bg-[#FFFFFF] border-[#B0D5E8] rounded-md focus:outline-none focus:ring-2 h-24 resize-none"
            />
          </div>

          {/* Right Side */}
          <div>
            <label className="block text-xl font-medium text-[#0077B6] mb-2">Upload Image</label>
            <div className="w-full h-24 border bg-[#FFFFFF] border-[#B0D5E8] rounded-md flex items-center justify-center">
              {formData.image ? (
                <img src={formData.image} alt="Uploaded Preview" className="max-h-full max-w-full object-contain" />
              ) : (
                <label className="cursor-pointer">
                  <span className="text-[#0077B6]">Upload Image</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          </div>
        </div>

        {/* Recipe Ingredients Section */}
        <div>
          <h2 className="text-xl font-semibold text-[#0077B6] py-4">Recipe Ingredients</h2>
          <div className="space-y-6">
            <div className="flex text-[#999999] gap-6">
              <p className="w-4/10 border bg-[#FFFFFF] border-[#B0D5E8] rounded-[10px] py-3 px-3">Dark chocolate</p>
              <p className="w-2/10 border bg-[#FFFFFF] border-[#B0D5E8] rounded-[10px] text-center py-3 px-3">200g</p>
              <p className="w-4/10 border bg-[#FFFFFF] border-[#B0D5E8] rounded-[10px] py-3 px-3">70% cocoa solids</p>
            </div>
            <div className="flex text-[#999999] gap-6">
              <p className="w-4/10 border bg-[#FFFFFF] border-[#B0D5E8] rounded-[10px] py-3 px-3">Dark chocolate</p>
              <p className="w-2/10 border bg-[#FFFFFF] border-[#B0D5E8] rounded-[10px] text-center py-3 px-3">200g</p>
              <p className="w-4/10 border bg-[#FFFFFF] border-[#B0D5E8] rounded-[10px] py-3 px-3">70% cocoa solids</p>
            </div>
            <div className="flex text-[#999999] gap-6">
              <p className="w-4/10 border bg-[#FFFFFF] border-[#B0D5E8] rounded-[10px] py-3 px-3">Dark chocolate</p>
              <p className="w-2/10 border bg-[#FFFFFF] border-[#B0D5E8] rounded-[10px] text-center py-3 px-3">200g</p>
              <p className="w-4/10 border bg-[#FFFFFF] border-[#B0D5E8] rounded-[10px] py-3 px-3">70% cocoa solids</p>
            </div>
            <div className="flex text-[#999999] gap-6">
              <p className="w-4/10 border bg-[#FFFFFF] border-[#B0D5E8] rounded-[10px] py-3 px-3">Dark chocolate</p>
              <p className="w-2/10 border bg-[#FFFFFF] border-[#B0D5E8] rounded-[10px] text-center py-3 px-3">200g</p>
              <p className="w-4/10 border bg-[#FFFFFF] border-[#B0D5E8] rounded-[10px] py-3 px-3">70% cocoa solids</p>
            </div>
            <div className="flex text-[#999999] gap-6">
              <p className="w-4/10 border bg-[#FFFFFF] border-[#B0D5E8] rounded-[10px] py-3 px-3">Dark chocolate</p>
              <p className="w-2/10 border bg-[#FFFFFF] border-[#B0D5E8] rounded-[10px] text-center py-3 px-3">200g</p>
              <p className="w-4/10 border bg-[#FFFFFF] border-[#B0D5E8] rounded-[10px] py-3 px-3">70% cocoa solids</p>
            </div>
          </div>
        </div>

        {/* Instructions Section */}
        <div>
          <h2 className="text-xl font-semibold text-[#0077B6] py-4">Instructions:</h2>
          <div className="space-y-6 text-[#999999]">
            <p className="w-full border bg-[#FFFFFF] border-[#B0D5E8] rounded-[10px] py-3 px-3">
              1. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.
            </p>
            <p className="w-full border bg-[#FFFFFF] border-[#B0D5E8] rounded-[10px] py-3 px-3">
              1. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.
            </p>
            <p className="w-full border bg-[#FFFFFF] border-[#B0D5E8] rounded-[10px] py-3 px-3">
              1. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.
            </p>
            <p className="w-full border bg-[#FFFFFF] border-[#B0D5E8] rounded-[10px] py-3 px-3">
              1. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.
            </p>
          </div>
        </div>

        {/* Chef's Note Section */}
        <div>
          <h2 className="text-xl font-semibold text-[#0077B6] py-4">Chef's Note:</h2>
          <div className="space-y-6 text-[#999999]">
            <p className="w-full border bg-[#FFFFFF] border-[#B0D5E8] rounded-[10px] py-3 px-3">
              1. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.
            </p>
            <p className="w-full border bg-[#FFFFFF] border-[#B0D5E8] rounded-[10px] py-3 px-3">
              1. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.
            </p>
            <p className="w-full border bg-[#FFFFFF] border-[#B0D5E8] rounded-[10px] py-3 px-3">
              1. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.
            </p>
            <p className="w-full border bg-[#FFFFFF] border-[#B0D5E8] rounded-[10px] py-3 px-3">
              1. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.
            </p>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <Link
          to="/chef_dashboard/chef_recipese_edit_page"
          className="text-xl text-white bg-[#0077B6] py-1 px-5 rounded-[10px] ml-12 cursor-pointer"
        >
          Edit
        </Link>
      </div>
    </div>
  );
}

export default ChefRecipesDettilsView;