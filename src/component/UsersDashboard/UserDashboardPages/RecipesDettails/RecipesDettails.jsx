


import React, { useState } from 'react';


function RecipesDettails() {

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState([
    {
      name: 'Pappu Roy',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      time: '1 day ago',
      comment: 'I tried this recipe last weekend and it turned out amazing! The ganache was perfectly smooth and the shells had a great snap. Will definitely make again.',
      rating: 5,
    },
    {
      name: 'Rafsan VI',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
      time: '1 day ago',
      comment: 'I tried this recipe last weekend and it turned out amazing! The ganache was perfectly smooth and the shells had a great snap. Will definitely make again.',
      rating: 5,
    },
    {
      name: 'Pial VI',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
      time: '1 day ago',
      comment: 'I tried this recipe last weekend and it turned out amazing! The ganache was perfectly smooth and the shells had a great snap. Will definitely make again.',
      rating: 5,
    },
    {
      name: 'Baser VI',
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
      time: '1 day ago',
      comment: 'I tried this recipe last weekend and it turned out amazing! The ganache was perfectly smooth and the shells had a great snap. Will definitely make again.',
      rating: 5,
    },
  ]);

  const handleSubmit = () => {
    if (rating === 0 || comment.trim() === '') {
      alert('Please provide a rating and a comment.');
      return;
    }

    const newReview = {
      name: 'Current User', // You can replace this with a dynamic user name
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
      time: 'Just now',
      comment: comment,
      rating: rating,
    };

    setReviews([newReview, ...reviews]);
    setComment('');
    setRating(0);
    setHover(0);
  };
  // State to track the active tab
  const [activeTab, setActiveTab] = useState('Ingredients');

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Content for each tab
  const renderContent = () => {
    switch (activeTab) {
      case 'Ingredients':
        return (
          <div className="px-6 py-4">
            <h2 className="text-xl font-semibold text-[#004C3F] mb-4">Recipe Indigent</h2>


            <div className='space-y-6'>
              <div className='flex text-[#999999] gap-6 '>
                <p className='w-4/10 border border-[#999999] rounded-[10px] py-3 px-3'>Dark chocolate</p>
                <p className='w-2/10 border border-[#999999] rounded-[10px] text-center py-3 px-3'>200g</p>
                <p className='w-4/10 border border-[#999999] rounded-[10px] py-3 px-3'>70% cocoa solids</p>
              </div>
              <div className='flex text-[#999999] gap-6 '>
                <p className='w-4/10 border border-[#999999] rounded-[10px] py-3 px-3'>Dark chocolate</p>
                <p className='w-2/10 border border-[#999999] rounded-[10px] text-center py-3 px-3'>200g</p>
                <p className='w-4/10 border border-[#999999] rounded-[10px] py-3 px-3'>70% cocoa solids</p>
              </div>
              <div className='flex text-[#999999] gap-6 '>
                <p className='w-4/10 border border-[#999999] rounded-[10px] py-3 px-3'>Dark chocolate</p>
                <p className='w-2/10 border border-[#999999] rounded-[10px] text-center py-3 px-3'>200g</p>
                <p className='w-4/10 border border-[#999999] rounded-[10px] py-3 px-3'>70% cocoa solids</p>
              </div>
              <div className='flex text-[#999999] gap-6 '>
                <p className='w-4/10 border border-[#999999] rounded-[10px] py-3 px-3'>Dark chocolate</p>
                <p className='w-2/10 border border-[#999999] rounded-[10px] text-center py-3 px-3'>200g</p>
                <p className='w-4/10 border border-[#999999] rounded-[10px] py-3 px-3'>70% cocoa solids</p>
              </div>
              <div className='flex text-[#999999] gap-6 '>
                <p className='w-4/10 border border-[#999999] rounded-[10px] py-3 px-3'>Dark chocolate</p>
                <p className='w-2/10 border border-[#999999] rounded-[10px] text-center py-3 px-3'>200g</p>
                <p className='w-4/10 border border-[#999999] rounded-[10px] py-3 px-3'>70% cocoa solids</p>
              </div>
            </div>
          </div>
        );
      case 'Instructions':
        return (
          <div className="px-6 py-4">
            <h2 className="text-xl font-semibold text-[#004C3F] mb-4">Recipe Indigent</h2>


            <div className='space-y-6 text-[#999999]'>


              <p className='w-full border border-[#999999] rounded-[10px] py-3 px-3'>1. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.</p>
              <p className='w-full border border-[#999999] rounded-[10px] py-3 px-3'>1. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.</p>
              <p className='w-full border border-[#999999] rounded-[10px] py-3 px-3'>1. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.</p>
              <p className='w-full border border-[#999999] rounded-[10px] py-3 px-3'>1. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.</p>


            </div>
          </div>
        );
      case 'Chef\'s Notes':
        return (
          <div className="px-6 py-4">
            <h2 className="text-xl font-semibold text-[#004C3F] mb-4">Chefs note:</h2>

            <div className='space-y-6 text-[#999999]'>


              <p className='w-full border border-[#999999] rounded-[10px] py-3 px-3'>1. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.</p>
              <p className='w-full border border-[#999999] rounded-[10px] py-3 px-3'>1. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.</p>
              <p className='w-full border border-[#999999] rounded-[10px] py-3 px-3'>1. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.</p>
              <p className='w-full border border-[#999999] rounded-[10px] py-3 px-3'>1. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.</p>


            </div>
          </div>
        );
      case 'Comments':
        return (
          <div className=" p-6  rounded-[10px] ">
            <h2 className="text-xl font-semibold mb-4">Comments & Rating</h2>

            {/* Reviews List */}
            <div className="space-y-4 lora">
              {reviews.map((review, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 border border-[#D9E0DC] rounded-[10px] ">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className='flex justify-between'>
                      <div className="flex items-center gap-6">
                        <h3 className="text-[24px] font-medium text-[#004C3F]">{review.name}</h3>
                        <span className="text-sm text-gray-500">{review.time}</span>
                      </div>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 mt-1">{review.comment}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Your Rating Section */}
            <div className="mt-6 p-4 bg-white rounded-lg shadow-sm">
              <div className='flex gap-4 mb-4'>
                <h3 className="text-lg font-medium text-[#555050]">Your Rating:</h3>
                <div className="flex items-center 4">
                  {[...Array(5)].map((_, index) => {
                    const ratingValue = index + 1;
                    return (
                      <label key={index}>
                        <input
                          type="radio"
                          name="rating"
                          value={ratingValue}
                          onClick={() => setRating(ratingValue)}
                          className="hidden"
                        />
                        <svg
                          className={`w-6 h-6 cursor-pointer ${ratingValue <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                          onMouseEnter={() => setHover(ratingValue)}
                          onMouseLeave={() => setHover(0)}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </label>
                    );
                  })}
                </div>
              </div>
              <textarea
                className="w-full p-2 border rounded-[10px] border-[#D9E0DC] "
                rows="3"
                placeholder="Share your experience..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
              <button
                className="mt-3 px-4 py-2  bg-[#004C3F] cursor-pointer text-white rounded-lg "
                onClick={handleSubmit}
              >
                Post Comment
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="py-6 px-10">
      <div className="rounded-lg overflow-hidden py-3 px-3">
        {/* Header Section */}
        <div
          className="relative h-[417px] flex items-center justify-center bg-cover bg-center rounded-xl"
          style={{ backgroundImage: "url('https://i.ibb.co/NdC53ZPN/image-1.jpg')" }}
        >
          <div className="absolute inset-0 bg-[#004C3F78] bg-opacity-50 rounded-xl"></div>
          <h1 className="relative text-5xl font-bold text-white z-10">Classic Chocolate Soufflé</h1>
        </div>

        {/* Metadata Section */}
        <div className="flex justify-between items-center px-2 mt-2 py-4">
          <div>
            <span className="bg-[#B0BFB6] rounded-[29px] px-3 py-1 mr-5 text-[#004C3F]">Chocolate</span>
            <span>Updated: 2023-11-15</span>
          </div>
          <div className="flex gap-6">
            <button className="flex items-center text-[#004C3F] border border-[#004C3F] rounded p-1 cursor-pointer px-2">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
              Save
            </button>
            <button className="flex items-center text-[#004C3F] border border-[#004C3F] rounded p-1 cursor-pointer px-2">
              Chat
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
            </button>
            <button className="flex items-center text-[#004C3F] border border-[#004C3F] rounded p-1 cursor-pointer px-2">
              Share
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Description */}
        <p className="px-6 py-4 text-[#696969] text-[16px]">
          Signature bonbons with a smooth ganache filling and a tempered chocolate shell. These bonbons showcase the rich flavor of 70% dark chocolate with a hint of vanilla.
        </p>

        {/* Tabs */}
        <div className="flex bg-[#D9E0DC] py-2 justify-around text-[20px] rounded-[10px]">
          <button
            className={`px-20 py-2 rounded-[10px] ${activeTab === 'Ingredients' ? 'bg-[#004C3F] text-white' : 'text-gray-600'}`}
            onClick={() => handleTabClick('Ingredients')}
          >
            Ingredients
          </button>
          <button
            className={`px-20 py-2 rounded-[10px] ${activeTab === 'Instructions' ? 'bg-[#004C3F] text-white' : 'text-gray-600'}`}
            onClick={() => handleTabClick('Instructions')}
          >
            Instructions
          </button>
          <button
            className={`px-20 py-2 rounded-[10px] ${activeTab === 'Chef\'s Notes' ? 'bg-[#004C3F] text-white' : 'text-gray-600'}`}
            onClick={() => handleTabClick('Chef\'s Notes')}
          >
            Chef's Notes
          </button>
          <button
            className={`px-20 py-2 rounded-[10px] ${activeTab === 'Comments' ? 'bg-[#004C3F] text-white' : 'text-gray-600'}`}
            onClick={() => handleTabClick('Comments')}
          >
            Comments
          </button>
        </div>

        {/* Tab Content */}
        {renderContent()}
      </div>
    </div>
  );
}

export default RecipesDettails;