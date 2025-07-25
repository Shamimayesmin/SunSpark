import { useChangePassMutation } from "@/redux/user/signupAndLoginSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

const ChangePassword = () => {
	const [currentPassword, setCurrentPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
	const [newPasswordVisible, setNewPasswordVisible] = useState<boolean>(false);
	//@ts-ignore
	const [changePassword, { isLoading, isError }] = useChangePassMutation();
	const router = useRouter();

	// Error state variables
	const [errors, setErrors] = useState({
		currentPassword: "",
		newPassword: "",
	});

	const MIN_PASSWORD_LENGTH = 8;
	const MAX_PASSWORD_LENGTH = 20;

	const validatePasswordLength = (password: string) => {
		if (password.length < MIN_PASSWORD_LENGTH) {
			return `Password must be at least ${MIN_PASSWORD_LENGTH} characters`;
		} else if (password.length > MAX_PASSWORD_LENGTH) {
			return `Password must be less than ${MAX_PASSWORD_LENGTH} characters`;
		}
		return "";
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		setErrors({ currentPassword: "", newPassword: "" });

		let hasError = false;
		const newErrors = { ...errors };

		// Current password validation
		if (!currentPassword) {
			newErrors.currentPassword = "Current password is required";
			hasError = true;
		}

		// New password validation
		const newPasswordError = validatePasswordLength(newPassword);
		if (newPasswordError) {
			newErrors.newPassword = newPasswordError;
			hasError = true;
		}

		setErrors(newErrors);

		if (hasError) {
			return;
		}

		try {
			//@ts-ignore
			const { data, error } = await changePassword({
				currentPassword,
				newPassword,
			});

			if (data) {
				toast.success("Password changed successfully!");
				setCurrentPassword("");
				setNewPassword("");
				setErrors({ currentPassword: "", newPassword: "" });
			} else {
				// toast.error("Error: " + (error?.data?.message || "Unknown error"));
			}
		} catch (error) {
			console.error("Failed to change password:", error);
		}
	};

	const togglePasswordVisibility = () => {
		if (currentPassword) {
			setPasswordVisible(!passwordVisible);
		}
	};

	const toggleNewPasswordVisibility = () => {
		if (newPassword) {
			setNewPasswordVisible(!newPasswordVisible);
		}
	};

	return (
		<div>
			<Toaster />
			<h1 className="text-2xl mb-4 text-[#153870] font-bold">
				Change Password
			</h1>
			<div className="">
				<div className=" flex-col lg:flex-row-reverse">
					<div className="card shrink-0 w-full max-w-lg shadow-md bg-base-100">
						<form className="card-body" onSubmit={handleSubmit}>
							<div className="form-control relative">
								<label className="label">
									<span className="label-text text-[#153870]">
										Current Password
									</span>
								</label>
								<input
									placeholder="Current password"
									className="input input-bordered pr-10"
									required
									value={currentPassword}
									type={passwordVisible ? "text" : "password"}
									onChange={(e) => {
										setCurrentPassword(e.target.value);
										if (!e.target.value) setPasswordVisible(false);
									}}
								/>
								{currentPassword && (
									<p
										onClick={togglePasswordVisibility}
										aria-label="Toggle password visibility"
										className="absolute inset-y-0 right-4 my-auto cursor-pointer text-2xl text-[#59617A] top-[60px] transform -translate-y-1/2"
									>
										{passwordVisible ? <FaRegEyeSlash /> : <IoEyeOutline />}
									</p>
								)}
								{errors.currentPassword && (
									<p className="text-red-500 text-xs mt-1">
										{errors.currentPassword}
									</p>
								)}
							</div>
							<div className="form-control relative">
								<label className="label">
									<span className="label-text text-[#153870]">
										New Password
									</span>
								</label>
								<input
									type={newPasswordVisible ? "text" : "password"}
									placeholder=" New password"
									className="input input-bordered pr-10"
									required
									value={newPassword}
									onChange={(e) => {
										setNewPassword(e.target.value);
										if (!e.target.value) setNewPasswordVisible(false);
									}}
								/>
								{newPassword && (
									<p
										onClick={toggleNewPasswordVisibility}
										aria-label="Toggle password visibility"
										className="absolute inset-y-0 right-4 my-auto cursor-pointer text-2xl text-[#59617A] top-[60px] transform -translate-y-1/2"
									>
										{newPasswordVisible ? <FaRegEyeSlash /> : <IoEyeOutline />}
									</p>
								)}

								{errors.newPassword && (
									<p className="text-red-500 text-xs mt-1">
										{errors.newPassword}
									</p>
								)}
							</div>
							<div className="form-control mt-6">
								<button
									type="submit"
									className="btn bg-[#153870] text-white text-lg hover:bg-[#245ab2]"
									disabled={isLoading}
								>
									{isLoading ? "Updating..." : "Update"}
								</button>
							</div>
							{isError && (
								<div className="text-red-500 mt-2">
									Failed to change password. Please try again.
								</div>
							)}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChangePassword;
