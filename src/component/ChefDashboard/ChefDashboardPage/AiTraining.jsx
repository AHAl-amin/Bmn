


// import { useState } from 'react';
// import img from '../../../assets/image/cercalImg.png';
// import { IoEyeOutline } from 'react-icons/io5';
// import { SiVerizon } from 'react-icons/si';
// import { useAiTrainingMutation } from '../../../Rudux/feature/ApiSlice'; 

// const AiTraining = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [maxStepReached, setMaxStepReached] = useState(1);
//   const [selectedOption, setSelectedOption] = useState('');
//   const [files, setFiles] = useState([]);
//   const [formData, setFormData] = useState({
//     fileTitle: '',
//     categoryType: '',
//     tags: '',
//   });
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isDragging, setIsDragging] = useState(false);

//   // Use the mutation hook
//   const [aiTraining, { isLoading, isSuccess, isError, error }] = useAiTrainingMutation();

//   const totalSteps = 4;

//   const nextStep = () => {
//     if (currentStep < totalSteps) {
//       setCurrentStep(currentStep + 1);
//       setMaxStepReached(Math.max(maxStepReached, currentStep + 1));
//     }
//   };

//   const prevStep = () => {
//     if (currentStep > 1) {
//       setCurrentStep(currentStep - 1);
//       setMaxStepReached(Math.max(1, maxStepReached - 1));
//     }
//   };

//   const handleFileChange = (e) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setFiles(Array.from(e.target.files));
//     }
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     setIsDragging(false);
//     if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
//       setFiles(Array.from(e.dataTransfer.files));
//     }
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     setIsDragging(true);
//   };

//   const handleDragEnter = (e) => {
//     e.preventDefault();
//     setIsDragging(true);
//   };

//   const handleDragLeave = (e) => {
//     e.preventDefault();
//     setIsDragging(false);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };



//   const submitForm = async () => {
//   const formDataToSend = new FormData();
//   formDataToSend.append('content_type', selectedOption);
//   formDataToSend.append('file_title', formData.fileTitle);
//   formDataToSend.append('category_type', formData.categoryType);
//   formDataToSend.append('tags', formData.tags);

//   files.forEach((file) => {
//     formDataToSend.append('files', file);
//   });

//   console.log('Form submitted:');
//   for (let [key, value] of formDataToSend.entries()) {
//     console.log(`${key}:`, value);
//   }

//   try {
//     await aiTraining(formDataToSend).unwrap();
//     setIsModalOpen(true);
//   } catch (err) {
//     console.error('Failed to submit:', err);
//   }
// };


//   const resetForm = () => {
//     setCurrentStep(4);
//     setSelectedOption('');
//     setFiles([]);
//     setFormData({
//       fileTitle: '',
//       categoryType: '',
//       tags: '',
//     });
//     setIsModalOpen(false);
//   };

//   const getStepImage = () => img;

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//     nextStep();
//   };

//   const isStep3Valid = () =>
//     formData.fileTitle.trim() !== '' &&
//     formData.categoryType.trim() !== '' &&
//     formData.tags.trim() !== '';

//   return (
//     <div className="">
//       <div className="rounded-lg p-6 px-14 lora">
//         <h1 className="text-[34px] text-[#5B21BD]">AI Training</h1>
//         <p className="text-[#9E9E9E] text-xl mb-4">Upload and manage your culinary content</p>

//         {/* Progress Steps */}
//         <div className="relative mb-8 px-6">
//           <div className="flex justify-between relative">
//             <div
//               className="absolute bottom-14 left-0 h-1 bg-[#5B21BD] z-10 transition-all duration-300"
//               style={{
//                 width: `${((maxStepReached - 1) / (totalSteps - 1)) * 100}%`,
//                 transform: 'translateY(-50%)',
//               }}
//             ></div>
//             <div className="absolute bottom-14 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2"></div>

//             {[1, 2, 3, 4].map((step) => (
//               <div key={step} className="relative z-10">
//                 <div
//                   className={`relative w-14 h-14 mx-auto mb-2 ${
//                     maxStepReached >= step ? 'bg-[#5B21BD] rounded-full' : ''
//                   }`}
//                 >
//                   <img
//                     src={getStepImage()}
//                     alt={`Step ${step}`}
//                     className={`w-14 h-14 ${maxStepReached >= step ? 'opacity-100 filter-blue' : 'opacity-50'}`}
//                   />
//                   <span
//                     className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold
//                       ${maxStepReached >= step ? 'text-white' : 'text-gray-500'}`}
//                   >
//                     {step}
//                   </span>
//                 </div>
//                 <div
//                   className={`text-[18px] font-bold text-center 
//                     ${maxStepReached >= step ? 'text-[#5B21BD] font-bold' : 'text-gray-500'}`}
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
//           <div className="border rounded-xl p-10 bg-[#FFFFFF] border-[#EFE9F8]">
//             <h2 className="text-xl text-[#5B21BD] font-bold mb-4">Select Content Type</h2>
//             <p className="mb-6 text-[#9E9E9E]">
//               Choose the type of content key. Write to update it in form for a vendor.
//             </p>
//             <div className="space-y-3 mb-6 flex justify-between text-center text-[20px] font-semibold text-[#5B21BD]">
//               {['recipes', 'calculators', 'other materials'].map((option) => (
//                 <div
//                   key={option}
//                   className={`p-4 border rounded cursor-pointer transition-all w-full ml-10 h-full
//                     ${selectedOption === option ? 'border-[#5B21BD] bg-blue-50' : 'border-gray-200 '}`}
//                   onClick={() => handleOptionClick(option)}
//                 >
//                   <h3 className="font-medium">{option}</h3>
//                   <p className="text-sm text-gray-600 mt-1 text-center">
//                     {option === 'recipes' && 'Upload PDF or Word documents with your detailed recipes.'}
//                     {option === 'calculators' && 'Upload Excel spreadsheets with ingredient ratios and formulas.'}
//                     {option === 'other materials' && 'Upload any other training materials for your AI model.'}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {currentStep === 2 && (
//           <div className="border border-[#5B21BD] p-10 rounded-xl bg-[#FFFFFF]">
//             <h2 className="text-xl text-[#5B21BD] font-bold mb-4">Upload Files</h2>
//             <p className="mb-6 text-[#9E9E9E]">
//               Drag and drop your files or click to browse. We accept PDF, DOC, DOCX, XLS, and XLSX files up to 50MB.
//             </p>
//             <div
//               className={`border-2 border-dashed rounded-lg p-8 h-[250px] text-center mb-6 transition-all
//                 ${isDragging ? 'border-[#5B21BD] bg-blue-50' : 'border-[#5B21BD]'}`}
//               onDragOver={handleDragOver}
//               onDragEnter={handleDragEnter}
//               onDragLeave={handleDragLeave}
//               onDrop={handleDrop}
//             >
//               <input
//                 type="file"
//                 id="file-upload"
//                 className="hidden"
//                 multiple
//                 accept=".pdf,.doc,.docx,.xls,.xlsx"
//                 onChange={handleFileChange}
//               />
//               <label
//                 htmlFor="file-upload"
//                 className="cursor-pointer flex flex-col items-center justify-center h-full"
//               >
//                 <p className="mb-4 text-gray-600">
//                   {isDragging ? 'Drop Files Here' : 'Drag & Drop Files Here or Click to Browse'}
//                 </p>
//                 <button
//                   type="button"
//                   className="px-4 py-2 bg-[#5B21BD] text-white rounded "
//                   onClick={() => document.getElementById('file-upload').click()}
//                 >
//                   Browse Files
//                 </button>
//               </label>
//             </div>
//             {files.length > 0 && (
//               <div className="mb-6">
//                 <p className="text-sm text-gray-600 mb-2">{files.length} file(s) selected:</p>
//                 <ul className="text-sm text-gray-600">
//                   {files.map((file, index) => (
//                     <li key={index}>{file.name}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//             <div className="flex justify-between mt-8">
//               <button
//                 className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
//                 onClick={prevStep}
//               >
//                 Previous
//               </button>
//               <button
//                 className="px-4 py-2 bg-[#5B21BD] text-white rounded disabled:opacity-50"
//                 onClick={nextStep}
//                 disabled={files.length === 0}
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         )}

//         {currentStep === 3 && (
//           <div className="p-6 bg-white rounded-lg border border-gray-200">
//             <h2 className="text-4xl font-bold text-[#5B21BD] mb-2">Add Metadata & Categorize</h2>
//             <p className="text-sm text-gray-500 mb-6">
//               Add details to your uploaded files to help the AI understand and organize your content.
//             </p>
//             <div className="flex w-full gap-6">
//               <div className="mb-4 md:w-1/2">
//                 <label className="block text-xl font-medium text-[#5B21BD] mb-1">File Title</label>
//                 <input
//                   type="text"
//                   name="fileTitle"
//                   value={formData.fileTitle}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border border-[#CCBAEB] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   placeholder="Enter file title"
//                 />
//               </div>
//               <div className="mb-4 md:w-1/2">
//                 <label className="block text-xl font-medium text-[#5B21BD] mb-1">Category/Type</label>
//                 <select
//                   name="categoryType"
//                   value={formData.categoryType}
//                   onChange={handleInputChange}
//                   className="w-full p-2 py-3 border text-[#999999] border-[#CCBAEB] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 >
//                   <option value="" className="text-[#999999]">
//                     Select Category
//                   </option>
//                   <option value="Chocolate souffle">Chocolate souffle</option>
//                   <option value="Vanilla cake">Vanilla cake</option>
//                   <option value="Lemon tart">Lemon tart</option>
//                 </select>
//               </div>
//             </div>
//             <div className="mb-6">
//               <label className="block text-xl font-medium text-[#5B21BD] mb-1">Tags (Comma separated)</label>
//               <input
//                 type="text"
//                 name="tags"
//                 value={formData.tags}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border border-[#CCBAEB] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 placeholder="Enter tags (comma separated)"
//               />
//             </div>
//             <div className="flex justify-between mt-8">
//               <button
//                 className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
//                 onClick={prevStep}
//               >
//                 Previous
//               </button>
//               <button
//                 className="px-4 py-2 bg-[#5B21BD] text-white rounded disabled:opacity-50"
//                 onClick={nextStep}
//                 disabled={!isStep3Valid()}
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         )}

//         {currentStep === 4 && (
//           <div className="mt-8 bg-white rounded-xl border border-[#EFE9F8] lora p-10   p-10">
//             <h2 className="text-lg font-bold text-gray-800">Review & Confirm</h2>
//             <p className="text-sm text-gray-500 mt-1">
//               Review your uploaded files and metadata before submitting them for AI training.
//             </p>
//             <hr className="text-[#EFE9F8] mt-2" />
//             <div className="mt-4">
//               <div className="grid grid-cols-6 gap-4 p-3 bg-[#EFE9F8] text-[#5B21BD] text-sm font-semibold">
//                 <div>File name</div>
//                 <div>Title</div>
//                 <div>Category</div>
//                 <div>Tags</div>
//                 <div>Status</div>
//                 <div>Preview</div>
//               </div>
//               <div className="grid grid-cols-6 gap-4 p-3 border border-[#E4E4E4] text-sm">
//                 <div>{files[0]?.name || 'chocolate-souffle.pdf'}</div>
//                 <div>{formData.fileTitle || 'Chocolate Soufflé'}</div>
//                 <div>{formData.categoryType || 'Dessert'}</div>
//                 <div className="flex gap-1 ">
//                   {formData.tags ? (
//                     formData.tags.split(',').map((tag, index) => (
//                       <span
//                         key={index}
//                         className=" text-[#4a90e2] rounded-full  text-xs"
//                       >
//                         {tag.trim()}
//                       </span>
//                     ))
//                   ) : (
//                     <span className="text-gray-500">No tags</span>
//                   )}
//                 </div>
//                 <div>
//                   <span className="bg-[#28a745] text-white rounded-full px-2 py-1 text-xs">
//                     Ready
//                   </span>
//                 </div>
//                 <div>
//                   <span className="text-gray-600 text-[25px] cursor-pointer">
//                     <IoEyeOutline />
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-6 bg-[#e6f0fa] border border-[#d1e0ee] rounded-lg p-4 flex items-center gap-2 py-10 my-6">
//               <span className="text-[#f5a623] text-2xl">⚠️</span>
//               <p className="text-sm text-gray-700">
//                 <span className="font-bold">
//                   READY TO TRAIN YOUR AI: Please review and submit your files.
//                 </span>
//                 <br />
//                 ONCE YOU SUBMIT, YOUR FILES WILL BE PROCESSED AND USED TO TRAIN YOUR CUSTOM AI MODEL.
//               </p>
//             </div>
//             <div className="flex justify-between mt-8">
//               <button
//                 className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
//                 onClick={prevStep}
//               >
//                 Previous
//               </button>
//               <button
//                 className="px-4 py-2 bg-[#5B21BD] text-white rounded cursor-pointer"
//                 onClick={submitForm}
//                 disabled={isLoading}
//               >
//                 {isLoading ? 'Submitting...' : 'Confirm & Submit for Training'}
//               </button>
//             </div>
//             {isError && (
//               <p className="text-red-500 mt-4">Error: {error?.data?.message || 'Failed to submit'}</p>
//             )}
//           </div>
//         )}

//         {/* Modal for Submission Confirmation */}
//         {isModalOpen && (
//           <div className="fixed inset-0 bg-[#5B21BDCC] flex justify-center items-center z-100">
//             <div className="bg-white rounded-lg p-6 w-full max-w-lg">
//               <h2 className="text-xl font-bold mb-4 text-[#5B21BD]">
//                 {isSuccess ? 'Training Started Successfully!' : 'Submission Failed'}
//               </h2>
//               <p className="mb-6 text-gray-600">
//                 {isSuccess
//                   ? "Your AI model is now being trained with your content. You'll receive a notification when it's ready."
//                   : 'There was an issue submitting your files. Please try again.'}
//               </p>
//               <div className="flex justify-center">
//                 <div className="bg-[#DCFCE7] p-10 rounded-full flex justify-center">
//                   <SiVerizon className="text-[#00B23D]" />
//                 </div>
//               </div>
//               <p className="text-[20px] text-center text-[#5B21BD]">Training progress</p>
//               <p className="text-gray-600 text-center">
//                 Your AI model is now being trained with your culinary content. This process typically takes 2 minutes.
//               </p>
//               <div className="flex justify-center mt-8">
//                 <button
//                   className="px-8 py-2 bg-[#5B21BD] text-white rounded cursor-pointer"
//                   onClick={resetForm}
//                 >
//                   Back
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AiTraining;


// import { useState } from 'react';
// import img from '../../../assets/image/cercalImg.png';
// import { IoEyeOutline } from 'react-icons/io5';
// import { SiVerizon } from 'react-icons/si';
// import { useAiTrainingMutation, useGetCreateRecipeQuery } from '../../../Rudux/feature/ApiSlice'; 
// const AiTraining = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [maxStepReached, setMaxStepReached] = useState(1);
//   const [selectedOption, setSelectedOption] = useState('');
//   const [files, setFiles] = useState([]);
//   const [formData, setFormData] = useState({
//     fileTitle: '',
//     categoryType: '',
//     tags: '',
//     recipeId: '', // Added for recipe field
//   });
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isDragging, setIsDragging] = useState(false);
//   const [apiResponse, setApiResponse] = useState(null);

//   // const [aiTraining, { isLoading, isSuccess, isError, error }] = useAiTrainingMutation();

//     const [aiTraining, { isLoading, isSuccess, isError, error }] = useAiTrainingMutation();
//    const { data: recipesData  } = useGetCreateRecipeQuery();
//    console.log(recipesData, 'recipesData')

//   const totalSteps = 4;

//   // Static category mapping (replace with API call if available)
//   const categoryMap = {
//     'Chocolate souffle': 1,
//     'Vanilla cake': 2,
//     'Lemon tart': 3,
//   };

//   const nextStep = () => {
//     if (currentStep < totalSteps) {
//       setCurrentStep(currentStep + 1);
//       setMaxStepReached(Math.max(maxStepReached, currentStep + 1));
//     }
//   };

//   const prevStep = () => {
//     if (currentStep > 1) {
//       setCurrentStep(currentStep - 1);
//       setMaxStepReached(Math.max(1, maxStepReached - 1));
//     }
//   };

//   const handleFileChange = (e) => {
//     if (e.target.files && e.target.files.length > 0) {
//       const file = e.target.files[0];
//       if (file.size > 50 * 1024 * 1024) {
//         alert('File size exceeds 50MB');
//         return;
//       }
//       if (
//         ![
//           'application/pdf',
//           'application/msword',
//           'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
//           'application/vnd.ms-excel',
//           'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
//         ].includes(file.type)
//       ) {
//         alert('Invalid file type');
//         return;
//       }
//       setFiles([file]);
//     }
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     setIsDragging(false);
//     if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
//       handleFileChange({ target: { files: e.dataTransfer.files } });
//     }
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     setIsDragging(true);
//   };

//   const handleDragEnter = (e) => {
//     e.preventDefault();
//     setIsDragging(true);
//   };

//   const handleDragLeave = (e) => {
//     e.preventDefault();
//     setIsDragging(false);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const submitForm = async () => {
//     const formDataToSend = new FormData();
//     formDataToSend.append('type', selectedOption);
//     formDataToSend.append('file_title', formData.fileTitle);
//     formDataToSend.append('category', categoryMap[formData.categoryType] || formData.categoryType);
//     if (files.length > 0) {
//       formDataToSend.append('file', files[0]);
//     }
//     if (formData.recipeId) {
//       formDataToSend.append('recipe', formData.recipeId); // Include if provided
//     }
//     // Omit tags unless confirmed by API

//     try {
//       const response = await aiTraining(formDataToSend).unwrap();
//       setApiResponse(response);
//       setIsModalOpen(true);
//     } catch (err) {
//       console.error('Failed to submit:', err);
//     }
//   };

//   const resetForm = () => {
//     setCurrentStep(4);
//     setSelectedOption('');
//     setFiles([]);
//     setFormData({
//       fileTitle: '',
//       categoryType: '',
//       tags: '',
//       recipeId: '',
//     });
//     setIsModalOpen(false);
//     setApiResponse(null);
//   };

//   const getStepImage = () => img;

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//     nextStep();
//   };

//   const isStep3Valid = () =>
//     formData.fileTitle.trim() !== '' &&
//     formData.categoryType.trim() !== '' &&
//     formData.tags.trim() !== '';

//   return (
//     <div className="">
//       <div className="rounded-lg p-6 px-14 lora">
//         <h1 className="text-[34px] text-[#5B21BD]">AI Training</h1>
//         <p className="text-[#9E9E9E] text-xl mb-4">Upload and manage your culinary content</p>

//         {/* Progress Steps */}
//         <div className="relative mb-8 px-6">
//           <div className="flex justify-between relative">
//             <div
//               className="absolute bottom-14 left-0 h-1 bg-[#5B21BD] z-10 transition-all duration-300"
//               style={{
//                 width: `${((maxStepReached - 1) / (totalSteps - 1)) * 100}%`,
//                 transform: 'translateY(-50%)',
//               }}
//             ></div>
//             <div className="absolute bottom-14 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2"></div>

//             {[1, 2, 3, 4].map((step) => (
//               <div key={step} className="relative z-10">
//                 <div
//                   className={`relative w-14 h-14 mx-auto mb-2 ${
//                     maxStepReached >= step ? 'bg-[#5B21BD] rounded-full' : ''
//                   }`}
//                 >
//                   <img
//                     src={getStepImage()}
//                     alt={`Step ${step}`}
//                     className={`w-14 h-14 ${maxStepReached >= step ? 'opacity-100 filter-blue' : 'opacity-50'}`}
//                   />
//                   <span
//                     className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold
//                       ${maxStepReached >= step ? 'text-white' : 'text-gray-500'}`}
//                   >
//                     {step}
//                   </span>
//                 </div>
//                 <div
//                   className={`text-[18px] font-bold text-center 
//                     ${maxStepReached >= step ? 'text-[#5B21BD] font-bold' : 'text-gray-500'}`}
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
//           <div className="border rounded-xl p-10 bg-[#FFFFFF] border-[#EFE9F8]">
//             <h2 className="text-xl text-[#5B21BD] font-bold mb-4">Select Content Type</h2>
//             <p className="mb-6 text-[#9E9E9E]">
//               Choose the type of content key. Write to update it in form for a vendor.
//             </p>
//             <div className="space-y-3 mb-6 flex justify-between text-center text-[20px] font-semibold text-[#5B21BD]">
//               {['recipe', 'calculation', 'other'].map((option) => (
//                 <div
//                   key={option}
//                   className={`p-4 border rounded cursor-pointer transition-all w-full ml-10 h-full
//                     ${selectedOption === option ? 'border-[#5B21BD] bg-blue-50' : 'border-gray-200 '}`}
//                   onClick={() => handleOptionClick(option)}
//                 >
//                   <h3 className="font-medium">{option}</h3>
//                   <p className="text-sm text-gray-600 mt-1 text-center">
//                     {option === 'recipe' && 'Upload PDF or Word documents with your detailed recipes.'}
//                     {option === 'calculation' && 'Upload Excel spreadsheets with ingredient ratios and formulas.'}
//                     {option === 'other' && 'Upload any other training materials for your AI model.'}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {currentStep === 2 && (
//           <div className="border border-[#5B21BD] p-10 rounded-xl bg-[#FFFFFF]">
//             <h2 className="text-xl text-[#5B21BD] font-bold mb-4">Upload Files</h2>
//             <p className="mb-6 text-[#9E9E9E]">
//               Drag and drop your file or click to browse. We accept PDF, DOC, DOCX, XLS, and XLSX files up to 50MB.
//             </p>
//             <div
//               className={`border-2 border-dashed rounded-lg p-8 h-[250px] text-center mb-6 transition-all
//                 ${isDragging ? 'border-[#5B21BD] bg-blue-50' : 'border-[#5B21BD]'}`}
//               onDragOver={handleDragOver}
//               onDragEnter={handleDragEnter}
//               onDragLeave={handleDragLeave}
//               onDrop={handleDrop}
//             >
//               <input
//                 type="file"
//                 id="file-upload"
//                 className="hidden"
//                 multiple={false}
//                 accept=".pdf,.doc,.docx,.xls,.xlsx"
//                 onChange={handleFileChange}
//               />
//               <label
//                 htmlFor="file-upload"
//                 className="cursor-pointer flex flex-col items-center justify-center h-full"
//               >
//                 <p className="mb-4 text-gray-600">
//                   {isDragging ? 'Drop File Here' : 'Drag & Drop File Here or Click to Browse'}
//                 </p>
//                 <button
//                   type="button"
//                   className="px-4 py-2 bg-[#5B21BD] text-white rounded "
//                   onClick={() => document.getElementById('file-upload').click()}
//                 >
//                   Browse File
//                 </button>
//               </label>
//             </div>
//             {files.length > 0 && (
//               <div className="mb-6">
//                 <p className="text-sm text-gray-600 mb-2">Selected file:</p>
//                 <ul className="text-sm text-gray-600">
//                   {files.map((file, index) => (
//                     <li key={index}>{file.name}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//             <div className="flex justify-between mt-8">
//               <button
//                 className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
//                 onClick={prevStep}
//               >
//                 Previous
//               </button>
//               <button
//                 className="px-4 py-2 bg-[#5B21BD] text-white rounded disabled:opacity-50"
//                 onClick={nextStep}
//                 disabled={files.length === 0}
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         )}

//         {currentStep === 3 && (
//           <div className="p-6 bg-white rounded-lg border border-gray-200">
//             <h2 className="text-4xl font-bold text-[#5B21BD] mb-2">Add Metadata & Categorize</h2>
//             <p className="text-sm text-gray-500 mb-6">
//               Add details to your uploaded file to help the AI understand and organize your content.
//             </p>
//             <div className="flex w-full gap-6">
//               <div className="mb-4 md:w-1/2">
//                 <label className="block text-xl font-medium text-[#5B21BD] mb-1">File Title</label>
//                 <input
//                   type="text"
//                   name="fileTitle"
//                   value={formData.fileTitle}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border border-[#CCBAEB] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   placeholder="Enter file title"
//                 />
//               </div>
//               <div className="mb-4 md:w-1/2">
//                 <label className="block text-xl font-medium text-[#5B21BD] mb-1">Category/Type</label>
//                 <select
//                   name="categoryType"
//                   value={formData.categoryType}
//                   onChange={handleInputChange}
//                   className="w-full p-2  border text-[#999999] border-[#CCBAEB] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 >
//                   <option value="">Select Category</option>
//                   <option value="Chocolate souffle">1</option>
//                   <option value="Vanilla cake">2</option>
//                   <option value="Lemon tart">3</option>
//                 </select>
//               </div>
//             </div>

//             <div className="mb-4">
//               <label className="block text-xl font-medium text-[#5B21BD] mb-1">Tags (optional)</label>
//               <input
//                 type="text"
//                 name="tags"
//                 value={formData.tags}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border border-[#CCBAEB] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 placeholder="Enter tags (comma separated)"
//               />
//             </div>
//             <div className="flex justify-between mt-8">
//               <button
//                 className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
//                 onClick={prevStep}
//               >
//                 Previous
//               </button>
//               <button
//                 className="px-4 py-2 bg-[#5B21BD] text-white rounded disabled:opacity-50"
//                 onClick={nextStep}
//                 disabled={!formData.fileTitle.trim() || !formData.categoryType.trim()}
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         )}

//         {currentStep === 4 && (
//           <div className="mt-8 bg-white rounded-xl border border-[#EFE9F8] lora p-10">
//             <h2 className="text-lg font-bold text-gray-800">Review & Confirm</h2>
//             <p className="text-sm text-gray-500 mt-1">
//               Review your uploaded file and metadata before submitting for AI training.
//             </p>
//             <hr className="text-[#EFE9F8] mt-2" />
//             <div className="mt-4">
//               <div className="grid grid-cols-6 gap-4 p-3 bg-[#EFE9F8] text-[#5B21BD] text-sm font-semibold">
//                 <div>File name</div>
//                 <div>Title</div>
//                 <div>Category</div>
//                 <div>Tags</div>
//                 <div>Status</div>
//                 <div>Preview</div>
//               </div>
//               <div className="grid grid-cols-6 gap-4 p-3 border border-[#E4E4E4] text-sm">
//                 <div>{files[0]?.name || 'No file'}</div>
//                 <div>{formData.fileTitle || 'No title'}</div>
//                 <div>{formData.categoryType || 'No category'}</div>
//                 <div className="flex gap-1">
//                   {formData.tags ? (
//                     formData.tags.split(',').map((tag, index) => (
//                       <span
//                         key={index}
//                         className="bg-[#e6f0fa] text-[#4a90e2] rounded-full px-2 py-1 text-xs"
//                       >
//                         {tag.trim()}
//                       </span>
//                     ))
//                   ) : (
//                     <span className="text-gray-500">No tags</span>
//                   )}
//                 </div>
//                 <div>
//                   <span className="bg-[#28a745] text-white rounded-full px-2 py-1 text-xs">
//                     READY
//                   </span>
//                 </div>
//                 <div>
//                   <span className="text-gray-600 text-[25px] cursor-pointer">
//                     <IoEyeOutline />
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-6 bg-[#e6f0fa] border border-[#d1e0ee] rounded-lg p-4 flex items-center gap-2 py-10 my-6">
//               <span className="text-[#f5a623] text-2xl">⚠️</span>
//               <p className="text-sm text-gray-700">
//                 <span className="font-bold">
//                   READY TO TRAIN YOUR AI: Please review and submit your file.
//                 </span>
//                 <br />
//                 ONCE YOU SUBMIT, YOUR FILE WILL BE PROCESSED AND USED TO TRAIN YOUR CUSTOM AI MODEL.
//               </p>
//             </div>
//             <div className="flex justify-between mt-8">
//               <button
//                 className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
//                 onClick={prevStep}
//               >
//                 Previous
//               </button>
//               <button
//                 className="px-4 py-2 bg-[#5B21BD] text-white rounded cursor-pointer"
//                 onClick={submitForm}
//                 disabled={isLoading || files.length === 0}
//               >
//                 {isLoading ? 'Submitting...' : 'Confirm & Submit for Training'}
//               </button>
//             </div>
//             {isError && (
//               <p className="text-red-500 mt-4">
//                 Error: {error?.data?.message || error?.error || 'Failed to submit'}
//               </p>
//             )}
//           </div>
//         )}

//         {/* Modal for Submission Confirmation */}
//         {isModalOpen && (
//           <div className="fixed inset-0 bg-[#5B21BDCC] flex justify-center items-center z-100">
//             <div className="bg-white rounded-lg p-6 w-full max-w-lg">
//               <h2 className="text-xl font-bold mb-4 text-[#5B21BD]">
//                 {isSuccess ? 'Training Started Successfully!' : 'Submission Failed'}
//               </h2>
//               <p className="mb-6 text-gray-600">
//                 {isSuccess
//                   ? apiResponse?.message || 'Your AI model is now being trained with your content.'
//                   : 'There was an issue submitting your file. Please try again.'}
//               </p>
//               {isSuccess && apiResponse?.data && (
//                 <div className="mb-6 text-sm text-gray-600">
//                   <p><strong>Training ID:</strong> {apiResponse.data.id}</p>
//                   <p><strong>File Title:</strong> {apiResponse.data.file_title}</p>
//                   <p><strong>Category:</strong> {formData.categoryType}</p>
//                   <p><strong>Status:</strong> {apiResponse.data.status}</p>
//                   {apiResponse.data.recipe && (
//                     <p><strong>Recipe ID:</strong> {apiResponse.data.recipe}</p>
//                   )}
//                 </div>
//               )}
//               <div className="flex justify-center">
//                 <div className="bg-[#DCFCE7] p-10 rounded-full flex justify-center">
//                   <SiVerizon className="text-[#00B23D]" />
//                 </div>
//               </div>
//               <p className="text-[20px] text-center text-[#5B21BD]">Training progress</p>
//               <p className="text-gray-600 text-center">
//                 Your AI model is now being trained with your culinary content. This process typically takes 2 minutes.
//               </p>
//               <div className="flex justify-center mt-8">
//                 <button
//                   className="px-8 py-2 bg-[#5B21BD] text-white rounded cursor-pointer"
//                   onClick={resetForm}
//                 >
//                   Back
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AiTraining;








import { useState } from 'react';
import img from '../../../assets/image/cercalImg.png';
import { IoEyeOutline } from 'react-icons/io5';
import { SiVerizon } from 'react-icons/si';
import { useAiTrainingMutation, useGetCreateRecipeQuery } from '../../../Rudux/feature/ApiSlice';

const AiTraining = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [maxStepReached, setMaxStepReached] = useState(1);
  const [selectedOption, setSelectedOption] = useState('');
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    fileTitle: '',
    categoryType: '',
    tags: '',
    recipeId: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);

  const [aiTraining, { isLoading, isSuccess, isError, error }] = useAiTrainingMutation();
  const { data: recipesData, isLoading: isRecipesLoading, isError: isRecipesError } = useGetCreateRecipeQuery();
  console.log('recipesData:', recipesData);

  const totalSteps = 4;

  // Static category mapping (used as fallback)


  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      setMaxStepReached(Math.max(maxStepReached, currentStep + 1));
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setMaxStepReached(Math.max(1, maxStepReached - 1));
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.size > 50 * 1024 * 1024) {
        alert('File size exceeds 50MB');
        return;
      }
      if (
        ![
          'application/pdf',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          'application/vnd.ms-excel',
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        ].includes(file.type)
      ) {
        alert('Invalid file type');
        return;
      }
      setFiles([file]);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileChange({ target: { files: e.dataTransfer.files } });
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitForm = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append('type', selectedOption);
    formDataToSend.append('file_title', formData.fileTitle);
    formDataToSend.append('category', categoryMap[formData.categoryType] || formData.categoryType);
    if (files.length > 0) {
      formDataToSend.append('file', files[0]);
    }
    if (formData.recipeId) {
      formDataToSend.append('recipe', formData.recipeId);
    }

    try {
      const response = await aiTraining(formDataToSend).unwrap();
      setApiResponse(response);
      setIsModalOpen(true);
    } catch (err) {
      console.error('Failed to submit:', err);
    }
  };

  const resetForm = () => {
    setCurrentStep(1);
    setMaxStepReached(1);
    setSelectedOption('');
    setFiles([]);
    setFormData({
      fileTitle: '',
      categoryType: '',
      tags: '',
      recipeId: '',
    });
    setIsModalOpen(false);
    setApiResponse(null);
  };

  const getStepImage = () => img;

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    nextStep();
  };



  return (
    <div className="">
      <div className="rounded-lg p-6 px-14 lora">
        <h1 className="text-[34px] text-[#5B21BD]">AI Training</h1>
        <p className="text-[#9E9E9E] text-xl mb-4">Upload and manage your culinary content</p>

        {/* Progress Steps */}
        <div className="relative mb-8 px-6">
          <div className="flex justify-between relative">
            <div
              className="absolute bottom-8 left-0 h-1 bg-[#5B21BD] z-10 transition-all duration-300"
              style={{
                width: `${((maxStepReached - 1) / (totalSteps - 1)) * 100}%`,
                transform: 'translateY(-50%)',
              }}
            ></div>
            <div className="absolute bottom-8 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2"></div>

            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="relative z-10">
                <div
                  className={`relative w-14 h-14 mx-auto mb-2 ${maxStepReached >= step ? 'bg-[#5B21BD] rounded-full' : ''
                    }`}
                >
                  <img
                    src={getStepImage()}
                    alt={`Step ${step}`}
                    className={`w-14 h-14 ${maxStepReached >= step ? 'opacity-100 filter-blue' : 'opacity-50'}`}
                  />
                  <span
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold
                      ${maxStepReached >= step ? 'text-white' : 'text-gray-500'}`}
                  >
                    {step}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        {currentStep === 1 && (
          <div className="border rounded-xl p-10 bg-[#FFFFFF] border-[#EFE9F8]">
            <h2 className="text-xl text-[#5B21BD] font-bold mb-4">Select Content Type</h2>
            <p className="mb-6 text-[#9E9E9E]">
              Choose the type of content key. Write to update it in form for a vendor.
            </p>
            <div className="space-y-3 mb-6 flex justify-between text-center text-[20px] font-semibold text-[#5B21BD]">
              {['recipe', 'calculation', 'other'].map((option) => (
                <div
                  key={option}
                  className={`p-4 border rounded cursor-pointer transition-all w-full ml-10 h-full
                    ${selectedOption === option ? 'border-[#5B21BD] bg-blue-50' : 'border-gray-200 '}`}
                  onClick={() => handleOptionClick(option)}
                >
                  <h3 className="font-medium">{option}</h3>
                  <p className="text-sm text-gray-600 mt-1 text-center">
                    {option === 'recipe' && 'Upload PDF or Word documents with your detailed recipes.'}
                    {option === 'calculation' && 'Upload Excel spreadsheets with ingredient ratios and formulas.'}
                    {option === 'other' && 'Upload any other training materials for your AI model.'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="border border-[#5B21BD] p-10 rounded-xl bg-[#FFFFFF]">
            <h2 className="text-xl text-[#5B21BD] font-bold mb-4">Upload Files</h2>
            <p className="mb-6 text-[#9E9E9E]">
              Drag and drop your file or click to browse. We accept PDF, DOC, DOCX, XLS, and XLSX files up to 50MB.
            </p>
            <div
              className={`border-2 border-dashed rounded-lg p-8 h-[250px] text-center mb-6 transition-all
                ${isDragging ? 'border-[#5B21BD] bg-blue-50' : 'border-[#5B21BD]'}`}
              onDragOver={handleDragOver}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <input
                type="file"
                id="file-upload"
                className="hidden"
                multiple={false}
                accept=".pdf,.doc,.docx,.xls,.xlsx"
                onChange={handleFileChange}
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer flex flex-col items-center justify-center h-full"
              >
                <p className="mb-4 text-gray-600">
                  {isDragging ? 'Drop File Here' : 'Drag & Drop File Here or Click to Browse'}
                </p>
                <button
                  type="button"
                  className="px-4 py-2 bg-[#5B21BD] text-white rounded"
                  onClick={() => document.getElementById('file-upload').click()}
                >
                  Browse File
                </button>
              </label>
            </div>
            {files.length > 0 && (
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-2">Selected file:</p>
                <ul className="text-sm text-gray-600">
                  {files.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex justify-between mt-8">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                onClick={prevStep}
              >
                Previous
              </button>
              <button
                className="px-4 py-2 bg-[#5B21BD] text-white rounded disabled:opacity-50"
                onClick={nextStep}
                disabled={files.length === 0}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="p-6 bg-white rounded-lg border border-gray-200">
            <h2 className="text-4xl font-bold text-[#5B21BD] mb-2">Add Metadata & Categorize</h2>
            <p className="text-sm text-gray-500 mb-6">
              Add details to your uploaded file to help the AI understand and organize your content.
            </p>
            <div className="flex w-full gap-6">
              <div className="mb-4 md:w-1/2">
                <label className="block text-xl font-medium text-[#5B21BD] mb-1">File Title</label>
                <input
                  type="text"
                  name="fileTitle"
                  value={formData.fileTitle}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-[#CCBAEB] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter file title"
                />
              </div>
              <div className="mb-4 md:w-1/2">
                <label className="block text-xl font-medium text-[#5B21BD] mb-1">Category/Type</label>
                <select
                  name="categoryType"
                  value={formData.categoryType}
                  onChange={handleInputChange}
                  className="w-full p-2 border text-[#999999] border-[#CCBAEB] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  disabled={isRecipesLoading}
                >
                  <option value="">Select Category</option>
                  {isRecipesLoading ? (
                    <option disabled>Loading...</option>
                  ) : isRecipesError || !recipesData?.data ? (
                    <option disabled>No categories available</option>
                  ) : (
                    recipesData.data.map((recipe) => (
                      <option key={recipe.id} value={recipe.id}>
                       
                         {recipe.category_name}
                        {recipe.id}
                       
                      </option>
                    ))
                  )}
                </select>
                {isRecipesLoading && <p className="text-sm text-gray-500 mt-1">Loading categories...</p>}
                {isRecipesError && <p className="text-sm text-red-500 mt-1">Failed to load categories</p>}
                {!isRecipesLoading && !isRecipesError && (!recipesData?.data || recipesData.data.length === 0) && (
                  <p className="text-sm text-red-500 mt-1">No categories available</p>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-xl font-medium text-[#5B21BD] mb-1">Tags (optional)</label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleInputChange}
                className="w-full p-2 border border-[#CCBAEB] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter tags (comma separated)"
              />
            </div>
            <div className="flex justify-between mt-8">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                onClick={prevStep}
              >
                Previous
              </button>
              <button
                className="px-4 py-2 bg-[#5B21BD] text-white rounded disabled:opacity-50"
                onClick={nextStep}
                disabled={!formData.fileTitle.trim() || !formData.categoryType.trim()}
              >
                Next
              </button>
            </div>
          </div>
        )}
        {currentStep === 4 && (
          <div className="mt-8 bg-white rounded-xl border border-[#EFE9F8] lora p-10">
            <h2 className="text-lg font-bold text-gray-800">Review & Confirm</h2>
            <p className="text-sm text-gray-500 mt-1">
              Review your uploaded file and metadata before submitting for AI training.
            </p>
            <hr className="text-[#EFE9F8] mt-2" />
            <div className="mt-4">
              <div className="grid grid-cols-6 gap-4 p-3 bg-[#EFE9F8] text-[#5B21BD] text-sm font-semibold">
                <div>File name</div>
                <div>Title</div>
                <div>Category</div>
                <div>Tags</div>
                <div>Status</div>
                <div>Preview</div>
              </div>
              <div className="grid grid-cols-6 gap-4 p-3 border border-[#E4E4E4] text-sm">
                <div>{files[0]?.name || 'No file'}</div>
                <div>{formData.fileTitle || 'No title'}</div>
                <div>
                  {
                    recipesData?.data?.find(r => String(r.id) === String(formData.categoryType))?.category_name
                    || 'No category'
                  }
                </div>
                <div className="flex gap-1">
                  {formData.tags ? (
                    formData.tags.split(',').map((tag, index) => (
                      <span
                        key={index}
                        className="bg-[#e6f0fa] text-[#4a90e2] rounded-full px-2 py-1 text-xs"
                      >
                        {tag.trim()}
                      </span>
                    ))
                  ) : (
                    <option disabled>No tags</option>
                  )}
                </div>
                <div>
                  <span className="bg-[#28a745] text-white rounded-full px-2 py-1 text-xs">
                    READY
                  </span>
                </div>
                <div>
                  <span className="text-gray-600 text-[25px] cursor-pointer">
                    <IoEyeOutline />
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-[#e6f0fa] border border-[#d1e0ee] rounded-lg p-4 flex items-center gap-2 py-10 my-6">
              <span className="text-[#f5a623] text-2xl">⚠️</span>
              <p className="text-sm text-gray-700">
                <span className="font-bold">
                  READY TO TRAIN YOUR AI: Please review and submit your file.
                </span>
                <br />
                ONCE YOU SUBMIT, YOUR FILE WILL BE PROCESSED AND USED TO TRAIN YOUR CUSTOM AI MODEL.
              </p>
            </div>
            <div className="flex justify-between mt-8">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                onClick={prevStep}
              >
                Previous
              </button>
              <button
                className="px-4 py-2 bg-[#5B21BD] text-white rounded cursor-pointer"
                onClick={submitForm}
                disabled={isLoading || files.length === 0}
              >
                {isLoading ? 'Submitting...' : 'Confirm & Submit for Training'}
              </button>
            </div>
            {isError && (
              <p className="text-red-500 mt-4">
                Error: {error?.data?.message || error?.error || 'Failed to submit'}
              </p>
            )}
          </div>
        )}

        {/* Modal for Submission Confirmation */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-[#5B21BDCC] flex justify-center items-center z-100">
            <div className="bg-white rounded-lg p-6 w-full max-w-lg">
              <h2 className="text-xl font-bold mb-4 text-[#5B21BD]">
                {isSuccess ? 'Training Started Successfully!' : 'Submission Failed'}
              </h2>
              <p className="mb-6 text-gray-600">
                {isSuccess
                  ? apiResponse?.message || 'Your AI model is now being trained with your content.'
                  : 'There was an issue submitting your file. Please try again.'}
              </p>
              {isSuccess && apiResponse?.data && (
                <div className="mb-6 text-sm text-gray-600">
                  <p><strong>Training ID:</strong> {apiResponse.data.id}</p>
                  <p><strong>File Title:</strong> {apiResponse.data.file_title}</p>
                  <p><strong>Category:</strong> {formData.categoryType}</p>
                  <p><strong>Status:</strong> {apiResponse.data.status}</p>
                  {apiResponse.data.recipe && (
                    <p><strong>Recipe ID:</strong> {apiResponse.data.recipe}</p>
                  )}
                </div>
              )}
              <div className="flex justify-center">
                <div className="bg-[#DCFCE7] p-10 rounded-full flex justify-center">
                  <SiVerizon className="text-[#00B23D]" />
                </div>
              </div>
              <p className="text-[20px] text-center text-[#5B21BD]">Training progress</p>
              <p className="text-gray-600 text-center">
                Your AI model is now being trained with your culinary content. This process typically takes 2 minutes.
              </p>
              <div className="flex justify-center mt-8">
                <button
                  className="px-8 py-2 bg-[#5B21BD] text-white rounded cursor-pointer"
                  onClick={resetForm}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AiTraining;



