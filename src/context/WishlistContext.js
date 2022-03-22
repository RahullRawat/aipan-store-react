import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../reducer/WishlistReducer";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
	const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {
		wishlistItems: [],
	});
	return (
		<WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
			{children}
		</WishlistContext.Provider>
	);
};

const useWishlist = () => useContext(WishlistContext);

export { useWishlist, WishlistProvider };
