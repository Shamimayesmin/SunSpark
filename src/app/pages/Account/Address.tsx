import { useGetUserAddressQuery } from "@/redux/user/signupAndLoginSlice";
import EditAddress from "./EditAddress";

const Address = () => {
	//@ts-ignore
	const { data: address, isLoading } = useGetUserAddressQuery();
	const fullAddress = address?.data;
	const {
		city,
		fullName,
		country,
		house,
		state,
		street,
		zipCode,
		phoneNumber,
	} = fullAddress || {};
	// console.log(fullAddress);
	return (
		<div>
			<h1 className="text-2xl mb-4 text-[#153870] font-bold">Address</h1>
			<div className="overflow-x-auto">
				{fullAddress ? (
					<table className="table border">
						<thead>
							<tr className="border lg:text-lg text-sm text-[#153870]">
								<th>Address</th>
								<th>Default</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="lg:py-5 py-3">
									{fullName}, {house}, {street}, {state}, {city}, {zipCode},{" "}
									{country} - {phoneNumber}
								</td>
								<td>Yes</td>
								<td>
									<button
										className="btn btn-sm bg-[#153870] text-white text-sm hover:bg-[#4e87e4]"
										onClick={() => {
											const modal = document.getElementById(
												"my_modal_4"
											) as HTMLDialogElement | null;
											if (modal) {
												modal.showModal();
											}
										}}
									>
										Edit
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				) : (
					<p className="text-lg font-bold">No address available.</p>
				)}
			</div>
			<EditAddress />
		</div>
	);
};

export default Address;
