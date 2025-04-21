


import { NavLink, useLocation } from "react-router-dom";

import { IoReorderThreeOutline, IoSettingsOutline} from "react-icons/io5";

import login_img2 from '../../../assets/image/Admin_login_img.png';
import { FaHeart, FaRegLightbulb } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { useState } from "react";

const UserDashboardSidebar = () => {
  const location = useLocation();
  const isProjectActive = location.pathname.startsWith('/dashboard/user_notifications');
  const isDashboardActive = ["/dashboard", "/dashboard/recipes_dettails", "/dashboard/createBuyerOrder", "/dashboard/buyer_candidate_list"].includes(location.pathname);

  // State to control sidebar visibility on small devices
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Toggle Icon for Small Devices */}
      <div className="md:hidden flex justify-start p-4 bg-[#B0BFB6]">
        <IoReorderThreeOutline
          className="h-8 w-8 text-[#004C3F] cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#B0BFB6] pt-10 lora transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:relative md:translate-x-0 md:block h-screen`}
      >
        <NavLink className="flex justify-center">
          <img src={login_img2} alt="logo" className="w-[129px] h-[110px]" />
        </NavLink>
        <div className="flex flex-col gap-2 pt-5 mx-5">
          <NavLink
            to="/dashboard"

            className={`flex items-center gap-3 px-3 py-3 transition-colors duration-200 ${isDashboardActive ? 'bg-[#004C3F]  text-white rounded-md' : 'text-[#004C3F] hover:bg-[#4c6460] hover:text-white rounded-md'
              }`}

          >
            <FaRegLightbulb className="h-6 w-6" />
            <h1 className="text-lg font-medium text-white">Recipes</h1>
          </NavLink>

          <NavLink
            to="/dashboard/ai_chat"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 transition-colors duration-200 w-full ${isActive
                ? 'bg-[#004C3F] text-white rounded-md'
                : 'text-[#004C3F] hover:bg-[#4c6460] hover:text-white rounded-md'
              }`
            }
          >
            <BsChatDotsFill
              className="h-6 w-6  " />
            <h1 className="text-lg font-medium text-white">AI Chat</h1>
          </NavLink>

          <NavLink
            to="/dashboard/user_notifications"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 transition-colors duration-200 w-full ${isActive
                ? 'bg-[#004C3F] text-white rounded-md'
                : 'text-[#004C3F] hover:bg-[#4c6460] hover:text-white rounded-md'
              }`
            }
          >
            <FaPeopleGroup className="h-6 w-6" />
            <h1 className="text-lg font-medium text-white">Community</h1>
          </NavLink>

          <NavLink
            to="/dashboard/user_profile_dettails"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 transition-colors duration-200 w-full ${isActive
                ? 'bg-[#004C3F] text-white rounded-md'
                : 'text-[#004C3F] hover:bg-[#4c6460] hover:text-white rounded-md'
              }`
            }
          >
            <FaHeart className="h-6 w-6" />
            <h1 className="text-lg font-medium text-white">Saved recipes</h1>
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
            to="/dashboard/user_wallet"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 transition-colors duration-200 w-full ${isActive
                ? 'bg-[#004C3F] text-white rounded-md'
                : 'text-[#004C3F] hover:bg-[#4c6460] hover:text-white rounded-md'
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

export default UserDashboardSidebar;