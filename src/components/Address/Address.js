import React, { useEffect, useState } from "react";
import { useAuth, useAddress } from "../../context";
import { getAddress } from "../../services/getAddress";
import { deleteAddress } from "../../services/deleteAddress";
import { AddressModal } from "./AddressModal";
import { toast } from "react-toastify";
import "./Address.css";

export const Address = () => {
	const [openAddressModal, setOpenAddressModal] = useState(false);
	const [editAddress, setEditAddress] = useState(null);

	const [addressInput, setAddressInput] = useState({
		name: "",
		street: "",
		city: "",
		state: "",
		zipCode: "",
		mobile: "",
	});

	const { token } = useAuth();
	const {
		addressState: { address },
		addressDispatch,
	} = useAddress();

	useEffect(() => {
		getAddress(token, addressDispatch);
	}, []);

	const deleteAddressHandler = (addressId) => {
		deleteAddress(addressId, token, addressDispatch);
		toast.success("Address Deleted Successfully");
	};

	const editAddressHandler = (address) => {
		setEditAddress(address);
		setOpenAddressModal(true);
	};

	return (
		<div className="address-container">
			{address
				? address.map((item) => {
						return (
							<div key={item._id}>
								<h5>{item.name}</h5>
								<p>{item.street}</p>
								<p>{`${item.city} ${item.state}`}</p>
								<p>{item.zipCode}</p>
								<p>{item.mobile}</p>
								<div className="address-btn-container">
									<button
										className="btn btn-primary"
										onClick={() => editAddressHandler(item)}
									>
										Edit Address
									</button>
									<button
										className="btn btn-primary"
										onClick={() => deleteAddressHandler(item._id)}
									>
										Delete Address
									</button>
								</div>
							</div>
						);
				  })
				: null}
			<button onClick={() => setOpenAddressModal((prev) => !prev)}>
				Add New Address
			</button>
			<div className="open-modal">
				{openAddressModal && (
					<AddressModal
						setOpenAddressModal={setOpenAddressModal}
						token={token}
						addressDispatch={addressDispatch}
						editAddress={editAddress}
						setEditAddress={setEditAddress}
						addressInput={addressInput}
						setAddressInput={setAddressInput}
					/>
				)}
			</div>
		</div>
	);
};
