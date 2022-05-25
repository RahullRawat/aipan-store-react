import { addToCart } from "../../Cart/services/addToCart";
import { quantityHandler } from "../../Cart/services/quantityHandler";

const moveToCart = async (
	product,
	token,
	cartState,
	cartDispatch,
	setDisabled
) => {
	const { cartItems } = cartState;
	const findItem = cartItems.find((item) => item._id === product._id);
	if (findItem) {
		quantityHandler(product._id, token, cartDispatch, "increment");
	} else {
		addToCart(product, cartDispatch, token, setDisabled);
	}
};

export { moveToCart };
