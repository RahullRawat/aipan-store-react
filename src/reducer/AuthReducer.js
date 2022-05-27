const authReducer = (state, action) => {
	switch (action.type) {
		case "NAME":
			return {
				...state,
				firstName: action.payload,
			};

		case "LOG-IN":
			return {
				...state,
				userData: action.payload.userData,
				token: action.payload.token,
			};

		case "LOG-IN-EMAIL":
			return {
				...state,
				email: action.payload,
			};

		case "LOG-IN-PASSWORD":
			return {
				...state,
				password: action.payload,
			};

		case "SIGN-UP":
			return {
				...state,
				userData: action.payload.userData,
				token: action.payload.token,
			};

		case "SIGN-UP-EMAIL":
			return {
				...state,
				email: action.payload,
			};

		case "SIGN-UP-PASSWORD":
			return {
				...state,
				password: action.payload,
			};

		case "LOGOUT":
			return {
				...state,
				userData: null,
				token: null,
				orders: [],
			};

		case "LOAD-USER-DATA":
			return {
				...state,
				userData: action.payload.loadUser,
				token: action.payload.loadToken,
			};

		case "ERROR":
			return {
				...state,
				error: !state.error,
			};

		case "ADD_ORDER":
			return {
				...state,
				orders: action.payload,
			};

		default:
			return {
				...state,
			};
	}
};

export { authReducer };
