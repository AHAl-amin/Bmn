


// import { CiFilter } from 'react-icons/ci';
// import landingPageIcon from '../../assets/image/Admin_login_img.png';
// import { IoSearchOutline } from 'react-icons/io5';
// import { useState } from 'react';
// import PreviewGallary from './PreviewGallary';
// import Exprience from './Exprience';

// const Home = () => {
//     const homepageData = [
//         {
//             "id": 1,
//             "title": "Parisian Delights",
//             "category": "Mommy's Special Collection",
//             "description": "Award winning chocolate specializing in artisanal bonbons with unique flavor combinations and stunning",
//             "rating": 4.8,
//             "user_profile": "mommy_chef",
//             "image": "https://i.ibb.co.com/PZHThmVf/Elegant-Morning-Treats-1.png"
//         },
//         {
//             "id": 2,
//             "title": "tarisian Delights",
//             "category": "Happy Chef's Favorites",
//             "description": "Award winning chocolate specializing in artisanal bonbons with unique flavor combinations and stunning",
//             "rating": 4.8,
//             "user_profile": "https://i.ibb.co.com/60hvPZRS/bannerimg-01.png",
//             "image": "https://i.ibb.co.com/PZHThmVf/Elegant-Morning-Treats-1.png"
//         },
//         {
//             "id": 3,
//             "title": "karisian Delights",
//             "category": "Cook Finder's Picks",
//             "description": "Award winning chocolate specializing in artisanal bonbons with unique flavor combinations and stunning",
//             "rating": 4.8,
//             "user_profile": "cook_finder",
//             "image": "https://i.ibb.co.com/pBTdN8Bn/image-2.jpg"
//         },
//         {
//             "id": 4,
//             "title": "harisian Delights",
//             "category": "Hello Chef's Delicacies",
//             "description": "Award winning chocolate specializing in artisanal bonbons with unique flavor combinations and stunning",
//             "rating": 4.8,
//             "user_profile": "https://i.ibb.co.com/60hvPZRS/bannerimg-01.png",
//             "image": "https://i.ibb.co.com/pBTdN8Bn/image-2.jpg"
//         },
//         {
//             "id": 5,
//             "title": "marisian Delights",
//             "category": "Foodie's Choice",
//             "description": "Award winning chocolate specializing in artisanal bonbons with unique flavor combinations and stunning",
//             "rating": 4.8,
//             "user_profile": "https://i.ibb.co.com/60hvPZRS/bannerimg-01.png",
//             "image": "https://i.ibb.co.com/PZHThmVf/Elegant-Morning-Treats-1.png"
//         },
//         {
//             "id": 6,
//             "title": "garisian Delights",
//             "category": "Gourmet Selection",
//             "description": "Award winning chocolate specializing in artisanal bonbons with unique flavor combinations and stunning",
//             "rating": 4.8,
//             "user_profile": "foodie_2",
//             "image": "https://i.ibb.co.com/pBTdN8Bn/image-2.jpg"
//         }
//     ];

//     // State to control modal visibility, selected chef, and search query
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [selectedChef, setSelectedChef] = useState(null);
//     const [activeButton, setActiveButton] = useState('about');
//     const [searchQuery, setSearchQuery] = useState('');

//     const handleButtonClick = (button) => {
//         setActiveButton(button);
//     };

//     // Function to open modal with specific chef data
//     const openModalWithChef = (chef) => {
//         setSelectedChef(chef);
//         setIsModalOpen(true);
//     };

//     // Function to close modal
//     const closeModal = () => {
//         setIsModalOpen(false);
//         setSelectedChef(null);
//         setActiveButton('about'); // Reset to about tab when closing modal
//     };

//     // Handle search input change
//     const handleSearchChange = (e) => {
//         const query = e.target.value.trim();
//         setSearchQuery(query);
//         console.log('Search Query:', query); // Debugging: Log the search query
//     };

//     // Filter homepageData based on search query
//     const filteredData = homepageData.filter((item) => {
//         const title = item.title?.trim().toLowerCase() || '';
//         const subTitle = item.category?.trim().toLowerCase() || '';
//         const query = searchQuery.toLowerCase();
//         const matches = title.includes(query) || subTitle.includes(query);
//         return matches;
//     });

//     // Debugging: Log filtered data
//     console.log('Filtered Data:', filteredData);

//     return (
//         <div className='bg-[#E6EBE8] min-h-screen py-10'>
//             <div>
//                 <div className='flex justify-center'>
//                     <img src={landingPageIcon} alt="Culinary Experts Logo" className='w-[200px] h-[120px]' />
//                 </div>
//                 <h1 className='text-[60px] font-semibold text-[#004C3F] text-center'>Choose Your Culinary Expert</h1>
//                 <p className='text-[20px] text-[#8F8F8F] text-center pb-8 pt-4'>
//                     Select a chef whose expertise aligns with your culinary interests. You'll get access <br />
//                     to their exclusive recipes, techniques, and personalized AI assistance.
//                 </p>

//                 <div className='flex justify-center gap-2 relative'>
//                     <div className='absolute top-4 right-2/3 mr-6'>
//                         <IoSearchOutline className='text-[#004C3F]' />
//                     </div>
//                     <input
//                         type="search"
//                         className='placeholder:text-[#004C3F] w-1/3 border border-[#B0BFB6] py-2 rounded-full pl-10'
//                         placeholder='Search by name, specialty, or keyword'
//                         value={searchQuery}
//                         onChange={handleSearchChange}
//                     />
//                     <button className='text-[#004C3F] border border-[#B0BFB6] py-2 px-6 rounded-full flex items-center gap-2'>
//                         <CiFilter />
//                         <span>filter</span>
//                     </button>
//                 </div>

//                 <style jsx>{`
//                         input[type="search"]::-webkit-search-cancel-button {
//                             display: none;
//                         }
//                         input[type="search"]::-ms-clear {
//                             display: none;
//                         }
//                     `}</style>
//             </div>

//             <h1 className="text-[40px] lora font-semibold pl-10 text-[#004C3F] pt-4">All Culinary Experts</h1>
//             {filteredData.length === 0 ? (
//                 <p className="text-center text-[#515151] text-lg p-10">No culinary experts found matching your search.</p>
//             ) : (
//                 <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-10">
//                     {filteredData.map((item) => (
//                         <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow relative lora">
//                             <div className="h-48 overflow-hidden">
//                                 <img
//                                     src={item.image}
//                                     alt={item.category}
//                                     className="w-full h-full object-cover"
//                                     onError={(e) => {
//                                         e.target.onerror = null;
//                                         e.target.src = "https://via.placeholder.com/400x300?text=Pastry+Image";
//                                     }}
//                                 />
//                             </div>

//                             <div className="p-6">
//                                 <div className="flex justify-between items-start mb-2">
//                                     <h2 className="text-[24px] font-semibold text-[#004C3F]">{item.title}</h2>
//                                 </div>

//                                 <h3 className="text-lg font-medium text-[#515151] mb-3">{item.category}</h3>
//                                 <p className="text-gray-600 mb-4">{item.description}</p>

//                                 <div className="flex justify-between items-center absolute top-5">
//                                     {item.user_profile.startsWith('http') ? (
//                                         <img
//                                             src={item.user_profile}
//                                             alt="User profile"
//                                             className="w-10 h-10 rounded-full object-cover"
//                                             onError={(e) => {
//                                                 e.target.onerror = null;
//                                                 e.target.src = "https://via.placeholder.com/32?text=User";
//                                             }}
//                                         />
//                                     ) : (
//                                         <span className="text-sm text-gray-500">{item.user_profile}</span>
//                                     )}
//                                 </div>

//                                 <div className='flex justify-between'>
//                                     <div className="flex items-center px-2 py-1 rounded">
//                                         <svg className="w-4 h-4 ml-1 text-[#FACC15]" fill="currentColor" viewBox="0 0 20 20">
//                                             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                                         </svg>
//                                         <span className="text-[#676767] font-medium ml-1">{item.rating}</span>
//                                     </div>

//                                     <button
//                                         className="px-4 py-2 text-[#004C3F] text-[18px] font-medium rounded cursor-pointer"
//                                         onClick={() => openModalWithChef(item)}
//                                     >
//                                         Details
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}

//             {/* Modal */}
//             {isModalOpen && selectedChef && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-[#004C3FCC] bg-opacity-50 z-50 overflow-y-auto py-10">
//                     <div className="bg-white rounded-lg p-6 w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] flex flex-col">
//                         <div className="flex justify-between items-start mb-4">
//                             <div>
//                                 <h2 className="text-2xl font-semibold text-[#004C3F]">{selectedChef.title}</h2>
//                                 <p className='text-[#515151]'> {selectedChef.category}</p>
//                             </div>
//                             <button
//                                 className="px-6 py-2 bg-[#004C3F] text-white font-medium rounded hover:bg-[#00382D] transition-colors"
//                                 onClick={closeModal}
//                             >
//                                 Back
//                             </button>
//                         </div>

//                         <div className="flex-1 overflow-y-auto relative">
//                             <div className="h-[250px] relative">
//                                 <img
//                                     src={selectedChef.image}
//                                     alt={selectedChef.title}
//                                     className="w-full h-full rounded-lg object-cover"
//                                     onError={(e) => {
//                                         e.target.onerror = null;
//                                         e.target.src = "https://via.placeholder.com/800x400?text=Chef+Image";
//                                     }}
//                                 />
//                                 <div className='bottom-4 left-6 absolute'>
//                                     {selectedChef.user_profile.startsWith('http') ? (
//                                         <img
//                                             src={selectedChef.user_profile}
//                                             alt="User profile"
//                                             className="w-10 h-10 rounded-full object-cover"
//                                             onError={(e) => {
//                                                 e.target.onerror = null;
//                                                 e.target.src = "https://via.placeholder.com/32?text=User";
//                                             }}
//                                         />
//                                     ) : (
//                                         <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
//                                             <span className="text-xs text-gray-600">{selectedChef.user_profile.charAt(0).toUpperCase()}</span>
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>
                            
//                             <div className='flex justify-between gap-4 py-4'>
//                                 <div className='bg-[#D9E0DC] px-4 py-2 w-full rounded-[10px] text-center'>Recipes: 12</div>
//                                 <div className='bg-[#D9E0DC] px-4 py-2 w-full rounded-[10px] text-center'>Students: 3,120</div>
//                                 <div className="flex items-center justify-center bg-[#D9E0DC] px-4 py-2 w-full rounded-[10px] text-center">
//                                     <span className="mr-1 text-[#676767] font-medium">{selectedChef.rating}</span>
//                                     <svg className="w-5 h-5 text-[#FACC15]" fill="currentColor" viewBox="0 0 20 20">
//                                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81 .588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                                     </svg>
//                                 </div>
//                             </div>

//                             <div className="bg-[#D9E0DC] rounded-[10px] py-2 flex gap-6 justify-between px-4 sm:px-10 mt-4">
//                                 <button
//                                     className={`w-1/3 py-2 rounded-[10px] transition-colors ${activeButton === 'about'
//                                         ? 'bg-[#004C3F] text-white'
//                                         : 'text-[#004C3F] hover:bg-[#004C3F20]'
//                                         }`}
//                                     onClick={() => handleButtonClick('about')}
//                                 >
//                                     About
//                                 </button>
//                                 <button
//                                     className={`w-1/3 py-2 rounded-[10px] transition-colors ${activeButton === 'preview'
//                                         ? 'bg-[#004C3F] text-white'
//                                         : 'text-[#004C3F] hover:bg-[#004C3F20]'
//                                         }`}
//                                     onClick={() => handleButtonClick('preview')}
//                                 >
//                                     Preview gallery
//                                 </button>
//                             </div>

//                             <div className="relative mt-2">
//                                 {activeButton === 'about' ? (
//                                     <>
//                                         <p className='text-[26px] font-semibold text-[#004C3F] mb-4'>About chef {selectedChef.user_profile}</p>
//                                         <Exprience />
//                                         <p className="text-gray-600 mt-4">{selectedChef.description}</p>
//                                     </>
//                                 ) : (
//                                     <PreviewGallary />
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Home;


import { CiFilter } from 'react-icons/ci';
import landingPageIcon from '../../assets/image/Admin_login_img.png';
import { IoSearchOutline } from 'react-icons/io5';
import { useState, useEffect, useRef } from 'react';
import PreviewGallary from './PreviewGallary';
import Exprience from './Exprience';

const Home = () => {
    const homepageData = [
        {
            "id": 1,
            "title": "Parisian Delights",
            "category": "Mommy's Special Collection",
            "description": "Award winning chocolate specializing in artisanal bonbons with unique flavor combinations and stunning",
            "rating": 4.8,
            "user_profile": "https://i.ibb.co.com/60hvPZRS/bannerimg-01.png",
            "image": "https://i.ibb.co.com/d0HMfYdn/image-3.png"
        },
        {
            "id": 2,
            "title": "tarisian Delights",
            "category": "Happy Chef's Favorites",
            "description": "Award winning chocolate specializing in artisanal bonbons with unique flavor combinations and stunning",
            "rating": 4.8,
            "user_profile": "https://i.ibb.co.com/60hvPZRS/bannerimg-01.png",
            "image": "https://i.ibb.co.com/d0HMfYdn/image-3.png"
        },
        {
            "id": 3,
            "title": "karisian Delights",
            "category": "Cook Finder's Picks",
            "description": "Award winning chocolate specializing in artisanal bonbons with unique flavor combinations and stunning",
            "rating": 4.8,
            "user_profile": "https://i.ibb.co.com/60hvPZRS/bannerimg-01.png",
            "image": "https://i.ibb.co.com/pBTdN8Bn/image-2.jpg"
        },
        {
            "id": 4,
            "title": "harisian Delights",
            "category": "Hello Chef's Delicacies",
            "description": "Award winning chocolate specializing in artisanal bonbons with unique flavor combinations and stunning",
            "rating": 4.8,
            "user_profile": "https://i.ibb.co.com/60hvPZRS/bannerimg-01.png",
            "image": "https://i.ibb.co.com/pBTdN8Bn/image-2.jpg"
        },
        {
            "id": 5,
            "title": "marisian Delights",
            "category": "Foodie's Choice",
            "description": "Award winning chocolate specializing in artisanal bonbons with unique flavor combinations and stunning",
            "rating": 4.8,
            "user_profile": "https://i.ibb.co.com/60hvPZRS/bannerimg-01.png",
            "image": "https://i.ibb.co.com/d0HMfYdn/image-3.png"
        },
        {
            "id": 6,
            "title": "garisian Delights",
            "category": "Gourmet Selection",
            "description": "Award winning chocolate specializing in artisanal bonbons with unique flavor combinations and stunning",
            "rating": 4.8,
            "user_profile": "https://i.ibb.co.com/60hvPZRS/bannerimg-01.png",
            "image": "https://i.ibb.co.com/pBTdN8Bn/image-2.jpg"
        }
    ];

    // State to control modal visibility, selected chef, search query, filter dropdown, and selected subtitle
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedChef, setSelectedChef] = useState(null);
    const [activeButton, setActiveButton] = useState('about');
    const [searchQuery, setSearchQuery] = useState('');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [selectedSubTitle, setSelectedSubTitle] = useState('');
    const filterRef = useRef(null);

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    // Function to open modal with specific chef data
    const openModalWithChef = (chef) => {
        setSelectedChef(chef);
        setIsModalOpen(true);
    };

    // Function to close modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedChef(null);
        setActiveButton('about');
    };

    // Handle search input change
    const handleSearchChange = (e) => {
        const query = e.target.value.trim();
        setSearchQuery(query);
        console.log('Search Query:', query);
    };

    // Toggle filter dropdown
    const toggleFilterDropdown = () => {
        setIsFilterOpen((prev) => !prev);
    };

    // Handle subtitle selection
    const handleSubTitleSelect = (subTitle) => {
        setSelectedSubTitle(subTitle);
        setIsFilterOpen(false);
        console.log('Selected SubTitle:', subTitle);
    };

    // Close dropdown on outside click
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (filterRef.current && !filterRef.current.contains(event.target)) {
                setIsFilterOpen(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    // Get unique subtitles
    const uniqueSubTitles = [...new Set(homepageData.map((item) => item.category))];

    // Filter homepageData based on search query and selected subtitle
    const filteredData = homepageData.filter((item) => {
        const title = item.title?.trim().toLowerCase() || '';
        const subTitle = item.category?.trim().toLowerCase() || '';
        const query = searchQuery.toLowerCase();
        const matchesSearch = title.includes(query) || subTitle.includes(query);
        const matchesFilter = selectedSubTitle ? item.category === selectedSubTitle : true;
        return matchesSearch && matchesFilter;
    });

    console.log('Filtered Data:', filteredData);

    return (
        <div className='bg-[#E6EBE8] min-h-screen py-10'>
            <div>
                <div className='flex justify-center mb-4'>
                    <img src={landingPageIcon} alt="Culinary Experts Logo" className='w-[200px] h-[150px]' />
                </div>
                <h1 className='text-[60px] font-semibold text-[#004C3F] text-center'>Choose Your Culinary Expert</h1>
                <p className='text-[20px] text-[#8F8F8F] text-center pb-8 pt-4'>
                    Select a chef whose expertise aligns with your culinary interests. You'll get access <br />
                    to their exclusive recipes, techniques, and personalized AI assistance.
                </p>

                <div className='flex justify-center gap-2 relative'>
                    <div className='absolute top-4 right-2/3 mr-6'>
                        <IoSearchOutline className='text-[#004C3F]' />
                    </div>
                    <input
                        type="search"
                        className='placeholder:text-[#004C3F] w-1/3 border border-[#B0BFB6] py-2 rounded-full pl-10'
                        placeholder='Search by name, specialty, or keyword'
                        value={searchQuery}
                        onChange={handleSearchChange}
                        style={{ WebkitAppearance: 'none' }}
                    />
                    <div className='relative' ref={filterRef}>
                        <button
                            className='text-[#004C3F] border border-[#B0BFB6] py-2 px-6 rounded-full flex items-center gap-2 cursor-pointer'
                            onClick={toggleFilterDropdown}
                        >
                            <CiFilter />
                            <span>filter</span>
                        </button>
                        {isFilterOpen && (
                            <div className='absolute right-0 mt-2 w-48 bg-white border border-[#B0BFB6] rounded-lg shadow-lg z-10'>
                                <ul className='py-1'>
                                    <li
                                        className='px-4 py-2 text-[#004C3F] hover:bg-[#E6EBE8] cursor-pointer'
                                        onClick={() => handleSubTitleSelect('')}
                                    >
                                        All
                                    </li>
                                    {uniqueSubTitles.map((subTitle) => (
                                        <li
                                            key={subTitle}
                                            className='px-4 py-2 text-[#004C3F] hover:bg-[#E6EBE8] cursor-pointer'
                                            onClick={() => handleSubTitleSelect(subTitle)}
                                        >
                                            {subTitle}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <style jsx>{`
                        input[type="search"]::-webkit-search-cancel-button {
                            display: none;
                        }
                        input[type="search"]::-ms-clear {
                            display: none;
                        }
                    `}</style>
                </div>
            </div>

            <h1 className="text-[40px] lora font-semibold pl-10 text-[#004C3F] pt-4">All Culinary Experts</h1>
            {filteredData.length === 0 ? (
                <p className="text-center text-[#515151] text-lg p-10">No culinary experts found matching your search or filter.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-10 " >
                    {filteredData.map((item) => (
                        <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow relative lora"onClick={() => openModalWithChef(item)} >
                            <div className="h-52 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.category}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://via.placeholder.com/400x300?text=Pastry+Image";
                                    }}
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h2 className="text-[24px] font-semibold text-[#004C3F]">{item.title}</h2>
                                </div>

                                <h3 className="text-lg font-medium text-[#515151] mb-3">{item.category}</h3>
                                <p className="text-gray-600 mb-4">{item.description}</p>

                                <div className="flex justify-between items-center absolute top-5">
                                    {item.user_profile.startsWith('http') ? (
                                        <img
                                            src={item.user_profile}
                                            alt="User profile"
                                            className="w-10 h-10 rounded-full object-cover"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "https://via.placeholder.com/32?text=User";
                                            }}
                                        />
                                    ) : (
                                        <span className="text-sm text-gray-500">{item.user_profile}</span>
                                    )}
                                </div>

                                <div className='flex justify-between'>
                                    <div className="flex items-center px-2 py-1 rounded">
                                        <svg className="w-4 h-4 ml-1 text-[#FACC15]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81 .588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="text-[#676767] font｜medium ml-1">{item.rating}</span>
                                    </div>

                                    <button
                                        className="px-4 py-2 text-[#004C3F] text-[18px] font-medium rounded cursor-pointer"
                                        // onClick={() => openModalWithChef(item)}
                                    >
                                        Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Modal */}
            {isModalOpen && selectedChef && (
                <div className="fixed inset-0 flex items-center justify-center bg-[#004C3FCC] bg-opacity-50 z-50 overflow-y-auto py-10">
                    <div className="bg-white rounded-lg p-6 w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h2 className="text-2xl font-semibold text-[#004C3F]">{selectedChef.title}</h2>
                                <p className='text-[#515151]'> {selectedChef.category}</p>
                            </div>
                            <button
                                className="px-6 py-2 bg-[#004C3F] text-white font-medium rounded hover:bg-[#00382D] transition-colors"
                                onClick={closeModal}
                            >
                                Back
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto relative">
                            <div className="h-[300px] relative">
                                <img
                                    src={selectedChef.image}
                                    alt={selectedChef.title}
                                    className="w-full h-full rounded-lg object-cover"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://via.placeholder.com/800x400?text=Chef+Image";
                                    }}
                                />
                                <div className='bottom-4 left-6 absolute'>
                                    {selectedChef.user_profile.startsWith('http') ? (
                                        <img
                                            src={selectedChef.user_profile}
                                            alt="User profile"
                                            className="w-10 h-10 rounded-full object-cover"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "https://via.placeholder.com/32?text=User";
                                            }}
                                        />
                                    ) : (
                                        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                                            <span className="text-xs text-gray-600">{selectedChef.user_profile.charAt(0).toUpperCase()}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            
                            <div className='flex justify-between gap-4 py-4'>
                                <div className='bg-[#D9E0DC] px-4 py-2 w-full rounded-[10px] text-center'>Recipes: 12</div>
                                <div className='bg-[#D9E0DC] px-4 py-2 w-full rounded-[10px] text-center'>Students: 3,120</div>
                                <div className="flex items-center justify-center bg-[#D9E0DC] px-4 py-2 w-full rounded-[10px] text-center">
                                    <span className="mr-1 text-[#676767] font-medium">{selectedChef.rating}</span>
                                    <svg className="w-5 h-5 text-[#FACC15]" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81 .588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="bg-[#D9E0DC] rounded-[10px] py-2 flex gap-6 justify-between px-4 sm:px-10 mt-4">
                                <button
                                    className={`w-1/3 py-2 rounded-[10px] transition-colors ${activeButton === 'about'
                                        ? 'bg-[#004C3F] text-white'
                                        : 'text-[#004C3F] hover:bg-[#004C3F20]'
                                        }`}
                                    onClick={() => handleButtonClick('about')}
                                >
                                    About
                                </button>
                                <button
                                    className={`w-1/3 py-2 rounded-[10px] transition-colors ${activeButton === 'preview'
                                        ? 'bg-[#004C3F] text-white'
                                        : 'text-[#004C3F] hover:bg-[#004C3F20]'
                                        }`}
                                    onClick={() => handleButtonClick('preview')}
                                >
                                    Preview gallery
                                </button>
                            </div>

                            <div className="relative mt-2">
                                {activeButton === 'about' ? (
                                    <>
                                        <p className='text-[26px] font-semibold text-[#004C3F] mb-4'>About chef {selectedChef.title}</p>
                                        <Exprience />
                                        <p className="text-gray-600 mt-4 absolute top-4">{selectedChef.description}</p>
                                    </>
                                ) : (
                                    <PreviewGallary />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;

