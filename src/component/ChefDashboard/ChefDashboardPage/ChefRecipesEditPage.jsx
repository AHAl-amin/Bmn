

import React from 'react';
import { LuUpload, LuChevronDown, LuPlus, LuTrash2 } from 'react-icons/lu';
import { Link, useParams } from 'react-router-dom'; // Import useParams
import { useGetCategoryListQuery, useGetRecipeDettailsQuery, useRecipeCreateMutation, useRecipeUpdateMutation } from '../../../Rudux/feature/ApiSlice';
import toast, { Toaster } from 'react-hot-toast';

// Reusable Category Dropdown Component
const CategoryDropdown = ({ formData, setFormData, isEditable }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { data: categoryList, isLoading, isError } = useGetCategoryListQuery();

  const categories = categoryList?.data || [];

  const handleSelect = (category) => {
    const { id, name } = category;
    setFormData({ ...formData, category: name, categoryID: id });
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <label className="block text-xl font-medium text-[#5B21BD] mb-2">Category</label>
      <div
        onClick={() => isEditable && setIsOpen(!isOpen)}
        className={`cursor-pointer p-2 border border-[#CCBAEB] bg-white rounded-md flex justify-between items-center ${!isEditable ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <span className="text-[#333]">{formData.category || 'Select Category'}</span>
        <LuChevronDown className="text-[#5B21BD]" />
      </div>

      {isOpen && isEditable && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-[#CCBAEB] rounded-md shadow-md max-h-60 overflow-y-auto">
          {categories.map((item) => (
            <li
              key={item.id}
              onClick={() => handleSelect(item)}
              className="px-4 py-2 text-[#333] hover:bg-gray-100 cursor-pointer"
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Main Component
function ChefRecipesEditPage() {
  const { id } = useParams(); // Extract the ID from the URL
  const { data: recipeDetails, isLoading, isError } = useGetRecipeDettailsQuery(id);
  console.log("dsdfsfsdfdsf",recipeDetails) // Pass the ID to the query

  const [formData, setFormData] = React.useState({
    title: '',
    category: '',
    categoryID: '',
    description: '',
    image: null,
    imagePreview: null,
    ingredients: [{ name: '', quantity: '', unit: '', isEditable: false }],
    instructions: [{ text: '', isEditable: false }],
    chef_notes: [{ text: '', isEditable: false }],
  });

  const [isSectionEditable, setIsSectionEditable] = React.useState(false);
  const [recipeCreate, { isLoading: isSubmitting }] = useRecipeCreateMutation();
  const [recipeUpdate] = useRecipeUpdateMutation();
  console.log("asdfdsfsdf",recipeCreate)

  // Populate formData when recipeDetails is fetched
  React.useEffect(() => {
    if (recipeDetails?.data) {
      const { title, category, category_id, description, image, ingredients, instructions, chef_notes } = recipeDetails.data;
      setFormData({
        title: title || '',
        category: category || '',
        categoryID: category_id || '',
        description: description || '',
        image: null, // Image is handled separately for uploads
        imagePreview: image || null,
        ingredients: ingredients?.length
          ? ingredients.map((item) => ({ ...item, isEditable: false }))
          : [{ name: '', quantity: '', unit: '', isEditable: false }],
        instructions: instructions?.length
          ? instructions.map((item) => ({ text: item, isEditable: false }))
          : [{ text: '', isEditable: false }],
        chef_notes: chef_notes?.length
          ? chef_notes.map((item) => ({ text: item, isEditable: false }))
          : [{ text: '', isEditable: false }],
      });
    }
  }, [recipeDetails]);
  console.log(formData,"bla bla bla")

  const handleInputChange = (e) => {
    if (!isSectionEditable) return;
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    if (!isSectionEditable) return;
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: file,
        imagePreview: URL.createObjectURL(file),
      });
    }
  };

  const handleIngredientChange = (index, field, value) => {
    const updatedIngredients = [...formData.ingredients];
    updatedIngredients[index][field] = value;
    setFormData({ ...formData, ingredients: updatedIngredients });
  };

  const toggleIngredientEdit = (index) => {
    const updatedIngredients = [...formData.ingredients];
    updatedIngredients[index].isEditable = !updatedIngredients[index].isEditable;
    setFormData({ ...formData, ingredients: updatedIngredients });
  };

  const addIngredient = () => {
    setFormData({
      ...formData,
      ingredients: [...formData.ingredients, { name: '', quantity: '', unit: '', isEditable: true }],
    });
  };

  const deleteIngredient = (index) => {
    const updatedIngredients = formData.ingredients.filter((_, i) => i !== index);
    setFormData({ ...formData, ingredients: updatedIngredients });
  };

  const handleInstructionChange = (index, value) => {
    const updatedInstructions = [...formData.instructions];
    updatedInstructions[index].text = value;
    setFormData({ ...formData, instructions: updatedInstructions });
  };

  const toggleInstructionEdit = (index) => {
    const updatedInstructions = [...formData.instructions];
    updatedInstructions[index].isEditable = !updatedInstructions[index].isEditable;
    setFormData({ ...formData, instructions: updatedInstructions });
  };

  const addInstruction = () => {
    setFormData({
      ...formData,
      instructions: [...formData.instructions, { text: '', isEditable: true }],
    });
  };

  const deleteInstruction = (index) => {
    const updatedInstructions = formData.instructions.filter((_, i) => i !== index);
    setFormData({ ...formData, instructions: updatedInstructions });
  };

  const handleChefNoteChange = (index, value) => {
    const updatedChefNotes = [...formData.chef_notes];
    updatedChefNotes[index].text = value;
    setFormData({ ...formData, chef_notes: updatedChefNotes });
  };

  const toggleChefNoteEdit = (index) => {
    const updatedChefNotes = [...formData.chef_notes];
    updatedChefNotes[index].isEditable = !updatedChefNotes[index].isEditable;
    setFormData({ ...formData, chef_notes: updatedChefNotes });
  };

  const addChefNote = () => {
    setFormData({
      ...formData,
      chef_notes: [...formData.chef_notes, { text: '', isEditable: true }],
    });
  };

  const deleteChefNote = (index) => {
    const updatedChefNotes = formData.chef_notes.filter((_, i) => i !== index);
    setFormData({ ...formData, chef_notes: updatedChefNotes });
  };

  const handleSectionSave = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('category', formData.categoryID);
      formDataToSend.append('description', formData.description);
      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }

      const response = await recipeUpdate({ id, data: formDataToSend }).unwrap(); // Pass ID to update
      toast.success('Section updated successfully!');
      setIsSectionEditable(false);
      if (formData.imagePreview) {
        URL.revokeObjectURL(formData.imagePreview);
      }
    } catch (err) {
      console.error('Error updating section:', err);
      toast.error(err.data?.message || 'Failed to update section. Please try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('category', formData.category_name);
      formDataToSend.append('description', formData.description);
      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }
      formDataToSend.append('ingredients', JSON.stringify(formData.ingredients));
      formDataToSend.append('instructions', JSON.stringify(formData.instructions));
      formDataToSend.append('chef_notes', JSON.stringify(formData.chef_notes));

      const response = await recipeCreate(formDataToSend).unwrap();
      toast.success('Recipe created successfully!');
      if (formData.imagePreview) {
        URL.revokeObjectURL(formData.imagePreview);
      }
      setFormData({
        title: '',
        category: '',
        categoryID: '',
        description: '',
        image: null,
        imagePreview: null,
        ingredients: [{ name: '', quantity: '', unit: '', isEditable: false }],
        instructions: [{ text: '', isEditable: false }],
        chef_notes: [{ text: '', isEditable: false }],
      });
    } catch (err) {
      console.error('Error creating recipe:', err);
      toast.error(err.data?.message || 'Failed to create recipe. Please try again.');
    }
  };

  // Handle loading and error states
  if (isLoading) return <div>Loading recipe details...</div>;
  if (isError) return <div>Error fetching recipe details. Please try again.</div>;

  return (
    <div>
      <div className="px-12 lora">
        <h1 className="text-[34px] font-semibold text-[#5B21BD] my-2">Recipes Details View</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-gray-200 p-4 rounded-2xl">
            <div>
              <label className="block text-xl font-medium text-[#5B21BD] mb-2">Recipe Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Classic Chocolate Soufflé"
                className={`w-full p-2 border bg-[#FFFFFF] border-[#CCBAEB] rounded-md focus:outline-none ${!isSectionEditable ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={!isSectionEditable}
              />
            </div>
            <CategoryDropdown formData={formData} setFormData={setFormData} isEditable={isSectionEditable} />
            <div>
              <label className="block text-xl font-medium text-[#5B21BD] mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="A light and airy dessert with a molten center"
                className={`w-full p-2 border bg-[#FFFFFF] border-[#CCBAEB] rounded-md focus:outline-none h-24 resize-none ${!isSectionEditable ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={!isSectionEditable}
              />
            </div>
            <div>
              <label className="block text-xl font-medium text-[#5B21BD] mb-2">Upload Image</label>
              <div className="w-full h-24 border bg-[#FFFFFF] border-[#CCBAEB] rounded-md flex items-center justify-center resize-none">
                {formData.imagePreview ? (
                  <img
                    src={formData.imagePreview}
                    alt="Uploaded Preview"
                    className="max-h-full p-1 max-w-full object-contain"
                  />
                ) : (
                  <label className={`cursor-pointer relative ${!isSectionEditable ? 'opacity-50 cursor-not-allowed' : ''}`}>
                    <LuUpload className="text-[20px] text-[#5B21BD] absolute bottom-5 left-11" />
                    <span className="text-[#5B21BD]">Upload Image</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                      disabled={!isSectionEditable}
                    />
                  </label>
                )}
              </div>
            </div>
            <div className="col-span-2 flex justify-end gap-4 mt-4">
              <button
                type="button"
                onClick={() => setIsSectionEditable(true)}
                className="text-xl text-white bg-[#5B21BD] py-2 px-6 rounded-[10px] cursor-pointer"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={handleSectionSave}
                disabled={isSubmitting}
                className={`text-xl text-white bg-[#5B21BD] py-2 px-6 rounded-[10px] cursor-pointer ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Saving...' : 'Save'}
              </button>
            </div>
          </div>
          {/* Ingredients */}
          <div className="border border-gray-200 p-4 rounded-2xl mt-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-[#5B21BD] py-4">Recipe Ingredients</h2>
              <LuPlus onClick={addIngredient} className="text-[#5B21BD] cursor-pointer text-2xl" />
            </div>
            {formData.ingredients.map((ingredient, index) => (
              <div key={index} className="flex text-[#999999] gap-4 my-6 items-center">
                <input
                  type="text"
                  value={ingredient.name}
                  onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
                  placeholder="Dark chocolate"
                  className="w-[40%] border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3"
                  disabled={!ingredient.isEditable}
                />
                <input
                  type="text"
                  value={ingredient.quantity}
                  onChange={(e) => handleIngredientChange(index, 'quantity', e.target.value)}
                  placeholder="200g"
                  className="w-[20%] border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] text-center py-3 px-3"
                  disabled={!ingredient.isEditable}
                />
                <input
                  type="text"
                  value={ingredient.unit}
                  onChange={(e) => handleIngredientChange(index, 'unit', e.target.value)}
                  placeholder="70% cocoa solids"
                  className="w-[40%] border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3"
                  disabled={!ingredient.isEditable}
                />
                <button
                  type="button"
                  onClick={() => toggleIngredientEdit(index)}
                  className="text-sm text-white bg-[#5B21BD] w-14 py-3 rounded-[6px] cursor-pointer"
                >
                  {ingredient.isEditable ? 'Save' : 'Edit'}
                </button>
                <LuTrash2
                  onClick={() => deleteIngredient(index)}
                  className="text-[#FF0000] cursor-pointer text-xl border rounded size-10 p-2"
                />
              </div>
            ))}
          </div>
          {/* Instructions */}
          <div className="border border-gray-200 p-4 rounded-2xl mt-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-[#5B21BD] py-4">Instructions:</h2>
              <LuPlus onClick={addInstruction} className="text-[#5B21BD] cursor-pointer text-2xl" />
            </div>
            {formData.instructions.map((instruction, index) => (
              <div key={index} className="flex items-center gap-4 my-6">
                <p className="text-[#999999]">{index + 1}.</p>
                <input
                  type="text"
                  value={instruction.text}
                  onChange={(e) => handleInstructionChange(index, e.target.value)}
                  placeholder="Combine flour, butter, and sugar in a processor..."
                  className="w-full border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3 text-[#999999]"
                  disabled={!instruction.isEditable}
                />
                <button
                  type="button"
                  onClick={() => toggleInstructionEdit(index)}
                  className="text-sm text-white bg-[#5B21BD] w-14 py-3 rounded-[6px] cursor-pointer"
                >
                  {instruction.isEditable ? 'Save' : 'Edit'}
                </button>
                <LuTrash2
                  onClick={() => deleteInstruction(index)}
                  className="text-[#FF0000] cursor-pointer text-xl border rounded size-10 p-2"
                />
              </div>
            ))}
          </div>
          {/* Chef's Notes */}
          <div className="border border-gray-200 p-4 rounded-2xl mt-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-[#5B21BD] py-4">Chef's Note:</h2>
              <LuPlus onClick={addChefNote} className="text-[#5B21BD] cursor-pointer text-2xl" />
            </div>
            {formData.chef_notes.map((note, index) => (
              <div key={index} className="flex items-center gap-4 my-6">
                <p className="text-[#999999]">{index + 1}.</p>
                <input
                  type="text"
                  value={note.text}
                  onChange={(e) => handleChefNoteChange(index, e.target.value)}
                  placeholder="Use fresh eggs for better rise..."
                  className="w-full border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3 text-[#999999]"
                  disabled={!note.isEditable}
                />
                <button
                  type="button"
                  onClick={() => toggleChefNoteEdit(index)}
                  className="text-sm text-white bg-[#5B21BD] w-14 py-3 rounded-[6px] cursor-pointer"
                >
                  {note.isEditable ? 'Save' : 'Edit'}
                </button>
                <LuTrash2
                  onClick={() => deleteChefNote(index)}
                  className="text-[#FF0000] cursor-pointer border text-xl size-10 p-2"
                />
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center my-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`text-xl text-white bg-[#5B21BD] py-2 px-6 rounded-[10px] cursor-pointer ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Recipe'}
            </button>
            <div>
              <Link
                to={`/chef_dashboard/chef_recipese_edit_page/${id}`} // Dynamic route with ID
                className="text-xl text-white bg-[#5B21BD] py-2 px-6 rounded-[10px] ml-12 cursor-pointer"
              >
                Edit
              </Link>
            </div>
          </div>
        </form>
      </div>
      <Toaster position="top-right" />
    </div>
  );
}

export default ChefRecipesEditPage;



