




import React, { useState } from 'react';

import { GoBellFill } from "react-icons/go";
import { IoIosArrowDown, IoMdAdd } from "react-icons/io";

import { PiChefHatFill } from 'react-icons/pi';
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiUpload } from "react-icons/fi";

const UserDashboardNavbar = () => {
  
    const [showAddChefModal, setShowAddChefModal] = useState(false);
    const [image, setImage] = useState(null);
    const location = useLocation();

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };

    const toggleAddChefModal = () => {
        setShowAddChefModal(!showAddChefModal);
    };

    // Only show modal if current path is /dashboard/community
    const shouldShowModal = showAddChefModal && location.pathname === '/dashboard/community';

    // Check if the current path is /dashboard/community
    const isCommunityPath = location.pathname === '/dashboard/community';

    return (
        <>
            <div className="flex items-center justify-end pt-10 lora h-16 px-6 bg-white md:max-w-[170vh] mx-auto md:ml-[260px] md:w-[calc(100%-240px)]">
                <div className="flex items-center space-x-8">
                    <div className="hidden md:block">
                        <div className="flex gap-10">
                            {/* Conditionally render "Add Chefs" or "New Creation" based on path */}
                            {isCommunityPath ? (
                                <button
                                    onClick={toggleAddChefModal}
                                    className="flex items-center gap-2 px-4 py-2 text-white bg-[#004C3F] rounded-[10px] cursor-pointer"
                                >
                                    <span className="font-medium">New Creation</span>
                                    <IoMdAdd />
                                </button>
                            ) : (
                                <Link
                                    to="/"
                                    onClick={toggleAddChefModal}
                                    className="flex items-center gap-2 px-4 py-2 text-white bg-[#004C3F] rounded-[10px] cursor-pointer"
                                >
                                    <PiChefHatFill />
                                    <span className="font-medium">Add Chefs</span>
                                    <IoMdAdd />
                                </Link>
                            )}

                            {/* Profile button */}
                            <button className="flex items-center text-[#004C3F] gap-2 px-4 py-2 border-[#B0BFB6] border rounded-[10px] cursor-pointer">
                                <PiChefHatFill />
                                <span className="text-teal-800 font-medium">Bobon lina</span>
                                <IoIosArrowDown className="h-5 w-5 text-teal-800" />
                            </button>
                        </div>
                    </div>

                    {/* Notifications */}
                    <NavLink to="/dashboard/user_notifications">
                        <div className="relative">
                            <button className="p-2 rounded-full hover:bg-gray-100 transition-transform duration-200 cursor-pointer">
                                <GoBellFill className="h-7 w-7 text-[#004C3F]" />
                            </button>
                            <div className="absolute text-[10px] p-[5px] top-[6px] right-[10px] bg-gray-200 rounded-full"></div>
                        </div>
                    </NavLink>

                    {/* User Profile */}
                    <div className="flex items-center space-x-2">
                        <div className="hidden md:block">
                            <img
                                src="https://i.ibb.co.com/x2wkVkr/Whats-App-Image-2024-07-04-at-10-43-40-AM.jpg"
                                alt="User profile"
                                className="h-10 w-10 rounded-full"
                            />
                        </div>
                        <span className="text-[17px] font-medium md:block hidden">Cameron</span>
                    </div>
                </div>

                <style jsx>{`
                    input[type="search"]::-webkit-search-cancel-button {
                        display: none;
                    }
                `}</style>
            </div>

            {/* Add Chef Modal - Only shows when path is /dashboard/community */}
            {shouldShowModal && (
                <div className="fixed inset-0 bg-[#004C3FCC] bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold text-[#004C3F]">Share Your Creation</h2>
                            <button
                                onClick={toggleAddChefModal}
                                className="text-gray-500 hover:text-gray-700 cursor-pointer"
                            >
                                ×
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2 text-xl font-medium">Title</label>
                                <input
                                    type="text"
                                    placeholder=""
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                />
                            </div>

                            <div className="mb-4">
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2 text-xl font-medium">Description</label>
                                    <textarea
                                        placeholder="Share Details About Your Creation, Modification You Made Or Tips For Others"
                                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        rows="4"
                                    ></textarea>
                                </div>

                                <div className="mb-6">
                                    <label className="block text-gray-700 mb-2 text-xl font-medium">Photo</label>
                                    <div
                                        className="w-full p-6 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer"
                                        onClick={() => document.getElementById('fileInput').click()}
                                    >
                                        {image ? (
                                            <img src={image} alt="Uploaded preview" className="max-w-full max-h-48 object-contain mb-2" />
                                        ) : (
                                            <>
                                                <FiUpload className='text-[25px]' />
                                                <span className="text-gray-500">Upload Image</span>
                                            </>
                                        )}
                                        <input
                                            id="fileInput"
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                            className="hidden"
                                        />
                                    </div>
                                </div>

                                <div className="flex justify-end space-x-3 pt-4">
                                    <button
                                        onClick={toggleAddChefModal}
                                        className="px-4 py-2 border border-[#B0BFB6] rounded-[10px] text-[#004C3F] hover:bg-gray-50 cursor-pointer"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="px-4 py-2 bg-[#004C3F] text-white rounded-[10px] hover:bg-[#00382E] cursor-pointer"
                                    >
                                        Share Post
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </>
    );
};

export default UserDashboardNavbar;