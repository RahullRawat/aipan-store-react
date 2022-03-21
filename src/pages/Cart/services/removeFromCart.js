import axios from "axios";

const removeFromCart = async (id, token, cartDispatch) => {
	try {
		const response = await axios.delete(`/api/user/cart/${id}`, {
			headers: { authorization: token },
		});
		if (response.status === 200) {
			cartDispatch({ type: "REMOVE_FROM_CART", payload: response.data.cart });
		}
	} catch (error) {
		console.log(error);
	}
};

export { removeFromCart };
