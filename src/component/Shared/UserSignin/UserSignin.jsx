


import { useState } from 'react';
import login_img from '../../../assets/image/user_login_img.jpg';
import login_img2 from '../../../assets/image/Admin_login_img.png';


import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5'; // Import eye icons
import { Link } from 'react-router-dom';

function UserSingin() {
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
    <div className="flex items-center md:justify-between w-full md:flex-row flex-col md:min-h-screen gap-10 nunito lora">
      <div className="md:w-1/2  ">
        <img
          src={login_img}
          alt="Registration illustration"
          className=" md:h-screen w-full  "
        />
      </div>
      <div className="md:w-1/2 lg:px-40">
        <div className="flex justify-center mb-4">
          <img src={login_img2} className='h-[150px] w-[150px]' alt="img" />
        </div>
        <h1 className='text-[50px] text-[#5B21BD] font-bold text-center'>Welcome Back </h1>
        <p className='text-[#A8A8A8] text-[16px] text-center mb-3'>Enter your email & password to access your account</p>

        <form onSubmit={handleSubmit} className="space-y-1">
         
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
          {/* <div className='flex justify-between pt-2'>
            <p>Remember me</p>
            <Link className='text-[#003214]'>Forget Password</Link>
          </div>
         */}

<div className="flex justify-between pt-2">
  <div className="flex items-center">
    <input
      type="checkbox"
      id="rememberMe"
      className="mr-2 h-4 w-4 text-[#5B21BD] border-[#5B21BD] rounded focus:ring-[#5B21BD]"
    />
    <label htmlFor="rememberMe" className="text-[#5B21BD]">
      Remember me
    </label>
  </div>
  <Link className="text-[#5B21BD]" to="/confirm_email">
    Forget Password
  </Link>
</div>
     



          <div>
            <button
              type="submit"
              className="bg-[#5B21BD] text-[#FFFFFF] rounded-[8px] mx-auto px-6 py-2 mt-4 cursor-pointer w-full text-[20px]"
            >
             Sign In
            </button>
          </div>
          <p className="text-[16px] text-[#3E3E3E] text-center py-4">
          don't have an account?
            <Link
              to="/user_signup"
              className="text-[#5B21BD] cursor-pointer underline ml-2"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default UserSingin;;