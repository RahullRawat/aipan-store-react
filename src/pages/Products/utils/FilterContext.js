import { useContext, createContext } from "react";
import { useReducer } from "react";
import { filterReducer } from "./FilterReducer";

const FilterContext = createContext();

const useFilter = () => useContext(FilterContext);

const FilterProvider = ({ children }) => {
	const [state, dispatch] = useReducer(filterReducer, {
		sortBy: null,
		priceRange: null,
		rating: null,
		paintings: false,
		bags: false,
		diary: false,
		coaster: false,
		sliderRange: 4000,
	});
	return (
		<FilterContext.Provider value={{ state, dispatch }}>
			{children}
		</FilterContext.Provider>
	);
};

export { FilterProvider, useFilter };
