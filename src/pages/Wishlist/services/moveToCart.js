import { addToCart } from "../../Cart/services/addToCart";
import { quantityHandler } from "../../Cart/services/quantityHandler";

const moveToCart = async (product, token, cartState, cartDispatch) => {
	const { cartItems } = cartState;
	const findItem = cartItems.find((item) => item._id === product._id);
	if (findItem) {
		quantityHandler(product._id, token, cartDispatch, "increment");
	} else {
		addToCart(product, cartDispatch, token);
	}
};

export { moveToCart };
