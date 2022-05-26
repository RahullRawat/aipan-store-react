import axios from "axios";

export const updateAddress = async (address, token, addressDispatch) => {
	try {
		const response = await axios.post(
			`/api/user/address/${address._id}`,
			{ address },
			{
				headers: { authorization: token },
			}
		);
		if (response.status === 200) {
			addressDispatch({
				type: "UPDATE_ADDRESS",
				payload: response.data.address,
			});
		}
	} catch (error) {
		console.log(error);
	}
};
