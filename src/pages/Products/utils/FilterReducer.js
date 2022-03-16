export const filterReducer = (state, action) => {
	switch (action.type) {
		case "SLIDER_RANGE":
			return {
				...state,
				sliderRange: action.payload,
			};

		case "PRICE_RANGE": {
			return {
				...state,
				priceRange: action.payload,
			};
		}

		case "PAINTINGS": {
			return {
				...state,
				paintings: !state.paintings,
			};
		}

		case "BAGS": {
			return {
				...state,
				bags: !state.bags,
			};
		}

		case "DIARY": {
			return {
				...state,
				diary: !state.diary,
			};
		}

		case "COASTER": {
			return {
				...state,
				coaster: !state.coaster,
			};
		}

		case "RATING":
			return {
				...state,
				rating: action.payload,
			};

		case "SORT":
			return {
				...state,
				sortBy: action.payload,
			};

		case "RESET":
			return {
				...state,
				sortBy: null,
				priceRange: null,
				rating: null,
				paintings: false,
				bags: false,
				diary: false,
				coaster: false,
				sliderRange: 4000,
			};

		default:
			return state;
	}
};
