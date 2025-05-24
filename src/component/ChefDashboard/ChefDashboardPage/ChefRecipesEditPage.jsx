import React, { useState, useEffect } from 'react';
import { LuUpload } from 'react-icons/lu';
import { useLocation, useParams } from 'react-router-dom';
import { useRecipeUpdateMutation, useGetRecipeDettailsQuery } from '../../../Rudux/feature/ApiSlice';
import toast, { Toaster } from 'react-hot-toast';

function ChefRecipesEditPage() {
  const location = useLocation();
  const { recipe } = location.state || {};
  const { id } = useParams();

  const { data: getRecipeDettails, isLoading: isFetching, isError, error } = useGetRecipeDettailsQuery(id);
  const [recipeUpdate, { isLoading: isSubmitting }] = useRecipeUpdateMutation();

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    image: '',
    imagePreview: '',
  });
  console.log('formData', formData);

  const [isBasicInfoEditable, setIsBasicInfoEditable] = useState(false);

  // Log getRecipeDettails to debug its structure
  useEffect(() => {
    console.log('getRecipeDettails:', getRecipeDettails);
  }, [getRecipeDettails]);

  // Populate formData when getRecipeDettails is available
  useEffect(() => {
    if (getRecipeDettails) {
      // Adjust these fields based on the actual structure of getRecipeDettails
      setFormData({
        title: getRecipeDettails.title || getRecipeDettails.data?.title || '',
        category: getRecipeDettails.category || getRecipeDettails.data?.category_name || getRecipeDettails.data?.category || '',
        description: getRecipeDettails.description || getRecipeDettails.data?.description || '',
        image: getRecipeDettails.image || getRecipeDettails.data?.image || '',
        imagePreview: getRecipeDettails.image || getRecipeDettails.data?.image
          ? `http://192.168.10.124:3000/${getRecipeDettails.image || getRecipeDettails.data?.image}`
          : '',
      });
    }
  }, [getRecipeDettails]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
   
  };



  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev) => ({
        ...prev,
        image: file,
        imagePreview: imageUrl,
      }));
    }
  };

  const handleBasicInfoSave = async () => {
    try {
      const form = new FormData();
      
      form.append('title', JSON.stringify(formData.title));
      form.append('category', JSON.stringify(formData.category));
      form.append('description', JSON.stringify(formData.description));
      if (formData.image instanceof File) {
        form.append('image', formData.image);

      }
     

      const res = await recipeUpdate({ id, form:form }).unwrap();
      console.log('Update response:', res);

      toast.success('Recipe updated successfully!');
      setIsBasicInfoEditable(false);
    } catch (error) {
      console.error(error);
      toast.error('Failed to update recipe.');
    }
  };

  if (isFetching) {
    return <div className="text-center py-10">Loading recipe...</div>;
  }

  if (isError) {
    return (
      <div className="text-center py-10 text-red-500">
        Error fetching recipe: {error?.message || 'Something went wrong'}
      </div>
    );
  }

  return (
    <div>
      <div className="px-12 lora">
        <h1 className="text-[34px] font-semibold text-[#5B21BD] my-2">Recipes Details View</h1>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-gray-200 p-4 rounded-2xl">
            <div>
              <label className="block text-xl font-medium text-[#5B21BD] mb-2">Recipe Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Classic Chocolate Soufflé"
                className={`w-full p-2 border bg-[#FFFFFF] border-[#CCBAEB] rounded-md focus:outline-none ${
                  !isBasicInfoEditable ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={!isBasicInfoEditable}
              />
            </div>

            <div>
              <label className="block text-xl font-medium text-[#5B21BD] mb-2">Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                placeholder="Type here category"
                className={`w-full p-2 border bg-[#FFFFFF] border-[#CCBAEB] rounded-md focus:outline-none ${
                  !isBasicInfoEditable ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={!isBasicInfoEditable}
              />
            </div>

            <div>
              <label className="block text-xl font-medium text-[#5B21BD] mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="A light and airy dessert with a molten center"
                className={`w-full p-2 border bg-[#FFFFFF] border-[#CCBAEB] rounded-md focus:outline-none h-24 resize-none ${
                  !isBasicInfoEditable ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={!isBasicInfoEditable}
              />
            </div>

            <div>
              <label className="block text-xl font-medium text-[#5B21BD] mb-2">Upload Image</label>
              <div className="w-full h-24 border bg-[#FFFFFF] border-[#CCBAEB] rounded-md flex items-center justify-center">
                {formData.imagePreview ? (
                  <img
                    src={formData.imagePreview}
                    className="max-h-full p-1 max-w-full object-contain"
                    alt="Recipe Preview"
                  />
                ) : (
                  <label
                    className={`cursor-pointer relative ${
                      !isBasicInfoEditable ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    <LuUpload className="text-[20px] text-[#5B21BD] absolute bottom-5 left-11" />
                    <span className="text-[#5B21BD]">Upload Image</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                      disabled={!isBasicInfoEditable}
                    />
                  </label>
                )}
              </div>
            </div>

            <div className="col-span-2 flex justify-end gap-4 mt-4">
              <button
                type="button"
                onClick={() => setIsBasicInfoEditable(true)}
                className="text-xl text-white bg-[#5B21BD] py-2 px-6 rounded-[10px] cursor-pointer"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={handleBasicInfoSave}
                disabled={isSubmitting}
                className={`text-xl text-white bg-[#5B21BD] py-2 px-6 rounded-[10px] cursor-pointer ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Saving...' : 'Save'}
              </button>
            </div>
          </div>
        </form>
      </div>
      <Toaster position="top-right" />
    </div>
  );
}

export default ChefRecipesEditPage;






// import React, { useState } from 'react';
// import { LuUpload, LuPlus, LuTrash2 } from 'react-icons/lu';
// import { useParams } from 'react-router-dom';
// import {  useRecipeUpdateMutation } from '../../../Rudux/feature/ApiSlice';
// import toast, { Toaster } from 'react-hot-toast';



 


// // Main Component
// function ChefRecipesEditPage() {
//   const { id } = useParams();
 
// const [recipeUpdate, { isLoading: isSubmitting }] = useRecipeUpdateMutation();

//   console.log('recipeupdte', recipeUpdate);

// const [formData, setFormData] = useState({
//   title: '',
//   category: '',
//   description: '',
//   image: '', // file or image path
//   imagePreview: '', // for preview purposes
// });

//   console.log('formData', formData);

//   // Only keep isBasicInfoEditable since section-level edit states are removed
//   const [isBasicInfoEditable, setIsBasicInfoEditable] = React.useState(false);

//   // Populate formData when recipeDetails is fetched


// const handleInputChange = (e) => {
//   const { name, value } = e.target;
//   setFormData((prev) => ({ ...prev, [name]: value }));
// };

// const handleFileChange = (e) => {
//   const file = e.target.files[0];
//   if (file) {
//     const imageUrl = URL.createObjectURL(file);
//     setFormData((prev) => ({
//       ...prev,
//       image: file,
//       imagePreview: imageUrl,
//     }));
//   }
// };


//   const handleIngredientChange = (index, field, value) => {
//     const updatedIngredients = [...formData.ingredients];
//     updatedIngredients[index][field] = value;
//     setFormData({ ...formData, ingredients: updatedIngredients });
//   };

//   const toggleIngredientEdit = async (index) => {
//     const updatedIngredients = [...formData.ingredients];
//     const isCurrentlyEditable = updatedIngredients[index].isEditable;
//     updatedIngredients[index].isEditable = !isCurrentlyEditable;
//     setFormData({ ...formData, ingredients: updatedIngredients });

//     // If switching from editable to non-editable, save the changes
//     if (isCurrentlyEditable) {
//       try {
//         const formDataToSend = new FormData();
//         formDataToSend.append('ingredients', JSON.stringify(formData.ingredients));
//         await recipeUpdate({ id, formData: formDataToSend }).unwrap();
//         toast.success('Ingredient updated successfully!');
//       } catch (err) {
//         console.error('Error updating ingredients:', err);
//         toast.error(err.data?.message || 'Failed to update ingredient. Please try again.');
//       }
//     }
//   };

//   const addIngredient = () => {
//     setFormData({
//       ...formData,
//       ingredients: [...formData.ingredients, { name: '', quantity: '', unit: '', isEditable: true }],
//     });
//   };

//   const deleteIngredient = (index) => {
//     const updatedIngredients = formData.ingredients.filter((_, i) => i !== index);
//     setFormData({ ...formData, ingredients: updatedIngredients });
//   };

//   const handleInstructionChange = (index,field, value) => {
//     const updatedInstructions = [...formData.instructions];
//     updatedInstructions[index][field].text = value;
//     setFormData({ ...formData, instructions: updatedInstructions });
//   };

//   const toggleInstructionEdit = async (index) => {
//     const updatedInstructions = [...formData.instructions];
//     const isCurrentlyEditable = updatedInstructions[index].isEditable;
//     updatedInstructions[index].isEditable = !isCurrentlyEditable;
//     setFormData({ ...formData, instructions: updatedInstructions });

//     // If switching from editable to non-editable, save the changes
//     if (isCurrentlyEditable) {
//       try {
//         const formDataToSend = new FormData();
//         formDataToSend.append('instructions', JSON.stringify(formData.instructions.map((i) => i.text)));
//         await recipeUpdate({ id, formData: formDataToSend }).unwrap();
//         toast.success('Instruction updated successfully!');
//       } catch (err) {
//         console.error('Error updating instructions:', err);
//         toast.error(err.data?.message || 'Failed to update instruction. Please try again.');
//       }
//     }
//   };

//   const addInstruction = () => {
//     setFormData({
//       ...formData,
//       instructions: [...formData.instructions, { text: '', isEditable: true }],
//     });
//   };

//   const deleteInstruction = (index) => {
//     const updatedInstructions = formData.instructions.filter((_, i) => i !== index);
//     setFormData({ ...formData, instructions: updatedInstructions });
//   };

//   const handleChefNoteChange = (index, value) => {
//     const updatedChefNotes = [...formData.chef_notes];
//     updatedChefNotes[index].text = value;
//     setFormData({ ...formData, chef_notes: updatedChefNotes });
//   };

//   const toggleChefNoteEdit = async (index) => {
//     const updatedChefNotes = [...formData.chef_notes];
//     const isCurrentlyEditable = updatedChefNotes[index].isEditable;
//     updatedChefNotes[index].isEditable = !isCurrentlyEditable;
//     setFormData({ ...formData, chef_notes: updatedChefNotes });

//     // If switching from editable to non-editable, save the changes
//     if (isCurrentlyEditable) {
//       try {
//         const formDataToSend = new FormData();
//         formDataToSend.append('chef_notes', JSON.stringify(formData.chef_notes.map((n) => n.text)));
//         await recipeUpdate({ id, formData: formDataToSend }).unwrap();
//         toast.success('Chef Note updated successfully!');
//       } catch (err) {
//         console.error('Error updating chef notes:', err);
//         toast.error(err.data?.message || 'Failed to update chef note. Please try again.');
//       }
//     }
//   };

//   const addChefNote = () => {
//     setFormData({
//       ...formData,
//       chef_notes: [...formData.chef_notes, { text: '', isEditable: true }],
//     });
//   };

//   const deleteChefNote = (index) => {
//     const updatedChefNotes = formData.chef_notes.filter((_, i) => i !== index);
//     setFormData({ ...formData, chef_notes: updatedChefNotes });
//   };

// const handleBasicInfoSave = async () => {
//   try {
//     const form = new FormData();
//     form.append('title', formData.title);
//     form.append('category', formData.category);
//     form.append('description', formData.description);
//     if (formData.image instanceof File) {
//       form.append('image', formData.image);
//     }

//     await recipeUpdate({ id: recipeId, data: form }).unwrap();

//     toast.success('Recipe updated successfully!');
//     setIsBasicInfoEditable(false);
//   } catch (error) {
//     console.error(error);
//     toast.error('Failed to update recipe.');
//   }
// };

//   console.log('formData', handleBasicInfoSave);

//   // Save handler for Ingredients section
//   const handleIngredientsSave = async (e) => {
//     e.preventDefault();
//     try {
//       const formDataToSend = new FormData();
//       formDataToSend.append('ingredients', JSON.stringify(formData.ingredients));
//       await recipeUpdate({ id, formData: formDataToSend }).unwrap();
//       toast.success('Ingredients updated successfully!');
//     } catch (err) {
//       console.error('Error updating ingredients:', err);
//       toast.error(err.data?.message || 'Failed to update ingredients. Please try again.');
//     }
//   };

//   // Save handler for Instructions section
//   const handleInstructionsSave = async (e) => {
//     e.preventDefault();
//     try {
//       const formDataToSend = new FormData();
//       formDataToSend.append('instructions', JSON.stringify(formData.instructions.map((i) => i.text)));
//       await recipeUpdate({ id, formData: formDataToSend }).unwrap();
//       toast.success('Instructions updated successfully!');
//     } catch (err) {
//       console.error('Error updating instructions:', err);
//       toast.error(err.data?.message || 'Failed to update instructions. Please try again.');
//     }
//   };

//   // Save handler for Chef's Notes section
//   const handleChefNotesSave = async (e) => {
//     e.preventDefault();
//     try {
//       const formDataToSend = new FormData();
//       formDataToSend.append('chef_notes', JSON.stringify(formData.chef_notes.map((n) => n.text)));
//       await recipeUpdate({ id, formData: formDataToSend }).unwrap();
//       toast.success('Chef Notes updated successfully!');
//     } catch (err) {
//       console.error('Error updating chef notes:', err);
//       toast.error(err.data?.message || 'Failed to update chef notes. Please try again.');
//     }
//   };

//   // Handle loading and error states


//   return (
//     <div>
//       <div className="px-12 lora">
//         <h1 className="text-[34px] font-semibold text-[#5B21BD] my-2">Recipes Details View</h1>
//         <form>
//           {/* Basic Info Section */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-gray-200 p-4 rounded-2xl">
//             <div>
//               <label className="block text-xl font-medium text-[#5B21BD] mb-2">Recipe Title</label>
//               <input
//                 type="text"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleInputChange}
//                 placeholder="Classic Chocolate Soufflé"
//                 className={`w-full p-2 border bg-[#FFFFFF] border-[#CCBAEB] rounded-md focus:outline-none ${!isBasicInfoEditable ? 'opacity-50 cursor-not-allowed' : ''}`}
//                 disabled={!isBasicInfoEditable}
//               />
//             </div>
//             <div>
//               <label className="block text-xl font-medium text-[#5B21BD] mb-2">Category</label>
//               <input
//                 type="text"
//                 name="title"
//                 value={formData.category}
//                 onChange={handleInputChange}
//                 placeholder="Type here category "
//                 className={`w-full p-2 border bg-[#FFFFFF] border-[#CCBAEB] rounded-md focus:outline-none ${!isBasicInfoEditable ? 'opacity-50 cursor-not-allowed' : ''}`}
//                 disabled={!isBasicInfoEditable}
//               />
//             </div>
           
//             <div>
//               <label className="block text-xl font-medium text-[#5B21BD] mb-2">Description</label>
//               <textarea
//                 name="description"
//                 value={formData.description}
//                 onChange={handleInputChange}
//                 placeholder="A light and airy dessert with a molten center"
//                 className={`w-full p-2 border bg-[#FFFFFF] border-[#CCBAEB] rounded-md focus:outline-none h-24 resize-none ${!isBasicInfoEditable ? 'opacity-50 cursor-not-allowed' : ''}`}
//                 disabled={!isBasicInfoEditable}
//               />
//             </div>
//             <div>
//               <label className="block text-xl font-medium text-[#5B21BD] mb-2">Upload Image</label>
//               <div className="w-full h-24 border bg-[#FFFFFF] border-[#CCBAEB] rounded-md flex items-center justify-center resize-none">
//                 {formData.imagePreview ? (
//                   <img
//                     // src={formData.imagePreview}
//                      src={`http://192.168.10.124:3000/${formData.imagePreview}`}
//                     alt="Uploaded Preview"
//                     className="max-h-full p-1 max-w-full object-contain"
//                   />
//                 ) : (
//                   <label className={`cursor-pointer relative ${!isBasicInfoEditable ? 'opacity-50 cursor-not-allowed' : ''}`}>
//                     <LuUpload className="text-[20px] text-[#5B21BD] absolute bottom-5 left-11" />
//                     <span className="text-[#5B21BD]">Upload Image</span>
//                     <input
//                       type="file"
//                       accept="image/*"
//                       onChange={handleFileChange}
//                       className="hidden"
//                       disabled={!isBasicInfoEditable}
//                     />
//                   </label>
//                 )}
//               </div>
//             </div>
//             <div className="col-span-2 flex justify-end gap-4 mt-4">
//               <button
//                 type="button"
//                 onClick={() => setIsBasicInfoEditable(true)}
//                 className="text-xl text-white bg-[#5B21BD] py-2 px-6 rounded-[10px] cursor-pointer"
//               >
//                 Edit
//               </button>
//               <button
//                 type="button"
//                 onClick={handleBasicInfoSave}
//                 disabled={isSubmitting}
//                 className={`text-xl text-white bg-[#5B21BD] py-2 px-6 rounded-[10px] cursor-pointer ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
//               >
//                 {isSubmitting ? 'Saving...' : 'Save'}
//               </button>
//             </div>
//           </div>

//           {/* Ingredients */}
//           <div className="border border-gray-200 p-4 rounded-2xl mt-6">
//             <div className="flex justify-between items-center">
//               <h2 className="text-xl font-semibold text-[#5B21BD] py-4">Recipe Ingredients</h2>
//               <LuPlus
//                 onClick={addIngredient}
//                 className="text-[#5B21BD] cursor-pointer text-2xl"
//               />
//             </div>
//             {formData.ingredients.map((ingredient, index) => (
//               <div key={index} className="flex text-[#999999] gap-4 my-6 items-center">
//                 <input
//                   type="text"
//                   value={ingredient.name}
//                   onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
//                   placeholder="Dark chocolate"
//                   className="w-[40%] border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3"
//                   disabled={!ingredient.isEditable}
//                 />
//                 <input
//                   type="text"
//                   value={ingredient.quantity}
//                   onChange={(e) => handleIngredientChange(index, 'quantity', e.target.value)}
//                   placeholder="200g"
//                   className="w-[20%] border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] text-center py-3 px-3"
//                   disabled={!ingredient.isEditable}
//                 />
//                 <input
//                   type="text"
//                   value={ingredient.unit}
//                   onChange={(e) => handleIngredientChange(index, 'unit', e.target.value)}
//                   placeholder="70% cocoa solids"
//                   className="w-[40%] border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3"
//                   disabled={!ingredient.isEditable}
//                 />
//                 <button
//                   type="button"
//                   onClick={() => toggleIngredientEdit(index)}
//                   className="text-sm text-white bg-[#5B21BD] w-14 py-3 rounded-[6px] cursor-pointer"
//                 >
//                   {ingredient.isEditable ? 'Save' : 'Edit'}
//                 </button>
//                 <LuTrash2
//                   onClick={() => deleteIngredient(index)}
//                   className="text-[#FF0000] cursor-pointer text-xl border rounded size-10 p-2"
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Instructions */}
//           <div className="border border-gray-200 p-4 rounded-2xl mt-6">
//             <div className="flex justify-between items-center">
//               <h2 className="text-xl font-semibold text-[#5B21BD] py-4">Instructions:</h2>
//               <LuPlus
//                 onClick={addInstruction}
//                 className="text-[#5B21BD] cursor-pointer text-2xl"
//               />
//             </div>
//             {formData.instructions.map((instruction, index) => (
//               <div key={index} className="flex items-center gap-4 my-6">
//                 <p className="text-[#999999]">{index + 1}.</p>
//                 <input
//                   type="text"
//                   value={instruction.text}
//                   onChange={(e) => handleInstructionChange(index, e.target.value)}
//                   placeholder="Combine flour, butter, and sugar in a processor..."
//                   className="w-full border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3 text-[#999999]"
//                   disabled={!instruction.isEditable}
//                 />
//                 <button
//                   type="button"
//                   onClick={() => toggleInstructionEdit(index)}
//                   className="text-sm text-white bg-[#5B21BD] w-14 py-3 rounded-[6px] cursor-pointer"
//                 >
//                   {instruction.isEditable ? 'Save' : 'Edit'}
//                 </button>
//                 <LuTrash2
//                   onClick={() => deleteInstruction(index)}
//                   className="text-[#FF0000] cursor-pointer text-xl border rounded size-10 p-2"
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Chef's Notes */}

//           <div className="border border-gray-200 p-4 rounded-2xl mt-6">
//             <div className="flex justify-between items-center">
//               <h2 className="text-xl font-semibold text-[#5B21BD] py-4">Chef's Note:</h2>
//               <LuPlus
//                 onClick={addChefNote}
//                 className="text-[#5B21BD] cursor-pointer text-2xl"
//               />
//             </div>
//             {formData.chef_notes.map((note, index) => (
//               <div key={index} className="flex items-center gap-4 my-6">
//                 <p className="text-[#999999]">{index + 1}.</p>
//                 <input
//                   type="text"
//                   value={note.text}
//                   onChange={(e) => handleChefNoteChange(index, e.target.value)}
//                   placeholder="Use fresh eggs for better rise..."
//                   className="w-full border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3 text-[#999999]"
//                   disabled={!note.isEditable}
//                 />
//                 <button
//                   type="button"
//                   onClick={() => toggleChefNoteEdit(index)}
//                   className="text-sm text-white bg-[#5B21BD] w-14 py-3 rounded-[6px] cursor-pointer"
//                 >
//                   {note.isEditable ? 'Save' : 'Edit'}
//                 </button>
//                 <LuTrash2
//                   onClick={() => deleteChefNote(index)}
//                   className="text-[#FF0000] cursor-pointer border text-xl size-10 p-2"
//                 />
//               </div>
//             ))}
//           </div>
//         </form>
//       </div>
//       <Toaster position="top-right" />
//     </div>
//   );
// }

// export default ChefRecipesEditPage;


