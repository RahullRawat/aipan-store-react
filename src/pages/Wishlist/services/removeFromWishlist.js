import axios from "axios";
import { toast } from "react-toastify";

const removeFromWishlist = async (id, token, wishlistDispatch) => {
	try {
		const response = await axios.delete(`/api/user/wishlist/${id}`, {
			headers: { authorization: token },
		});
		if (response.status === 200) {
			wishlistDispatch({
				type: "REMOVE_FROM_WISHLIST",
				payload: response.data.wishlist,
			});
		}
		toast.error("Item removed from wishlist");
	} catch (error) {
		toast.error(error.response.data.errors[0]);
	}
};

export { removeFromWishlist };
