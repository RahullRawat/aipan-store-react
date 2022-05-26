import axios from "axios";

export const addNewAddress = async (address, token, addressDispatch) => {
	try {
		const response = await axios.post(
			"/api/user/address",
			{ address },
			{ headers: { authorization: token } }
		);
		if (response.status === 201) {
			addressDispatch({ type: "ADD_ADDRESS", payload: response.data.address });
		}
	} catch (error) {
		console.log(error);
	}
};
