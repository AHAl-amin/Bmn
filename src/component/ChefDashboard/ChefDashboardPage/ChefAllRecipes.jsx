




import React, { useEffect, useRef, useState } from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';
import { Link } from 'react-router-dom';

// JSON data for recipes
const initialRecipes = [
  {
    id: 1,
    title: 'Joss Chocolate Soufflé',
    category: 'Chocolate',
    description: 'A light and airy chocolate dessert with a molten center....',
    image: 'https://i.ibb.co.com/NdC53ZPN/image-1.jpg',
    rating: 4.8,
    updated: '2023-11-15',
  },
  {
    id: 2,
    title: 'Classic Chocolate Soufflé',
    category: 'Desserts',
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
    title: 'Dessers Chocolate Soufflé',
    category: 'Desserts',
    description: 'A light and airy chocolate dessert with a molten center....',
    image: 'https://i.ibb.co.com/NdC53ZPN/image-1.jpg',
    rating: 4.8,
    updated: '2023-11-15',
  },
  {
    id: 5,
    title: 'Classic Chocolate Soufflé',
    category: 'Chocolate',
    description: 'A light and airy chocolate dessert with a molten center....',
    image: 'https://i.ibb.co.com/XfKX16Nq/image.png',
    rating: 4.8,
    updated: '2023-11-15',
  },
  {
    id: 6,
    title: 'Classic Chocolate Soufflé',
    category: 'Desserts',
    description: 'A light and airy chocolate dessert with a molten center....',
    image: 'https://i.ibb.co.com/9k6pmKqJ/image-1.png',
    rating: 4.8,
    updated: '2023-11-15',
  },
];

function ChefAllRecipes() {
  const [recipes, setRecipes] = useState(initialRecipes);
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const dropdownRefs = useRef({}); // Store refs for each dropdown

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !Object.values(dropdownRefs.current).some((ref) =>
          ref && ref.contains(event.target)
        )
      ) {
        setOpenDropdownId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this recipe?');
    if (confirmDelete) {
      setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.id !== id));
      setOpenDropdownId(null); // Close dropdown after deletion
    }
  };

  return (
    <div>
      <div className="md:px-10 py-6 lora">
        <h1 className="text-[#0077B6] text-[34px] font-semibold">All Recipes</h1>
        <p className="text-[#A2A2A2] text-[20px]">Manage your recipes and AI training data</p>

        {/* Card section */}
        <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between gap-6 pt-6">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="w-full shadow rounded-xl overflow-hidden">
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
                {/* Title and Dropdown */}
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-[#0077B6] lora">{recipe.title}</h2>

                  <div
                    className="relative inline-block text-left"
                    ref={(el) => (dropdownRefs.current[recipe.id] = el)}
                  >
                    <button
                      onClick={() =>
                        setOpenDropdownId((prevId) =>
                          prevId === recipe.id ? null : recipe.id
                        )
                      }
                      className="btn btn-ghost btn-circle"
                    >
                      <HiDotsHorizontal className="text-[#0077B6] w-[16px] h-[16px]" />
                    </button>

                    {openDropdownId === recipe.id && (
                      <ul className="absolute right-0 z-50 mt-2 w-40 origin-top-right rounded-md bg-base-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none menu menu-sm p-2">
                        <li>
                          <button>Edit</button>
                        </li>
                        <li>
                          <button onClick={() => handleDelete(recipe.id)}>Delete</button>
                        </li>
                      </ul>
                    )}
                  </div>
                </div>

                {/* Category */}
                <div className="flex gap-4 py-2">
                  <p className="text-sm text-white bg-[#0077B6] inline-block px-4 py-1 rounded-[29px]">
                    {recipe.category}
                  </p>
                  <p className="text-white text-sm bg-[#003214] px-4 py-1 rounded-full">
                    Published
                  </p>
                </div>

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
              </div>
            </div>
          ))}
        </div>

        <Link to="/chef_dashboard/chef_recipese_dettails_view" className="bg-[#0077B6] p-2 text-white inline-block mt-6">
          Add New Recipe
        </Link>
      </div>
    </div>
  );
}

export default ChefAllRecipes;

