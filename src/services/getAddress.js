import axios from "axios";

export const getAddress = async (token, addressDispatch) => {
	try {
		const response = await axios.get("api/user/address", {
			headers: { authorization: token },
		});
		if (response.status === 200) {
			addressDispatch({ type: "GET_ADDRESS", payload: response.data.address });
		} else {
			throw new Error();
		}
	} catch (error) {
		console.error(error);
	}
};
