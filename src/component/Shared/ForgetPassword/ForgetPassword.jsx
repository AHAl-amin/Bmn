import { useState } from "react";
import registration_img from '../../../assets/image/user_login_img.jpg';
import login_img2 from '../../../assets/image/Admin_login_img.png';

import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function ForgetPassword() {
    const [email, setEmail] = useState("");
    const [userType, setUserType] = useState("Student");

    const [emailFocused, setEmailFocused] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, userType, });
        // Add your form submission logic here (e.g., API call)
    };

    return (
        <div className="flex items-center justify-between w-full md:min-h-screen gap-10 lora">
            <div className="md:w-1/2 h-screen">
                <img
                    src={registration_img}
                    alt="Registration illustration"
                    className="w-full h-screen "
                />
            </div>
            <div className="w-1/2 lg:px-40">
                <div className="flex justify-center mb-6">
                <img src={login_img2} className='h-[150px] w-[150px]' alt="img" />
                </div>

                <div className=" rounded md:px-10 ">
                    <h2 className="text-[34px] font-bold text-center text-[#5B21BD] ">
                        Confirm email
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="relative py-10">
                            <label className="block text-[20px] text-[#5B21BD]  mb-2">Email</label>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onFocus={() => setEmailFocused(true)}
                                onBlur={() => setEmailFocused(email !== "")}
                                className="w-full  px-4 py-3 border bg-[#F8FCFF] border-[#5B21BD] rounded pl-10"
                                required
                            />

                            <MdEmail className="text-[#959AA6] bottom-[58px] left-3 absolute" />

                        </div>






                        <div className="flex justify-center ">
                            <Link to='/verification'
                                type="submit"
                                className="bg-[#5B21BD] text-white rounded-[8px] mx-auto px-6 py-2 cursor-pointer w-[123px]"
                            >
                                Confirm
                            </Link>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    );
}

export default ForgetPassword;