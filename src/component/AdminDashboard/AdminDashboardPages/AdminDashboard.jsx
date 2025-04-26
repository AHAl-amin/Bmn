// // 



// import React, { useState } from 'react';
// import { FaUserFriends } from 'react-icons/fa';
// import { FaArrowTrendUp } from 'react-icons/fa6';
// import { GoGraph } from 'react-icons/go';
// import { PiChefHatFill } from 'react-icons/pi';
// import { RiBox3Fill } from 'react-icons/ri';
// import {
//     ResponsiveContainer,
//     AreaChart,
//     Area,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
// } from 'recharts';

// // Chart data with random values between 5000 and 30000
// const lineChartData = [
//     { name: 'Jan', value: 12640 },
//     { name: 'Feb', value: 28950 },
//     { name: 'Mar', value: 15870 },
//     { name: 'Apr', value: 23980 },
//     { name: 'May', value: 19420 },
//     { name: 'Jun', value: 26890 },
//     { name: 'Jul', value: 22110 },
//     { name: 'Aug', value: 17550 },
//     { name: 'Sep', value: 29300 },
//     { name: 'Oct', value: 14730 },
//     { name: 'Nov', value: 18020 },
//     { name: 'Dec', value: 25560 },
// ];

// const topRecipes = [
//     { name: "Chocolate Soufflé", width: "80%" },
//     { name: "Vanilla Bean Ice Cream", width: "60%" },
//     { name: "Dark Chocolate Truffles", width: "50%" },
//     { name: "Strawberry Macarons", width: "40%" },
// ];

// const feedback = [
//     {
//         recipe: "Chocolate soufflé",
//         rating: 5,
//         comment: "Amazing recipe! I substituted dairy milk with almond milk and it still turned out perfect!"
//     },
//     {
//         recipe: "Chocolate soufflé",
//         rating: 5,
//         comment: "Perfectly rich and fluffy, my guests loved it!"
//     },
//     {
//         recipe: "Chocolate soufflé",
//         rating: 5,
//         comment: "Great instructions, very easy to follow!"
//     },
// ];

// const months = [
//     'January', 'February', 'March', 'April', 'May', 'June',
//     'July', 'August', 'September', 'October', 'November', 'December'
// ];

// function AdminDashboard() {
//     const [darkMode, setDarkMode] = useState(false);
//     const [selectedMonth, setSelectedMonth] = useState('October');
//     const [isOpen, setIsOpen] = useState(false);
//     const [isOpenMonthly, setIsOpenMonthly] = useState(false);

//     return (
//         <div className="px-10 py-6">

// <h2 className="text-[34px] font-semibold text-[#0077B6] mb-1">Dashboard</h2>
// <p className="text-xl text-gray-500 mb-8">Welcome to your Culinary AI Platform admin dashboard</p>
//             {/* Stats Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                 {/* Card Template */}
//                 {[
//                     {
//                         title: "Total AI Interactions",
//                         value: "40,689",
//                         icon: <PiChefHatFill className="text-[#0077B6] text-[25px]" />,
//                         note: "+15",
//                         subtext: "From last month"
//                     },
//                     {
//                         title: "Active Subscribers",
//                         value: "456",
//                         icon: <FaUserFriends className="text-[#0077B6] text-[25px]" />,
//                         note: "3%",
//                         subtext: "From last month"
//                     },
//                     {
//                         title: "Total Recipes",
//                         value: "50",
//                         icon: <RiBox3Fill className="text-[#0077B6] text-[25px]" />,
//                         note: "3+",
//                         subtext: "New this week"
//                     },
//                     {
//                         title: "Monthly revenue",
//                         value: "$4,569",
//                         icon: <GoGraph className="text-[#0077B6] text-[25px]" />,
//                         note: "10%",
//                         subtext: "From last month"
//                     }
//                 ].map((item, index) => (
//                     <div key={index} className="bg-white p-4 rounded-lg space-y-4 border border-[#D9D9D9]">
//                         <div className="flex justify-between items-center">
//                             <div>
//                                 <p className="text-gray-500 text-sm">{item.title}</p>
//                                 <p className="text-[#0077B6] text-3xl font-bold">{item.value}</p>
//                             </div>
//                             <div className="bg-[#8280ff1c] px-4 py-2 rounded-full">
//                                 {item.icon}
//                             </div>
//                         </div>
//                         <div className="flex items-center gap-2 text-sm">
//                             <div className="flex items-center gap-1 text-green-500">
//                                 <FaArrowTrendUp />
//                                 <span>{item.note}</span>
//                             </div>
//                             <span className="text-gray-500">{item.subtext}</span>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Top Recipes & Feedback */}
          

//             {/* Chart Section */}
//             <div className='mt-10 shadow bg-white rounded-xl p-4'>
//                 <div className='flex justify-between pb-6 relative'>
//                     <p className='text-[28px] font-medium text-[#0077B6]'>Total users</p>
//                     <div className='relative'>
//                         <button
//                             onClick={() => setIsOpen(!isOpen)}
//                             className='border border-[#0077B6] rounded-[10px] text-[#0077B6] py-1 px-8'
//                         >
//                             {selectedMonth}
//                         </button>
//                         {isOpen && (
//                             <div className='absolute right-0 mt-2 w-40 bg-white border border-[#0077B6] rounded-md shadow-md z-10'>
//                                 {months.map((month) => (
//                                     <div
//                                         key={month}
//                                         onClick={() => {
//                                             setSelectedMonth(month);
//                                             setIsOpen(false);
//                                         }}
//                                         className='px-4 py-2 hover:bg-[#0077B6] hover:text-white cursor-pointer'
//                                     >
//                                         {month}
//                                     </div>
//                                 ))}
//                             </div>
//                         )}
//                     </div>
//                 </div>
                
//                 {/* Added fixed height to the chart container */}
//                 <div className="h-[300px]">
//                 <ResponsiveContainer width="100%" height="100%">
//                         <AreaChart
//                             data={lineChartData}
//                             margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
//                         >
//                             <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={darkMode ? "#4B5563" : "#E5E7EB"} />
//                             <XAxis
//                                 dataKey="name"
//                                 axisLine={false}
//                                 tickLine={false}
//                                 tick={{ fontSize: 12, fill: darkMode ? "#D1D5DB" : "#6B7280" }}
//                             />
//                             <YAxis
//                                 axisLine={false}
//                                 tickLine={false}
//                                 tick={{ fontSize: 12, fill: darkMode ? "#D1D5DB" : "#6B7280" }}
//                                 tickFormatter={(value) => `${value / 1000}k`}
//                             />
//                             <Tooltip
//                                 content={({ active, payload }) => {
//                                     if (active && payload && payload.length) {
//                                         return (
//                                             <div className={`px-3 py-1 rounded shadow-md text-center ${darkMode ? 'bg-gray-700 text-gray-100' : 'bg-blue-800 text-white'}`}>
//                                                 <p className="text-sm font-medium">${payload[0].value.toLocaleString()}</p>
//                                             </div>
//                                         );
//                                     }
//                                     return null;
//                                 }}
//                             />
//                             <defs>
//                                 <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
//                                     <stop offset="50%" stopColor="#B0D5E8" stopOpacity={0.8} />
//                                     <stop offset="98%" stopColor="#B0D5E8" stopOpacity={0} />
//                                 </linearGradient>
//                             </defs>
//                             <Area
//                                 type="monotone"
//                                 dataKey="value"
//                                 stroke="#B0D5E8"
//                                 strokeWidth={2}
//                                 fill="url(#colorValue)"
//                                 dot={{ r: 4, fill: "#B0D5E8", strokeWidth: 0 }}
//                                 activeDot={{ r: 6, fill: "#B0D5E8", stroke: "#fff", strokeWidth: 2 }}
//                             />
//                         </AreaChart>
//                     </ResponsiveContainer>
//                 </div>
//             </div>
//             <div className='mt-10 shadow bg-white rounded-xl p-4'>
//                 <div className='flex justify-between pb-6 relative'>
//                     <p className='text-[28px] font-medium text-[#0077B6]'>Monthly Revenue</p>
//                     <div className='relative'>
//                         <button
//                             onClick={() => setIsOpen(!isOpenMonthly)}
//                             className='border border-[#0077B6] rounded-[10px] text-[#0077B6] py-1 px-8'
//                         >
//                             {selectedMonth}
//                         </button>
//                         {isOpenMonthly && (
//                             <div className='absolute right-0 mt-2 w-40 bg-white border border-[#0077B6] rounded-md shadow-md z-10'>
//                                 {months.map((month) => (
//                                     <div
//                                         key={month}
//                                         onClick={() => {
//                                             setSelectedMonth(month);
//                                             setIsOpenMonthly(false);
//                                         }}
//                                         className='px-4 py-2 hover:bg-[#0077B6] hover:text-white cursor-pointer'
//                                     >
//                                         {month}
//                                     </div>
//                                 ))}
//                             </div>
//                         )}
//                     </div>
//                 </div>
                
//                 {/* Added fixed height to the chart container */}
//                 <div className="h-[300px]">
//                    <ResponsiveContainer width="100%" height="100%">
//                                           <AreaChart
//                                               data={lineChartData}
//                                               margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
//                                           >
//                                               <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={darkMode ? "#4B5563" : "#E5E7EB"} />
//                                               <XAxis
//                                                   dataKey="name"
//                                                   axisLine={false}
//                                                   tickLine={false}
//                                                   tick={{ fontSize: 12, fill: darkMode ? "#D1D5DB" : "#6B7280" }}
//                                               />
//                                               <YAxis
//                                                   axisLine={false}
//                                                   tickLine={false}
//                                                   tick={{ fontSize: 12, fill: darkMode ? "#D1D5DB" : "#6B7280" }}
//                                                   tickFormatter={(value) => `${value / 1000}k`}
//                                               />
//                                               <Tooltip
//                                                   content={({ active, payload }) => {
//                                                       if (active && payload && payload.length) {
//                                                           return (
//                                                               <div className={`px-3 py-1 rounded shadow-md text-center ${darkMode ? 'bg-gray-700 text-gray-100' : 'bg-[#2088bd] text-white'}`}>
//                                                                   <p className="text-sm font-medium">${payload[0].value.toLocaleString()}</p>
//                                                               </div>
//                                                           );
//                                                       }
//                                                       return null;
//                                                   }}
//                                               />
//                                               <defs>
//                                                   <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
//                                                       <stop offset="50%" stopColor="#B0D5E8" stopOpacity={0.8} />
//                                                       <stop offset="98%" stopColor="#B0D5E8" stopOpacity={0} />
//                                                   </linearGradient>
//                                               </defs>
//                                               <Area
//                                                   type="monotone"
//                                                   dataKey="value"
//                                                   stroke="#B0D5E8"
//                                                   strokeWidth={2}
//                                                   fill="url(#colorValue)"
//                                                   dot={{ r: 4, fill: "#B0D5E8", strokeWidth: 0 }}
//                                                   activeDot={{ r: 6, fill: "#B0D5E8", stroke: "#fff", strokeWidth: 2 }}
//                                               />
//                                           </AreaChart>
//                                       </ResponsiveContainer>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AdminDashboard;


import React, { useState } from 'react';
import { FaUserFriends } from 'react-icons/fa';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { GoGraph } from 'react-icons/go';
import { PiChefHatFill } from 'react-icons/pi';
import { RiBox3Fill } from 'react-icons/ri';
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from 'recharts';

// Chart data with random values between 5000 and 30000
const lineChartData = [
    { name: 'Jan', value: 12640 },
    { name: 'Feb', value: 28950 },
    { name: 'Mar', value: 15870 },
    { name: 'Apr', value: 23980 },
    { name: 'May', value: 19420 },
    { name: 'Jun', value: 26890 },
    { name: 'Jul', value: 22110 },
    { name: 'Aug', value: 17550 },
    { name: 'Sep', value: 29300 },
    { name: 'Oct', value: 14730 },
    { name: 'Nov', value: 18020 },
    { name: 'Dec', value: 25560 },
];

const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

function AdminDashboard() {
    const [darkMode, setDarkMode] = useState(false);
    const [selectedMonthTotalUsers, setSelectedMonthTotalUsers] = useState('October');
    const [selectedMonthRevenue, setSelectedMonthRevenue] = useState('October');
    const [isOpenTotalUsers, setIsOpenTotalUsers] = useState(false);
    const [isOpenMonthlyRevenue, setIsOpenMonthlyRevenue] = useState(false);

    return (
        <div className="px-10 py-6">
            <h2 className="text-[34px] font-semibold text-[#0077B6] mb-1">Dashboard</h2>
            <p className="text-xl text-gray-500 mb-8">Welcome to your Culinary AI Platform admin dashboard</p>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    {
                        title: "Total AI Interactions",
                        value: "40,689",
                        icon: <PiChefHatFill className="text-[#0077B6] text-[25px]" />,
                        note: "+15",
                        subtext: "From last month"
                    },
                    {
                        title: "Active Subscribers",
                        value: "456",
                        icon: <FaUserFriends className="text-[#0077B6] text-[25px]" />,
                        note: "3%",
                        subtext: "From last month"
                    },
                    {
                        title: "Total Recipes",
                        value: "50",
                        icon: <RiBox3Fill className="text-[#0077B6] text-[25px]" />,
                        note: "3+",
                        subtext: "New this week"
                    },
                    {
                        title: "Monthly revenue",
                        value: "$4,569",
                        icon: <GoGraph className="text-[#0077B6] text-[25px]" />,
                        note: "10%",
                        subtext: "From last month"
                    }
                ].map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg space-y-4 border border-[#D9D9D9]">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-gray-500 text-sm">{item.title}</p>
                                <p className="text-[#0077B6] text-3xl font-bold">{item.value}</p>
                            </div>
                            <div className="bg-[#8280ff1c] px-4 py-2 rounded-full">
                                {item.icon}
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <div className="flex items-center gap-1 text-green-500">
                                <FaArrowTrendUp />
                                <span>{item.note}</span>
                            </div>
                            <span className="text-gray-500">{item.subtext}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Chart Section: Total Users */}
            <div className='mt-10 shadow bg-white rounded-xl p-4'>
                <div className='flex justify-between pb-6 relative'>
                    <p className='text-[28px] font-medium text-[#0077B6]'>Total Users</p>
                    <div className='relative'>
                        <button
                            onClick={() => setIsOpenTotalUsers(!isOpenTotalUsers)}
                            className='border border-[#0077B6] rounded-[10px] text-[#0077B6] py-1 px-8'
                        >
                            {selectedMonthTotalUsers}
                        </button>
                        {isOpenTotalUsers && (
                            <div className='absolute right-0 mt-2 w-40 bg-white border border-[#0077B6] rounded-md shadow-md z-10'>
                                {months.map((month) => (
                                    <div
                                        key={month}
                                        onClick={() => {
                                            setSelectedMonthTotalUsers(month);
                                            setIsOpenTotalUsers(false);
                                        }}
                                        className='px-4 py-2 hover:bg-[#0077B6] hover:text-white cursor-pointer'
                                    >
                                        {month}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={lineChartData}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={darkMode ? "#4B5563" : "#E5E7EB"} />
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12, fill: darkMode ? "#D1D5DB" : "#6B7280" }}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12, fill: darkMode ? "#D1D5DB" : "#6B7280" }}
                                tickFormatter={(value) => `${value / 1000}k`}
                            />
                            <Tooltip
                                content={({ active, payload }) => {
                                    if (active && payload && payload.length) {
                                        return (
                                            <div className={`px-3 py-1 rounded shadow-md text-center ${darkMode ? 'bg-gray-700 text-gray-100' : 'bg-blue-800 text-white'}`}>
                                                <p className="text-sm font-medium">{payload[0].value.toLocaleString()} users</p>
                                            </div>
                                        );
                                    }
                                    return null;
                                }}
                            />
                            <defs>
                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="50%" stopColor="#B0D5E8" stopOpacity={0.8} />
                                    <stop offset="98%" stopColor="#B0D5E8" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke="#B0D5E8"
                                strokeWidth={2}
                                fill="url(#colorValue)"
                                dot={{ r: 4, fill: "#B0D5E8", strokeWidth: 0 }}
                                activeDot={{ r: 6, fill: "#B0D5E8", stroke: "#fff", strokeWidth: 2 }}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Chart Section: Monthly Revenue */}
            <div className='mt-10 shadow bg-white rounded-xl p-4'>
                <div className='flex justify-between pb-6 relative'>
                    <p className='text-[28px] font-medium text-[#0077B6]'>Monthly Revenue</p>
                    <div className='relative'>
                        <button
                            onClick={() => setIsOpenMonthlyRevenue(!isOpenMonthlyRevenue)}
                            className='border border-[#0077B6] rounded-[10px] text-[#0077B6] py-1 px-8'
                        >
                            {selectedMonthRevenue}
                        </button>
                        {isOpenMonthlyRevenue && (
                            <div className='absolute right-0 mt-2 w-40 bg-white border border-[#0077B6] rounded-md shadow-md z-10'>
                                {months.map((month) => (
                                    <div
                                        key={month}
                                        onClick={() => {
                                            setSelectedMonthRevenue(month);
                                            setIsOpenMonthlyRevenue(false);
                                        }}
                                        className='px-4 py-2 hover:bg-[#0077B6] hover:text-white cursor-pointer'
                                    >
                                        {month}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={lineChartData}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={darkMode ? "#4B5563" : "#E5E7EB"} />
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12, fill: darkMode ? "#D1D5DB" : "#6B7280" }}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12, fill: darkMode ? "#D1D5DB" : "#6B7280" }}
                                tickFormatter={(value) => `${value / 1000}k`}
                            />
                            <Tooltip
                                content={({ active, payload }) => {
                                    if (active && payload && payload.length) {
                                        return (
                                            <div className={`px-3 py-1 rounded shadow-md text-center ${darkMode ? 'bg-gray-700 text-gray-100' : 'bg-[#2088bd] text-white'}`}>
                                                <p className="text-sm font-medium">${payload[0].value.toLocaleString()}</p>
                                            </div>
                                        );
                                    }
                                    return null;
                                }}
                            />
                            <defs>
                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="50%" stopColor="#B0D5E8" stopOpacity={0.8} />
                                    <stop offset="98%" stopColor="#B0D5E8" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke="#B0D5E8"
                                strokeWidth={2}
                                fill="url(#colorValue)"
                                dot={{ r: 4, fill: "#B0D5E8", strokeWidth: 0 }}
                                activeDot={{ r: 6, fill: "#B0D5E8", stroke: "#fff", strokeWidth: 2 }}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;