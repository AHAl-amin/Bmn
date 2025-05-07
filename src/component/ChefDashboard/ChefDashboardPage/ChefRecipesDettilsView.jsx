

// import React from 'react';
// import { LuUpload } from 'react-icons/lu';
// import { Link } from 'react-router-dom';
// import { LuChevronDown } from 'react-icons/lu';

// function ChefRecipesDettilsView() {
//     const [formData, setFormData] = React.useState({
//         title: '',
//         category: 'Desserts',
//         description: '',
//         image: null,
//     });
   

//     const categories = ['Desserts', 'Main Course', 'Appetizers', 'Beverages'];
    
//     function CategoryDropdown({ formData, setFormData }) {
//       const [isOpen, setIsOpen] = useState(false);
    
//       const handleSelect = (category) => {
//         setFormData({ ...formData, category });
//         setIsOpen(false);
//       };
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setFormData({ ...formData, image: URL.createObjectURL(file) });
//         }
//     };

//     const handleSubmit = () => {
//         console.log('Form Data:', formData);
//     };

//     return (
//         <div>
//             <div className="px-12 py-6 lora">
//                 <h1 className="text-[34px] font-semibold text-[#5B21BD] my-2">Recipes Details View</h1>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {/* Left Side */}
//                     <div>
//   <label className="block text-xl font-medium text-[#5B21BD] mb-2">Recipe Title</label>
//   <input
//     type="text"
//     name="title"
//     value={formData.title}
//     onChange={handleInputChange}
//     placeholder="Classic Chocolate Soufflé"
//     className="w-full p-2 border bg-[#FFFFFF] border-[#CCBAEB] rounded-md focus:outline-none"
//   />
// </div>

// {/* <div>
//   <label className="block text-xl font-medium text-[#5B21BD] mb-2">Category</label>
//   <select
//     name="category"
//     value={formData.category}
//     onChange={handleInputChange}
//     className="w-full p-2 border bg-[#FFFFFF] border-[#CCBAEB] text-[#999999] rounded-md focus:outline-none"
//   >
//     <option value="Desserts">Desserts</option>
//     <option value="Main Course">Main Course</option>
//     <option value="Appetizers">Appetizers</option>
//     <option value="Beverages">Beverages</option>
//   </select>



// </div> */}

// <div className="relative w-full">
//       <label className="block text-xl font-medium text-[#5B21BD] mb-2">Category</label>

//       <div
//         onClick={() => setIsOpen(!isOpen)}
//         className="cursor-pointer p-2 border border-[#CCBAEB] bg-white rounded-md flex justify-between items-center"
//       >
//         <span className="text-[#333]">{formData.category || 'Select Category'}</span>
//         <LuChevronDown className="text-[#5B21BD]" />
//       </div>

//       {isOpen && (
//         <ul className="absolute z-10 mt-1 w-full bg-white border border-[#CCBAEB] rounded-md shadow-md">
//           {categories.map((item) => (
//             <li
//               key={item}
//               onClick={() => handleSelect(item)}
//               className="px-4 py-2 text-[#333] hover:bg-transparent cursor-pointer"
//             >
//               {item}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// <div>
//   <label className="block text-xl font-medium text-[#5B21BD] mb-2">Description</label>
//   <textarea
//     name="description"
//     value={formData.description}
//     onChange={handleInputChange}
//     placeholder="A light and airy dessert with a molten center"
//     className="w-full p-2 border bg-[#FFFFFF] border-[#CCBAEB] rounded-md focus:outline-none h-24 resize-none"
//   />
// </div>

// <div>
//   <label className="block text-xl font-medium text-[#5B21BD] mb-2">Upload Image</label>
//   <div className="w-full h-24 border bg-[#FFFFFF] border-[#CCBAEB] rounded-md flex items-center justify-center resize-none">
//     {formData.image ? (
//       <img src={formData.image} alt="Uploaded Preview" className="max-h-full max-w-full object-contain" />
//     ) : (
//       <label className="cursor-pointer relative">
//         <LuUpload className="text-[20px] text-[#5B21BD] absolute bottom-5 left-11" />
//         <span className="text-[#5B21BD]">Upload Image</span>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleFileChange}
//           className="hidden"
//         />
//       </label>
//     )}
//   </div>
// </div>

//                 </div>

//                 {/* Recipe Ingredients Section */}
//                 <div>
//                     <h2 className="text-xl font-semibold text-[#5B21BD] py-4">Recipe Ingredients</h2>
//                     <div className="space-y-6">
//                         <div className="flex text-[#999999] gap-6">
//                             <p className="w-4/10 border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3">Dark chocolate</p>
//                             <p className="w-2/10 border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] text-center py-3 px-3">200g</p>
//                             <p className="w-4/10 border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3">70% cocoa solids</p>
//                         </div>
//                         <div className="flex text-[#999999] gap-6">
//                             <p className="w-4/10 border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3">Dark chocolate</p>
//                             <p className="w-2/10 border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] text-center py-3 px-3">200g</p>
//                             <p className="w-4/10 border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3">70% cocoa solids</p>
//                         </div>
//                         <div className="flex text-[#999999] gap-6">
//                             <p className="w-4/10 border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3">Dark chocolate</p>
//                             <p className="w-2/10 border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] text-center py-3 px-3">200g</p>
//                             <p className="w-4/10 border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3">70% cocoa solids</p>
//                         </div>
//                         <div className="flex text-[#999999] gap-6">
//                             <p className="w-4/10 border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3">Dark chocolate</p>
//                             <p className="w-2/10 border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] text-center py-3 px-3">200g</p>
//                             <p className="w-4/10 border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3">70% cocoa solids</p>
//                         </div>
//                         <div className="flex text-[#999999] gap-6">
//                             <p className="w-4/10 border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3">Dark chocolate</p>
//                             <p className="w-2/10 border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] text-center py-3 px-3">200g</p>
//                             <p className="w-4/10 border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3">70% cocoa solids</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Instructions Section */}
//                 <div>
//                     <h2 className="text-xl font-semibold text-[#5B21BD] py-4">Instructions:</h2>
//                     <div className="space-y-6 text-[#999999]">
//                         <p className="w-full border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3">
//                             1. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.
//                         </p>
//                         <p className="w-full border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3">
//                             1. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.
//                         </p>
//                         <p className="w-full border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3">
//                             1. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.
//                         </p>
//                         <p className="w-full border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3">
//                             1. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.
//                         </p>
//                     </div>
//                 </div>

//                 {/* Chef's Note Section */}
//                 <div>
//                     <h2 className="text-xl font-semibold text-[#5B21BD] py-4">Chef's Note:</h2>
//                     <div className="space-y-6 text-[#999999]">
//                         <p className="w-full border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3">
//                             1. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.
//                         </p>
//                         <p className="w-full border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3">
//                             1. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.
//                         </p>
//                         <p className="w-full border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3">
//                             1. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.
//                         </p>
//                         <p className="w-full border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3">
//                             1. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <div className="mb-10">
//                 <Link
//                     to="/chef_dashboard/chef_recipese_edit_page"
//                     className="text-xl text-white bg-[#5B21BD] py-1 px-5 rounded-[10px] ml-12 cursor-pointer"
//                 >
//                     Edit
//                 </Link>
//             </div>
//         </div>
//     );
// }

// export default ChefRecipesDettilsView;


import React, { useState } from 'react';
import { LuUpload, LuChevronDown } from 'react-icons/lu';
import { Link } from 'react-router-dom';

// Reusable Category Dropdown Component
function CategoryDropdown({ formData, setFormData, categories }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (category) => {
    setFormData({ ...formData, category });
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <label className="block text-xl font-medium text-[#5B21BD] mb-2">Category</label>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer p-2 border border-[#CCBAEB] bg-white rounded-md flex justify-between items-center"
      >
        <span className="text-[#333]">{formData.category || 'Select Category'}</span>
        <LuChevronDown className="text-[#5B21BD]" />
      </div>

      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-[#CCBAEB] rounded-md shadow-md">
          {categories.map((item) => (
            <li
              key={item}
              onClick={() => handleSelect(item)}
              className="px-4 py-2 text-[#333] hover:bg-transparent cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Main Component
function ChefRecipesDettilsView() {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Desserts',
    description: '',
    image: null,
  });

  const categories = ['Desserts', 'Main Course', 'Appetizers', 'Beverages'];

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
      <div className="px-12  lora">
        <h1 className="text-[34px] font-semibold text-[#5B21BD] my-2">Recipes Details View</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <div>
            <label className="block text-xl font-medium text-[#5B21BD] mb-2">Recipe Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Classic Chocolate Soufflé"
              className="w-full p-2 border bg-[#FFFFFF] border-[#CCBAEB] rounded-md focus:outline-none"
            />
          </div>

          {/* Category Dropdown */}
          <CategoryDropdown formData={formData} setFormData={setFormData} categories={categories} />

          {/* Description */}
          <div>
            <label className="block text-xl font-medium text-[#5B21BD] mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="A light and airy dessert with a molten center"
              className="w-full p-2 border bg-[#FFFFFF] border-[#CCBAEB] rounded-md focus:outline-none h-24 resize-none"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-xl font-medium text-[#5B21BD] mb-2">Upload Image</label>
            <div className="w-full h-24 border bg-[#FFFFFF] border-[#CCBAEB] rounded-md flex items-center justify-center resize-none">
              {formData.image ? (
                <img src={formData.image} alt="Uploaded Preview" className="max-h-full max-w-full object-contain" />
              ) : (
                <label className="cursor-pointer relative">
                  <LuUpload className="text-[20px] text-[#5B21BD] absolute bottom-5 left-11" />
                  <span className="text-[#5B21BD]">Upload Image</span>
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

        {/* Recipe Ingredients */}
        <div>
          <h2 className="text-xl font-semibold text-[#5B21BD] py-4 ">Recipe Ingredients</h2>
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex text-[#999999] gap-6 my-6">
              <p className="w-4/10 border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3">Dark chocolate</p>
              <p className="w-2/10 border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] text-center py-3 px-3">200g</p>
              <p className="w-4/10 border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3">70% cocoa solids</p>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div>
          <h2 className="text-xl font-semibold text-[#5B21BD] py-4 ">Instructions:</h2>
          {[...Array(4)].map((_, i) => (
            <p key={i} className="w-full border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3 my-6 text-[#999999]">
              {i + 1}. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.
            </p>
          ))}
        </div>

        {/* Chef's Note */}
        <div>
          <h2 className="text-xl font-semibold text-[#5B21BD] py-4">Chef's Note:</h2>
          {[...Array(4)].map((_, i) => (
            <p key={i} className="w-full border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3 my-6 text-[#999999]">
              {i + 1}. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.
            </p>
          ))}
        </div>
      </div>

      {/* Edit Button */}
      <div className="mb-10">
        <Link
          to="/chef_dashboard/chef_recipese_edit_page"
          className="text-xl text-white bg-[#5B21BD] py-1 px-5 rounded-[10px] ml-12 cursor-pointer"
        >
          Edit
        </Link>
      </div>
    </div>
  );
}

export default ChefRecipesDettilsView;
