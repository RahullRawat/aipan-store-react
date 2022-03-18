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

		case "LOG-IN-ERROR":
			return {
				...state,
				signInError: "Log In Failed! ",
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

		case "SIGN-UP-ERROR":
			return {
				...state,
				signUpError: "Sign Up Failed! ",
			};

		case "TOKEN-REMOVED":
			return {
				...state,
				userData: null,
				token: null,
			};

		case "LOAD-USER-DATA":
			return {
				...state,
				userData: action.payload.loadUser,
				token: action.payload.loadToken,
			};

		default:
			return {
				...state,
			};
	}
};

export { authReducer };
