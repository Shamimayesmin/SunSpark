"use client";
import heartIcon from "@/assets/E-commerce/heart.svg";
import userIcon from "@/assets/E-commerce/user.png";
import logo from "@/assets/E-commerce/logo main.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
	useGetLoginUserQuery,
	useUserLogOutMutation,
} from "@/redux/user/signupAndLoginSlice";
import { useGetMyCartQuery } from "@/redux/cart/cartSlice";
import { addUser, removeUser } from "@/redux/user/userStore";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import Cookies from "universal-cookie";
import { signOut } from "next-auth/react";
const cookies = new Cookies();

const Nav = () => {
	const dispatch = useAppDispatch();
	const [isScrolled, setIsScrolled] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const [cartItemCount, setCartItemCount] = useState(0);
	//@ts-ignore
	const cartProduct = useSelector((state: RootState) => state.cart.cartItems);
	//@ts-ignore
	const { data } = useGetLoginUserQuery();
	const user = data?.data;
	//@ts-ignore
	const { data: cartData } = useGetMyCartQuery();
	// const cartItemCount = cartData?.data?.totalItems

	const [logOutUser] = useUserLogOutMutation();

	const logOut = async (e: any) => {
		try {
			//@ts-ignore
			const { data, error } = await logOutUser({});
			if (data.statusCode == 200) {
				await signOut();
				dispatch(removeUser(user));
				cookies.remove("accessToken", { path: "/" });
				window.location.href = "/pages/E-Commerce";
			}
		} catch (error) {
			console.error("Error logging in:", error);
		}
	};

	useEffect(() => {
		if (user) {
			dispatch(addUser(user));
		}
	}, [dispatch, user]);

	useEffect(() => {
		// Calculate total quantity of items in the cart
		const totalQuantity = cartProduct.reduce(
			(total, item) => total + item.quantity,
			0
		);
		setCartItemCount(totalQuantity);
	}, [cartProduct]);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}

			if (isDropdownOpen) {
				setIsDropdownOpen(false); // Close dropdown on scroll
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [isDropdownOpen]);

	const handleDropdownToggle = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	return (
		<div
			className={`lg:navbar  border-b-2 py-2 ${
				isScrolled
					? "fixed bg-white text-black shadow-md z-40 w-full py-2 flex lg:justify-evenly items-center"
					: "bg-transparent lg:max-w-screen-xl mx-auto "
			} transition-colors duration-300 mb-5 lg:mb-10`}
		>
			<div className="lg:navbar-start flex flex-col lg:flex-row px-4 w-full">
				<div className="flex flex-row-reverse justify-between z-10  ">
					<div className="dropdown">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost lg:hidden"
							onClick={handleDropdownToggle}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</div>
						{isDropdownOpen && (
							<ul
								tabIndex={0}
								className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-100 rounded-box w-52 transform -translate-x-40"
							>
								<li>
									<a href="/pages/E-Commerce">Home</a>
								</li>
								<li>
									<a href="/pages/AllProducts/Products">All Products</a>
								</li>
								<li>
									<Link href="/pages/AllProducts/Cart">
										<div
											tabIndex={0}
											role="button"
											className="btn btn-ghost btn-circle"
										>
											<div className="indicator">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-5 w-5"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
													/>
												</svg>
												<span className="badge badge-sm indicator-item">
													{cartItemCount}
												</span>
											</div>
										</div>
									</Link>
								</li>
								<div>
									{user ? (
										<div className="dropdown dropdown-end ml-2 items-center">
											<div
												tabIndex={0}
												role="button"
												className="btn btn-ghost btn-circle"
											>
												<div className="indicator">
													<Link href="/pages/Account">
														<Image src={userIcon} alt="" />
													</Link>
												</div>
											</div>
											<div
												onClick={logOut}
												className="ml-2 bg-[#153870] rounded-md text-white flex px-4 py-2 font-semibold cursor-pointer"
											>
												Log out
											</div>
										</div>
									) : (
										<div className="ml-3 font-semibold">
											<div className="my-2">
												<Link
													className="bg-[#153870] rounded-md text-white px-4 py-1"
													href="/pages/User/Login"
												>
													Login
												</Link>
											</div>
											<div className="my-2">
												<Link
													className="bg-[#153870] rounded-md text-white px-4 py-1"
													href="/pages/User/Signup"
												>
													SignUp
												</Link>
											</div>
										</div>
									)}
								</div>
							</ul>
						)}
					</div>
					<Link href={"/"}>
						<Image
							src={logo}
							alt="Logo"
							className="lg:h-16 lg:w-36 h-10 w-20 "
						></Image>
					</Link>
				</div>
				{/* <div className="form-control lg:hidden">
          <input
            type="text"
            placeholder="Search Solar Panels, Inverter ....."
            className="input input-bordered w-full bg-[#F3F5FF]"
          />
        </div> */}
			</div>

			<div
				className={`navbar-end hidden lg:flex w-full  ${
					isScrolled ? "lg:w-auto" : " "
				} `}
			>
				{/* <div className="form-control lg:mr-4">
          <input
            type="text"
            placeholder="Search Solar Panels, Inverter ....."
            className="input input-bordered w-24 md:w-auto bg-[#F3F5FF]"
          />
        </div> */}
				<ul className="menu menu-horizontal px-1 justify-center items-center text-lg font-medium">
					<li>
						<Link href="/pages/E-Commerce">Home</Link>
					</li>
					<li>
						<Link href="/pages/AllProducts/Products">All Products</Link>
					</li>
					<li>
						<Link href="/pages/AllProducts/Cart">
							<div
								tabIndex={0}
								role="button"
								className="btn btn-ghost btn-circle"
							>
								<div className="indicator">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
										/>
									</svg>
									<span className="badge badge-sm indicator-item">
										{cartItemCount}
									</span>
								</div>
							</div>
						</Link>
					</li>
				</ul>
				<div>
					{user ? (
						<div className="dropdown dropdown-end ml-2 flex items-center">
							<div
								tabIndex={0}
								role="button"
								className="btn btn-ghost btn-circle"
							>
								<div className="indicator">
									<Link href="/pages/Account">
										<Image src={userIcon} alt="" />
									</Link>
								</div>
							</div>
							<div
								onClick={logOut}
								className="ml-2 bg-[#153870] rounded-md text-white flex px-4 py-2 font-semibold cursor-pointer"
							>
								Log out
							</div>
						</div>
					) : (
						<div className="ml-2 bg-[#153870] rounded-md text-white flex px-4 py-2 font-semibold">
							<div>
								<Link href="/pages/User/Login">Login</Link>
							</div>
							<div className="px-3">|</div>
							<div className="">
								<Link href="/pages/User/Signup">Sign Up</Link>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Nav;
