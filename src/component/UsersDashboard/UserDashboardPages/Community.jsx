

import React from 'react';
import { BsSave, BsShare } from 'react-icons/bs';
import { FaRegCommentAlt } from 'react-icons/fa';
import { IoIosHeartEmpty } from 'react-icons/io';
import { PiChefHatFill, PiDotsThreeOutlineFill } from 'react-icons/pi';

// JSON Data
const communityPosts = [
  {
    id: 1,
    role: 'Chef',
    username: 'Chef',
    timeAgo: '1 Day Ago',
    title: 'New Technique: Mirror Glaze for Bonbons',
    content:
      "I'm excited to share this new technique I've been perfecting for creating mirror-glazed bonbons. The secret is in temperature control!",
    imageUrl: 'https://i.ibb.co.com/NdC53ZPN/image-1.jpg',
    avatarUrl: 'https://i.ibb.co.com/60hvPZRS/bannerimg-01.png',
    likes: 41,
    comments: 41,
  },
  {
    id: 2,
    role: 'User',
    username: 'User',
    timeAgo: '1 Day Ago',
    title: 'New Technique: Mirror Glaze for Bonbons',
    content:
      "I'm excited to share this new technique I've been perfecting for creating mirror-glazed bonbons. The secret is in temperature control!",
    imageUrl: 'https://i.ibb.co.com/NdC53ZPN/image-1.jpg',
    avatarUrl: 'https://i.ibb.co.com/60hvPZRS/bannerimg-01.png',
    likes: 41,
    comments: 41,
  },
  {
    id: 3,
    role: 'Chef',
    username: 'Chef',
    timeAgo: '1 Day Ago',
    title: 'New Technique: Mirror Glaze for Bonbons',
    content:
      "I'm excited to share this new technique I've been perfecting for creating mirror-glazed bonbons. The secret is in temperature control!",
    imageUrl: 'https://i.ibb.co.com/NdC53ZPN/image-1.jpg',
    avatarUrl: 'https://i.ibb.co.com/60hvPZRS/bannerimg-01.png',
    likes: 41,
    comments: 41,
  },
  {
    id: 4,
    role: 'User',
    username: 'User',
    timeAgo: '1 Day Ago',
    title: 'New Technique: Mirror Glaze for Bonbons',
    content:
      "I'm excited to share this new technique I've been perfecting for creating mirror-glazed bonbons. The secret is in temperature control!",
    imageUrl: 'https://i.ibb.co.com/NdC53ZPN/image-1.jpg',
    avatarUrl: 'https://i.ibb.co.com/60hvPZRS/bannerimg-01.png',
    likes: 41,
    comments: 41,
  },
];

const Community = () => {
  return (
    <div className="px-10 py-4 lora">
      <h1 className="text-[#5B21BD] text-4xl md:text-[45px] font-semibold">Community</h1>
      <p className="text-[#A2A2A2] text-lg md:text-xl mt-2">
        Connect with other culinary enthusiasts, share your creations, and get inspired.
      </p>

      <div className="space-y-8 mt-4">
        {communityPosts.map((post) => (
          <div
            key={post.id}
            className="border border-white bg-white shadow-md rounded-lg p-4"
          >
            {/* Header Section */}
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src={post.avatarUrl}
                  alt="Avatar"
                  className="w-10 h-10 bg-gray-300 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold text-[#5B21BD] capitalize">{post.username}</p>
                  <p className="text-sm text-gray-500">{post.timeAgo}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                {post.role === 'Chef' && (
                  <span className="flex items-center gap-2 bg-[#CCBAEB] px-2 py-1 rounded text-[#5B21BD]">
                    Chef <PiChefHatFill />
                  </span>
                )}
                <PiDotsThreeOutlineFill className="text-[#A2A2A2] cursor-pointer" />
              </div>
            </div>

            {/* Post Content */}
            <div className="mt-3">
              <p className="text-[#5B21BD] font-semibold capitalize">{post.title}</p>
              <p className="text-[#A2A2A2] text-sm mt-1">{post.content}</p>
            </div>

            {/* Image Section */}
            <div className="mt-3">
              <img
                src={post.imageUrl}
                alt="Post"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>

            {/* Interaction Buttons */}
            <div className="flex justify-center items-center mt-3 text-[#5B21BD] py-6">
              <div className="flex text-3xl space-x-10">
                <button className="flex items-center space-x-1">
                  <IoIosHeartEmpty />
                  <span className="ml-2 text-base">{post.likes}</span>
                </button>
                <button className="flex items-center space-x-1">
                  <FaRegCommentAlt />
                  <span className="ml-2 text-base">{post.comments}</span>
                </button>
                <button className="flex items-center gap-2">
                  <BsSave />
                  <span className="text-base">save</span>
                </button>
                <button className="flex items-center gap-2">
                  <BsShare />
                  <span className="text-base">share</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;