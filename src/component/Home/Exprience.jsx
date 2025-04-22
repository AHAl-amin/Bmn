import React from 'react'

function Exprience() {
  return (
    <div className=" space-y-2 mt-[60px] ">
      {/* Expertise Header */}
      <h2 className="text-2xl font-bold text-[#004C3F]   pb-2">Expertise</h2>

   
      <div className="space-y-3  flex items-center gap-6 ">
        <div className="">

          <p className="font-medium text-[#004C3F] rounded-full px-3 py-1 bg-[#B0BFB6]">Exposure</p>
        </div>
        <div className="">

          <p className="font-medium text-[#004C3F] rounded-full px-3 py-1 bg-[#B0BFB6]">French Pastry</p>
        </div>
        <div className=" mb-2">

          <p className="font-medium text-[#004C3F] rounded-full px-3 py-1 bg-[#B0BFB6]">Desserts</p>
        </div>
      </div>

   
    

    
      <button className="w-full bg-[#004C3F] cursor-pointer text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200">
        Select This Chef
      </button>
    </div>
  )
}

export default Exprience