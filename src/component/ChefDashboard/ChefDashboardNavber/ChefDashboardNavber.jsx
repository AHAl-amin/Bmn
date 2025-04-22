
import { GoBellFill } from 'react-icons/go';

import { Link, NavLink } from 'react-router-dom';

function ChefDashboardNavber() {

   
    return (
        <div className="flex items-center justify-end pt-10 lora h-16 px-6  md:max-w-[170vh] mx-auto md:ml-[260px] md:w-[calc(100%-240px)]">

            {/* <div className="flex items-center md:w-[30%] relative">
        <IoSearchOutline 
            className={`text-[#0077B6] absolute ml-3 ${isSearchFocused ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}
        />
        <input
            type="search"
            placeholder="Search recipes"
            className="placeholder-[color:#0077B6] focus:placeholder-transparent w-full py-3 border border-[#0077B6] rounded-full pl-8"
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}

        />
    </div> */}


            <div className="flex items-center space-x-8">
         
                <NavLink to='/dashboard/user_notifications'>
                    <div className="relative">
                        <button className="p-2 rounded-full hover:bg-gray-100 transition-transform duration-200 cursor-pointer">
                            <GoBellFill className="h-7 w-7 text-[#0077B6]" />
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
    )
}

export default ChefDashboardNavber