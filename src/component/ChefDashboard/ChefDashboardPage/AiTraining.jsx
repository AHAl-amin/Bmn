


import { useState } from 'react';
import img from '../../../assets/image/cercalImg.png'; // Single icon for all steps
import { IoEyeOutline } from 'react-icons/io5';
import { SiVerizon } from "react-icons/si";

const AiTraining = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [maxStepReached, setMaxStepReached] = useState(1); // Track highest step reached
  const [selectedOption, setSelectedOption] = useState('');
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    fileTitle: '',
    categoryType: '',
    menuOption: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const totalSteps = 4;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      setMaxStepReached(Math.max(maxStepReached, currentStep + 1)); // Update max step reached
      console.log('Current Step:', currentStep + 1);
    }
    if (currentStep === 3) {
      setIsModalOpen(true); // Open modal when moving to Step 4
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      console.log('Current Step:', currentStep - 1);
    }
    if (currentStep === 4) {
      setIsModalOpen(false); // Close modal when going back
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
    setIsModalOpen(false); // Close modal on submit
    setCurrentStep(1); // Reset to Step 1
    setMaxStepReached(1); // Reset max step
  };

  const getStepImage = () => {
    return img; // Always return the same icon for all steps
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    console.log('Selected Option:', option);
    nextStep(); // Automatically move to the next step
  };

  const isStep3Valid = () => {
    return formData.fileTitle.trim() !== '' && formData.categoryType.trim() !== '' && formData.menuOption.trim() !== '';
  };

  return (
    <div className=" ">
      <div className="rounded-lg p-6 px-14 lora">
        <h1 className="text-[34px] text-[#0077B6]">AI Training</h1>
        <p className="text-[#9E9E9E] text-xl mb-4">Upload and manage your culinary content</p>

        {/* Progress Steps */}
        <div className="relative mb-8 px-6">
          <div className="flex justify-between relative">
            <div
              className="absolute bottom-14 left-0 h-1 bg-[#0077B6] z-10 transition-all duration-300"
              style={{
                width: `${((maxStepReached - 1) / (totalSteps - 1)) * 100}%`, // Progress bar tied to maxStepReached
                transform: 'translateY(-50%)'
              }}
            ></div>
            <div className="absolute bottom-14 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2"></div>

            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="relative z-100">
                <div className={`relative w-14 h-14 mx-auto mb-2 ${maxStepReached >= step ? 'bg-[#0077B6] rounded-full' : ''}`}>
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
                <div
                  className={`text-[18px] font-bold text-center 
                    ${maxStepReached >= step ? 'text-[#0077B6] font-bold' : 'text-gray-500'}`}
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
          <div className="border rounded-xl p-10 bg-[#FFFFFF] border-[#B0D5E8]">
            <h2 className="text-xl text-[#0077B6] font-bold mb-4">Select Content Type</h2>
            <p className="mb-6 text-[#9E9E9E]">
              Choose This Option of Content Key. Write To Update it in Form for A Vendor.
            </p>

            <div className="space-y-3 mb-6 flex justify-between text-center text-[20px] font-semibold  text-[#0077B6]">
              {['recipes', 'calculators', 'other materials'].map((option) => (
                <div
                  key={option}
                  className={`p-4 border rounded cursor-pointer transition-all w-full ml-10 h-full
                    ${selectedOption === option ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                  onClick={() => handleOptionClick(option)}
                >
                  <h3 className="font-medium">{option}</h3>
                  <p className="text-sm text-gray-600 mt-1 text-center">
                    {option === 'recipes' && 'Upload PDF or Word documents with your detailed recipes.'}
                    {option === 'calculators' && 'Upload Excel spreadsheets with ingredient ratios and formulas.'}
                    {option === 'other materials' && 'Upload any other training materials for your AI model.'}
                  </p>
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
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="border border-[#0077B6] p-10 rounded-xl bg-[#FFFFFF]">
            <h2 className="text-xl text-[#0077B6] font-bold mb-4">Upload Files</h2>
            <p className="mb-6 text-[#9E9E9E]">
              Drag and drop your files or click to browse. We accept PDF, DOC, DOCX, XLS, and XLSX files up to 50MB.
            </p>

            <div className="border-2 border-dashed border-[#0077B6] rounded-lg p-8 h-[250px] text-center mb-6">
              <input
                type="file"
                id="file-upload"
                className="hidden"
                multiple
                onChange={handleFileChange}
              />
              <label htmlFor="file-upload" className="cursor-pointer block mt-10">
                <p className="mb-4">Drag & Drop Files Here</p>
                <button className="px-4 py-2 bg-[#0077B6] text-white rounded cursor-pointer">
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
                Previous
              </button>
              <button
                className="px-4 py-2 bg-[#0077B6] text-white rounded disabled:opacity-50"
                onClick={nextStep}
                disabled={files.length === 0}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="mt-8 bg-white rounded-xl border border-[#B0D5E8] lora p-10">
            <h2 className="text-lg font-bold text-gray-800">Review & Confirm</h2>
            <p className="text-sm text-gray-500 mt-1">
              Review your uploaded files and metadata before submitting them for AI training.
            </p>
            <hr className="text-[#B0D5E8] mt-2" />

            <div className="mt-4">
              <div className="grid grid-cols-6 gap-4 p-3 bg-[#B0D5E8] text-[#0077B6] text-sm font-semibold">
                <div>File name</div>
                <div>Title</div>
                <div>Category</div>
                <div>Tags</div>
                <div>Status</div>
                <div>Preview</div>
              </div>
              <div className="grid grid-cols-6 gap-4 p-3 border border-[#E4E4E4] text-sm">
                <div>chocolate-souffle.pdf</div>
                <div>Chocolate Soufflé</div>
                <div>Dessert</div>
                <div className="flex gap-1">
                  <span className="bg-[#e6f0fa] text-[#4a90e2] rounded-full px-2 py-1 text-xs">French</span>
                  <span className="bg-[#e6f0fa] text-[#4a90e2] rounded-full px-2 py-1 text-xs">French</span>
                </div>
                <div>
                  <span className="bg-[#28a745] text-white rounded-full px-2 py-1 text-xs">READY</span>
                </div>
                <div>
                  <span className="text-gray-600 text-[25px] cursor-pointer"><IoEyeOutline /></span>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-[#e6f0fa spad] border border-[#d1e0ee] rounded-lg p-4 flex items-center gap-2 py-10 my-6">
              <span className="text-[#f5a623] text-2xl">⚠️</span>
              <p className="text-sm text-gray-700">
                <span className="font-bold">READY TO TRAIN YOUR AI</span><br />
                ONCE YOU SUBMIT, YOUR FILES WILL BE PROCESSED AND USED TO TRAIN YOUR CUSTOM AI MODEL.
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
                className="px-4 py-2 bg-[#0077B6] text-white rounded cursor-pointer"
                onClick={nextStep}
              >
                Confirm & Submit for Training
              </button>
            </div>
          </div>
        )}

        {/* Modal for Step 4 */}
        {isModalOpen && (
          <div className="fixed inset-0 backdrop-blur bg-[#0076b662] flex justify-center items-center z-100">
            <div className="bg-white rounded-lg p-6 w-full max-w-lg">
              <h2 className="text-xl font-bold mb-4 text-[#0077B6]">Training Started Successfully!</h2>
              <p className="mb-6 text-gray-300">
                Your AI model is now being trained with your content. You'll receive a notification when it's ready.
              </p>

              <div className='flex justify-center'>
                <div className='bg-[#DCFCE7] p-10 rounded-full flex justify-center'>
                  <SiVerizon className='text-[#00B23D]' />
                </div>
              </div>
              <p className='text-[20px] text-center text-[#0077B6]'>Training progress</p>
              <p className='text-gray-300 text-center'>Your AI model is now being trained with your culinary content. This process typically takes 2 minutes.</p>

              <div className="flex justify-between mt-8">
                <button
                  className="px-8 py-2 bg-[#0077B6] mx-auto cursor-pointer rounded text-white"
                  onClick={() => {
                    setCurrentStep(3); // Go back to Step 3
                    setIsModalOpen(false); // Close modal
                  }}
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


