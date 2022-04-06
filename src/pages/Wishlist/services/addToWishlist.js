import axios from "axios";
import { toast } from "react-toastify";

const addToWishlist = async (product, token, wishlistDispatch) => {
	try {
		const response = await axios.post(
			"/api/user/wishlist",
			{ product },
			{ headers: { authorization: token } }
		);
		wishlistDispatch({
			type: "ADD_TO_WISHLIST",
			payload: response.data.wishlist,
		});
		toast.success("Item added to wishlist");
	} catch (error) {
		toast.error("Something went wrong. Please try again later !!");
	}
};

export { addToWishlist };
