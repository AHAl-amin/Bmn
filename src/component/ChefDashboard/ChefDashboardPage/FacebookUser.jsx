import React from 'react'
import { HiDotsHorizontal } from 'react-icons/hi';

function FacebookUser() {

    const facebookUserData = [
        {
            "User": "pappu roy",
            "Recipe": "Chocolate Souffle",
            "Rating": 5,
            "Comment": "Amazing recipe! I substituted dairy milk with almond milk and it still turned out perfect...",
            "Date": "12/5/2023"
        },
        {
            "User": "rahul sen",
            "Recipe": "Vanilla Souffle",
            "Rating": 4,
            "Comment": "Really good! I used oat milk instead of dairy, and it was delicious.",
            "Date": "13/5/2023"
        },
        {
            "User": "anita das",
            "Recipe": "Lemon Cheesecake",
            "Rating": 5,
            "Comment": "Perfect dessert! The crust was crispy and the filling was creamy.",
            "Date": "14/5/2023"
        },
        {
            "User": "sumon khan",
            "Recipe": "Tiramisu",
            "Rating": 3,
            "Comment": "It was okay, but I think I added too much coffee. Will try again!",
            "Date": "15/5/2023"
        },
        {
            "User": "priya mehta",
            "Recipe": "Red Velvet Cake",
            "Rating": 5,
            "Comment": "Loved it! The cream cheese frosting was the best part.",
            "Date": "16/5/2023"
        },
        {
            "User": "arjun singh",
            "Recipe": "Blueberry Muffins",
            "Rating": 4,
            "Comment": "Tasty and fluffy! I added extra blueberries for more flavor.",
            "Date": "17/5/2023"
        },
        {
            "User": "nisha verma",
            "Recipe": "Caramel Flan",
            "Rating": 5,
            "Comment": "So smooth and rich! The caramel sauce was perfect.",
            "Date": "18/5/2023"
        },

    ];
    return (
        <div className="py-2 px-10 lora">
        <h1 className="text-[#0077B6] text-[34px] font-semibold">User Facebook</h1>
        <p className="text-[#9E9E9E] mb-6">Manage feedback from users on your recipes</p>
        <div className="">
            <table className="w-full  bg-white border border-[#E4E4E4] ">
                <thead className="">
                    <tr className="bg-[#0077B6] text-white ">
                        <th className="p-2 text-left md:pl-6">User</th>
                        <th className="p-2 text-left">Recipe</th>
                        <th className="p-2 text-left">Rating</th>
                        <th className="p-2 text-left md:pl-20">Comment</th>
                        <th className="p-2 text-left">Date</th>
                        <th className="p-2 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {facebookUserData.map((item, index) => (
                        <tr key={index} className="border-b border-b-[#E4E4E4] h-[76px]">
                            <td className="p-2 text-[#939393] md:pl-6">{item.User}</td>
                            <td className="p-2 text-[#939393]">{item.Recipe}</td>
                            <td className="p-2 text-[#FACC15]">{'★'.repeat(item.Rating)}</td>
                            <td className="p-2 text-[#939393] md:pl-20">{item.Comment}</td>
                            <td className="p-2 text-[#939393]">{item.Date}</td>
                            <td className="p-2 text-[#939393] cursor-pointer">
                                <HiDotsHorizontal />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    )
}

export default FacebookUser