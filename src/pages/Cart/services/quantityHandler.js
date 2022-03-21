import axios from "axios";

const quantityHandler = async (_id, token, cartDispatch, type) => {
	try {
		const response = await axios.post(
			`/api/user/cart/${_id}`,
			{ action: { type } },
			{ headers: { authorization: token } }
		);
		if (response.status === 200) {
			cartDispatch({ type: "UPDATE_CART", payload: response.data.cart });
		}
	} catch (error) {
		console.log(error);
	}
};

export { quantityHandler };
