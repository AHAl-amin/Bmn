



// import React, { useRef, useState, useEffect } from 'react';
// import registration_img from '../../../assets/image/user_login_img.jpg';
// import login_img2 from '../../../assets/image/Admin_login_img.png';
// import { useNavigate } from 'react-router-dom';
// import { useRegisterVerificationMutation, useResendOtpMutation } from '../../../Rudux/feature/authApi';

// import { toast, Toaster } from 'react-hot-toast';

// function Verification() {
//     const [otp, setOtp] = useState(['', '', '', '']);
//     const [focused, setFocused] = useState([false, false, false, false]);
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const inputRefs = useRef([]);
//     const [registerVerification, { isLoading: isVerifying }] = useRegisterVerificationMutation();
//     const [resendOtp, { isLoading: isResending }] = useResendOtpMutation();
//     const navigate = useNavigate();

//     useEffect(() => {
//         inputRefs.current[0]?.focus();
//     }, []);

//     const handleChange = (index, value) => {
//         if (!/^\d?$/.test(value)) return;
//         const newOtp = [...otp];
//         newOtp[index] = value;
//         setOtp(newOtp);
//         if (value && index < 3) inputRefs.current[index + 1]?.focus();
//     };

//     const handleKeyDown = (index, e) => {
//         if (e.key === 'Backspace' && !otp[index] && index > 0) {
//             inputRefs.current[index - 1]?.focus();
//         }
//     };

//     const handleFocus = (index) => {
//         const newFocused = [...focused];
//         newFocused[index] = true;
//         setFocused(newFocused);
//     };

//     const handleBlur = (index) => {
//         const newFocused = [...focused];
//         newFocused[index] = false;
//         setFocused(newFocused);
//     };

//     const handlePaste = (e) => {
//         const pasteData = e.clipboardData.getData('text').trim();
//         if (!/^\d{4}$/.test(pasteData)) return;

//         const newOtp = pasteData.split('');
//         setOtp(newOtp);

//         const lastIndex = newOtp.length - 1;
//         inputRefs.current[lastIndex]?.focus();
//     };

//     const handleSubmit = async () => {
//         const email = localStorage.getItem('userEmail');
//         const otpString = otp.join('');

//         if (!email) {
//             toast.error('Email not found. Please register again.');
//             navigate('/register');
//             return;
//         }

//         if (otpString.length !== 4 || !/^\d{4}$/.test(otpString)) {
//             toast.error('Please enter a valid 4-digit OTP.');
//             return;
//         }

//         try {
//             const res = await registerVerification({ email, otp: otpString }).unwrap();
//             if (!res.access_token) throw new Error(res.message || 'Invalid OTP');

//             localStorage.setItem('access_token', res.access_token);
//             localStorage.setItem('refresh_token', res.refresh_token);

//             toast.success(res.message || 'OTP verified successfully!', { className: 'bg-[#00BF63]' });
//             navigate('/change_password');
//             setOtp(['', '', '', '']);
//         } catch (error) {
//             console.log('Verification Error:', error);
//             const errorMessage = error.data?.message || 'OTP verification failed!';
//             toast.error(errorMessage);
//         }
//     };

//     const handleResendClick = async () => {
//         const email = localStorage.getItem('userEmail');

//         if (!email) {
//             toast.error('Email not found. Please register again.');
//             navigate('/register');
//             return;
//         }

//         try {
//             await resendOtp({ email }).unwrap();
//             setIsModalOpen(true);
//             setTimeout(() => {
//                 setIsModalOpen(false);
//                 setOtp(['', '', '', '']);
//             }, 2000);
//         } catch (error) {
//             console.log('Resend OTP Error:', error);
//             const errorMessage = error.data?.message || 'Failed to resend OTP.';
//             toast.error(errorMessage);
//         }
//     };

//     const handleBackdropClick = (e) => {
//         if (e.target === e.currentTarget) {
//             setIsModalOpen(false);
//         }
//     };

//     return (
//         <div className="flex w-full md:flex-row flex-col md:h-screen justify-between items-center lora">
//             {/* Left Side: Image */}
//             <div className="md:w-1/2 w-full md:h-screen">
//                 <img
//                     src={registration_img}
//                     alt="Registration illustration"
//                     className="md:h-screen w-full"
//                 />
//             </div>

//             {/* Right Side: Verification Form */}
//             <div className="md:w-1/2 w-full">
//                 <div className="flex justify-center mb-20">
//                     <img src={login_img2} className="h-[150px] w-[150px]" alt="Logo" />
//                 </div>
//                 <div className="flex mx-auto justify-center rounded md:p-8 p-3">
//                     <div className="text-center space-y-8">
//                         <p className="text-2xl text-[#5B21BD] font-semibold">
//                             We have sent you an activation code.
//                         </p>
//                         <p className="text-sm text-gray-600">
//                             An email has been sent to your email address containing a <br />
//                             code to reset your password.
//                         </p>
//                         <h2 className="text-[20px] font-bold text-[#5B21BD]">
//                             Enter verification code
//                         </h2>

//                         {/* OTP Inputs */}
//                         <div className="flex justify-center space-x-4 my-4">
//                             {otp.map((digit, index) => (
//                                 <input
//                                     key={index}
//                                     type="tel"
//                                     maxLength="1"
//                                     aria-label={`OTP digit ${index + 1}`}
//                                     placeholder={focused[index] || digit ? '' : '*'}
//                                     value={digit}
//                                     onChange={(e) => handleChange(index, e.target.value)}
//                                     onKeyDown={(e) => handleKeyDown(index, e)}
//                                     onFocus={() => handleFocus(index)}
//                                     onBlur={() => handleBlur(index)}
//                                     onPaste={handlePaste}
//                                     ref={(el) => (inputRefs.current[index] = el)}
//                                     className="w-12 h-12 text-center text-xl border border-gray-300 rounded-full pt-2 focus:outline-none focus:ring-2 focus:ring-[#5B21BD]"
//                                 />
//                             ))}
//                         </div>

//                         {/* Resend Link */}
//                         <p className="text-sm text-gray-600">
//                             If you didn’t receive a code!{' '}
//                             <span
//                                 onClick={handleResendClick}
//                                 className={`text-[#5B21BD] cursor-pointer underline ${isResending ? 'opacity-50 cursor-not-allowed' : ''}`}
//                             >
//                                 click here..
//                             </span>
//                         </p>

//                         {/* Confirm Button */}
//                         <button
//                             onClick={handleSubmit}
//                             disabled={isVerifying}
//                             className={`bg-[#5B21BD] text-[#F6F8FA] px-6 py-3 rounded-[8px] text-[16px] font-bold w-[123px] cursor-pointer ${isVerifying ? 'opacity-50 cursor-not-allowed' : ''}`}
//                         >
//                             {isVerifying ? 'Verifying...' : 'Confirm'}
//                         </button>
//                     </div>
//                 </div>
//                 {/* ToastContainer for react-toastify */}
//                 <Toaster position='top-right' />
//             </div>

//             {/* Modal */}
//             {isModalOpen && (
//                 <div
//                     className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-50 z-50"
//                     onClick={handleBackdropClick}
//                 >
//                     <div className="bg-white rounded-lg p-6 w-96 shadow-lg space-y-8 py-10">
//                         <div className="flex h-16 w-16 items-center justify-center rounded-full mx-auto bg-[#5B21BD] text-white">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-8 w-8"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={3}
//                                     d="M5 13l4 4L19 7"
//                                 />
//                             </svg>
//                         </div>
//                         <p className="text-[#012939] text-[20px] font-medium text-center">
//                             Code has been sent again
//                         </p>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Verification;



import React, { useRef, useState, useEffect } from 'react';
import registration_img from '../../../assets/image/user_login_img.jpg';
import login_img2 from '../../../assets/image/Admin_login_img.png';
import { useNavigate } from 'react-router-dom';
import { useRegisterVerificationMutation, useResendOtpMutation } from '../../../Rudux/feature/authApi';
import { toast, Toaster } from 'react-hot-toast';

function Verification() {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [focused, setFocused] = useState([false, false, false, false]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const inputRefs = useRef([]);
    const [registerVerification, { isLoading: isVerifying }] = useRegisterVerificationMutation();
    const [resendOtp, { isLoading: isResending }] = useResendOtpMutation();
    const navigate = useNavigate();

    useEffect(() => {
        inputRefs.current[0]?.focus();
        console.log('Stored Email on Mount:', localStorage.getItem('userEmail'));
    }, []);

    const handleChange = (index, value) => {
        if (!/^\d?$/.test(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        if (value && index < 3) inputRefs.current[index + 1]?.focus();
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
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

    const handlePaste = (e) => {
        const pasteData = e.clipboardData.getData('text').trim();
        if (!/^\d{4}$/.test(pasteData)) return;

        const newOtp = pasteData.split('');
        setOtp(newOtp);
        inputRefs.current[3]?.focus();
    };

    const handleSubmit = async () => {
        const email = localStorage.getItem('userEmail');
        const otpString = otp.join('');

        console.log('Verification Request:', { email, otp: otpString });

        if (!email) {
            toast.error('Email not found. Please register again.');
            navigate('/register');
            return;
        }

        if (otpString.length !== 4 || !/^\d{4}$/.test(otpString)) {
            toast.error('Please enter a valid 4-digit OTP.');
            return;
        }

        try {
            const res = await registerVerification({ email, otp: otpString }).unwrap();
            if (!res.access_token) throw new Error(res.message || 'Invalid OTP');

            localStorage.setItem('access_token', res.access_token);
            localStorage.setItem('refresh_token', res.refresh_token);

            toast.success(res.message || 'OTP verified successfully!', { className: 'bg-[#00BF63]' });
            navigate('/');
            setOtp(['', '', '', '']);
        } catch (error) {
            console.error('Verification Error:', error);
            const errorMessage = error.data?.message || 'OTP verification failed!';
            if (error.data?.message.includes('expired')) {
                toast.error('OTP has expired. Please resend the OTP.');
            } else {
                toast.error(errorMessage);
            }
        }
    };

    const handleResendClick = async () => {
        const email = localStorage.getItem('userEmail');
        console.log('Resend OTP Request:', { email });

        if (!email) {
            toast.error('Email not found. Please register again.');
            navigate('/register');
            return;
        }

        try {
            const res = await resendOtp({ email }).unwrap();
            console.log('Resend OTP Response:', res);
            setIsModalOpen(true);
            setTimeout(() => {
                setIsModalOpen(false);
                setOtp(['', '', '', '']);
            }, 2000);
        } catch (error) {
            console.error('Resend OTP Error:', error);
            const errorMessage = error.data?.message || 'Failed to resend OTP.';
            toast.error(errorMessage);
        }
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            setIsModalOpen(false);
        }
    };

    return (
        <div className="flex w-full md:flex-row flex-col md:h-screen justify-between items-center lora">
            <div className="md:w-1/2 w-full md:h-screen">
                <img src={registration_img} alt="Registration illustration" className="md:h-screen w-full" />
            </div>
            <div className="md:w-1/2 w-full">
                <div className="flex justify-center mb-20">
                    <img src={login_img2} className="h-[150px] w-[150px]" alt="Logo" />
                </div>
                <div className="flex mx-auto justify-center rounded md:p-8 p-3">
                    <div className="text-center space-y-8">
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
                        <div className="flex justify-center space-x-4 my-4">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    type="tel"
                                    maxLength="1"
                                    aria-label={`OTP digit ${index + 1}`}
                                    placeholder={focused[index] || digit ? '' : '*'}
                                    value={digit}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    onFocus={() => handleFocus(index)}
                                    onBlur={() => handleBlur(index)}
                                    onPaste={handlePaste}
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    className="w-12 h-12 text-center text-xl border border-gray-300 rounded-full pt-2 focus:outline-none focus:ring-2 focus:ring-[#5B21BD]"
                                />
                            ))}
                        </div>
                        <p className="text-sm text-gray-600">
                            If you didn’t receive a code!{' '}
                            <span
                                onClick={handleResendClick}
                                className={`text-[#5B21BD] cursor-pointer underline ${isResending ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                click here..
                            </span>
                        </p>
                        <button
                            onClick={handleSubmit}
                            disabled={isVerifying}
                            className={`bg-[#5B21BD] text-[#F6F8FA] px-6 py-3 rounded-[8px] text-[16px] font-bold w-[123px] cursor-pointer ${isVerifying ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {isVerifying ? 'Verifying...' : 'Confirm'}
                        </button>
                    </div>
                </div>
                <Toaster position="top-right" />
            </div>
            {isModalOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-50 z-50"
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

export default Verification;