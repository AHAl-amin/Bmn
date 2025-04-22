


import { NavLink, useLocation } from "react-router-dom";

import { IoReorderThreeOutline, IoSettingsOutline } from "react-icons/io5";

import login_img2 from '../../../assets/image/Admin_login_img.png';
import { FaChessQueen, FaCloudRain, FaHeart, FaRegLightbulb, FaUsers } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { useState } from "react";
import { PiChefHatFill } from "react-icons/pi";
import { MdOutlineDashboard } from "react-icons/md";

const ChefDashboardSideber = () => {
    const location = useLocation();
    const isProjectActive = location.pathname.startsWith('/dashboard/user_notifications');
    const isDashboardActive = ["/chef_dashboard", "/dashboard/recipes_dettails", "/dashboard/createBuyerOrder", "/dashboard/buyer_candidate_list"].includes(location.pathname);

    // State to control sidebar visibility on small devices
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Function to toggle sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="lora">
            {/* Toggle Icon for Small Devices */}
            <div className="md:hidden flex justify-start p-4 bg-[#B0D5E8]">
                <IoReorderThreeOutline
                    className="h-8 w-8 text-[#004C3F] cursor-pointer"
                    onClick={toggleSidebar}
                />
            </div>

            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#B0D5E8] pt-10 lora transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:relative md:translate-x-0 md:block h-screen`}
            >
                <NavLink className="flex justify-center">
                    <img src={login_img2} alt="logo" className="w-[129px] h-[110px]" />
                </NavLink>
                <div className="flex flex-col gap-2 pt-5 mx-5">
                    <NavLink
                        to="/"

                        className={`flex items-center gap-3 px-3 py-3 transition-colors duration-200 ${isDashboardActive ?
                            'bg-[#0077B6]  text-white rounded-md' : 'text-[#0077B6] hover:bg-[#77b2d1] hover:text-white rounded-md'
                            }`}

                    >
                        <MdOutlineDashboard className="h-6 w-6" />
                        <h1 className="text-lg font-medium text-white">Dashboard</h1>
                    </NavLink>

                    <NavLink
                        to="/chef_dashboard/chef_all_recipes"
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-3 py-2 transition-colors duration-200 w-full ${isActive
                                ? 'bg-[#0077B6] text-white rounded-md'
                                : 'text-[#0077B6] hover:bg-[#77b2d1] hover:text-white rounded-md'
                            }`
                        }
                    >
                        <PiChefHatFill className="h-6 w-6" />
                        <h1 className="text-lg font-medium text-white">Recipes</h1>
                    </NavLink>

                    <NavLink
                        to="/dashboard/community"
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-3 py-2 transition-colors duration-200 w-full ${isActive
                                ? 'bg-[#0077B6] text-white rounded-md'
                                : 'text-[#0077B6] hover:bg-[#77b2d1] hover:text-white rounded-md'
                            }`
                        }
                    >
                        <FaCloudRain className="h-6 w-6" />
                        <h1 className="text-lg font-medium text-white">AI Training</h1>
                    </NavLink>

                    <NavLink
                        to="/dashboard/save_recipes"
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-3 py-2 transition-colors duration-200 w-full ${isActive
                                ? 'bg-[#0077B6] text-white rounded-md'
                                : 'text-[#0077B6] hover:bg-[#77b2d1] hover:text-white rounded-md'
                            }`
                        }
                    >
                        <FaUsers className="h-6 w-6" />
                        <h1 className="text-lg font-medium text-white">User Feedback</h1>
                    </NavLink>

                    {/* <NavLink
          to="/dashboard/user_wallet"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3  py-2 transition-colors duration-200 w-full ${
              isActive ? 'bg-[#0D95DD] rounded-md ' : 'hover:bg-[#0daddd] hover:text-white  rounded-md'
            }`
          }
        >
          <IoSettingsOutline className="h-6 w-6 text-[#004C3F] hover:text-white  " />
          <h1 className="text-lg font-medium text-white">Profile & setting</h1>
        </NavLink> */}

                    <NavLink
                        to="/dashboard/profile_settings"
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-3 py-2 transition-colors duration-200 w-full ${isActive
                                ? 'bg-[#0077B6] text-white rounded-md'
                                : 'text-[#0077B6] hover:bg-[#77b2d1] hover:text-white rounded-md'
                            }`
                        }
                    >
                        <FaChessQueen className="h-6 w-6" />
                        <h1 className="text-lg font-medium text-white">Subscription</h1>
                    </NavLink>
                    <NavLink
                        to="/dashboard/profile_settings"
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-3 py-2 transition-colors duration-200 w-full ${isActive
                                ? 'bg-[#0077B6] text-white rounded-md'
                                : 'text-[#0077B6] hover:bg-[#77b2d1] hover:text-white rounded-md'
                            }`
                        }
                    >
                        <IoSettingsOutline className="h-6 w-6" />
                        <h1 className="text-lg font-medium text-white">Profile & setting</h1>
                    </NavLink>
                </div>
            </div>

            {/* Overlay for Small Devices */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0  bg-opacity-50 z-40 md:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}
        </div>
    );
};

export default ChefDashboardSideber;