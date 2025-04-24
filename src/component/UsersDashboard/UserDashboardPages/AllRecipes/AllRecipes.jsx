

// import React from 'react';
// import { IoIosHeartEmpty } from 'react-icons/io';
// import { IoSearchOutline } from 'react-icons/io5';
// import { Link } from 'react-router-dom';

// // JSON data for recipes
// const recipes = [
//   {
//     id: 1,
//     title: 'joss Chocolate Soufflé',
//     category: 'Chocolate',
//     description: 'A light and airy chocolate dessert with a molten center....',
//     image: 'https://i.ibb.co.com/NdC53ZPN/image-1.jpg',
//     rating: 4.8,
//     updated: '2023-11-15',
//   },
//   {
//     id: 2,
//     title: 'Classic Chocolate Soufflé',
//     category: 'Chocolate',
//     description: 'A light and airy chocolate dessert with a molten center....',
//     image: 'https://i.ibb.co.com/XfKX16Nq/image.png',
//     rating: 4.8,
//     updated: '2023-11-15',
//   },
//   {
//     id: 3,
//     title: 'Classic Chocolate Soufflé',
//     category: 'Chocolate',
//     description: 'A light and airy chocolate dessert with a molten center....',
//     image: 'https://i.ibb.co.com/9k6pmKqJ/image-1.png',
//     rating: 4.8,
//     updated: '2023-11-15',
//   },
//   {
//     id: 4,
//     title: 'dessers Chocolate Soufflé',
//     category: 'Chocolate',
//     description: 'A light and airy chocolate dessert with a molten center....',
//     image: 'https://i.ibb.co.com/NdC53ZPN/image-1.jpg',
//     rating: 4.8,
//     updated: '2023-11-15',
//   },
//   {
//     id: 5,
//     title: 'millssic Chocolate Soufflé',
//     category: 'Chocolate',
//     description: 'A light and airy chocolate dessert with a molten center....',
//     image: 'https://i.ibb.co.com/XfKX16Nq/image.png',
//     rating: 4.8,
//     updated: '2023-11-15',
//   },
//   {
//     id: 6,
//     title: 'Classic Chocolate Soufflé',
//     category: 'Chocolate',
//     description: 'A light and airy chocolate dessert with a molten center....',
//     image: 'https://i.ibb.co.com/9k6pmKqJ/image-1.png',
//     rating: 4.8,
//     updated: '2023-11-15',
//   },
// ];

// function AllRecipes() {
//   return (
//     <div className="md:px-10 py-6 lora">
//       <div className='flex justify-between'>
//         <div>
//           <h1 className="text-[#004C3F] text-[45px] font-semibold">All Recipes</h1>
//           <p className="text-[#A2A2A2] text-[20px]">
//             Browse and discover recipes from your favorite culinary experts.
//           </p>
//         </div>

//         <div className="flex items-center md:w-[30%]  relative">
//           <IoSearchOutline
//             className={`text-[#004C3F] absolute ml-3 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}
//           />
//           <input
//             type="search"
//             placeholder="Search recipes"
//             className="placeholder-[color:#004C3F] focus:placeholder-transparent w-full py-3 border border-[#B0BFB6] rounded-[10px] pl-8"

//           />
//         </div>
//       </div>

//       {/* Card section */}
//       <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  justify-between gap-6 pt-6">
//         {recipes.map((recipe) => (
//           <div
//             key={recipe.id}
//             className="w-full bg-white rounded-xl h-[451px] overflow-hidden"
//           >
//             {/* Image Section */}
//             <div className="relative">
//               <img
//                 className="w-full h-48 object-cover"
//                 src={recipe.image}
//                 alt={recipe.title}
//               />
//             </div>

//             {/* Content Section */}
//             <div className="p-4 border-x-2 border-b-2 rounded-b-xl border-gray-100 space-y-2">
//               {/* Title */}
//               <div className="flex justify-between">
//                 <h2 className="text-xl font-semibold text-[#004C3F] lora">
//                   {recipe.title}
//                 </h2>
//                 <IoIosHeartEmpty className="text-[#004C3F] w-[16px] h-[16px]" />
//               </div>

//               {/* Category */}
//               <p className="mt-1 text-sm text-[#004C3F] bg-[#B0BFB6] inline-block px-4 py-1 rounded-[29px]">
//                 {recipe.category}
//               </p>

//               {/* Description */}
//               <p className="mt-2 text-[#676767] text-[16px]">{recipe.description}</p>

//               {/* Rating and Update Date */}
//               <div className="mt-3 flex justify-between items-center">
//                 <div className="flex items-center">
//                   <svg
//                     className="w-5 h-5 text-yellow-400"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                   </svg>
//                   <span className="ml-1 text-gray-600">{recipe.rating}</span>
//                 </div>
//                 <p className="text-sm text-gray-500">Updated: {recipe.updated}</p>
//               </div>

//               {/* Button */}
//               <div className='w-full  bg-teal-800 py-2 rounded-[29px] text-center'>
//                 <Link to="/dashboard/recipes_dettails" className="mt-4   text-white py-2 rounded-[29px] cursor-pointer">
//                   View Details
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AllRecipes;


import React, { useState } from 'react';
import { IoIosHeartEmpty } from 'react-icons/io';
import { IoSearchOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

// JSON data for recipes (remains unchanged)
const recipes = [
  {
    id: 1,
    title: 'joss Chocolate Soufflé',
    category: 'Chocolate',
    description: 'A light and airy chocolate dessert with a molten center....',
    image: 'https://i.ibb.co.com/NdC53ZPN/image-1.jpg',
    rating: 4.8,
    updated: '2023-11-15',
  },
  {
    id: 2,
    title: 'Classic Chocolate Soufflé',
    category: 'Chocolate',
    description: 'A light and airy chocolate dessert with a molten center....',
    image: 'https://i.ibb.co.com/XfKX16Nq/image.png',
    rating: 4.8,
    updated: '2023-11-15',
  },
  {
    id: 3,
    title: 'Classic Chocolate Soufflé',
    category: 'Chocolate',
    description: 'A light and airy chocolate dessert with a molten center....',
    image: 'https://i.ibb.co.com/9k6pmKqJ/image-1.png',
    rating: 4.8,
    updated: '2023-11-15',
  },
  {
    id: 4,
    title: 'dessers Chocolate Soufflé',
    category: 'Chocolate',
    description: 'A light and airy chocolate dessert with a molten center....',
    image: 'https://i.ibb.co.com/NdC53ZPN/image-1.jpg',
    rating: 4.8,
    updated: '2023-11-15',
  },
  {
    id: 5,
    title: 'millssic Chocolate Soufflé',
    category: 'Chocolate',
    description: 'A light and airy chocolate dessert with a molten center....',
    image: 'https://i.ibb.co.com/XfKX16Nq/image.png',
    rating: 4.8,
    updated: '2023-11-15',
  },
  {
    id: 6,
    title: 'Classic Chocolate Soufflé',
    category: 'Chocolate',
    description: 'A light and airy chocolate dessert with a molten center....',
    image: 'https://i.ibb.co.com/9k6pmKqJ/image-1.png',
    rating: 4.8,
    updated: '2023-11-15',
  },
];

function AllRecipes() {
  // State for search term
  const [searchTerm, setSearchTerm] = useState('');

  // Filter recipes based on search term
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="md:px-10 py-6 lora">
      <div className='flex justify-between'>
        <div>
          <h1 className="text-[#004C3F] text-[45px] font-semibold">All Recipes</h1>
          <p className="text-[#A2A2A2] text-[20px]">
            Browse and discover recipes from your favorite culinary experts.
          </p>
        </div>

        <div className="flex items-center md:w-[30%] relative">
          <IoSearchOutline
            className="text-[#004C3F] absolute ml-3 opacity-100 transition-opacity duration-200"
          />
          <input
            type="search"
            placeholder="Search recipes"
            className="placeholder-[color:#004C3F] focus:placeholder-transparent w-full py-3 border border-[#B0BFB6] rounded-[10px] pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Card section */}
      <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between gap-6 pt-6">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="w-full bg-white rounded-xl h-[451px] overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  className="w-full h-48 object-cover"
                  src={recipe.image}
                  alt={recipe.title}
                />
              </div>

              {/* Content Section */}
              <div className="p-4 border-x-2 border-b-2 rounded-b-xl border-gray-100 space-y-2">
                {/* Title */}
                <div className="flex justify-between">
                  <h2 className="text-xl font-semibold text-[#004C3F] lora">
                    {recipe.title}
                  </h2>
                  <IoIosHeartEmpty className="text-[#004C3F] w-[16px] h-[16px]" />
                </div>

                {/* Category */}
                <p className="mt-1 text-sm text-[#004C3F] bg-[#B0BFB6] inline FSM-block px-4 py-1 rounded-[29px]">
                  {recipe.category}
                </p>

                {/* Description */}
                <p className="mt-2 text-[#676767] text-[16px]">{recipe.description}</p>

                {/* Rating and Update Date */}
                <div className="mt-3 flex justify-between items-center">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span className="ml-1 text-gray-600">{recipe.rating}</span>
                  </div>
                  <p className="text-sm text-gray-500">Updated: {recipe.updated}</p>
                </div>

                {/* Button */}
                <div className='w-full bg-teal-800 py-2 rounded-[29px] text-center'>
                  <Link to="/dashboard/recipes_dettails" className="mt-4 text-white py-2 rounded-[29px] cursor-pointer">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-[#004C3F] text-xl">No recipes found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AllRecipes;
