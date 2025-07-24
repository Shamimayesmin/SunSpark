"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import SmallLoader from "@/components/common/Loader/smallLoader";
import { useSetpasswordMutation } from "@/redux/user/signupAndLoginSlice";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import img from "@/assets/E-commerce/loginPageImage.jpg";
import logo from "@/assets/E-commerce/logo main.png";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { CgLock } from "react-icons/cg";

const page = () => {
	const { id, token } = useParams();
	const [setpassword, { isLoading, isError }] = useSetpasswordMutation();
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
	const [visible, setVisible] = useState<boolean>(false);
	const router = useRouter();

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		if (newPassword.length < 6) {
			toast.error("Password must be at least 6 characters long.");
			return;
		}

		if (newPassword.length > 20) {
			toast.error("Password can't be more than 20 characters");
			return;
		}

		if (newPassword !== confirmPassword) {
			toast.error("Confirm password do not match!");
			return;
		}
		const password = confirmPassword;

		const res = await setpassword({ id, token, password });

		//@ts-ignore
		if (res.data?.statusCode === 200) {
			//@ts-ignore
			toast.success(res.data.message);
			//@ts-ignore
		} else {
			//@ts-ignore
			toast.error("Something went wrong!!");
		}
	};

	const togglePasswordVisibility = () => {
		setPasswordVisible(!passwordVisible);
	};

	const togglePassword = () => {
		setVisible(!visible);
	};

	return (
		<div className="w-full h-screen flex flex-wrap items-center bg-[#FFFFFF]">
			<Toaster />
			<div className="hidden lg:block lg:w-1/2">
				<Image alt="Image" src={img} className="w-full h-screen" />
			</div>
			<div className="lg:w-1/2 w-full px-4 lg:px-24 ">
				<div className="flex flex-wrap justify-between items-center">
					<Link href={"/"}>
						<Image src={logo} alt="Logo" className="h-20 w-32"></Image>
					</Link>
					<h1 className="text-[#153870] text-center text-2xl lg:text-3xl font-bold">
						Reset Password
					</h1>
				</div>
				<form onSubmit={handleSubmit} className="pt-16">
					<div className="mt-5">
						<label className="label">
							<span className="label-text text-[10px] lg:text-sm mb-2 font-medium text-[#343434] ">
								New Password
							</span>
						</label>
						<div className="relative">
							<span className="absolute inset-y-0 left-0 flex items-center pl-3">
								<CgLock className="h-4 w-4 text-[#8A8A8A]" />
							</span>
							<input
								name="password"
								type={passwordVisible ? "text" : "password"}
								onChange={(e) => setNewPassword(e.target.value)}
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
						</div>
					</div>
					<div className="mt-8">
						<label className="label">
							<span className="label-text text-[10px] lg:text-sm font-medium mb-2 text-[#343434] ">
								Confirm Password
							</span>
						</label>
						<div className="relative">
							<span className="absolute inset-y-0 left-0 flex items-center pl-3">
								<CgLock className="h-4 w-4 text-[#8A8A8A]" />
							</span>
							<input
								name="password"
								type={visible ? "text" : "password"}
								onChange={(e) => setConfirmPassword(e.target.value)}
								className="input input-bordered w-full rounded-none border-[#595959] text-[#191919] text-[10px] lg:text-sm pl-10 bg-[#FFFFFF]"
								placeholder="Enter your password"
							/>
							<p
								onClick={togglePassword}
								aria-label="Toggle password visibility"
								className="absolute inset-y-0 right-4 my-auto cursor-pointer text-2xl text-[#59617A] top-1/2 transform -translate-y-1/2"
							>
								{visible ? <FaRegEyeSlash /> : <IoEyeOutline />}
							</p>
						</div>
					</div>

					<div className="mt-12 flex justify-center">
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
							{isLoading ? <SmallLoader /> : "Reset Password"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default page;
