import axios from "axios";

const moveToCart = async (product, token, cartDispatch) => {
	try {
		const response = await axios.post(
			"/api/user/cart",
			{ product },
			{ headers: { authorization: token } }
		);
		if (response.status === 201) {
			cartDispatch({ type: "ADD_TO_CART", payload: response.data.cart });
		} else {
			throw new Error();
		}
	} catch (error) {
		console.log(error);
	}
};

export { moveToCart };
