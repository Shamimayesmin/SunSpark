"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import img from "@/assets/E-commerce/loginPageImage.jpg";
import logo from "@/assets/E-commerce/logo main.png";
import Image from "next/image";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { CgLock } from "react-icons/cg";
import Link from "next/link";

import { useUserLoginMutation } from "@/redux/user/signupAndLoginSlice";
import Cookies from "universal-cookie";
import SmallLoader from "@/components/common/Loader/smallLoader";
import toast, { Toaster } from "react-hot-toast";

import GoogleButton from "@/components/common/sociallogin/GoogleButton";
import FacebookButton from "@/components/common/sociallogin/FacebookButton";

const cookies = new Cookies();

const MIN_PASSWORD_LENGTH = 8;
const MAX_PASSWORD_LENGTH = 20;

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loginUser, { isLoading, isError }] = useUserLoginMutation();
	const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

	const router = useRouter();

	const [errors, setErrors] = useState({ email: "", password: "" });

	const validateEmail = (email: any) => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		// Reset errors
		setErrors({ email: "", password: "" });

		let hasError = false;
		const newErrors = { ...errors };

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

		setErrors(newErrors);

		if (hasError) {
			return;
		}

		try {
			//@ts-ignore
			const { data, error } = await loginUser({ email, password });

			if (data && data?.data?.accessToken) {
				const expirationTime = new Date();
				expirationTime.setTime(expirationTime.getTime() + 24 * 60 * 60 * 1000); // 24 hour from now

				cookies.set("accessToken", data?.data?.accessToken, { path: "/" });
				toast.success("Login successful !");
				setTimeout(() => {
					router.back();
				}, 1500); // wait for 1.5 seconds before redirecting
			} else {
				// toast.error("Error : " + (error?.data?.message || "Unknown error"));
				console.error("Error logging in:", error);
			}
		} catch (error) {
			console.error("Error logging innnn:", error);
		}
	};

	const togglePasswordVisibility = () => {
		setPasswordVisible(!passwordVisible);
	};

	// Redirect to error page
	// if (isError) {
	//   router.push("/pages/ErrorPage/InternalServerErrorPage");
	//   return null;
	// }

	return (
		<div className="w-full h-screen flex flex-wrap items-center bg-[#FFFFFF]">
			<Toaster />
			<div className="hidden lg:block lg:w-1/2">
				<Image alt="Image" src={img} className="w-full h-screen" />
			</div>
			<div className="lg:w-1/2 w-full px-4 lg:px-24  ">
				<div className="flex flex-wrap justify-between items-center">
					<Link href={"/"}>
						<Image
							src={logo}
							alt="Logo"
							className="lg:h-16 lg:w-36 h-10 w-20"
						></Image>
					</Link>
					<h1 className="text-[#153870] text-center text-2xl lg:text-3xl font-bold">
						Login
					</h1>
				</div>
				<form onSubmit={handleSubmit} className="pt-10">
					<div className="mt-5 w-full ">
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
					<div className="mt-5">
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
					<Link href={"/pages/User/forgetpassword"}>
						<p className="text-end text-[#FE3003] text-[10px] lg:text-xs font-medium mt-4">
							Forget Password?
						</p>
					</Link>
					<div className="mt-5 flex justify-center">
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
							{isLoading ? <SmallLoader /> : "LOGIN"}
						</button>
					</div>
					<div className="flex flex-wrap justify-center mt-5 text-[11px] lg:text-sm font-medium">
						<p className="text-[#737373] pr-1">Don’t have any account?</p>
						<Link
							href={"/pages/User/Signup"}
							className="text-[#153870] font-medium"
						>
							Sign Up
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

export default LoginPage;
