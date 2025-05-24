
import { useState } from 'react';
import { LuPlus, LuUpload } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { useGetCategoryListQuery, useRecipeCreateMutation } from '../../../Rudux/feature/ApiSlice';
import { useForm, useFieldArray } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

function ChefRecipesAddpage() {
    const [recipeCreate] = useRecipeCreateMutation();
    const { data: categoryList, isLoading, error } = useGetCategoryListQuery();
    const [isEditingIngredients, setIsEditingIngredients] = useState(false);
    const [isEditingInstructions, setIsEditingInstructions] = useState(false);
    const [isEditingNotes, setIsEditingNotes] = useState(false);
    console.log(categoryList, "Category List Data");

    const { register, control, handleSubmit, setValue, watch } = useForm({
        defaultValues: {
            title: '',
            category: '',
            description: '',
            image: null,
            ingredients: [],
            instructions: [],
            chefNotes: [],
        },
    });

    const {
        fields: ingredients,
        append: appendIngredient,
    } = useFieldArray({ control, name: 'ingredients' });

    const {
        fields: instructions,
        append: appendInstruction,
    } = useFieldArray({ control, name: 'instructions' });

    const {
        fields: chefNotes,
        append: appendNote,
    } = useFieldArray({ control, name: 'chefNotes' });

    const imageFile = watch('image');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setValue('image', file);
        }
    };

    const handleAddIngredient = () => {
        const newId = ingredients.length ? ingredients[ingredients.length - 1].id + 1 : 1;
        appendIngredient({ id: newId, name: '', quantity: '', unit: '' });
        setIsEditingIngredients(true);
    };

    const handleAddInstruction = () => {
        const newId = instructions.length ? instructions[instructions.length - 1].id + 1 : 1;
        appendInstruction({ id: newId, text: '' });
        setIsEditingInstructions(true);
    };

    const handleAddNote = () => {
        const newId = chefNotes.length ? chefNotes[chefNotes.length - 1].id + 1 : 1;
        appendNote({ id: newId, text: '' });
        setIsEditingNotes(true);
    };

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('category', data.category);
        formData.append('description', data.description);
        if (data.image) {
            formData.append('image', data.image);
        }
        console.log('Ingredients:', data.ingredients);

        console.log('Instructions:', data.instructions);
        console.log('Chef Notes:', data.chefNotes); 
        console.log('category:', data.category);
        
     

        formData.append('ingredients', JSON.stringify(data.ingredients));
        formData.append('instructions', JSON.stringify(data.instructions));           
        formData.append('chef_notes', JSON.stringify(data.chefNotes));

        formData.forEach((value, key) => {
            console.log("value:", value, "key:", key);
        });


        try {
            const response = await recipeCreate(formData).unwrap();
            toast.success('Recipe created successfully!', { position: 'top-right' });
            console.log('Recipe created successfully:', response);
        } catch (error) {
            toast.error('Failed to create recipe. Please try again.', { position: 'top-right' });
            console.error(error);
        }
    };

    return (
        <div>
            <div className="px-12 py-6 lora">
                <h1 className="text-[34px] font-semibold text-[#5B21BD] my-2">Recipes Details View</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xl font-medium text-[#5B21BD] mb-2">Recipe Title</label>
                            <input
                                type="text"
                                {...register('title', { required: true })}
                                placeholder="Classic Chocolate Soufflé"
                                className="w-full p-2 border bg-[#FFFFFF] border-[#CCBAEB] rounded-md"
                            />
                        </div>

                        <div>
                            <label className="block text-xl font-medium text-[#5B21BD] mb-2">Category</label>
                            <select
                                {...register('category', { required: true })}
                                className="w-full p-2 border bg-[#FFFFFF] border-[#CCBAEB] text-[#999999] rounded-md"
                            >
                                {isLoading ? (
                                    <option value="">Loading...</option>
                                ) : error ? (
                                    <option value="">Error loading categories</option>
                                ) : categoryList?.data?.length > 0 ? (
                                    categoryList.data.map((category) => (
                                        <option key={category.id} value={category.id}>
                                            {category.name}
                                        </option>
                                    ))
                                ) : (
                                    <option value="">No categories available</option>
                                )}
                            </select>
                        </div>

                        <div>
                            <label className="block text-xl font-medium text-[#5B21BD] mb-2">Description</label>
                            <textarea
                                {...register('description')}
                                placeholder="A light and airy dessert with a molten center"
                                className="w-full p-2 border bg-[#FFFFFF] border-[#CCBAEB] rounded-md h-24 resize-none"
                            />
                        </div>

                        <div>
                            <label className="block text-xl font-medium text-[#5B21BD] mb-2">Upload Image</label>
                            <div className="w-full h-24 border bg-[#FFFFFF] border-[#CCBAEB] rounded-md flex items-center justify-center">
                                {imageFile ? (
                                    <img src={URL.createObjectURL(imageFile)} alt="Uploaded Preview" className="max-h-full max-w-full object-contain" />
                                ) : (
                                    <label className="cursor-pointer relative">
                                        <LuUpload className="text-[20px] text-[#5B21BD] absolute bottom-5 left-11" />
                                        <span className="text-[#5B21BD]">Upload Image</span>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleFileChange}
                                            className="hidden"
                                        />
                                    </label>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Ingredients Section */}
                    <div className='border border-gray-200 p-4 rounded-2xl'>
                        <div className='flex justify-between mb-2'>
                            <h2 className="text-xl font-semibold text-[#5B21BD] py-4">Recipe Ingredients</h2>
                            <button type="button" onClick={handleAddIngredient} className="text-xl border border-[#5B21BD] text-[#5B21BD] px-2 h-10 rounded-[10px] flex items-center">
                                <LuPlus />
                            </button>
                        </div>
                        <div className="space-y-6 text-[#999999]">
                            {ingredients.map((ingredient, index) => (
                                <div key={ingredient.id} className="flex gap-6">
                                    <input
                                        type="text"
                                        {...register(`ingredients[${index}].name`, { required: true })}
                                        placeholder="Ingredient name"
                                        className="w-[40%] border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3"
                                    />
                                    <input
                                        type="text"
                                        {...register(`ingredients[${index}].quantity`, { required: true })}
                                        placeholder="Quantity"
                                        className="w-[20%] border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] text-center py-3 px-3"
                                    />
                                    <input
                                        type="text"
                                        {...register(`ingredients[${index}].unit`, { required: true })}
                                        placeholder="Unit (e.g., grams, cups)"
                                        className="w-[40%] border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Instructions Section */}
                    <div className='border border-gray-200 p-4 rounded-2xl'>
                        <div className='flex justify-between mb-2'>
                            <h2 className="text-xl font-semibold text-[#5B21BD] py-4">Instructions</h2>
                            <button type="button" onClick={handleAddInstruction} className="text-xl border border-[#5B21BD] text-[#5B21BD] px-2 h-10 rounded-[10px] flex items-center">
                                <LuPlus />
                            </button>
                        </div>
                        <div className="space-y-6 text-[#999999]">
                            {instructions.map((instruction, index) => (
                                <div key={instruction.id} className="flex gap-6">
                                    <textarea
                                        {...register(`instructions[${index}].text`, { required: true })}
                                        placeholder="Enter instruction"
                                        className="w-full border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] pl-2 pt-2 resize-none"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Chef Notes Section */}
                    <div className='border border-gray-200 p-4 rounded-2xl'>
                        <div className='flex justify-between mb-2'>
                            <h2 className="text-xl font-semibold text-[#5B21BD] py-4">Chef's Note</h2>
                            <button type="button" onClick={handleAddNote} className="text-xl border border-[#5B21BD] text-[#5B21BD] px-2 h-10 rounded-[10px] flex items-center">
                                <LuPlus />
                            </button>
                        </div>
                        <div className="space-y-6 text-[#999999]">
                            {chefNotes.map((note, index) => (
                                <div key={note.id} className="flex gap-6">
                                    <textarea
                                        {...register(`chefNotes[${index}].text`)}
                                        placeholder="Enter chef's note"
                                        className="w-full border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] pl-2 pt-2 resize-none"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-x-4 mt-10">
                        <button type="submit" className="text-xl text-white bg-[#5B21BD] py-2 px-5 rounded-[10px]">
                            Submit
                        </button>
                        <Link to="/chef_dashboard/ai_training" className="text-xl text-white bg-[#5B21BD] py-2 px-5 rounded-[10px]">
                            Next
                        </Link>
                    </div>
                </form>
            </div>
            <Toaster position='top-right' />
        </div>
    );
}

export default ChefRecipesAddpage;


// import { useState } from 'react';
// import { LuPlus, LuUpload } from 'react-icons/lu';
// import { Link } from 'react-router-dom';
// import { useGetCategoryListQuery, useRecipeCreateMutation } from '../../../Rudux/feature/ApiSlice';
// import { useForm, useFieldArray } from 'react-hook-form';
// import toast, { Toaster } from 'react-hot-toast';

// function ChefRecipesAddpage() {
//     const [recipeCreate] = useRecipeCreateMutation();
//     const { data: categoryList, isLoading, error } = useGetCategoryListQuery();
//     console.log(categoryList, "65654");
//     const [isEditingIngredients, setIsEditingIngredients] = useState(false);
//     const [isEditingInstructions, setIsEditingInstructions] = useState(false);
//     const [isEditingNotes, setIsEditingNotes] = useState(false);

//     const { register, control, handleSubmit, setValue, watch } = useForm({
//         defaultValues: {
//             title: '',
//             category: '',
//             description: '',
//             image: null,
//             ingredients: [],
//             instructions: [],
//             chefNotes: [],
//         },
//     });

//     const {
//         fields: ingredients,
//         append: appendIngredient,
//     } = useFieldArray({
//         control,
//         name: 'ingredients',
//     });

//     const {
//         fields: instructions,
//         append: appendInstruction,
//     } = useFieldArray({
//         control,
//         name: 'instructions',
//     });

//     const {
//         fields: chefNotes,
//         append: appendNote,
//     } = useFieldArray({
//         control,
//         name: 'chefNotes',
//     });

//     const imageFile = watch('image');

//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setValue('image', file); // Store the actual file object
//         }
//     };

//     const handleAddIngredient = () => {
//         const newId = ingredients.length ? ingredients[ingredients.length - 1].id + 1 : 1;
//         appendIngredient({ id: newId, name: '', quantity: '', details: '' });
//         setIsEditingIngredients(true);
//     };

//     const handleAddInstruction = () => {
//         const newId = instructions.length ? instructions[instructions.length - 1].id + 1 : 1;
//         appendInstruction({ id: newId, text: '' });
//         setIsEditingInstructions(true);
//     };

//     const handleAddNote = () => {
//         const newId = chefNotes.length ? chefNotes[chefNotes.length - 1].id + 1 : 1;
//         appendNote({ id: newId, text: '' });
//         setIsEditingNotes(true);
//     };


  



//     const onSubmit = async (data) => {
//         console.log('Form Data description:', data);
//         const formData = new FormData();

//         formData.append('title', data.title);
//         formData.append('category', data.category);
//         formData.append('description', data.description);

//         if (data.image) {
//             formData.append('image', data.image);
//         }


//         // Ingredients with name, quantity, unit
//         data.ingredients.forEach((ing, index) => {
//             formData.append(`ingredients[${index}][name]`, ing.name);
//             formData.append(`ingredients[${index}][quantity]`, ing.quantity);
//             formData.append(`ingredients[${index}][unit]`, ing.unit);
//             // default to empty string if not provided
//             console.log('Ingredients:', ing.name, ing.quantity, ing.unit);
//         });
//         // console.log('Ingredients:', data.ingredients);

//         // Instructions array
//         data.instructions.forEach((ins, index) => {
//             formData.append(`instructions[${index}][text]`, ins.text);
//         });

//         // Chef notes array
//         data.chefNotes.forEach((note, index) => {
//             formData.append(`chef_notes[${index}][text]`, note.text);
//         });
//         //    formData.forEach((item, index) => {
//         // console.log( "item:",item, "index:",index);    
//         // });
        
//         // try {
//         //     const response = await recipeCreate(formData).unwrap();
//         //     console.log('Recipe created successfully:', response);
//         //     toast.success('Recipe created successfully!', { position: 'top-right' });
//         // } catch (error) {
//         //     console.error(error);
//         //     toast.error('Failed to create recipe. Please try again.', { position: 'top-right' });
//         // }

        
//     };

//     return (
//         <div>
//             <div className="px-12 py-6 lora">
//                 <h1 className="text-[34px] font-semibold text-[#5B21BD] my-2">Recipes Details View</h1>
//                 <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         {/* Left Side */}
//                         <div>
//                             <label className="block text-xl font-medium text-[#5B21BD] mb-2">Recipe Title</label>
//                             <input
//                                 type="text"
//                                 {...register('title')}
//                                 placeholder="Classic Chocolate Soufflé"
//                                 className="w-full p-2 border bg-[#FFFFFF] border-[#CCBAEB] rounded-md focus:outline-none focus:ring-2"
//                             />
//                         </div>

//                         <div>
//                             <label className="block text-xl font-medium text-[#5B21BD] mb-2">Category</label>
//                             <select
//                                 {...register('category')}
//                                 className="w-full p-2 border bg-[#FFFFFF] border-[#CCBAEB] text-[#999999] rounded-md focus:outline-none focus:ring-2"
//                             >
//                                 {isLoading ? (
//                                     <option value="">Loading...</option>
//                                 ) : error ? (
//                                     <option value="">Error loading categories</option>
//                                 ) : categoryList?.data?.length > 0 ? (
//                                     categoryList.data.map((category) => (
//                                         <option key={category.id} value={category.id}>
//                                             {category.name}
//                                         </option>
//                                     ))
//                                 ) : (
//                                     <option value="">No categories available</option>
//                                 )}
//                             </select>
//                         </div>

//                         <div>
//                             <label className="block text-xl font-medium text-[#5B21BD] mb-2">Description</label>
//                             <textarea
//                                 {...register('description')}
//                                 placeholder="A light and airy dessert with a molten center"
//                                 className="w-full p-2 border bg-[#FFFFFF] border-[#CCBAEB] rounded-md focus:outline-none focus:ring-2 h-24 resize-none"
//                             />
//                         </div>

//                         {/* Right Side */}
//                         <div>
//                             <label className="block text-xl font-medium text-[#5B21BD] mb-2">Upload Image</label>
//                             <div className="w-full h-24 border bg-[#FFFFFF] border-[#CCBAEB] rounded-md flex items-center justify-center">
//                                 {imageFile ? (
//                                     <img src={URL.createObjectURL(imageFile)} alt="Uploaded Preview" className="max-h-full max-w-full object-contain" />
//                                 ) : (
//                                     <label className="cursor-pointer relative">
//                                         <LuUpload className="text-[20px] text-[#5B21BD] absolute bottom-5 left-11" />
//                                         <span className="text-[#5B21BD]">Upload Image</span>
//                                         <input
//                                             type="file"
//                                             accept="image/*"
//                                             onChange={handleFileChange}
//                                             className="hidden"
//                                         />
//                                     </label>
//                                 )}
//                             </div>
//                         </div>
//                     </div>

//                     {/* Recipe Ingredients Section */}
//                     {/* <div className='border border-gray-200 p-4 rounded-2xl'>
//                         <div className='flex justify-between mb-2'>
//                             <h2 className="text-xl font-semibold text-[#5B21BD] py-4">Recipe Ingredients</h2>
//                             <button
//                                 type="button"
//                                 onClick={handleAddIngredient}
//                                 className="text-xl border border-[#5B21BD] text-[#5B21BD] px-2 h-10 rounded-[10px] cursor-pointer flex items-center"
//                             >
//                                 <LuPlus />
//                             </button>
//                         </div>
//                         <div className="space-y-6 text-[#999999]">
//                             {ingredients.map((ingredient, index) => (
//                                 <div key={ingredient.id} className="flex gap-6">
//                                     <nput
//                                         type="text"
//                                         {...register(`ingredients[${index}].name`)}
//                                         placeholder="Ingredient name"
//                                         className="w-[40%] border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3"
//                                     />
//                                     <input
//                                         type="text"
//                                         {...register(`ingredients[${index}].quantity`)}
//                                         placeholder="Quantity"
//                                         className="w-[20%] border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] text-center py-3 px-3"
//                                     />
//                                     <input
//                                         type="text"
//                                         {...register(`ingredients[${index}].details`)}
//                                         placeholder="Details"
//                                         className="w-[40%] border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3"
//                                     />
//                                 </div>
//                             ))}
//                         </div>
//                     </div> */}

//                     <div className='border border-gray-200 p-4 rounded-2xl'>
//                         <div className='flex justify-between mb-2'>
//                             <h2 className="text-xl font-semibold text-[#5B21BD] py-4">Recipe Ingredients</h2>
//                             <button
//                                 type="button"
//                                 onClick={handleAddIngredient}
//                                 className="text-xl border border-[#5B21BD] text-[#5B21BD] px-2 h-10 rounded-[10px] cursor-pointer flex items-center"
//                             >
//                                 <LuPlus />
//                             </button>
//                         </div>
//                         <div className="space-y-6 text-[#999999]">
//                             {ingredients.map((ingredient, index) => (
//                                 <div key={ingredient.id} className="flex gap-6">
//                                     <input
//                                         type="text"
//                                         {...register(`ingredients[${index}].name`)}
//                                         placeholder="Ingredient name"
//                                         className="w-[40%] border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3"
//                                     />
//                                     <input
//                                         type="text"
//                                         {...register(`ingredients[${index}].quantity`)}
//                                         placeholder="Quantity"
//                                         className="w-[20%] border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] text-center py-3 px-3"
//                                     />
//                                     <input
//                                         type="text"
//                                         {...register(`ingredients[${index}].details`)}
//                                         placeholder="Details"
//                                         className="w-[40%] border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3"
//                                     />
//                                 </div>
//                             ))}
//                         </div>
//                     </div>



//                     {/* Instructions Section */}
//                     <div className='border border-gray-200 p-4 rounded-2xl'>
//                         <div className='flex justify-between mb-2'>
//                             <h2 className="text-xl font-semibold text-[#5B21BD] py-4">Instructions</h2>
//                             <button
//                                 type="button"
//                                 onClick={handleAddInstruction}
//                                 className="text-xl border border-[#5B21BD] text-[#5B21BD] px-2 h-10 rounded-[10px] cursor-pointer flex items-center"
//                             >
//                                 <LuPlus />
//                             </button>
//                         </div>
//                         <div className="space-y-6 text-[#999999]">
//                             {instructions.map((instruction, index) => (
//                                 <div key={instruction.id} className="flex gap-6">
//                                     <textarea
//                                         {...register(`instructions[${index}].text`)}
//                                         placeholder="Enter instruction"
//                                         className="w-full border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] pl-2 pt-2 resize-none "
//                                     />
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Chef's Note Section */}
//                     <div className='border border-gray-200 p-4 rounded-2xl'>
//                         <div className='flex justify-between mb-2'>
//                             <h2 className="text-xl font-semibold text-[#5B21BD] py-4">Chef's Note</h2>
//                             <button
//                                 type="button"
//                                 onClick={handleAddNote}
//                                 className="text-xl border border-[#5B21BD] text-[#5B21BD] px-2 h-10 rounded-[10px] cursor-pointer flex items-center"
//                             >
//                                 <LuPlus />
//                             </button>
//                         </div>
//                         <div className="space-y-6 text-[#999999]">
//                             {chefNotes.map((note, index) => (
//                                 <div key={note.id} className="flex gap-6">
//                                     <textarea
//                                         {...register(`chefNotes[${index}].text`)}
//                                         placeholder="Enter chef's note"
//                                         className="w-full border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] pl-2 pt-2 resize-none "
//                                     />
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     <div className="space-x-4 mt-10">
//                         <button
//                             type="submit"
//                             className="text-xl text-white bg-[#5B21BD] py-2 px-5 rounded-[10px] cursor-pointer"
//                         >
//                             Submit
//                         </button>
//                         <Link to="/chef_dashboard/ai_training" className="text-xl text-white bg-[#5B21BD] py-2 px-5 rounded-[10px] cursor-pointer">
//                             Next
//                         </Link>
//                     </div>
//                 </form>
//             </div>
//             <Toaster position='top-right' />
//         </div>
//     );
// }

// export default ChefRecipesAddpage;



