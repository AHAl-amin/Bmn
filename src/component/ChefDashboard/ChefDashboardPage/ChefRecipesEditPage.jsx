// import React from 'react'
// import { IoMdAdd } from 'react-icons/io';
// import { LuUpload } from 'react-icons/lu';
// import { RiDeleteBin6Line } from 'react-icons/ri';
// import { Link } from 'react-router-dom';

// function ChefRecipesEditPage() {


//     const [formData, setFormData] = React.useState({
//         title: '',
//         category: 'Desserts',
//         description: '',
//         image: null
//     });

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setFormData({ ...formData, image: URL.createObjectURL(file) });
//         }
//     };

//     const handleSubmit = () => {
//         console.log('Form Data:', formData);
//     };
//     return (
//         <div>
//             <div className="px-12 py-6 lora">
//                 <h1 className="text-[34px] font-semibold text-[#5B21BD] my-2">Recipes Details View</h1>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {/* Left Side */}
//                     <div>
//                         <label className="block text-xl font-medium text-[#5B21BD] mb-2">Recipe Title</label>
//                         <input
//                             type="text"
//                             name="title"
//                             value={formData.title}
//                             onChange={handleInputChange}
//                             placeholder="Classic Chocolate Soufflé"
//                             className="w-full p-2 border bg-[#FFFFFF] border-[#CCBAEB] rounded-md focus:outline-none focus:ring-2"
//                         />
//                     </div>

//                     <div>
//                         <label className="block text-xl font-medium text-[#5B21BD] mb-2">Category</label>
//                         <select
//                             name="category"
//                             value={formData.category}
//                             onChange={handleInputChange}
//                             className="w-full p-2 border bg-[#FFFFFF] border-[#CCBAEB] text-[#999999] rounded-md focus:outline-none focus:ring-2"
//                         >
//                             <option value="Desserts">Desserts</option>
//                             <option value="Main Course">Main Course</option>
//                             <option value="Appetizers">Appetizers</option>
//                             <option value="Beverages">Beverages</option>
//                         </select>
//                     </div>

//                     <div>
//                         <label className="block text-xl font-medium text-[#5B21BD] mb-2">Description</label>
//                         <textarea
//                             name="description"
//                             value={formData.description}
//                             onChange={handleInputChange}
//                             placeholder="A light and airy dessert with a molten center"
//                             className="w-full p-2 border bg-[#FFFFFF] border-[#CCBAEB] rounded-md focus:outline-none focus:ring-2 h-24 resize-none"
//                         />
//                     </div>

//                     {/* Right Side */}
//                     <div className=''>
//                         <label className="block text-xl font-medium text-[#5B21BD] mb-2 ">Upload Image</label>
//                         <div className="w-full h-24 border bg-[#FFFFFF] border-[#CCBAEB] rounded-md flex items-center justify-center ">

//                             {formData.image ? (
//                                 <img src={formData.image} alt="Uploaded Preview" className="max-h-full max-w-full object-contain" />
//                             ) : (
//                                 <label className="cursor-pointer relative">
//                                     <LuUpload className='text-[20px] text-[#5B21BD] absolute bottom-5 left-11' />
//                                     <span className="text-[#5B21BD]">Upload Image</span>
//                                     <input
//                                         type="file"
//                                         accept="image/*"
//                                         onChange={handleFileChange}
//                                         className="hidden"
//                                     />
//                                 </label>
//                             )}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Recipe Ingredients Section */}
//                 <div>
//                     <h2 className="text-xl font-semibold text-[#5B21BD] py-4">Recipe Ingredients</h2>
//                     <div className="space-y-6">
//                         <div className="flex text-[#999999] gap-6">
//                             <p className="w-4/10 border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3">Dark chocolate</p>
//                             <p className="w-2/10 border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] text-center py-3 px-3">200g</p>
//                             <p className="w-4/10 border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3">70% cocoa solids</p>
//                             <RiDeleteBin6Line className='text-[#FF0000] border border-[#CCBAEB] rounded-[10px] flex justify-center items-center  size-12 p-2' />
//                         </div>
//                         <div className="flex text-[#999999] gap-6">
//                             <p className="w-4/10 border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3">Dark chocolate</p>
//                             <p className="w-2/10 border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] text-center py-3 px-3">200g</p>
//                             <p className="w-4/10 border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3">70% cocoa solids</p>
//                             <RiDeleteBin6Line className='text-[#FF0000] border border-[#CCBAEB] rounded-[10px] flex justify-center items-center  size-12 p-2' />
//                         </div>
//                         <div className="flex text-[#999999] gap-6">
//                             <p className="w-4/10 border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3">Dark chocolate</p>
//                             <p className="w-2/10 border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] text-center py-3 px-3">200g</p>
//                             <p className="w-4/10 border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3">70% cocoa solids</p>
//                             <RiDeleteBin6Line className='text-[#FF0000] border border-[#CCBAEB] rounded-[10px] flex justify-center items-center  size-12 p-2' />
//                         </div>
//                         <div className="flex text-[#999999] gap-6">
//                             <p className="w-4/10 border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3">Dark chocolate</p>
//                             <p className="w-2/10 border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] text-center py-3 px-3">200g</p>
//                             <p className="w-4/10 border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3">70% cocoa solids</p>
//                             <RiDeleteBin6Line className='text-[#FF0000] border border-[#CCBAEB] rounded-[10px] flex justify-center items-center  size-12 p-2' />
//                         </div>
//                         <div className="flex text-[#999999] gap-6">
//                             <p className="w-4/10 border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3">Dark chocolate</p>
//                             <p className="w-2/10 border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] text-center py-3 px-3">200g</p>
//                             <p className="w-4/10 border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3">70% cocoa solids</p>
//                             <IoMdAdd className=' border border-[#CCBAEB] rounded-[10px] flex justify-center items-center  size-12 p-2' />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Instructions Section */}
//                 <div>
//                     <h2 className="text-xl font-semibold text-[#5B21BD] py-4">Instructions:</h2>
//                     <div className="space-y-6 text-[#999999]">
//                         <div className='flex  gap-6'>
//                             <p className="w-full border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3">
//                                 1. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.
//                             </p>
//                             <RiDeleteBin6Line className='text-[#FF0000] border border-[#CCBAEB] rounded-[10px] flex justify-center items-center  size-12 p-2' />
//                         </div>
//                         <div className='flex  gap-6'>
//                             <p className="w-full border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3">
//                                 1. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.
//                             </p>
//                             <RiDeleteBin6Line className='text-[#FF0000] border border-[#CCBAEB] rounded-[10px] flex justify-center items-center  size-12 p-2' />
//                         </div>
//                         <div className='flex  gap-6'>
//                             <p className="w-full border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3">
//                                 1. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.
//                             </p>
//                             <RiDeleteBin6Line className='text-[#FF0000] border border-[#CCBAEB] rounded-[10px] flex justify-center items-center  size-12 p-2' />
//                         </div>

//                         <div className='flex  gap-6'>
//                             <p className="w-full border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3">
//                                 1. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.
//                             </p>
//                             <IoMdAdd className=' border border-[#CCBAEB] rounded-[10px] flex justify-center items-center  size-12 p-2' />
//                         </div>


//                     </div>
//                 </div>

//                 {/* Chef's Note Section */}
//                 <div>
//                     <h2 className="text-xl font-semibold text-[#5B21BD] py-4">Chef's Note:</h2>
//                     <div className="space-y-6 text-[#999999]">
//                         <div className='flex  gap-6'>
//                             <p className="w-full border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3">
//                                 1. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.
//                             </p>
//                             <RiDeleteBin6Line className='text-[#FF0000] border border-[#CCBAEB] rounded-[10px] flex justify-center items-center  size-12 p-2' />
//                         </div>
//                         <div className='flex  gap-6'>
//                             <p className="w-full border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3">
//                                 1. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.
//                             </p>
//                             <RiDeleteBin6Line className='text-[#FF0000] border border-[#CCBAEB] rounded-[10px] flex justify-center items-center  size-12 p-2' />
//                         </div>
//                         <div className='flex  gap-6'>
//                             <p className="w-full border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3">
//                                 1. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.
//                             </p>

                            
//                             <RiDeleteBin6Line className='text-[#FF0000] border border-[#CCBAEB] rounded-[10px] flex justify-center items-center  size-12 p-2' />
//                         </div>

//                         <div className='flex  gap-6'>
//                             <p className="w-full border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3">
//                                 1. For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.
//                             </p>
//                             <IoMdAdd className=' border border-[#CCBAEB] rounded-[10px] flex justify-center items-center  size-12 p-2' />
//                         </div>


//                     </div>
//                 </div>

//                 <div className=' space-x-4 mt-10'>
//                     <Link className='text-xl border border-[#5B21BD]  text-[#5B21BD] py-2 px-5 rounded-[10px]  cursor-pointer  '>Cancel </Link>
//                     <Link className='text-xl text-white bg-[#5B21BD] py-2 px-5 rounded-[10px]  cursor-pointer  '>Save Change</Link>
//                     <Link to='/chef_dashboard/ai_training' className='text-xl text-white bg-[#5B21BD] py-2 px-5 rounded-[10px]  cursor-pointer  '>Next</Link>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default ChefRecipesEditPage



import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import { LuUpload } from 'react-icons/lu';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function ChefRecipesEditPage() {
    const [formData, setFormData] = React.useState({
        title: '',
        category: 'Desserts',
        description: '',
        image: null,
    });

    const [ingredients, setIngredients] = React.useState([
        { id: 1, name: 'Dark chocolate', quantity: '200g', details: '70% cocoa solids' },
    ]);

    const [instructions, setInstructions] = React.useState([
        { id: 1, text: 'For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.' },
    ]);

    const [chefNotes, setChefNotes] = React.useState([
        { id: 1, text: 'For the crust: Combine flour, butter, and powdered sugar in a food processor until crumbly.' },
    ]);

    const [isEditingIngredients, setIsEditingIngredients] = React.useState(false);
    const [isEditingInstructions, setIsEditingInstructions] = React.useState(false);
    const [isEditingNotes, setIsEditingNotes] = React.useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, image: URL.createObjectURL(file) });
        }
    };

    const handleIngredientChange = (id, field, value) => {
        setIngredients(ingredients.map(ingredient =>
            ingredient.id === id ? { ...ingredient, [field]: value } : ingredient
        ));
    };

    const handleAddIngredient = () => {
        const newId = ingredients.length ? ingredients[ingredients.length - 1].id + 1 : 1;
        setIngredients([...ingredients, { id: newId, name: '', quantity: '', details: '' }]);
        setIsEditingIngredients(true);
    };

    const handleDeleteIngredient = (id) => {
        setIngredients(ingredients.filter(ingredient => ingredient.id !== id));
    };

    const handleInstructionChange = (id, value) => {
        setInstructions(instructions.map(instruction =>
            instruction.id === id ? { ...instruction, text: value } : instruction
        ));
    };

    const handleAddInstruction = () => {
        const newId = instructions.length ? instructions[instructions.length - 1].id + 1 : 1;
        setInstructions([...instructions, { id: newId, text: '' }]);
        setIsEditingInstructions(true);
    };

    const handleDeleteInstruction = (id) => {
        setInstructions(instructions.filter(instruction => instruction.id !== id));
    };

    const handleNoteChange = (id, value) => {
        setChefNotes(chefNotes.map(note =>
            note.id === id ? { ...note, text: value } : note
        ));
    };

    const handleAddNote = () => {
        const newId = chefNotes.length ? chefNotes[chefNotes.length - 1].id + 1 : 1;
        setChefNotes([...chefNotes, { id: newId, text: '' }]);
        setIsEditingNotes(true);
    };

    const handleDeleteNote = (id) => {
        setChefNotes(chefNotes.filter(note => note.id !== id));
    };

    const handleSaveIngredients = () => {
        console.log('Saved Ingredients:', ingredients);
        setIsEditingIngredients(false);
    };

    const handleSaveInstructions = () => {
        console.log('Saved Instructions:', instructions);
        setIsEditingInstructions(false);
    };

    const handleSaveNotes = () => {
        console.log('Saved Chef Notes:', chefNotes);
        setIsEditingNotes(false);
    };

    const handleSubmit = () => {
        console.log('Form Data:', { ...formData, ingredients, instructions, chefNotes });
    };

    return (
        <div>
            <div className="px-12 py-6 lora">
                <h1 className="text-[34px] font-semibold text-[#5B21BD] my-2">Recipes Details View</h1>
                <div className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Left Side */}
                        <div>
                            <label className="block text-xl font-medium text-[#5B21BD] mb-2">Recipe Title</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                placeholder="Classic Chocolate Soufflé"
                                className="w-full p-2 border bg-[#FFFFFF] border-[#CCBAEB] rounded-md focus:outline-none focus:ring-2"
                            />
                        </div>

                        <div>
                            <label className="block text-xl font-medium text-[#5B21BD] mb-2">Category</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleInputChange}
                                className="w-full p-2 border bg-[#FFFFFF] border-[#CCBAEB] text-[#999999] rounded-md focus:outline-none focus:ring-2"
                            >
                                <option value="Desserts">Desserts</option>
                                <option value="Main Course">Main Course</option>
                                <option value="Appetizers">Appetizers</option>
                                <option value="Beverages">Beverages</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xl font-medium text-[#5B21BD] mb-2">Description</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                placeholder="A light and airy dessert with a molten center"
                                className="w-full p-2 border bg-[#FFFFFF] border-[#CCBAEB] rounded-md focus:outline-none focus:ring-2 h-24 resize-none"
                            />
                        </div>

                        {/* Right Side */}
                        <div>
                            <label className="block text-xl font-medium text-[#5B21BD] mb-2">Upload Image</label>
                            <div className="w-full h-24 border bg-[#FFFFFF] border-[#CCBAEB] rounded-md flex items-center justify-center">
                                {formData.image ? (
                                    <img src={formData.image} alt="Uploaded Preview" className="max-h-full max-w-full object-contain" />
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

                    {/* Recipe Ingredients Section */}
                    <div>
                        <h2 className="text-xl font-semibold text-[#5B21BD] py-4">Recipe Ingredients</h2>
                        <div className="space-y-6">
                            {ingredients.map(ingredient => (
                                <div key={ingredient.id} className="flex text-[#999999] gap-6">
                                    {isEditingIngredients ? (
                                        <>
                                            <input
                                                type="text"
                                                value={ingredient.name}
                                                onChange={(e) => handleIngredientChange(ingredient.id, 'name', e.target.value)}
                                                placeholder="Ingredient name"
                                                className="w-[40%] border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3"
                                            />
                                            <input
                                                type="text"
                                                value={ingredient.quantity}
                                                onChange={(e) => handleIngredientChange(ingredient.id, 'quantity', e.target.value)}
                                                placeholder="Quantity"
                                                className="w-[20%] border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] text-center py-3 px-3"
                                            />
                                            <input
                                                type="text"
                                                value={ingredient.details}
                                                onChange={(e) => handleIngredientChange(ingredient.id, 'details', e.target.value)}
                                                placeholder="Details"
                                                className="w-[40%] border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3"
                                            />
                                        </>
                                    ) : (
                                        <>
                                            <p className="w-[40%] border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3">{ingredient.name || '—'}</p>
                                            <p className="w-[20%] border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] text-center py-3 px-3">{ingredient.quantity || '—'}</p>
                                            <p className="w-[40%] border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3">{ingredient.details || '—'}</p>
                                        </>
                                    )}
                                    <RiDeleteBin6Line
                                        className="text-[#FF0000] border border-[#CCBAEB] rounded-[10px] flex justify-center items-center size-12 p-2 cursor-pointer"
                                        onClick={() => handleDeleteIngredient(ingredient.id)}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex space-x-4 mt-4">
                            {!isEditingIngredients && (
                                <button
                                    onClick={() => setIsEditingIngredients(true)}
                                    className="text-xl border border-[#5B21BD] text-[#5B21BD] py-2 px-5 rounded-[10px] cursor-pointer"
                                >
                                    Edit
                                </button>
                            )}
                            {isEditingIngredients && (
                                <button
                                    onClick={handleSaveIngredients}
                                    className="text-xl text-white bg-[#5B21BD] py-2 px-5 rounded-[10px] cursor-pointer"
                                >
                                    Save
                                </button>
                            )}
                            <button
                                onClick={handleAddIngredient}
                                className="text-xl border border-[#5B21BD] text-[#5B21BD] py-2 px-5 rounded-[10px] cursor-pointer flex items-center"
                            >
                                Add
                            </button>
                        </div>
                    </div>

                    {/* Instructions Section */}
                    <div>
                        <h2 className="text-xl font-semibold text-[#5B21BD] py-4">Instructions</h2>
                        <div className="space-y-6 text-[#999999]">
                            {instructions.map(instruction => (
                                <div key={instruction.id} className="flex gap-6">
                                    {isEditingInstructions ? (
                                        <textarea
                                            value={instruction.text}
                                            onChange={(e) => handleInstructionChange(instruction.id, e.target.value)}
                                            placeholder="Enter instruction"
                                            className="w-full border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3 resize-none h-16"
                                        />
                                    ) : (
                                        <p className="w-full border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3 h-16 flex items-center">
                                            {instruction.text || '—'}
                                        </p>
                                    )}
                                    <RiDeleteBin6Line
                                        className="text-[#FF0000] border border-[#CCBAEB] rounded-[10px] flex justify-center items-center size-12 p-2 cursor-pointer"
                                        onClick={() => handleDeleteInstruction(instruction.id)}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex space-x-4 mt-4">
                            {!isEditingInstructions && (
                                <button
                                    onClick={() => setIsEditingInstructions(true)}
                                    className="text-xl border border-[#5B21BD] text-[#5B21BD] py-2 px-5 rounded-[10px] cursor-pointer"
                                >
                                    Edit
                                </button>
                            )}
                            {isEditingInstructions && (
                                <button
                                    onClick={handleSaveInstructions}
                                    className="text-xl text-white bg-[#5B21BD] py-2 px-5 rounded-[10px] cursor-pointer"
                                >
                                    Save
                                </button>
                            )}
                            <button
                                onClick={handleAddInstruction}
                                className="text-xl border border-[#5B21BD] text-[#5B21BD] py-2 px-5 rounded-[10px] cursor-pointer flex items-center"
                            >
                                Add
                            </button>
                        </div>
                    </div>

                    {/* Chef's Note Section */}
                    <div>
                        <h2 className="text-xl font-semibold text-[#5B21BD] py-4">Chef's Note</h2>
                        <div className="space-y-6 text-[#999999]">
                            {chefNotes.map(note => (
                                <div key={note.id} className="flex gap-6">
                                    {isEditingNotes ? (
                                        <textarea
                                            value={note.text}
                                            onChange={(e) => handleNoteChange(note.id, e.target.value)}
                                            placeholder="Enter chef's note"
                                            className="w-full border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3 resize-none h-16"
                                        />
                                    ) : (
                                        <p className="w-full border bg-[#FFFFFF] border-[#CCBAEB] rounded-[10px] py-3 px-3 h-16 flex items-center">
                                            {note.text || '—'}
                                        </p>
                                    )}
                                    <RiDeleteBin6Line
                                        className="text-[#FF0000] border border-[#CCBAEB] rounded-[10px] flex justify-center items-center size-12 p-2 cursor-pointer"
                                        onClick={() => handleDeleteNote(note.id)}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex space-x-4 mt-4">
                            {!isEditingNotes && (
                                <button
                                    onClick={() => setIsEditingNotes(true)}
                                    className="text-xl border border-[#5B21BD] text-[#5B21BD] py-2 px-5 rounded-[10px] cursor-pointer"
                                >
                                    Edit
                                </button>
                            )}
                            {isEditingNotes && (
                                <button
                                    onClick={handleSaveNotes}
                                    className="text-xl text-white bg-[#5B21BD] py-2 px-5 rounded-[10px] cursor-pointer"
                                >
                                    Save
                                </button>
                            )}
                            <button
                                onClick={handleAddNote}
                                className="text-xl border border-[#5B21BD] text-[#5B21BD] py-2 px-5 rounded-[10px] cursor-pointer flex items-center"
                            >
                                Add
                            </button>
                        </div>
                    </div>

                    <div className="space-x-4 mt-10">
                        <Link to="#" className="text-xl border border-[#5B21BD] text-[#5B21BD] py-2 px-5 rounded-[10px] cursor-pointer">Cancel</Link>
                        <Link
                            to="#"
                            onClick={handleSubmit}
                            className="text-xl text-white bg-[#5B21BD] py-2 px-5 rounded-[10px] cursor-pointer"
                        >
                            Save Change
                        </Link>
                        <Link to="/chef_dashboard/ai_training" className="text-xl text-white bg-[#5B21BD] py-2 px-5 rounded-[10px] cursor-pointer">
                            Next
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChefRecipesEditPage;