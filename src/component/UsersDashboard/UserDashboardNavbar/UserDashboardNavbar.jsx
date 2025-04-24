


import React, { useState } from 'react';
import { FaLightbulb } from "react-icons/fa";
import { GoBellFill } from "react-icons/go";
import { IoIosArrowDown, IoMdAdd } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import {  NavLink, useLocation } from "react-router-dom";

const UserDashboardNavbar = () => {
    const [isSearchFocused, setIsSearchFocused] = useState(false);
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

    return (
        <>
            <div className="flex items-center justify-end pt-10 lora h-16 px-6 bg-white md:max-w-[170vh] mx-auto md:ml-[260px] md:w-[calc(100%-240px)]">
               
                {/* <div className="flex items-center md:w-[30%] relative">
                    <IoSearchOutline 
                        className={`text-[#004C3F] absolute ml-3 ${isSearchFocused ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}
                    />
                    <input
                        type="search"
                        placeholder="Search recipes"
                        className="placeholder-[color:#004C3F] focus:placeholder-transparent w-full py-3 border border-[#B0BFB6] rounded-[10px] pl-8"
                        onFocus={() => setIsSearchFocused(true)}
                        onBlur={() => setIsSearchFocused(false)}
                    />
                </div> */}

                <div className="flex items-center space-x-8">
                    <div className="hidden md:block">
                        <div className="flex gap-10">
                            <button 
                                onClick={toggleAddChefModal}
                                className="flex items-center gap-2 px-4 py-2 text-white bg-[#004C3F] rounded-[10px] cursor-pointer"
                            >
                                <FaLightbulb />
                                <span className="font-medium">Add Chefs </span><IoMdAdd />
                            </button>
                            <button className="flex items-center text-[#004C3F] gap-2 px-4 py-2 border-[#B0BFB6] border rounded-[10px] cursor-pointer">
                                <FaLightbulb />
                                <span className="text-teal-800 font-medium">Bobon lina</span>
                                <IoIosArrowDown className="h-5 w-5 text-teal-800" />
                            </button>
                        </div>
                    </div>
                    <NavLink to='/dashboard/user_notifications'>
                        <div className="relative">
                            <button className="p-2 rounded-full hover:bg-gray-100 transition-transform duration-200 cursor-pointer">
                                <GoBellFill className="h-7 w-7 text-[#004C3F]" />
                            </button>
                            <div className="absolute text-[10px] p-[5px] top-[6px] right-[10px] bg-gray-200 rounded-full"></div>
                        </div>
                    </NavLink>
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
                            <h2 className="text-xl font-bold text-[#004C3F]">Share Your Creation</h2>
                            <button 
                                onClick={toggleAddChefModal}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                &times;
                            </button>
                        </div>
                        
                        <div className="space-y-4">
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Title</label>
                                <input
                                    type="text"
                                    placeholder=""
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Description</label>
                                <textarea
                                    placeholder="Share Details About Your Creation, Modification You Made Or Tips For Others"
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 mb-2">Photo</label>
                                <div className="w-full p-6 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center">
                                    {image ? (
                                        <img src={image} alt="Uploaded preview" className="max-w-full max-h-48 object-contain mb-2" />
                                    ) : (
                                        <>
                                            <svg
                                                className="w-8 h-8 text-gray-400 mb-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M7 16V8a4 4 0 014-4h2a4 4 0 014 4v8a4 4 0 01-4 4h-2a4 4 0 01-4-4zM12 8v8M9 12h6"
                                                ></path>
                                            </svg>
                                            <span className="text-gray-500">Upload Image</span>
                                        </>
                                    )}
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="mt-2 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end space-x-3 pt-4">
                                <button 
                                    onClick={toggleAddChefModal}
                                    className="px-4 py-2 border border-[#B0BFB6] rounded-[10px] text-[#004C3F] hover:bg-gray-50"
                                >
                                    Cancel
                                </button>
                                <button 
                                    className="px-4 py-2 bg-[#004C3F] text-white rounded-[10px] hover:bg-[#00382E]"
                                >
                                    Share Post
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default UserDashboardNavbar;




