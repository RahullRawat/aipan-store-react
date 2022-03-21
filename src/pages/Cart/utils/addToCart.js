import axios from "axios";

const addToCart = async (product, cartDispatch, token) => {
	try {
		const response = await axios.post(
			"/api/user/cart",
			{ product },
			{ headers: { authorization: token } }
		);
		// console.log(response);
		if (response.status === 201) {
			cartDispatch({ type: "ADD_TO_CART", payload: response.data.cart });
		} else {
			throw new Error();
		}
	} catch (error) {
		console.log(error);
	}
};

export { addToCart };
