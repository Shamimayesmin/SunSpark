"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import img from "@/assets/E-commerce/loginPageImage.jpg";
import { GoPerson } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import { CgLock } from "react-icons/cg";
import logo from "@/assets/E-commerce/logo main.png";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useUserRegisterMutation } from "@/redux/user/signupAndLoginSlice";
import Cookies from "universal-cookie";
import SmallLoader from "@/components/common/Loader/smallLoader";
import GoogleButton from "@/components/common/sociallogin/GoogleButton";
import FacebookButton from "@/components/common/sociallogin/FacebookButton";
import toast, { Toaster } from "react-hot-toast";

const cookies = new Cookies();

const MIN_PASSWORD_LENGTH = 8;
const MAX_PASSWORD_LENGTH = 20;

const SignupPage = () => {
	const [email, setEmail] = useState("");
	const [firstname, setFirstName] = useState("");
	const [lastname, setLastName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
	const [confirmPasswordVisible, setConfirmPasswordVisible] =
		useState<boolean>(false);
	const [registerUser, { isLoading, isError }] = useUserRegisterMutation();
	const router = useRouter();

	// Error state variables
	const [errors, setErrors] = useState({
		firstname: "",
		lastname: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const validateEmail = (email: any) => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		// Reset errors
		setErrors({
			firstname: "",
			lastname: "",
			email: "",
			password: "",
			confirmPassword: "",
		});

		let hasError = false;
		const newErrors = { ...errors };

		// First name validation
		if (!firstname) {
			newErrors.firstname = "First name is required";
			hasError = true;
		}

		// Last name validation
		if (!lastname) {
			newErrors.lastname = "Last name is required";
			hasError = true;
		}

		// Email validation
		if (!email) {
			newErrors.email = "Email is required";
			hasError = true;
		} else if (!validateEmail(email)) {
			newErrors.email = "Invalid email format";
			hasError = true;
		}

		// Password validation
		if (!password) {
			newErrors.password = "Password is required";
			hasError = true;
		} else if (password.length < MIN_PASSWORD_LENGTH) {
			newErrors.password = `Password must be at least ${MIN_PASSWORD_LENGTH} characters`;
			hasError = true;
		} else if (password.length > MAX_PASSWORD_LENGTH) {
			newErrors.password = `Password must be less than ${MAX_PASSWORD_LENGTH} characters`;
			hasError = true;
		}

		// Confirm password validation
		if (!confirmPassword) {
			newErrors.confirmPassword = "Confirm password is required";
			hasError = true;
		} else if (password !== confirmPassword) {
			newErrors.confirmPassword = "Passwords do not match";
			hasError = true;
		}

		setErrors(newErrors);

		if (hasError) {
			return;
		}

		try {
			//@ts-ignore
			const { data, error } = await registerUser({
				firstname,
				lastname,
				email,
				password,
			});
			if (data) {
				cookies.set("accessToken", data?.data?.accessToken, { path: "/" });
				toast.success("Sign up successful !");
				setTimeout(() => {
					router.back();
				}, 1500); // wait for 1.5 seconds before redirecting
			} else {
				console.error("Error signing up:", error);
				// toast.error("Error: " + (error?.data?.message || "Unknown error"));
			}
		} catch (error) {
			console.error("Error signing up:", error);
		}
	};

	const togglePasswordVisibility = () => {
		setPasswordVisible(!passwordVisible);
	};

	const toggleConfirmPasswordVisibility = () => {
		setConfirmPasswordVisible(!confirmPasswordVisible);
	};

	// Redirect to error page
	// if (isError) {
	// 	router.push("/pages/ErrorPage/InternalServerErrorPage");
	// 	return null;
	// }

	return (
		<div className="w-full h-screen lg:flex flex-wrap items-center bg-[#FFFFFF]">
			<Toaster />
			<div className="w-1/2 hidden lg:block">
				<Image alt="Image" src={img} className="w-full h-screen" />
			</div>
			<div className="lg:w-1/2 lg:px-24 px-4 pt-10 lg:pt-0 ">
				<div className="flex flex-wrap justify-between items-center">
					<Link href={"/"}>
						<Image
							src={logo}
							alt="Logo"
							className="lg:h-16 lg:w-36 h-10 w-20"
						></Image>
					</Link>
					<h1 className="text-[#153870] text-center text-2xl lg:text-3xl font-bold">
						Registration
					</h1>
				</div>
				<form onSubmit={handleSubmit} className="pt-3">
					<div className="lg:flex gap-4 w-full">
						<div className="lg:w-1/2">
							<label className="label">
								<span className="label-text text-[10px] lg:text-sm font-medium text-[#343434] ">
									First Name
								</span>
							</label>
							<div className="relative">
								<span className="absolute inset-y-0 left-0 flex items-center pl-3">
									<GoPerson className="h-4 w-4 text-[#8A8A8A]" />
								</span>
								<input
									type="text"
									name="first_name"
									value={firstname}
									onChange={(e) => setFirstName(e.target.value)}
									placeholder="Enter your first name"
									className="input input-bordered w-full rounded-none border-[#595959] text-[#191919] text-[10px] lg:text-sm pl-10 bg-[#FFFFFF]"
								/>
								{errors.firstname && (
									<p className="text-red-500 text-xs">{errors.firstname}</p>
								)}
							</div>
						</div>
						<div className="lg:w-1/2">
							<label className="label">
								<span className="label-text text-[10px] lg:text-sm font-medium text-[#343434] ">
									Last Name
								</span>
							</label>
							<div className="relative">
								<span className="absolute inset-y-0 left-0 flex items-center pl-3">
									<GoPerson className="h-4 w-4 text-[#8A8A8A]" />
								</span>
								<input
									type="text"
									name="last_name"
									value={lastname}
									onChange={(e) => setLastName(e.target.value)}
									placeholder="Enter your last name"
									className="input input-bordered w-full rounded-none border-[#595959] text-[#191919] text-[10px] lg:text-sm pl-10 bg-[#FFFFFF]"
								/>
								{errors.lastname && (
									<p className="text-red-500 text-xs">{errors.lastname}</p>
								)}
							</div>
						</div>
					</div>
					<div className="mt-3 w-full">
						<label className="label">
							<span className="label-text text-[10px] lg:text-sm font-medium text-[#343434] ">
								Email
							</span>
						</label>
						<div className="relative">
							<span className="absolute inset-y-0 left-0 flex items-center pl-3">
								<CiMail className="h-4 w-4 text-[#8A8A8A]" />
							</span>
							<input
								type="email"
								name="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="example@solar-ict.com"
								className="input input-bordered w-full rounded-none border-[#595959] text-[#191919] text-[10px] lg:text-sm pl-10 bg-[#FFFFFF]"
							/>
							{errors.email && (
								<p className="text-red-500 text-xs">{errors.email}</p>
							)}
						</div>
					</div>
					<div className="lg:flex gap-4 w-full mt-3">
						<div className="lg:w-1/2">
							<label className="label">
								<span className="label-text text-[10px] lg:text-sm font-medium text-[#343434] ">
									Password
								</span>
							</label>
							<div className="relative">
								<span className="absolute inset-y-0 left-0 flex items-center pl-3">
									<CgLock className="h-4 w-4 text-[#8A8A8A]" />
								</span>
								<input
									name="password"
									value={password}
									type={passwordVisible ? "text" : "password"}
									onChange={(e) => setPassword(e.target.value)}
									className="input input-bordered w-full rounded-none border-[#595959] text-[#191919] text-[10px] lg:text-sm pl-10 bg-[#FFFFFF]"
									placeholder="Enter your password"
								/>
								<p
									onClick={togglePasswordVisibility}
									aria-label="Toggle password visibility"
									className="absolute inset-y-0 right-4 my-auto cursor-pointer text-2xl text-[#59617A] top-1/2 transform -translate-y-1/2"
								>
									{passwordVisible ? <FaRegEyeSlash /> : <IoEyeOutline />}
								</p>
								{errors.password && (
									<p className="text-red-500 text-xs">{errors.password}</p>
								)}
							</div>
						</div>
						<div className="lg:w-1/2">
							<label className="label">
								<span className="label-text text-[10px] lg:text-sm font-medium text-[#343434] ">
									Confirm Password
								</span>
							</label>
							<div className="relative">
								<span className="absolute inset-y-0 left-0 flex items-center pl-3">
									<CgLock className="h-4 w-4 text-[#8A8A8A]" />
								</span>
								<input
									name="confirm_password"
									value={confirmPassword}
									type={confirmPasswordVisible ? "text" : "password"}
									onChange={(e) => setConfirmPassword(e.target.value)}
									className="input input-bordered w-full rounded-none border-[#595959] text-[#191919] text-[10px] lg:text-sm pl-10 bg-[#FFFFFF]"
									placeholder="Confirm the password"
								/>
								<p
									onClick={toggleConfirmPasswordVisibility}
									aria-label="Toggle password visibility"
									className="absolute inset-y-0 right-4 my-auto cursor-pointer text-2xl text-[#59617A] top-1/2 transform -translate-y-1/2"
								>
									{confirmPasswordVisible ? (
										<FaRegEyeSlash />
									) : (
										<IoEyeOutline />
									)}
								</p>
								{errors.confirmPassword && (
									<p className="text-red-500 text-xs">
										{errors.confirmPassword}
									</p>
								)}
							</div>
						</div>
					</div>
					<div className="mt-5 flex gap-4">
						<input
							type="checkbox"
							name=""
							id=""
							className="h-4 w-4 border border-[#D7DAED] bg-[#FFFFFF]"
							style={{ backgroundColor: "white" }}
						/>
						<p className="text-[#737373] text-[10px] lg:text-xs font-semibold">
							I agreed the{" "}
							<span className="text-[#153870]  ">Terms And Codition</span> and{" "}
							<span className="text-[#153870]"> Privacy Policy</span>
						</p>
					</div>
					<div className="mt-8 flex justify-center">
						<button
							type="submit"
							className={`btn bg-[#153870] hover:bg-[#016B90] w-full border-none text-white ${
								isLoading ? "disabled" : ""
							}`}
							disabled={isLoading}
							style={{
								backgroundColor: isLoading ? "#33A4FF" : "",
								cursor: isLoading ? "not-allowed" : "pointer",
							}}
						>
							{isLoading ? <SmallLoader /> : "REGISTER"}
						</button>
					</div>
					<div className="flex flex-wrap justify-center mt-6 text-sm font-medium">
						<p className="text-[#737373] text-[11px] lg:text-sm pr-1">
							Already have an account?
						</p>
						<Link
							href={"/pages/User/Login"}
							className="text-[#153870] font-medium"
						>
							Login here
						</Link>
					</div>
				</form>

				{/* social login buttons  */}
				<div className="mt-8">
					<div className="flex justify-center mb-3">
						{" "}
						<hr className="w-80" /> <span className="-mt-3 mx-4">or</span>{" "}
						<hr className="w-80" />{" "}
					</div>

					<div className="lg:flex gap-5 w-full mt-5">
						<div className="flex-1">
							<GoogleButton />
						</div>
						{/* <div className="flex-1">
							{" "}
							<FacebookButton />
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignupPage;
