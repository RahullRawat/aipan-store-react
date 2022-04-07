export const searchProductFilter = (products, search) => {
	if (search === "") {
		return products;
	} else {
		return products.filter((product) =>
			product.title.toLowerCase().includes(search.toLowerCase())
		);
	}
};
