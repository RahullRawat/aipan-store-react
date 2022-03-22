import axios from "axios";

const addToWishlist = async (product, token, wishlistDispatch) => {
	try {
		const response = await axios.post(
			"/api/user/wishlist",
			{ product },
			{ headers: { authorization: token } }
		);
		console.log(response);
		wishlistDispatch({
			type: "ADD_TO_WISHLIST",
			payload: response.data.wishlist,
		});
	} catch (error) {}
};

export { addToWishlist };
