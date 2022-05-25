import axios from "axios";

export const fetchProducts = async (setLoader, setError, setProducts) => {
	setLoader(true);
	try {
		const response = await axios.get("/api/products");
		if (response.status === 200) {
			setLoader(false);
			setProducts(response.data.products);
		}
	} catch (error) {
		setError(true);
	} finally {
		setLoader(false);
	}
};
