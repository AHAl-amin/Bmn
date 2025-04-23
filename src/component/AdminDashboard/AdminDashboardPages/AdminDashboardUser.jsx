import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri';

function AdminDashboardUser() {

    const userData = [
        {
          user: { name: "John Smith", email: "p13231233@gmail.com" },
          subscribed_to: "Chef Mario",
          status: "Active",
          join_date: "Jan 15, 2025",
          plan: "Premium"
        },
        {
          user: { name: "John Smith", email: "p13231233@gmail.com" },
          subscribed_to: "Chef Mario",
          status: "Active",
          join_date: "Jan 15, 2025",
          plan: "Premium"
        },
        {
          user: { name: "John Smith", email: "p13231233@gmail.com" },
          subscribed_to: "Chef Mario",
          status: "Active",
          join_date: "Jan 15, 2025",
          plan: "Basic"
        },
        {
          user: { name: "John Smith", email: "p13231233@gmail.com" },
          subscribed_to: "Chef Mario",
          status: "Active",
          join_date: "Jan 15, 2025",
          plan: "Premium"
        },
        {
          user: { name: "John Smith", email: "p13231233@gmail.com" },
          subscribed_to: "Chef Mario",
          status: "Active",
          join_date: "Jan 15, 2025",
          plan: "Premium"
        },
        {
          user: { name: "John Smith", email: "p13231233@gmail.com" },
          subscribed_to: "Chef Mario",
          status: "Active",
          join_date: "Jan 15, 2025",
          plan: "Basic"
        }
      ];
  return (
    <div>
        <div className="px-10 py-6 ">
        <h2 className="text-[34px] font-semibold text-[#0077B6] mb-1">All users</h2>
        <p className="text-xl text-gray-500 mb-8">Manage end users and their subscriptions</p>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-100 text-gray-700">
                <th className="py-2 px-4 text-left">User</th>
                <th className="py-2 px-4 text-left">Subscribed To</th>
                <th className="py-2 px-4 text-left">Status</th>
                <th className="py-2 px-4 text-left">Join Date</th>
                <th className="py-2 px-4 text-left">Plan</th>
                <th className="py-2 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((row, index) => (
                <tr key={index} className="border-b border-[#E4E4E4]">
                  <td className="py-2 px-4 flex items-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
                    <div>
                      <div className="font-semibold">{row.user.name}</div>
                      <div className="text-gray-500 text-sm">{row.user.email}</div>
                    </div>
                  </td>
                  <td className="py-2 px-4">{row.subscribed_to}</td>
                  <td className="py-2 px-4">
                    <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                      {row.status}
                    </span>
                  </td>
                  <td className="py-2 px-4">{row.join_date}</td>
                  <td className="py-2 px-4">
                    <span className={`inline-block px-2 py-1 rounded text-sm ${
                      row.plan === "Premium" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
                    }`}>
                      {row.plan}
                    </span>
                  </td>
                  <td className="py-2 px-4 text-gray-500">
                     <RiDeleteBin6Line className='text-[#FF0000] border border-[#B0D5E8] rounded-[10px] flex justify-center items-center  size-10 p-2' />
                     </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default AdminDashboardUser