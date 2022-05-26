import { useContext, createContext, useReducer } from "react";
import { addressReducer } from "../reducer/AddressReducer";

const AddressContext = createContext(null);

const AddressProvider = ({ children }) => {
	const [addressState, addressDispatch] = useReducer(addressReducer, {
		address: [],
	});

	return (
		<AddressContext.Provider value={{ addressState, addressDispatch }}>
			{children}
		</AddressContext.Provider>
	);
};

const useAddress = () => useContext(AddressContext);

export { useAddress, AddressProvider };
