import axios from "axios";

export const getOrder = async (token, authDispatch) => {
	try {
		const response = await axios.get("/api/user/orders", {
			headers: { authorization: token },
		});
		if (response.status === 200) {
			authDispatch({ type: "GET_ORDERS", payload: response.data.orders });
		}
	} catch (error) {
		console.error(error);
	}
};
