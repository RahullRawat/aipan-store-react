import { useContext, createContext, useReducer } from "react";
import { cartReducer } from "../reducer/CartReducer";

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
	const [cartState, cartDispatch] = useReducer(cartReducer, { cartItems: [] });

	return (
		<CartContext.Provider value={{ cartState, cartDispatch }}>
			{children}
		</CartContext.Provider>
	);
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
