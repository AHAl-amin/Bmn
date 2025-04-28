import React from 'react'

function Exprience() {
  return (
    <div className=" space-y-2 mt-[60px] ">
      {/* Expertise Header */}
      <h2 className="text-2xl font-bold text-[#5B21BD]   pb-2">Expertise</h2>

   
      <div className="space-y-3  flex items-center gap-6 ">
        <div className="">

          <p className="font-medium text-[#5B21BD] rounded-full px-3 py-1 bg-[#EFE9F8]">Exposure</p>
        </div>
        <div className="">

          <p className="font-medium text-[#5B21BD] rounded-full px-3 py-1 bg-[#EFE9F8]">French Pastry</p>
        </div>
        <div className=" mb-2">

          <p className="font-medium text-[#5B21BD] rounded-full px-3 py-1 bg-[#EFE9F8]">Desserts</p>
        </div>
      </div>

   
    

    
      <button className="w-full bg-[#5B21BD] cursor-pointer text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200">
        Select This Chef
      </button>
    </div>
  )
}

export default Exprience