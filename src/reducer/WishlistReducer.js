const wishlistReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_WISHLIST":
			return {
				...state,
				wishlistItems: action.payload,
			};

		case "REMOVE_FROM_WISHLIST":
			return {
				...state,
				wishlistItems: action.payload,
			};
	}
};

export { wishlistReducer };
