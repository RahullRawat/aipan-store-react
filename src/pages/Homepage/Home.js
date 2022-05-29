import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../services/fetchProducts";
import { CategoriesCard } from "../../components/CategoriesCard/CategoriesCard";
import { addToCart } from "../Cart/services/addToCart";
import { addToWishlist } from "../Wishlist/services/addToWishlist";

import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { useWishlist } from "../../context";
import { ProductCard } from "../Products/components/ProductCard";
import "./Home.css";

export const Home = () => {
	const [products, setProducts] = useState([]);
	const [disabled, setDisabled] = useState(false);
	const [error, setError] = useState(false);
	const [loader, setLoader] = useState(false);

	const { cartDispatch } = useCart();

	const { wishlistDispatch } = useWishlist();
	const { token } = useAuth();

	useEffect(() => {
		fetchProducts(setLoader, setError, setProducts);
	}, []);

	useEffect(() => {
		document.title = "Aipan Store | Home";
	}, []);

	const random = products.slice(9, 13);

	const addToCartHandler = (product) => {
		addToCart(product, cartDispatch, token, setDisabled);
	};

	const addToWishlistHandler = (product) => {
		addToWishlist(product, token, wishlistDispatch, setDisabled);
	};

	return (
		<div>
			<div className="hero-container">
				<h1>The Aipan Store</h1>
				<Link to="/product">
					<button className="btn btn-primary">Shop Now</button>
				</Link>
			</div>
			<CategoriesCard />

			<section>
				<h1 className="section-title text-center md-text">
					Best <span className="highlight-text md-text">Selling</span>
				</h1>

				<div className="featured-categories">
					{random.map((product) => {
						return (
							<div key={product._id}>
								<ProductCard
									product={product}
									addToCartHandler={addToCartHandler}
									addToWishlistHandler={addToWishlistHandler}
									disabled={disabled}
								/>
							</div>
						);
					})}
				</div>
			</section>
		</div>
	);
};
