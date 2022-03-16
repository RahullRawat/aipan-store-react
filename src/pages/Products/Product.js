import { useState, useEffect } from "react";
import axios from "axios";
import "./Product.css";
import { Filter } from "./components/Filter";
import { ProductSearch } from "./components/ProductSearch";
import { Link } from "react-router-dom";

export const Product = () => {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState(false);
	const [loader, setLoader] = useState(false);

	useEffect(() => {
		(async () => {
			setLoader(true);
			try {
				const response = await axios.get("/api/products");
				setLoader(false);
				setProducts(response.data.products);
			} catch (error) {
				setError(true);
				setLoader(false);
			}
		})();
	}, []);

	return (
		<div className="product">
			<Filter />
			<main className="product-container">
				<ProductSearch />

				{error && (
					<h1 className="error-msg">
						Oops something went wrong, Please try again later !!!
					</h1>
				)}
				{loader && <h1 className="loading-msg">Loading.....</h1>}

				<div className="featured-categories text-left">
					{products.map(({ title, price, img, rating, id }) => {
						return (
							<div className="featured-items" key={id}>
								<Link to="#">
									<img src={img} alt="paintings" />
								</Link>

								<Link to="/wishlist">
									<i className="far fa-heart"></i>
								</Link>

								<div className="price-container">
									<p className="item-name">{title}</p>
									<div className="flex">
										<span className="currency">Rs {price}</span>
										<small className="rating">
											{rating}
											<i className="fas fa-star"></i>
										</small>
									</div>
								</div>
								<Link to="/cart">
									<button className="btn btn-primary btn-category">
										Add to cart
									</button>
								</Link>
							</div>
						);
					})}
				</div>
			</main>
		</div>
	);
};
