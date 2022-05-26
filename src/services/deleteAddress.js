import axios from "axios";

export const deleteAddress = async (addressId, token, addressDispatch) => {
	try {
		const response = await axios.delete(`/api/user/address/${addressId}`, {
			headers: { authorization: token },
		});
		if (response.status === 200) {
			addressDispatch({
				type: "DELETE_ADDRESS",
				payload: response.data.address,
			});
		}
	} catch (error) {
		console.error(error);
	}
};
