const cartReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			return {
				...state,
				cartItems: action.payload,
			};

		case "REMOVE_FROM_CART":
			return {
				...state,
				cartItems: action.payload,
			};

		case "UPDATE_CART":
			return {
				...state,
				cartItems: action.payload,
			};
	}
};

export { cartReducer };
