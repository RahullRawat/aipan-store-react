import axios from "axios";

export const addNewOrder = async (order, token, authDispatch) => {
	try {
		const response = await axios.post(
			"/api/user/orders",
			{ order },
			{ headers: { authorization: token } }
		);
		if (response.status === 201) {
			authDispatch({ type: "ADD_ORDER", payload: response.data.orders });
		}
	} catch (error) {
		console.error(error);
	}
};
