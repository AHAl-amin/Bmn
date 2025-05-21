import { useEffect, useState } from "react";
import login_img from "../../../assets/image/user_login_img.jpg";
import login_img2 from "../../../assets/image/Admin_login_img.png";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
// import { useLoginMutation } from '../../../Redux/feature/authApi'; // Fixed typo: Rudux → Redux
import { toast, Toaster } from "react-hot-toast";
import { useLoginMutation } from "../../../Rudux/feature/authApi";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setUser } from "../../../Rudux/authSlice";

// Utility function for email validation
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

function UserSignin() {
	const navigate = useNavigate();
	const isUserLoggedIn =
		localStorage.getItem("access_token") ||
		localStorage.getItem("refresh_token");
	useEffect(() => {
		if (isUserLoggedIn) {
			navigate("/dashboard");
		}
		return;
	}, [isUserLoggedIn]);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({});
	const dispatch = useDispatch();
	const [rememberMe, setRememberMe] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const togglePasswordVisibility = () => setShowPassword(!showPassword);

	const [submitLogin, { isLoading }] = useLoginMutation();

	const onSubmit = async (data) => {
		try {
			const loginData = {
				email: data.email,
				password: data.password,
			};
			const response = await submitLogin(loginData).unwrap();
			// Store tokens in localStorage
			if (response.access_token) {
				// Store the access token in redux state
				dispatch(setUser({ accessToken: response?.access_token }));
			} else {
				console.warn("No access token found in response");
			}
			// Store tokens only if rememberMe is checked
			if (rememberMe) {
				// add the access token and refresh token to localStorage
				localStorage.setItem("access_token", response?.access_token);
				localStorage.setItem("refresh_token", response.refresh_token);
			}
			toast.success(response?.message || "Login successful!");
			// Navigate to the desired route (e.g., login or dashboard)
			setTimeout(() => {
				navigate("/dashboard");
			}, 2000); // 2 seconds delay
		} catch (err) {
			const errorMessage =
				err?.data?.message ||
				err?.message ||
				err?.data?.detail ||
				"Login failed. Please try again.";
			toast.error(errorMessage);
		}
	};

	return (
		<div className="flex flex-col md:flex-row items-center justify-between w-full min-h-screen gap-10 p-4 md:p-0 font-lora bg-gray-50">
			<div className="md:w-1/2 w-full">
				<img
					src={login_img}
					alt="Login illustration"
					className="w-full h-full  md:h-screen"
				/>
			</div>
			<div className="md:w-1/2 w-full md:px-40">
				<div className="flex justify-center mb-4">
					<img
						src={login_img2}
						className="h-[150px] w-[150px]"
						alt="Admin login illustration"
					/>
				</div>
				<h1 className="text-4xl text-[#5B21BD] font-bold text-center">
					Welcome Back
				</h1>
				<p className="text-[#A8A8A8] text-base text-center mb-6">
					Enter your email & password to access your account
				</p>

				<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
					<div>
						<label
							htmlFor="email"
							className="block text-[#5B21BD] mb-1 text-lg"
						>
							Email
						</label>
						<input
							id="email"
							type="email"
							placeholder="Enter your email"
							className="w-full px-4 py-2 border bg-[#F8FCFF] border-[#5B21BD] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B21BD]"
							disabled={isLoading}
							{...register("email", {
								required: "Email is required",
								validate: (value) => {
									const emailPattern =
										/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
									if (!emailPattern.test(value)) {
										return "Please enter a valid email address";
									}
								},
							})}
						/>
						{errors.email && (
							<p className="text-red-500 text-sm mt-1">
								{errors.email.message}
							</p>
						)}
					</div>

					<div>
						<label
							htmlFor="password"
							className="block text-[#5B21BD] mb-1 text-lg"
						>
							Password
						</label>
						<div className="relative">
							<input
								id="password"
								type={showPassword ? "text" : "password"}
								placeholder="Enter your password"
								className="w-full px-4 py-2 border bg-[#F8FCFF] border-[#5B21BD] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B21BD] pr-10"
								disabled={isLoading}
								{...register("password", {
									required: "Password is required",
								})}
							/>
							<button
								type="button"
								onClick={togglePasswordVisibility}
								aria-label={
									showPassword
										? "Hide password"
										: "Show password"
								}
								className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5B21BD]"
								disabled={isLoading}
							>
								{showPassword ? (
									<IoEyeOffOutline size={20} />
								) : (
									<IoEyeOutline size={20} />
								)}
							</button>
						</div>
						{errors.password && (
							<p className="text-red-500 text-sm mt-1">
								{errors.password.message}
							</p>
						)}
					</div>

					<div className="flex justify-between items-center pt-2">
						<div className="flex items-center">
							<input
								type="checkbox"
								id="rememberMe"
								checked={rememberMe}
								onChange={(e) =>
									setRememberMe(e.target.checked)
								}
								className="mr-2 h-4 w-4 text-[#5B21BD] border-[#5B21BD] rounded focus:ring-[#5B21BD]"
								disabled={isLoading}
							/>
							<label
								htmlFor="rememberMe"
								className="text-[#5B21BD] text-sm"
							>
								Remember me
							</label>
						</div>
						<Link
							to="/forget_password"
							className="text-[#5B21BD] text-sm hover:underline"
						>
							Forgot Password?
						</Link>
					</div>

					<button
						type="submit"
						disabled={isLoading}
						className={`w-full bg-[#5B21BD] text-white rounded-lg px-6 py-2 mt-4 text-lg font-semibold transition-opacity ${
							isLoading
								? "opacity-50 cursor-not-allowed"
								: "hover:bg-[#4A1A9C]"
						}`}
					>
						{isLoading ? "Signing In..." : "Sign In"}
					</button>

					<p className="text-base text-[#3E3E3E] text-center py-4">
						Don’t have an account?{" "}
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
