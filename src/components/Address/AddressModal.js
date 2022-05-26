import React, { useEffect } from "react";
import { addNewAddress } from "../../services/addNewAddress";
import { updateAddress } from "../../services/updateAddress";
import { toast } from "react-toastify";
import "./AddressModal.css";

export const AddressModal = ({
	setOpenAddressModal,
	token,
	addressDispatch,
	editAddress,
	setEditAddress,
	addressInput,
	setAddressInput,
}) => {
	const addressInputHandler = (e) => {
		setAddressInput({ ...addressInput, [e.target.name]: e.target.value });
	};

	const addNewAddressHandler = () => {
		if (
			addressInput.name &&
			addressInput.street &&
			addressInput.city &&
			addressInput.state &&
			addressInput.zipCode &&
			addressInput.mobile
		) {
			if (editAddress != null) {
				updateAddress(addressInput, token, addressDispatch);
				setOpenAddressModal((prev) => !prev);
				setEditAddress(null);
				setAddressInput("");
				toast.success("Address Updated Successfully");
			} else {
				addNewAddress(addressInput, token, addressDispatch);
				setOpenAddressModal((prev) => !prev);
				setAddressInput("");
				toast.success("Address Added Successfully");
			}
		} else {
			toast.error("Please fill all fields");
		}
	};

	const dummyAddressHandler = () => {
		setAddressInput({
			...addressInput,
			name: "Guest User",
			street: "1605, 34-D",
			city: "Mohali",
			state: "Punjab",
			zipCode: "451263",
			mobile: "8745632155",
		});
	};

	useEffect(() => {
		if (editAddress) {
			setAddressInput(editAddress);
		}
	}, []);
	return (
		<div className="address-modal">
			<input
				type="text"
				placeholder="Enter Name"
				name="name"
				value={addressInput.name}
				onChange={addressInputHandler}
			/>
			<input
				type="text"
				placeholder="Enter street no or house no"
				name="street"
				value={addressInput.street}
				onChange={addressInputHandler}
			/>
			<input
				type="text"
				placeholder="Enter city"
				name="city"
				value={addressInput.city}
				onChange={addressInputHandler}
			/>
			<input
				type="text"
				placeholder="Enter state"
				name="state"
				value={addressInput.state}
				onChange={addressInputHandler}
			/>
			<input
				type="text"
				placeholder="Enter pin code"
				name="zipCode"
				value={addressInput.zipCode}
				onChange={addressInputHandler}
			/>
			<input
				type="text"
				placeholder="Enter mobile no"
				name="mobile"
				value={addressInput.mobile}
				onChange={addressInputHandler}
			/>
			<button onClick={addNewAddressHandler}>Save </button>
			<button onClick={() => setOpenAddressModal((prev) => !prev)}>
				Cancel
			</button>
			<button onClick={dummyAddressHandler}>Dummy Address</button>
		</div>
	);
};
