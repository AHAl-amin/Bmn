
import { FaLightbulb} from "react-icons/fa"
import { GoBellFill } from "react-icons/go"
import { IoIosArrowDown, IoMdAdd } from "react-icons/io"
import { IoSearchOutline } from "react-icons/io5"
import { NavLink } from "react-router-dom"


const UserDashboardNavbar = () => {
    return (
        <div className="flex items-center justify-between  pt-10 lora  h-16 px-6 bg-white md:max-w-[170vh] mx-auto md:ml-[260px] md:w-[calc(100%-240px)]">
            {/* Logo on the left */}
            <div className="flex items-center md:w-[30%] relative ">
                <IoSearchOutline className='text-[#004C3F] absolute ml-3' />
                <input type="search"
                    placeholder="Search recipes"
                    className="placeholder-[#004C3F] w-full py-3  border border-[#B0BFB6]   rounded-[10px] pl-8  "

                />
            </div>



            {/* User profile and notification on the right */}
            <div className="flex items-center space-x-8">



                <div className="hidden md:block">

                    <div className="flex gap-10 ">
                        <button className="flex items-center gap-2 px-4 py-2 text-white bg-[#004C3F] rounded-[10px] cursor-pointer ">

                            <FaLightbulb />
                            <span className="font-medium">Add Chefs </span><IoMdAdd />

                        </button>

                        <button className="flex items-center text-[#004C3F] gap-2 px-4 py-2 border-[#B0BFB6]  border  rounded-[10px]  cursor-pointer">
                            <FaLightbulb />
                            <span className="text-teal-800 font-medium">Bobon lina</span>
                            <IoIosArrowDown className="h-5 w-5 text-teal-800" />
                        </button>
                    </div>
                </div>

                <NavLink to='/dashboard/user_notifications' >
                    <div className="relative ">
                        <button className="p-2 rounded-full hover:bg-gray-100 transition-transform duration-200 cursor-pointer ">
                            <GoBellFill className="h-7 w-7 text-[#004C3F]" /> {/* Increased base size */}
                        </button>
                        <div className="absolute text-[10px] p-[5px] top-[6px] right-[10px] bg-gray-200 rounded-full"></div>
                    </div>
                </NavLink>
                <div className="flex items-center space-x-2 ">
                    <div className=" hidden md:block">
                        <img
                            src="https://i.ibb.co.com/x2wkVkr/Whats-App-Image-2024-07-04-at-10-43-40-AM.jpg"
                            alt="User profile"
                            className="h-10 w-10 rounded-full"
                        />
                    </div>
                    <span className="text-[17px] font-medium md:block hidden">Cameron</span>
                </div>
            </div>
        </div>
    )
}

export default UserDashboardNavbar