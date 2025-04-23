import React, { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';

function AdminDashboardSubscription() {
  const [tableData, setTableData] = useState([
    {
      id: 1,
      User: 'John Smith',
      Plan: 'Pro',
      Status: 'Active',
      Chef: 'Chef-Micro',
      'Start Date': 'Jan 16, 2025',
      'Next Billing': 'Jan 16, 2026',
    },
    {
      id: 2,
      User: 'John Smith',
      Plan: 'Basic',
      Status: 'Active',
      Chef: 'Chef-Micro',
      'Start Date': 'Jan 16, 2025',
      'Next Billing': 'Jan 16, 2026',
    },
    {
      id: 3,
      User: 'John Smith',
      Plan: 'Enterprise',
      Status: 'Active',
      Chef: 'Chef-Micro',
      'Start Date': 'Jan 16, 2025',
      'Next Billing': 'Jan 16, 2026',
    },
    {
      id: 4,
      User: 'John Smith',
      Plan: 'Pro',
      Status: 'Active',
      Chef: 'Chef-Micro',
      'Start Date': 'Jan 16, 2025',
      'Next Billing': 'Jan 16, 2026',
    },
    {
      id: 2,
      User: 'John Smith',
      Plan: 'Basic',
      Status: 'Active',
      Chef: 'Chef-Micro',
      'Start Date': 'Jan 16, 2025',
      'Next Billing': 'Jan 16, 2026',
    },
    {
      id: 3,
      User: 'John Smith',
      Plan: 'Enterprise',
      Status: 'Active',
      Chef: 'Chef-Micro',
      'Start Date': 'Jan 16, 2025',
      'Next Billing': 'Jan 16, 2026',
    },
    {
      id: 4,
      User: 'John Smith',
      Plan: 'Pro',
      Status: 'Active',
      Chef: 'Chef-Micro',
      'Start Date': 'Jan 16, 2025',
      'Next Billing': 'Jan 16, 2026',
    },
  ]);

  const handleDelete = (id) => {
    setTableData(tableData.filter((row) => row.id !== id));
  };

  return (
    <div className="px-10 py-6">

<h2 className="text-[34px] font-semibold text-[#0077B6] mb-1">Subscription Management</h2>
<p className="text-xl text-gray-500 mb-8">View and manage user subscriptions.</p>
      <table className="w-full  text-sm">
        {/* Table Header */}
        <thead>
          <tr className="bg-[#B0D5E8] text-left">
            <th className="p-3 font-semibold">User</th>
            <th className="p-3 font-semibold">Plan</th>
            <th className="p-3 font-semibold">Status</th>
            <th className="p-3 font-semibold">Chef</th>
            <th className="p-3 font-semibold">Start Date</th>
            <th className="p-3 font-semibold">Next Billing</th>
            <th className="p-3 font-semibold">Actions</th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {tableData.map((row, index) => (
            <tr
              key={row.id}
              className={`border-b border-[#E4E4E4] ${
                index === 1 ? '' : ''
              }`} // Highlight the second row
            >
              <td className="p-3 flex items-center space-x-2">
                {/* Avatar */}
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {row.User.charAt(0)}
                  </span>
                </div>
                <span>{row.User}</span>
              </td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    row.Plan === 'Pro'
                      ? 'bg-blue-200 text-blue-800'
                      : row.Plan === 'Basic'
                      ? 'bg-gray-200 text-gray-800'
                      : 'bg-purple-200 text-purple-800'
                  }`}
                >
                  {row.Plan}
                </span>
              </td>
              <td className="p-3">
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                  {row.Status}
                </span>
              </td>
              <td className="p-3">
                <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-semibold">
                  {row.Chef}
                </span>
              </td>
              <td className="p-3">{row['Start Date']}</td>
              <td className="p-3">{row['Next Billing']}</td>
              <td className="p-3">
                
               <RiDeleteBin6Line className='text-[#FF0000] border border-[#B0D5E8] rounded-[10px] flex justify-center items-center  size-10 p-2' />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboardSubscription;