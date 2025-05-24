import { useEffect, useState } from "react";
import login_img from "../../../assets/image/Admin_login_img.png";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5"; // Import eye icons
import { Link, useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { useLoginMutation } from "../../../Rudux/feature/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../../Rudux/authSlice";

function Admin_login() {
	const navigate = useNavigate();
	const isAdminLoggedIn =
		localStorage.getItem("access_token") ||
		localStorage.getItem("refresh_token");
	useEffect(() => {
		if (isAdminLoggedIn) {
			navigate("/admin_dashboard");
		}
		return;
	}, [isAdminLoggedIn]);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [emailFocused, setEmailFocused] = useState(false);
	const [passwordFocused, setPasswordFocused] = useState(false);
	const [showPassword, setShowPassword] = useState(false); // State for password visibility
	const dispatch = useDispatch();

	const [submitLogin, { isLoading }] = useLoginMutation();

	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			const loginData = {
				email: email,
				password: password,
			};
			const response = await submitLogin(loginData).unwrap();
			// Store tokens in localStorage
			if (response.access_token) {
				// Store the access token in redux state
				dispatch(setUser({ accessToken: response?.access_token }));
				// add the access token and refresh token to localStorage
				localStorage.setItem("access_token", response?.access_token);
				localStorage.setItem("refresh_token", response.refresh_token);
				toast.success(response?.message || "Login successful!");
				// Navigate to the desired route (e.g., login or dashboard)
				setTimeout(() => {
					navigate("/admin_dashboard");
				}, 2000); // 2 seconds delay
			} else {
				console.warn("No access token found in response");
			}
			return;
		} catch (err) {
			const errorMessage =
				err?.data?.message ||
				err?.message ||
				err?.data?.detail ||
				"Login failed. Please try again.";
			toast.error(errorMessage);
		}
	};

	// Toggle password visibility
	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div className="flex items-center justify-between w-full min-h-screen gap-10 nunito lora">
			<div className="flex justify-center items-center w-[45%] h-screen bg-[#CCBAEB]">
				<img
					src={login_img}
					alt="Registration illustration"
					className="w-[505px] h-[432px] p-10"
				/>
			</div>
			<div className="w-1/2 lg:px-40">
				<div className="mb-6">
					<p className="text-[50px] font-semibold text-[#5B21BD]">
						Login
					</p>
				</div>

				<form onSubmit={handleSubmit} className="space-y-4">
					<div className="relative">
						<label className="block text-[#5B21BD] mb-2">
							Email
						</label>
						<div className="relative">
							<input
								type="email"
								placeholder="Enter your email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								onFocus={() => setEmailFocused(true)}
								onBlur={() => setEmailFocused(email !== "")}
								className="w-full px-4 py-2 border bg-[#F8FCFF] border-[#5B21BD] rounded-[8px] "
								required
							/>
						</div>
					</div>

					<div className="relative">
						<label className="block text-[#5B21BD] mb-2">
							Password
						</label>
						<div className="relative">
							<input
								type={showPassword ? "text" : "password"} // Toggle input type
								placeholder="Enter your password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								onFocus={() => setPasswordFocused(true)}
								onBlur={() =>
									setPasswordFocused(password !== "")
								}
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

					<div>
						<button
							type="submit"
							className="bg-[#5B21BD] text-[#FFFFFF] rounded-[8px] mx-auto px-6 py-2 mt-4 cursor-pointer w-full"
						>
							Login
						</button>
					</div>
					<p className="text-[16px] text-[#3E3E3E] text-center">
						Forgot your password?{" "}
						<Link
							to="/admin_confirmPassword"
							className="text-[#003214] cursor-pointer underline"
						>
							Forgot password
						</Link>
					</p>
				</form>
			</div>

			<Toaster position="top-right" />
		</div>
	);
}

export default Admin_login;
