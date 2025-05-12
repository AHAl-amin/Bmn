


// import { useState } from 'react';
// import login_img from '../../../assets/image/user_login_img.jpg';
// import login_img2 from '../../../assets/image/Admin_login_img.png';


// import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5'; // Import eye icons
// import { Link, useNavigate } from 'react-router-dom';
// import { useLoginMutation } from '../../../Rudux/feature/authApi';

// function UserSingin() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailFocused, setEmailFocused] = useState(false);
//   const [passwordFocused, setPasswordFocused] = useState(false);
//   const [showPassword, setShowPassword] = useState(false); // State for password visibility
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const navigate =useNavigate()
//   const [login ,{isLoading}] =useLoginMutation()

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({ email, password });
//   };

//   // Toggle password visibility
//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const toggleConfirmPasswordVisibility = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//   };

//   return (
//     <div className="flex items-center md:justify-between w-full md:flex-row flex-col md:min-h-screen gap-10 nunito lora">
//       <div className="md:w-1/2  ">
//         <img
//           src={login_img}
//           alt="Registration illustration"
//           className=" md:h-screen w-full  "
//         />
//       </div>
//       <div className="md:w-1/2 lg:px-40">
//         <div className="flex justify-center mb-4">
//           <img src={login_img2} className='h-[150px] w-[150px]' alt="img" />
//         </div>
//         <h1 className='text-[50px] text-[#5B21BD] font-bold text-center'>Welcome Back </h1>
//         <p className='text-[#A8A8A8] text-[16px] text-center mb-3'>Enter your email & password to access your account</p>

//         <form onSubmit={handleSubmit} className="space-y-1">

//           <div className="relative">
//             <label className="block text-[#5B21BD] mb-1 text-[20px]">Email</label>
//             <div className="relative">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 onFocus={() => setEmailFocused(true)}
//                 onBlur={() => setEmailFocused(email !== '')}
//                 className="w-full px-4 py-2 border bg-[#F8FCFF] border-[#5B21BD] rounded-[8px] "
//                 required
//               />

//             </div>
//           </div>


//           <div className="relative">
//             <label className="block text-[#5B21BD] mb-1 text-[20px]">Password</label>
//             <div className="relative">
//               <input
//                 type={showPassword ? 'text' : 'password'} // Toggle input type
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 onFocus={() => setPasswordFocused(true)}
//                 onBlur={() => setPasswordFocused(password !== '')}
//                 className="w-full px-4 py-2 border bg-[#F8FCFF] border-[#5B21BD] rounded-[8px] pr-10"
//                 required
//               />

//               <button
//                 type="button"
//                 onClick={togglePasswordVisibility}
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5B21BD] cursor-pointer"
//               >
//                 {showPassword ? (
//                   <IoEyeOffOutline size={20} />
//                 ) : (
//                   <IoEyeOutline size={20} />
//                 )}
//               </button>
//             </div>
//           </div>
//           {/* <div className='flex justify-between pt-2'>
//             <p>Remember me</p>
//             <Link className='text-[#003214]'>Forget Password</Link>
//           </div>
//          */}

// <div className="flex justify-between pt-2">
//   <div className="flex items-center">
//     <input
//       type="checkbox"
//       id="rememberMe"
//       className="mr-2 h-4 w-4 text-[#5B21BD] border-[#5B21BD] rounded focus:ring-[#5B21BD]"
//     />
//     <label htmlFor="rememberMe" className="text-[#5B21BD]">
//       Remember me
//     </label>
//   </div>
//   <Link className="text-[#5B21BD]" to="/confirm_email">
//     Forget Password
//   </Link>
// </div>




//           <div>
//             <button
//               type="submit"
//               className="bg-[#5B21BD] text-[#FFFFFF] rounded-[8px] mx-auto px-6 py-2 mt-4 cursor-pointer w-full text-[20px]"
//             >
//              Sign In
//             </button>
//           </div>
//           <p className="text-[16px] text-[#3E3E3E] text-center py-4">
//           don't have an account?
//             <Link
//               to="/user_signup"
//               className="text-[#5B21BD] cursor-pointer underline ml-2"
//             >
//               Sign Up
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default UserSingin;;

import { useState } from 'react';
import login_img from '../../../assets/image/user_login_img.jpg';
import login_img2 from '../../../assets/image/Admin_login_img.png';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
// import { useLoginMutation } from '../../../Redux/feature/authApi'; // Fixed typo: Rudux → Redux
import { toast, Toaster } from 'react-hot-toast';
import { useLoginMutation } from '../../../Rudux/feature/authApi';

// Utility function for email validation
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

function UserSignin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!email || !password) {
      toast.error('Please fill in all required fields.');
      return;
    }

    if (!isValidEmail(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    const loginData = { email, password };

    try {
      const response = await login(loginData).unwrap();
      console.log('backendResponse', response);

      // Store tokens in localStorage
      if (response.access_token) {
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('refresh_token', response.refresh_token);
        console.log('Access Token:', response.access_token);
        console.log('Refresh Token:', response.refresh_token);
      } else {
        console.warn('No access token found in response');
      }

      // Store tokens only if rememberMe is checked
      if (rememberMe) {
        localStorage.setItem('authToken', response.access_token); // Consistent with API response
      }

      toast.success('Login successful!');
      navigate('/'); // Adjusted to a more specific route
    } catch (err) {
      const errorMessage =
        err?.data?.message || err?.message || 'Login failed. Please try again.';
      toast.error(errorMessage);
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full min-h-screen gap-10 p-4 font-lora bg-gray-50">
      <div className="md:w-1/2 w-full">
        <img
          src={login_img}
          alt="Login illustration"
          className="w-full h-full object-cover md:h-screen"
        />
      </div>
      <div className="md:w-1/2 w-full max-w-md mx-auto">
        <div className="flex justify-center mb-4">
          <img
            src={login_img2}
            className="h-[150px] w-[150px]"
            alt="Admin login illustration"
          />
        </div>
        <h1 className="text-4xl text-[#5B21BD] font-bold text-center">Welcome Back</h1>
        <p className="text-[#A8A8A8] text-base text-center mb-6">
          Enter your email & password to access your account
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-[#5B21BD] mb-1 text-lg">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border bg-[#F8FCFF] border-[#5B21BD] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B21BD]"
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-[#5B21BD] mb-1 text-lg">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border bg-[#F8FCFF] border-[#5B21BD] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B21BD] pr-10"
                required
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5B21BD]"
                disabled={isLoading}
              >
                {showPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center pt-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="mr-2 h-4 w-4 text-[#5B21BD] border-[#5B21BD] rounded focus:ring-[#5B21BD]"
                disabled={isLoading}
              />
              <label htmlFor="rememberMe" className="text-[#5B21BD] text-sm">
                Remember me
              </label>
            </div>
            <Link
              to="/confirm_email"
              className="text-[#5B21BD] text-sm hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-[#5B21BD] text-white rounded-lg px-6 py-2 mt-4 text-lg font-semibold transition-opacity ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#4A1A9C]'
              }`}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>

          <p className="text-base text-[#3E3E3E] text-center py-4">
            Don’t have an account?{' '}
            <Link
              to="/user_signup"
              className="text-[#5B21BD] underline hover:text-[#4A1A9C]"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>

      <Toaster position="top-right" />
    </div>
  );
}

export default UserSignin;