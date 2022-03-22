import axios from "axios";

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
	} catch (error) {
		console.log(error);
	}
};

export { removeFromWishlist };
