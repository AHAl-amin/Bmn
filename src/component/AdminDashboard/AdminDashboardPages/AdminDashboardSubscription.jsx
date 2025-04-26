


import React, { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';

function AdminDashboardSubscription() {
  const [tableData, setTableData] = useState([
    {
      id: 1,
      User: 'John Smith',
      email: 'john.smith@example.com',
      img: 'https://i.ibb.co.com/60hvPZRS/bannerimg-01.png',
      Plan: 'Pro',
      Status: 'Active',
      Chef: 'Chef-Micro',
      'Start Date': 'Jan 16, 2025',
      'Next Billing': 'Jan 16, 2026',
    },
    {
      id: 2,
      User: 'John Smith',
      email: 'john.smith2@example.com',
      img: 'https://i.ibb.co.com/60hvPZRS/bannerimg-01.png',
      Plan: 'Basic',
      Status: 'Active',
      Chef: 'Chef-Micro',
      'Start Date': 'Jan 16, 2025',
      'Next Billing': 'Jan 16, 2026',
    },
    {
      id: 3,
      User: 'John Smith',
      email: 'john.smith3@example.com',
      img: 'https://i.ibb.co.com/60hvPZRS/bannerimg-01.png',
      Plan: 'Enterprise',
      Status: 'Active',
      Chef: 'Chef-Micro',
      'Start Date': 'Jan 16, 2025',
      'Next Billing': 'Jan 16, 2026',
    },
    {
      id: 4,
      User: 'John Smith',
      email: 'john.smith4@example.com',
      img: 'https://i.ibb.co.com/60hvPZRS/bannerimg-01.png',
      Plan: 'Pro',
      Status: 'Active',
      Chef: 'Chef-Micro',
      'Start Date': 'Jan 16, 2025',
      'Next Billing': 'Jan 16, 2026',
    },
    {
      id: 5,
      User: 'John Smith',
      email: 'john.smith5@example.com',
      img: 'https://i.ibb.co.com/60hvPZRS/bannerimg-01.png',
      Plan: 'Basic',
      Status: 'Active',
      Chef: 'Chef-Micro',
      'Start Date': 'Jan 16, 2025',
      'Next Billing': 'Jan 16, 2026',
    },
    {
      id: 6,
      User: 'John Smith',
      email: 'john.smith6@example.com',
      img: 'https://i.ibb.co.com/60hvPZRS/bannerimg-01.png',
      Plan: 'Enterprise',
      Status: 'Active',
      Chef: 'Chef-Micro',
      'Start Date': 'Jan 16, 2025',
      'Next Billing': 'Jan 16, 2026',
    },
    {
      id: 7,
      User: 'John Smith',
      email: 'john.smith7@example.com',
      img: 'https://i.ibb.co.com/60hvPZRS/bannerimg-01.png',
      Plan: 'Pro',
      Status: 'Active',
      Chef: 'Chef-Micro',
      'Start Date': 'Jan 16, 2025',
      'Next Billing': 'Jan 16, 2026',
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    setTableData(tableData.filter((row) => row.id !== selectedId));
    setIsModalOpen(false);
    setSelectedId(null);
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false);
    setSelectedId(null);
  };

  return (
    <div className="px-10 py-6">
      <h2 className="text-[34px] font-semibold text-[#0077B6] mb-1">Subscription Management</h2>
      <p className="text-xl text-gray-500 mb-8">View and manage user subscriptions.</p>
      <table className="w-full text-sm">
        {/* Table Header */}
        <thead>
          <tr className="bg-[#B0D5E8] text-left">
            <th className="p-3 pl-10 font-semibold">User</th>
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
              className={`border-b border-[#E4E4E4] ${index === 1 ? '' : ''}`}
            >
              <td className="p-3 flex items-center">
                <div className="flex">
                  <div className="w-8 h-8 rounded-full">
                    <img
                      src={row.img}
                      alt={row.User}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  </div>
                  <div className="ml-3">
                    <p>{row.User}</p>
                    <p>{row.email}</p>
                  </div>
                </div>
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
                <button onClick={() => handleDeleteClick(row.id)}>
                  <RiDeleteBin6Line className="text-[#FF0000] border border-[#B0D5E8] rounded-[10px] flex justify-center items-center size-10 p-2" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Delete Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur bg-opacity-50 flex items-center justify-center z-100">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Confirm Deletion
            </h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this subscription? This action cannot
              be undone.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCancelDelete}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminDashboardSubscription;