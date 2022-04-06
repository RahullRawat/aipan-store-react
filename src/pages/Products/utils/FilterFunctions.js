// filter by slider function
const filterBySlider = (productList, sliderRange) => {
	if (sliderRange) {
		return productList.filter(
			(product) => product.price <= Number(sliderRange)
		);
	}
	return filterBySlider;
};

// filter by price range function
const filterByPriceRange = (productList, priceRange) => {
	if (priceRange === "UNDER_600") {
		return productList.filter((product) => product.price <= 600);
	}
	if (priceRange === "UNDER_1000") {
		return productList.filter((product) => product.price <= 1000);
	}
	if (priceRange === "UNDER_2000") {
		return productList.filter((product) => product.price <= 2000);
	}
	if (priceRange === "UNDER_4000") {
		return productList.filter((product) => product.price <= 4000);
	}
	return productList;
};

// filter by category function
const filterByCategory = (productList, paintings, bags, diary, coaster) => {
	let filterProducts = [];
	if (!paintings && !bags && !diary && !coaster) {
		return productList;
	}
	if (paintings) {
		filterProducts = [
			...filterProducts,
			...productList.filter((product) => product.categoryName === "paintings"),
		];
	}
	if (bags) {
		filterProducts = [
			...filterProducts,
			...productList.filter((product) => product.categoryName === "bags"),
		];
	}
	if (diary) {
		filterProducts = [
			...filterProducts,
			...productList.filter((product) => product.categoryName === "diary"),
		];
	}
	if (coaster) {
		filterProducts = [
			...filterProducts,
			...productList.filter((product) => product.categoryName === "coaster"),
		];
	}

	return filterProducts;
};

// filter by rating function
const filterByRating = (productList, rating) => {
	if (rating === "4_STAR_&_ABOVE") {
		return productList.filter((product) => product.rating >= 4);
	}
	if (rating === "3_STAR_&_ABOVE") {
		return productList.filter((product) => product.rating >= 3);
	}
	if (rating === "2_STAR_&_ABOVE") {
		return productList.filter((product) => product.rating >= 2);
	}
	if (rating === "1_STAR_&_ABOVE") {
		return productList.filter((product) => product.rating >= 1);
	}
	return productList;
};

// filter by sort function
const filterBySort = (productList, sortBy) => {
	if (sortBy === "LOW_TO_HIGH") {
		return productList.sort(
			(product1, product2) => product1.price - product2.price
		);
	}
	if (sortBy === "HIGH_TO_LOW") {
		productList.sort((product1, product2) => product2.price - product1.price);
	}
	return productList;
};

//filter by search
const filterBySearch = (products, search) => {
	if (search === "") {
		return products;
	} else {
		return products.filter((product) =>
			product.title.toLowerCase().includes(search.toLowerCase())
		);
	}
};

export {
	filterBySlider,
	filterByPriceRange,
	filterByCategory,
	filterByRating,
	filterBySort,
	filterBySearch,
};
