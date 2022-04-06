import axios from "axios";
import { toast } from "react-toastify";

const removeFromCart = async (id, token, cartDispatch) => {
	try {
		const response = await axios.delete(`/api/user/cart/${id}`, {
			headers: { authorization: token },
		});
		if (response.status === 200) {
			cartDispatch({ type: "REMOVE_FROM_CART", payload: response.data.cart });
		}
		toast.error("Item removed from cart");
	} catch (error) {
		toast.error(error.response.data.errors[0]);
	}
};

export { removeFromCart };
