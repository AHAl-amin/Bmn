// import React from 'react'

// function Exprience() {
//   return (
//     <div className=" space-y-2 mt-[60px] ">
//       {/* Expertise Header */}
//       <h2 className="text-2xl font-bold text-[#5B21BD]   pb-2">Expertise</h2>

   
//       <div className="space-y-3  flex items-center gap-6 ">
//         <div className="">

//           <p className="font-medium text-[#5B21BD] rounded-full px-3 py-1 bg-[#EFE9F8]">Exposure</p>
//         </div>
//         <div className="">

//           <p className="font-medium text-[#5B21BD] rounded-full px-3 py-1 bg-[#EFE9F8]">French Pastry</p>
//         </div>
//         <div className=" mb-2">

//           <p className="font-medium text-[#5B21BD] rounded-full px-3 py-1 bg-[#EFE9F8]">Desserts</p>
//         </div>
//       </div>

   
    

    
//       <div className=''>
//         <button 
//           onClick={openModal}
//           className="w-full bg-[#5B21BD] border mt-2 cursor-pointer text-white font-bold py-3 px-4 rounded-[10px] transition-colors duration-200"
//         >
//           Select This Chef
//         </button>
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-[#5B21BDCC] bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg h-11/12  w-4/6">
           
//             <div className="flex space-x-4 p-2">
             
//               <button 
//                 onClick={() => {
//                   // Add your confirmation logic here
//                   closeModal();
//                 }}
//                 className="px-6 py-2 bg-[#5B21BD] text-white rounded-[10px] hover:bg-[#5B21BD] transition-colors cursor-pointer duration-200"
//               >
//                 Back
//               </button>
//             </div>

//             <Subscribsion/>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Exprience

import React, { useState } from 'react';
import Subscribsion from './Subscribsion';
function Experience() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Placeholder for Subscription component (replace with actual import or component)
  const Subscription = () => (
    <div className="p-4">
      <h3 className="text-lg font-bold">Subscription Details</h3>
      <p>Replace this with your actual Subscription component content.</p>
    </div>
  );

  return (
    <div className="space-y-2 mt-[60px]">
      {/* Expertise Header */}
      <h2 className="text-2xl font-bold text-[#5B21BD] pb-2">Expertise</h2>

      <div className="space-y-3 flex items-center gap-6">
        <div>
          <p className="font-medium text-[#5B21BD] rounded-full px-3 py-1 bg-[#EFE9F8]">Exposure</p>
        </div>
        <div>
          <p className="font-medium text-[#5B21BD] rounded-full px-3 py-1 bg-[#EFE9F8]">French Pastry</p>
        </div>
        <div>
          <p className="font-medium text-[#5B21BD] rounded-full px-3 py-1 bg-[#EFE9F8]">Desserts</p>
        </div>
      </div>

      <div>
        <button
          onClick={openModal}
          className="w-full bg-[#5B21BD] border mt-2 cursor-pointer text-white font-bold py-3 px-4 rounded-[10px] transition-colors duration-200"
        >
          Select This Chef
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-[#5B21BDCC] bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg h-11/12  w-4/6">
            <div className="flex justify-end p-2">
              <button
                onClick={closeModal}
                className="px-6 py-2 bg-[#5B21BD] text-white rounded-[10px] hover:bg-[#4A1A9C] transition-colors cursor-pointer duration-200"
              >
                Back
              </button>
            </div>
            <Subscribsion/>
          </div>
        </div>
      )}
    </div>
  );
}

export default Experience;