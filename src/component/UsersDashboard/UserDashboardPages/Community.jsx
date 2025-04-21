import React from 'react'
import { BsSave, BsShare } from 'react-icons/bs'
import { FaRegCommentAlt } from 'react-icons/fa'
import { IoIosHeartEmpty } from 'react-icons/io'
import { PiDotsThreeOutlineFill } from 'react-icons/pi'

function Community() {
    return (
        <div className='px-10 py-4 lora'>
            <h1 className="text-[#004C3F] text-[45px] font-semibold">Community</h1>
            <p className="text-[#A2A2A2] text-[20px]">
                Connect with other culinary enthusiasts, share your creations, and get inspired.
            </p>

            <div className='space-y-8'>
                <div className=" border border-[#FFFFFF] bg-[#FFFFFF] shadow rounded-lg p-4 mt-4">
                    {/* Header Section */}
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <img src='https://i.ibb.co.com/60hvPZRS/bannerimg-01.png' className="w-10 h-10 bg-gray-300 rounded-full mr-3" />
                            <div>
                                <p className="font-semibold text-[#004C3F]">USER</p>
                                <p className="text-sm text-gray-500">1 DAY AGO</p>
                            </div>
                        </div>
                        <div className=""><PiDotsThreeOutlineFill className='text-[#A2A2A2] cursor-pointer' /></div>
                    </div>

                    {/* Post Content */}
                    <div className="mt-3">
                        <p className="text-[#004C3F] font-semibold">
                            New Technique: Mirror Glaze for Bonbons
                        </p>
                        <p className="text-[#A2A2A2] text-sm mt-1">
                            I'm excited to share this new technique I've been perfecting for creating mirror-glazed bonbons. The secret is in temperature control!
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="mt-3">
                        <img
                            src="https://i.ibb.co.com/NdC53ZPN/image-1.jpg"
                            alt="Pastries"
                            className="w-full h-[400px] object-cover rounded-lg"
                        />
                    </div>

                    {/* Interaction Buttons */}
                    <div className="flex justify-center  items-center mt-3 text-[#004C3F] lora py-6">
                        <div className="flex text-[30px] text-center space-x-10 gap-10">
                            <button className="flex items-center space-x-1 ">
                                <IoIosHeartEmpty />
                                <span className='ml-2'>41</span>
                            </button>
                            <button className="flex items-center space-x-1 ">
                                <FaRegCommentAlt />
                                <span className='ml-2'>41</span>
                            </button>

                            <button className="flex items-center gap-2">
                                
                                <BsSave />
                                <span className='mb-2'>save</span>
                            </button>
                            <button className="flex items-center gap-2">
                                <BsShare />
                            <span className=''>share</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className=" border border-[#FFFFFF] bg-[#FFFFFF] shadow rounded-lg p-4 mt-4">
                    {/* Header Section */}
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <img src='https://i.ibb.co.com/60hvPZRS/bannerimg-01.png' className="w-10 h-10 bg-gray-300 rounded-full mr-3" />
                            <div>
                                <p className="font-semibold text-[#004C3F]">USER</p>
                                <p className="text-sm text-gray-500">1 DAY AGO</p>
                            </div>
                        </div>
                        <div className=""><PiDotsThreeOutlineFill className='text-[#A2A2A2] cursor-pointer' /></div>
                    </div>

                    {/* Post Content */}
                    <div className="mt-3">
                        <p className="text-[#004C3F] font-semibold">
                            New Technique: Mirror Glaze for Bonbons
                        </p>
                        <p className="text-[#A2A2A2] text-sm mt-1">
                            I'm excited to share this new technique I've been perfecting for creating mirror-glazed bonbons. The secret is in temperature control!
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="mt-3">
                        <img
                            src="https://i.ibb.co.com/NdC53ZPN/image-1.jpg"
                            alt="Pastries"
                            className="w-full h-[400px] object-cover rounded-lg"
                        />
                    </div>

                    {/* Interaction Buttons */}
                    <div className="flex justify-center  items-center mt-3 text-[#004C3F] lora py-6">
                    <div className="flex text-[30px] text-center space-x-10 gap-10">
                            <button className="flex items-center space-x-1 ">
                                <IoIosHeartEmpty />
                                <span className='ml-2'>41</span>
                            </button>
                            <button className="flex items-center space-x-1 ">
                                <FaRegCommentAlt />
                                <span className='ml-2'>41</span>
                            </button>

                            <button className="flex items-center gap-2">
                                
                                <BsSave />
                                <span className='mb-2'>save</span>
                            </button>
                            <button className="flex items-center gap-2">
                                <BsShare />
                            <span className=''>share</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Community