import React, { useRef, useState, useEffect } from 'react';
import registration_img from '../../../assets/image/user_login_img.jpg';
import login_img2 from '../../../assets/image/Admin_login_img.png';
import { Link } from 'react-router-dom';

function ForgetPasswordVerification() {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [focused, setFocused] = useState([false, false, false, false]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const inputRefs = useRef([]);

    // Auto-close modal after 2 seconds
    useEffect(() => {
        let timer;
        if (isModalOpen) {
            timer = setTimeout(() => {
                setIsModalOpen(false);
            }, 2000);
        }
        return () => clearTimeout(timer); // Cleanup on unmount or modal close
    }, [isModalOpen]);

    const handleChange = (index, value) => {
        if (!/^\d?$/.test(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        if (value && index < 3) inputRefs.current[index + 1].focus();
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleFocus = (index) => {
        const newFocused = [...focused];
        newFocused[index] = true;
        setFocused(newFocused);
    };

    const handleBlur = (index) => {
        const newFocused = [...focused];
        newFocused[index] = false;
        setFocused(newFocused);
    };

    const handleSubmit = () => {
        alert(`Entered OTP: ${otp.join("")}`);
    };

    const handleResendClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Handle click on the backdrop to close the modal
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <div className="flex w-full md:flex-row flex-col md:h-screen justify-between items-center lora">
            {/* Left Side: Image */}
            <div className="md:w-1/2 w-full md:h-screen ">
                <img
                    src={registration_img}
                    alt="Registration illustration"
                    className="md:h-screen w-full"
                />
            </div>

            {/* Right Side: Verification Form */}
            <div className="md:w-1/2 w-full">
                <div className="flex justify-center mb-20">
                    <img src={login_img2} className='h-[150px] w-[150px]' alt="img" />
                </div>
                <div className=" flex mx-auto justify-center rounded md:p-8 p-3 ">
                    <div className="text-center space-y-8">
                        {/* Header Text */}
                        <p className="text-2xl text-[#5B21BD] font-semibold">
                            We have sent you an activation code.
                        </p>
                        <p className="text-sm text-gray-600">
                            An email has been sent to your email address containing a <br />
                            code to reset your password.
                        </p>
                        <h2 className="text-[20px] font-bold text-[#5B21BD]">
                            Enter verification code
                        </h2>

                        {/* OTP Inputs */}
                        <div className="flex justify-center space-x-4 my-4">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength="1"
                                    placeholder={focused[index] || digit ? '' : '*'}
                                    value={digit}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    onFocus={() => handleFocus(index)}
                                    onBlur={() => handleBlur(index)}
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    className="w-12 h-12 text-center text-xl border border-gray-300 rounded-full pt-2 focus:outline-none focus:ring-2 focus:ring-[#5B21BD]"
                                />
                            ))}
                        </div>

                        {/* Resend Link */}
                        <p className="text-sm text-gray-600">
                            If you didn’t receive a code!{' '}
                            <span
                                onClick={handleResendClick}
                                className="text-[#5B21BD] ml-2 cursor-pointer underline"
                            >
                                click here..
                            </span>
                        </p>

                        {/* Confirm Button */}
                        <Link to='/change_password'
                           
                            className="bg-[#5B21BD] text-[#F6F8FA] px-6 py-3 rounded-[8px] text-[16px] font-bold w-[123px] cursor-pointer"
                        >
                            Confirm
                        </Link>
                    </div>
                </div>
            </div>

            {/* Modal for Resend Link */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center  bg-opacity-50 backdrop-blur-sm z-50"
                    onClick={handleBackdropClick}
                >
                    <div className="bg-white rounded-lg p-6 w-96 shadow-lg space-y-8 py-10">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full mx-auto bg-[#5B21BD] text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <p className="text-[#012939] text-[20px] font-medium text-center">
                            Code has been sent again
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ForgetPasswordVerification;