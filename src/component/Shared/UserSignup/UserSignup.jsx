import { useEffect, useState } from "react";
import login_img from "../../../assets/image/user_login_img.jpg";
import login_img2 from "../../../assets/image/Admin_login_img.png";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../../Rudux/feature/authApi";
import { toast, Toaster } from "react-hot-toast"; // ✅ use only react-hot-toast
import { useForm } from "react-hook-form";

function UserSignup() {
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
	} = useForm();

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const [submitRegister, { isLoading }] = useRegisterMutation();

	const togglePasswordVisibility = () => setShowPassword(!showPassword);
	const toggleConfirmPasswordVisibility = () =>
		setShowConfirmPassword(!showConfirmPassword);

	const onSubmit = async (data) => {
		try {
			if (data.password !== data.confirmPassword) {
				toast.error("Passwords do not match.");
				return;
			}

			const signupData = {
				first_name: data.firstName,
				last_name: data.lastName,
				email: data.email,
				phone: data.phone,
				password: data.password,
				role: data.accountType,
			};
			const payload = await submitRegister(signupData).unwrap();

			localStorage.setItem("userEmail", signupData.email); // Store email in localStorage

			toast.success(payload?.message || "Registration successful!");

			navigate("/verification");
		} catch (err) {
			console.log("Error occuring in signup: ", err);
			toast.error(
				err?.data?.message ||
					err?.data?.email?.[0] ||
					"Registration failed."
			);
		}
	};

	return (
		<div className="flex flex-col items-center md:flex-row justify-between w-full md:min-h-screen gap-10 md:p-0 p-4 font-lora">
			<div className="md:w-1/2 w-full md:h-screen ">
				<img
					src={login_img}
					alt="Registration illustration"
					className="md:h-screen w-full"
				/>
			</div>
			<div className="md:w-1/2 w-full md:px-40">
				<div className="flex justify-center">
					<img
						src={login_img2}
						className="h-32 w-32"
						alt="Admin login illustration"
					/>
				</div>
				<h1 className="text-5xl text-[#5B21BD] font-bold text-center">
					Welcome
				</h1>
				<p className="text-[#A8A8A8] text-base text-center mb-3">
					Enter your details to create an account
				</p>

				<form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
					<div>
						<label
							htmlFor="firstName"
							className="block text-[#5B21BD] mb-1 text-xl"
						>
							First Name
						</label>
						<input
							id="firstName"
							type="text"
							placeholder="Enter your first name"
							className="w-full px-4 py-2 border bg-[#F8FCFF] border-[#5B21BD] rounded-lg"
							{...register("firstName", {
								required: "First Name is required",
							})}
						/>
						{errors.firstName && (
							<p className="text-red-500 text-sm mt-1">
								{errors.firstName.message}
							</p>
						)}
					</div>
					<div>
						<label
							htmlFor="lastName"
							className="block text-[#5B21BD] mb-1 text-xl"
						>
							Last Name
						</label>
						<input
							id="lastName"
							type="text"
							placeholder="Enter your last name"
							className="w-full px-4 py-2 border bg-[#F8FCFF] border-[#5B21BD] rounded-lg"
							{...register("lastName", {
								required: "Last Name is required",
							})}
						/>
						{errors.lastName && (
							<p className="text-red-500 text-sm mt-1">
								{errors.lastName.message}
							</p>
						)}
					</div>
					<div>
						<label
							htmlFor="email"
							className="block text-[#5B21BD] mb-1 text-xl"
						>
							Email
						</label>
						<input
							id="email"
							type="email"
							placeholder="Enter your email"
							className="w-full px-4 py-2 border bg-[#F8FCFF] border-[#5B21BD] rounded-lg"
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
							htmlFor="phone"
							className="block text-[#5B21BD] mb-1 text-xl"
						>
							Phone Number
						</label>
						<input
							id="phone"
							type="tel"
							placeholder="Enter your phone number"
							className="w-full px-4 py-2 border bg-[#F8FCFF] border-[#5B21BD] rounded-lg"
							{...register("phone", {
								required: "Phone is required",
							})}
						/>
						{errors.phone && (
							<p className="text-red-500 text-sm mt-1">
								{errors.phone.message}
							</p>
						)}
					</div>
					<div>
						<label
							htmlFor="password"
							className="block text-[#5B21BD] mb-1 text-xl"
						>
							Password
						</label>
						<div className="relative">
							<input
								id="password"
								type={showPassword ? "text" : "password"}
								placeholder="Enter your password"
								className="w-full px-4 py-2 border bg-[#F8FCFF] border-[#5B21BD] rounded-lg pr-10"
								{...register("password", {
									required: "Password is required",
								})}
							/>
							<button
								type="button"
								onClick={togglePasswordVisibility}
								className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5B21BD]"
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
					<div>
						<label
							htmlFor="confirmPassword"
							className="block text-[#5B21BD] mb-1 text-xl"
						>
							Confirm Password
						</label>
						<div className="relative">
							<input
								id="confirmPassword"
								type={showConfirmPassword ? "text" : "password"}
								placeholder="Confirm your password"
								className="w-full px-4 py-2 border bg-[#F8FCFF] border-[#5B21BD] rounded-lg pr-10"
								{...register("confirmPassword", {
									required: "Confirm Password is required",
								})}
							/>
							<button
								type="button"
								onClick={toggleConfirmPasswordVisibility}
								className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5B21BD]"
							>
								{showConfirmPassword ? (
									<IoEyeOffOutline size={20} />
								) : (
									<IoEyeOutline size={20} />
								)}
							</button>
						</div>
						{errors.confirmPassword && (
							<p className="text-red-500 text-sm mt-1">
								{errors.confirmPassword.message}
							</p>
						)}
					</div>
					<div>
						<label
							htmlFor="accountType"
							className="block text-[#5B21BD] mb-1 text-xl"
						>
							Account Type
						</label>
						<select
							id="accountType"
							className="w-full px-4 py-2 border bg-[#F8FCFF] border-[#5B21BD] rounded-lg"
							defaultValue=""
							{...register("accountType", {
								required: "Account Type is required",
							})}
						>
							<option value="" disabled>
								Select
							</option>
							<option value="user">User</option>
							<option value="chef">Chef</option>
						</select>

						{errors.accountType && (
							<p className="text-red-500 text-sm mt-1">
								{errors.accountType.message}
							</p>
						)}
					</div>
					<button
						type="submit"
						disabled={isLoading}
						className={`w-full bg-[#5B21BD] text-white rounded-lg px-6 py-2 mt-4 text-xl ${
							isLoading
								? "opacity-50 cursor-not-allowed"
								: "cursor-pointer"
						}`}
					>
						{isLoading ? "Signing Up..." : "Sign Up"}
					</button>
					<p className="text-base text-[#3E3E3E] text-center py-4">
						Already have an account?{" "}
						<Link
							to="/user_signin"
							className="text-[#5B21BD] underline"
						>
							Sign In
						</Link>
					</p>
				</form>
			</div>

			{/*  Toast container */}
			<Toaster position="top-right" />
		</div>
	);
}

export default UserSignup;
