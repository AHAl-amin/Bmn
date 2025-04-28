


import { useState } from 'react';
import login_img from '../../../assets/image/user_login_img.jpg';
import login_img2 from '../../../assets/image/Admin_login_img.png';


import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5'; // Import eye icons
import { Link } from 'react-router-dom';

function UserSignup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex items-center justify-between w-full min-h-screen gap-10 nunito lora">
      <div className="w-1/2 ">
        <img
          src={login_img}
          alt="Registration illustration"
          className=" h-screen w-full "
        />
      </div>
      <div className="w-1/2 lg:px-40">
        <div className="flex justify-center">
          <img src={login_img2} className='h-[220px] ' alt="img" />
        </div>
        <h1 className='text-[50px] text-[#5B21BD] font-bold text-center'>Welcome </h1>
        <p className='text-[#A8A8A8] text-[16px] text-center mb-3'>Enter your email & password to access your account</p>

        <form onSubmit={handleSubmit} className="space-y-1">
          <div className="relative">
            <label className="block text-[#5B21BD] mb-1  text-[20px]">Name</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your full name"
                
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(email !== '')}
                className="w-full px-4 py-2 border bg-[#F8FCFF] border-[#5B21BD] rounded-[8px] "
                required
              />
             
            </div>
          </div>
          <div className="relative">
            <label className="block text-[#5B21BD] mb-1 text-[20px]">Email</label>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(email !== '')}
                className="w-full px-4 py-2 border bg-[#F8FCFF] border-[#5B21BD] rounded-[8px] "
                required
              />
             
            </div>
          </div>
          <div className="relative">
            <label className="block text-[#5B21BD] mb-1">Phone number</label>
            <div className="relative">
              <input
                type="number"
                placeholder="Enter your number"
               
                className="w-full px-4 py-2 border bg-[#F8FCFF] border-[#5B21BD] rounded-[8px] "
                required
              />
             
            </div>
          </div>

          <div className="relative">
            <label className="block text-[#5B21BD] mb-1 text-[20px]">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'} // Toggle input type
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(password !== '')}
                className="w-full px-4 py-2 border bg-[#F8FCFF] border-[#5B21BD] rounded-[8px] pr-10"
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
            <label className="block text-[#5B21BD] mb-1 text-[20px]">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Enter your confirm password"
               
                className={`w-full px-4 py-2 border bg-[#F8FCFF] border-[#5B21BD] rounded-[8px]  pr-10
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

     

<div className="relative">
  <label className="block text-[#5B21BD] mb-1 text-[20px]">Your Account Type</label>
  <div className="relative">
    <select
      className="w-full px-4 py-2 border bg-[#F8FCFF] border-[#5B21BD] rounded-[8px] appearance-none cursor-pointer text-[#A8A8A8]"
      required
    >
      <option  className='cursor-pointer' value="" disabled selected>Select</option>
      <option className='cursor-pointer'  value="personal">Personal</option>
      <option className='cursor-pointer'  value="business">Business</option>
      <option  className='cursor-pointer' value="student">Student</option>
      <option  className='cursor-pointer' value="premium">Premium</option> 
    </select>
  </div>
</div>


          <div>
            <button
              type="submit"
              className="bg-[#5B21BD] text-[#FFFFFF] rounded-[8px] mx-auto px-6 py-2 mt-4 cursor-pointer w-full text-[20px]"
            >
              SIGN Up
            </button>
          </div>
          <p className="text-[16px] text-[#3E3E3E] text-center py-4">
            Already have an account?
            <Link
              to=""
              className="text-[#5B21BD] ml-2 cursor-pointer underline"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default UserSignup;;