

// import { useState } from 'react';
// import img from '../../../assets/image/cercalImg.png'; // Single icon for all steps

// const AiTraining = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [selectedOption, setSelectedOption] = useState('');
//   const [files, setFiles] = useState([]);
//   const [formData, setFormData] = useState({
//     fileTitle: '',
//     categoryType: '',
//     menuOption: ''
//   });

//   const totalSteps = 4;

//   const nextStep = () => {
//     if (currentStep < totalSteps) {
//       setCurrentStep(currentStep + 1);
//       console.log('Current Step:', currentStep + 1);
//     }
//   };

//   const prevStep = () => {
//     if (currentStep > 1) {
//       setCurrentStep(currentStep - 1);
//       console.log('Current Step:', currentStep - 1);
//     }
//   };

//   const handleFileChange = (e) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setFiles(Array.from(e.target.files));
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const submitForm = () => {
//     console.log('Form submitted:', { selectedOption, files, formData });
//     alert('Form submitted successfully!');
//   };

//   const getStepImage = () => {
//     return img; // Always return the same icon for all steps
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-8 px-4">
//       <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
//         {/* Progress Steps */}
//         <div className="relative mb-8">
//           <div className="flex justify-between relative">
//             {/* Progress Bar */}
//             <div
//               className="absolute top-1/2 left-0 h-1 bg-blue-500 z-10 transition-all duration-300"
//               style={{
//                 width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`,
//                 transform: 'translateY(-50%)'
//               }}
//             ></div>
//             <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2"></div>

//             {/* Steps with Images and Numbers */}
//             {[1, 2, 3, 4].map((step) => (
//               <div key={step} className="relative z-50">
//                 <div className={`relative w-10 h-10 mx-auto mb-2 ${currentStep >= step ? 'bg-blue-100  rounded-full' : ''}`}>
//                   {console.log('Step:', step, 'Current Step:', currentStep, 'Is Active:', currentStep >= step)}
//                   <img
//                     src={getStepImage()}
//                     alt={`Step ${step}`}
//                     className={`w-10 h-10 ${currentStep >= step ? 'text-blue-500' : 'opacity-50'}`}
//                   />
//                   <span
//                     className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold
//                       ${currentStep >= step ? 'text-white' : 'text-gray-500'}`}
//                   >
//                     {step}
//                   </span>
//                 </div>
//                 <div
//                   className={`text-xs text-center 
//                     ${currentStep >= step ? 'text-blue-600  font-medium' : 'text-gray-500'}`}
//                 >
//                   {step === 1 && 'Select Type'}
//                   {step === 2 && 'Upload Files'}
//                   {step === 3 && 'Add Metadata'}
//                   {step === 4 && 'Review & Confirm'}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Step Content */}
//         {currentStep === 1 && (
//           <div>
//             <h2 className="text-xl font-bold mb-4">Select Content Type</h2>
//             <p className="mb-6 text-gray-600">
//               Choose This Option of Content Key. Write To Update it in Form for A Vendor.
//             </p>

//             <div className="space-y-3 mb-6">
//               {['Create Menu', 'Check Menu', 'Offers Materials', 'OK ON THE KEY'].map((option) => (
//                 <div
//                   key={option}
//                   className={`p-4 border rounded cursor-pointer transition-all
//                     ${selectedOption === option ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
//                   onClick={() => {
//                     setSelectedOption(option);
//                     console.log('Selected Option:', option);
//                   }}
//                 >
//                   <h3 className="font-medium">{option}</h3>
//                 </div>
//               ))}
//             </div>

//             <div className="flex justify-between mt-8">
//               <button
//                 className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50"
//                 disabled
//               >
//                 Back
//               </button>
//               <button
//                 className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
//                 onClick={nextStep}
//                 disabled={!selectedOption}
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         )}

//         {currentStep === 2 && (
//           <div>
//             <h2 className="text-xl font-bold mb-4">Upload Files</h2>
//             <p className="mb-6 text-gray-600">Drag & Drop Files Here</p>

//             <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
//               <input
//                 type="file"
//                 id="file-upload"
//                 className="hidden"
//                 multiple
//                 onChange={handleFileChange}
//               />
//               <label htmlFor="file-upload" className="cursor-pointer block">
//                 <p className="mb-4">Drag & Drop Files Here</p>
//                 <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
//                   Browse Files
//                 </button>
//               </label>
//             </div>

//             {files.length > 0 && (
//               <div className="mb-6">
//                 <p className="text-sm text-gray-600 mb-2">{files.length} file(s) selected</p>
//               </div>
//             )}

//             <div className="flex justify-between mt-8">
//               <button
//                 className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
//                 onClick={prevStep}
//               >
//                 Back
//               </button>
//               <button
//                 className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
//                 onClick={nextStep}
//                 disabled={files.length === 0}
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         )}

//         {currentStep === 3 && (
//           <div>
//             <h2 className="text-xl font-bold mb-4">Add Metadata & Categorize</h2>
//             <p className="mb-6 text-gray-600">
//               Add Details to Your Uploaded Files to Help the AI Understand and Organize Your Content.
//             </p>

//             <div className="space-y-4 mb-6">
//               <div>
//                 <label className="block text-gray-700 mb-2">File Title</label>
//                 <input
//                   type="text"
//                   name="fileTitle"
//                   value={formData.fileTitle}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
//                   placeholder="Enter file title"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 mb-2">Category Type</label>
//                 <input
//                   type="text"
//                   name="categoryType"
//                   value={formData.categoryType}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
//                   placeholder="Enter category type"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 mb-2">Menu Option</label>
//                 <input
//                   type="text"
//                   name="menuOption"
//                   value={formData.menuOption}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
//                   placeholder="Enter menu option"
//                 />
//               </div>
//             </div>

//             <div className="flex justify-between mt-8">
//               <button
//                 className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
//                 onClick={prevStep}
//               >
//                 Back
//               </button>
//               <button
//                 className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//                 onClick={nextStep}
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         )}

//         {currentStep === 4 && (
//           <div>
//             <h2 className="text-xl font-bold mb-4">Review & Confirm</h2>
//             <p className="mb-6 text-gray-600">
//               Review the Information Provided Before Submitting.
//             </p>

//             <div className="bg-gray-50 p-4 rounded-lg mb-6">
//               <h3 className="font-semibold mb-2">Summary:</h3>
//               <p className="text-sm mb-1"><span className="font-medium">Selected Option:</span> {selectedOption}</p>
//               <p className="text-sm mb-1"><span className="font-medium">Files:</span> {files.length} file(s)</p>
//               <p className="text-sm mb-1"><span className="font-medium">File Title:</span> {formData.fileTitle || 'Not specified'}</p>
//               <p className="text-sm mb-1"><span className="font-medium">Category Type:</span> {formData.categoryType || 'Not specified'}</p>
//               <p className="text-sm"><span className="font-medium">Menu Option:</span> {formData.menuOption || 'Not specified'}</p>
//             </div>

//             <div className="flex justify-between mt-8">
//               <button
//                 className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
//                 onClick={prevStep}
//               >
//                 Back
//               </button>
//               <button
//                 className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//                 onClick={submitForm}
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AiTraining;

import { useState } from 'react';
import img from '../../../assets/image/cercalImg.png'; // Single icon for all steps

const AiTraining = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState('');
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    fileTitle: '',
    categoryType: '',
    menuOption: ''
  });

  const totalSteps = 4;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      console.log('Current Step:', currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      console.log('Current Step:', currentStep - 1);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const submitForm = () => {
    console.log('Form submitted:', { selectedOption, files, formData });
    alert('Form submitted successfully!');
  };

  const getStepImage = () => {
    return img; // Always return the same icon for all steps
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        {/* Progress Steps */}
        <div className="relative mb-8">
          <div className="flex justify-between relative">
            {/* Progress Bar */}
            <div
              className="absolute top-1/2 left-0 h-1 bg-blue-500 z-10 transition-all duration-300"
              style={{
                width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`,
                transform: 'translateY(-50%)'
              }}
            ></div>
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2"></div>

            {/* Steps with Images and Numbers */}
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="relative z-50">
                <div className={`relative w-8 h-8 mx-auto mb-2 ${currentStep >= step ? 'bg-blue-100 rounded-full' : ''}`}>
                  {console.log('Step:', step, 'Current Step:', currentStep, 'Is Active:', currentStep >= step)}
                  <img
                    src={getStepImage()}
                    alt={`Step ${step}`}
                    className={`w-8 h-8 ${currentStep >= step ? 'opacity-100 filter-blue' : 'opacity-50'}`}
                  />
                  <span
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold
                      ${currentStep >= step ? 'text-white' : 'text-gray-500'}`}
                  >
                    {step}
                  </span>
                </div>
                <div
                  className={`text-xs text-center 
                    ${currentStep >= step ? 'text-blue-600 font-medium' : 'text-gray-500'}`}
                >
                  {step === 1 && 'Select Type'}
                  {step === 2 && 'Upload Files'}
                  {step === 3 && 'Add Metadata'}
                  {step === 4 && 'Review & Confirm'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        {currentStep === 1 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Select Content Type</h2>
            <p className="mb-6 text-gray-600">
              Choose This Option of Content Key. Write To Update it in Form for A Vendor.
            </p>

            <div className="space-y-3 mb-6">
              {['Create Menu', 'Check Menu', 'Offers Materials', 'OK ON THE KEY'].map((option) => (
                <div
                  key={option}
                  className={`p-4 border rounded cursor-pointer transition-all
                    ${selectedOption === option ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                  onClick={() => {
                    setSelectedOption(option);
                    console.log('Selected Option:', option);
                  }}
                >
                  <h3 className="font-medium">{option}</h3>
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-8">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50"
                disabled
              >
                Back
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                onClick={nextStep}
                disabled={!selectedOption}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Upload Files</h2>
            <p className="mb-6 text-gray-600">Drag & Drop Files Here</p>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
              <input
                type="file"
                id="file-upload"
                className="hidden"
                multiple
                onChange={handleFileChange}
              />
              <label htmlFor="file-upload" className="cursor-pointer block">
                <p className="mb-4">Drag & Drop Files Here</p>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Browse Files
                </button>
              </label>
            </div>

            {files.length > 0 && (
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-2">{files.length} file(s) selected</p>
              </div>
            )}

            <div className="flex justify-between mt-8">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                onClick={prevStep}
              >
                Back
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                onClick={nextStep}
                disabled={files.length === 0}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Add Metadata & Categorize</h2>
            <p className="mb-6 text-gray-600">
              Add Details to Your Uploaded Files to Help the AI Understand and Organize Your Content.
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-gray-700 mb-2">File Title</label>
                <input
                  type="text"
                  name="fileTitle"
                  value={formData.fileTitle}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter file title"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Category Type</label>
                <input
                  type="text"
                  name="categoryType"
                  value={formData.categoryType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter category type"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Menu Option</label>
                <input
                  type="text"
                  name="menuOption"
                  value={formData.menuOption}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter menu option"
                />
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                onClick={prevStep}
              >
                Back
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Review & Confirm</h2>
            <p className="mb-6 text-gray-600">
              Review the Information Provided Before Submitting.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold mb-2">Summary:</h3>
              <p className="text-sm mb-1"><span className="font-medium">Selected Option:</span> {selectedOption}</p>
              <p className="text-sm mb-1"><span className="font-medium">Files:</span> {files.length} file(s)</p>
              <p className="text-sm mb-1"><span className="font-medium">File Title:</span> {formData.fileTitle || 'Not specified'}</p>
              <p className="text-sm mb-1"><span className="font-medium">Category Type:</span> {formData.categoryType || 'Not specified'}</p>
              <p className="text-sm"><span className="font-medium">Menu Option:</span> {formData.menuOption || 'Not specified'}</p>
            </div>

            <div className="flex justify-between mt-8">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                onClick={prevStep}
              >
                Back
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={submitForm}
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AiTraining;