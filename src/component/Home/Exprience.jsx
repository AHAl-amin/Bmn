import React from 'react'

function Exprience() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
  {/* Expertise Header */}
  <h2 className="text-2xl font-bold text-[#004C3F] mb-4 border-b pb-2">Expertise</h2>
  
  {/* Expertise List */}
  <div className="space-y-3 mb-6">
    <div className="flex items-center">
      <div className="w-2 h-2 bg-[#004C3F] rounded-full mr-3"></div>
      <span className="font-medium text-gray-700">Exposure</span>
    </div>
    <div className="flex items-center">
      <div className="w-2 h-2 bg-[#004C3F] rounded-full mr-3"></div>
      <span className="font-medium text-gray-700">French Pastry</span>
    </div>
    <div className="flex items-center">
      <div className="w-2 h-2 bg-[#004C3F] rounded-full mr-3"></div>
      <span className="font-medium text-gray-700">Desserts</span>
    </div>
  </div>

  {/* Divider */}
  <div className="border-t border-gray-200 my-4"></div>

  {/* Select Button */}
  <button className="w-full bg-[#004C3F] hover:bg-[#00382D] text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200">
    Select This Chef
  </button>
</div>
  )
}

export default Exprience