import { useState } from 'react';
import login_img from '../../assets/image/user_login_img.jpg';
import login_img2 from '../../assets/image/Admin_login_img.png';

import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';

function NewPassword() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Validation
        if (!email || !password || !confirmPassword) {
            setError('Please fill in all fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email');
            return;
        }

        // Password match validation
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        // Simulate successful submission (replace with API call)
        console.log({ email, password, confirmPassword });
        navigate('/login'); // Redirect to login page
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    // 
    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className="flex items-center justify-between w-full min-h-screen gap-10 nunito lora">
            <div className="flex justify-center items-center  md:h-screen md:w-1/2 ">
                <img
                    src={login_img}
                    alt="Registration illustration"
                    className="w-full h-full "
                />
            </div>
            <div className="md:w-1/2 lg:px-40">
                <div className='flex justify-center mb-10'>
                    <img src={login_img2} alt="image logo" className='w-[150px] h-[150px]' />
                </div>
                <div className="mb-6">
                    <p className="text-[34px] text-center font-semibold text-[#5B21BD]">
                        Set New Password
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">


                    <div className="relative">
                        <label className="block text-[#5B21BD] mb-2">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onFocus={() => setPasswordFocused(true)}
                                onBlur={() => setPasswordFocused(password !== '')}
                                className={`w-full px-4 py-2 border bg-[#F8FCFF] border-[#5B21BD] rounded-[8px]  pr-10 ${passwordFocused ? 'ring-2 ring-[#5B21BD]' : ''
                                    }`}
                                required
                            />

                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5B21BD] cursor-pointer"
                            >
                                {showPassword ? (
                                    <IoEyeOffOutline size={20} />
                                ) : (
                                    <IoEyeOutline size={20} />
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="relative">
                        <label className="block text-[#5B21BD] mb-2">Confirm Password</label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                placeholder="Enter your confirm password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                onFocus={() => setConfirmPasswordFocused(true)}
                                onBlur={() => setConfirmPasswordFocused(confirmPassword !== '')}
                                className={`w-full px-4 py-2 border bg-[#F8FCFF] border-[#5B21BD] rounded-[8px]  pr-10 ${confirmPasswordFocused ? 'ring-2 ring-[#5B21BD]' : ''
                                    }`}
                                required
                            />

                            <button
                                type="button"
                                onClick={toggleConfirmPasswordVisibility}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5B21BD] cursor-pointer"
                            >
                                {showConfirmPassword ? (
                                    <IoEyeOffOutline size={20} />
                                ) : (
                                    <IoEyeOutline size={20} />
                                )}
                            </button>
                        </div>
                    </div>


                    <div className='flex justify-center'>
                        <Link to='/password_change_succesfull'
                            type="submit"
                            className="bg-[#5B21BD] text-[#FFFFFF] rounded-[8px] px-6 py-2 mt-4 cursor-pointer "
                        >
                            Send
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewPassword;