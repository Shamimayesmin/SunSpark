"use client";
import { useCreateUserAddressMutation, useUpdateUserAddressMutation } from "@/redux/user/signupAndLoginSlice";
import { useGetLoginUserQuery } from "@/redux/user/signupAndLoginSlice";

import React, { useState, useEffect } from "react";
import { useRouter, redirect } from "next/navigation";

const Customer = ({ address }: any) => {
    //@ts-ignore
    const { data: userdata } = useGetLoginUserQuery();
    const user = userdata?.data;

    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [country, setCountry] = useState("Bangladesh");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [house, setHouse] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [errors, setErrors] = useState<any>({});
    const [countries, setCountries] = useState<string[]>([]); // Add state to store list of countries

    const addressId = address?._id;

    const [updateAddress, { isLoading, isError }] = useUpdateUserAddressMutation();
    const [addAddress] = useCreateUserAddressMutation();

    // Fetch the list of countries when the component mounts
    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all');
                const data = await response.json();
                const countryNames = data.map((country: any) => country.name.common).sort();
                setCountries(countryNames);
            } catch (error) {
                console.error("Error fetching countries:", error);
            }
        };

        fetchCountries();
    }, []);

    const validateForm = () => {
        const newErrors: any = {};
        if (!fullName) newErrors.fullName = "Full name is required.";
        if (!phoneNumber) newErrors.phoneNumber = "Phone number is required.";
        if (!country) newErrors.country = "Country is required.";
        if (!street) newErrors.street = "Street is required.";
        if (!city) newErrors.city = "City is required.";
        if (!state) newErrors.state = "State is required.";
        if (!zipCode) newErrors.zipCode = "Zip code is required.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!user) {
            redirect('/pages/User/Login');
        }

        if (!validateForm()) {
            return;
        }

        try {
            if (addressId) {
                //@ts-ignore
                const { data, error } = await updateAddress({
                    id: address?._id,
                    fullName,
                    phoneNumber,
                    country,
                    street,
                    city,
                    state,
                    house,
                    zipCode,
                });
            } else {
                //@ts-ignore
                const { data, error } = await addAddress({
                    fullName,
                    phoneNumber,
                    country,
                    street,
                    city,
                    state,
                    house,
                    zipCode,
                });
            }

            // Close the modal after successful submission
            const modal = document.getElementById(
                "my_modal_3"
            ) as HTMLDialogElement | null;
            if (modal) {
                modal.close();
            }
        } catch (error) {
            console.error("Error address:", error);
        }
    };

    return (
        <div className="border rounded-xl p-6">
            {addressId ? (
                <h1 className="text-xs lg:text-sm  text-[#383838] mb-4">
                    {" "}
                    Deliver to:{" "}
                    <span className="text-[#153870] font-semibold">
                        {address?.fullName}
                    </span>
                </h1>
            ) : (
                <></>
            )}

            <div className="flex ">
                {addressId ? (
                    <div className="flex gap-2 items-start">
                        <p className="text-xs lg:text-sm  text-[#383838] mt-0.5">
                            Address:{" "}
                        </p>
                        <p className="text-xs lg:text-sm  text-[#383838] mt-0.5">
                            {address?.country}, {address?.state}, {address?.city},{" "}
                            {address?.street} <br></br>
                            {address?.state}-{address?.zipCode}
                        </p>
                        <button
                            className="text-[#34ABD5] font-bold "
                            onClick={() => {
                                const modal = document.getElementById(
                                    "my_modal_3"
                                ) as HTMLDialogElement | null;
                                if (modal) {
                                    modal.showModal();
                                }
                            }}
                        >
                            Change
                        </button>
                    </div>
                ) : (
                    <div>
                        <button
                            className="text-[#34ABD5] font-bold "
                            onClick={() => {
                                const modal = document.getElementById(
                                    "my_modal_3"
                                ) as HTMLDialogElement | null;
                                if (modal) {
                                    modal.showModal();
                                }
                            }}
                        >
                            Add Shipping Address
                        </button>
                    </div>
                )}

                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box lg:w-10/12 lg:max-w-3xl bg-white">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                            </button>
                        </form>
                        <h3 className="text-[#343434] font-semibold text-xl mb-4 px-7">
                            Shipping info
                        </h3>
                        <hr />
                        <form action="" className="" onSubmit={handleSubmit}>
                            <div className="mt-5">
                                <div className="lg:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-sm font-medium text-[#343434] ">
                                            Country/Region
                                        </span>
                                    </label>
                                    <select
                                        className="select select-bordered rounded-none w-full lg:w-[437px] lg:max-w-xs border-[#595959]"
                                        value={country} // Set the value of the select element to the country state
                                        onChange={(e) => setCountry(e.target.value)}
                                    >
                                        <option disabled selected>
                                            select
                                        </option>
                                        {countries.map((country, index) => (
                                            <option key={index} value={country}>{country}</option>
                                        ))}
                                    </select>
                                    {errors.country && (
                                        <p className="text-red-500 text-sm">{errors.country}</p>
                                    )}
                                </div>
                            </div>
                            <div className="lg:flex gap-4 w-full mt-5">
                                <div className="lg:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-sm font-medium text-[#343434] ">
                                            Full Name
                                            <span className="text-red-500 text-[16px]">*</span>
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="contact"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        placeholder="Write your  name"
                                        className="input input-bordered w-full rounded-none border-[#595959] text-[#191919] text-sm  bg-[#FFFFFF]"
                                    />
                                    {errors.fullName && (
                                        <p className="text-red-500 text-sm">{errors.fullName}</p>
                                    )}
                                </div>
                                <div className="lg:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-sm font-medium text-[#343434] ">
                                            Number
                                            <span className="text-red-500 text-[16px]">*</span>
                                        </span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="number"
                                        value={phoneNumber}
                                        onChange={(e) =>
                                            setPhoneNumber(e.target.value.replace(/\D/, ""))
                                        }
                                        placeholder="Enter your mobile number"
                                        className="input w-full rounded-none border-[#595959] text-[#191919] text-sm bg-[#FFFFFF]"
                                        pattern="[0-9]*"
                                    />
                                    {errors.phoneNumber && (
                                        <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
                                    )}
                                </div>
                            </div>
                            <h1 className="mt-8 text-[#343434] text-[20px] font-semibold">
                                Address
                            </h1>
                            <div className="lg:flex gap-4 w-full mt-5">
                                <div className="lg:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-sm font-medium text-[#343434] ">
                                            Street, house/apartment/unit{" "}
                                            <span className="text-red-500 text-[16px]">*</span>
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="street"
                                        value={street}
                                        onChange={(e) => setStreet(e.target.value)}
                                        placeholder="Brahmanbaria"
                                        className="input input-bordered w-full rounded-none border-[#595959] text-[#191919] text-sm  bg-[#FFFFFF]"
                                    />
                                    {errors.street && (
                                        <p className="text-red-500 text-sm">{errors.street}</p>
                                    )}
                                </div>
                                <div className="lg:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-sm font-medium text-[#343434] ">
                                            Apt,Suite,unit, etc (Optional)
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="area"
                                        value={house}
                                        onChange={(e) => setHouse(e.target.value)}
                                        placeholder="Brahmanbaria Sadar"
                                        className="input input-bordered w-full rounded-none border-[#595959] text-[#191919] text-sm bg-[#FFFFFF]"
                                    />
                                    {errors.house && (
                                        <p className="text-red-500 text-sm">{errors.house}</p>
                                    )}
                                </div>
                            </div>
                            <div className="lg:flex gap-4 w-full mt-5">
                                <div className="lg:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-sm font-medium text-[#343434] ">
                                            State/Province{" "}
                                            <span className="text-red-500 text-[16px]">*</span>
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="state"
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                        placeholder="Brahmanbaria Paurashovha"
                                        className="input input-bordered w-full rounded-none border-[#595959] text-[#191919] text-sm bg-[#FFFFFF]"
                                    />
                                    {errors.state && (
                                        <p className="text-red-500 text-sm">{errors.state}</p>
                                    )}
                                </div>
                                <div className="lg:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-sm font-medium text-[#343434] ">
                                            City <span className="text-red-500 text-[16px]">*</span>
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        placeholder="Brahmanbaria Paurashovha"
                                        className="input input-bordered w-full rounded-none border-[#595959] text-[#191919] text-sm bg-[#FFFFFF]"
                                    />
                                    {errors.city && (
                                        <p className="text-red-500 text-sm">{errors.city}</p>
                                    )}
                                </div>
                            </div>

                            <div className="lg:w-1/2 mt-5">
                                <label className="label">
                                    <span className="label-text text-sm font-medium text-[#343434] ">
                                        Zip Code <span className="text-red-500 text-[16px]">*</span>
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="address"
                                    value={zipCode}
                                    onChange={(e) => setZipCode(e.target.value)}
                                    className="input input-bordered w-full rounded-none border-[#595959] text-[#191919] text-sm bg-[#FFFFFF]"
                                />
                                {errors.zipCode && (
                                    <p className="text-red-500 text-sm">{errors.zipCode}</p>
                                )}
                            </div>
                            <button className="btn bg-[#153870] hover:bg-[#016B90] border-none text-white mt-8 w-full mb-5">
                                Save Info
                            </button>
                        </form>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default Customer;
