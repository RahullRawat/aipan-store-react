import axios from "axios";
import { toast } from "react-toastify";

const addToCart = async (product, cartDispatch, token, setDisabled) => {
	setDisabled((prev) => !prev);
	try {
		const response = await axios.post(
			"/api/user/cart",
			{ product },
			{ headers: { authorization: token } }
		);
		if (response.status === 201) {
			cartDispatch({ type: "ADD_TO_CART", payload: response.data.cart });
			toast.success("Item added to cart");
		} else {
			throw new Error("Something went wrong. Please try again later !!");
		}
	} catch (error) {
		toast.error(error.response.data.errors[0]);
	} finally {
		setDisabled((prev) => !prev);
	}
};

export { addToCart };
