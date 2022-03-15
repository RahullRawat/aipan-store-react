import React from "react";
import "./Wishlist.css";

export const Wishlist = () => {
	return (
		<>
			<div className="md-text text-center mt-4 heading">My Wishlist</div>

			<div className="featured-categories">
				<div className="featured-items">
					<a href="#">
						<img
							src="https://aipan-store.netlify.app/assets/diary/diary5.jpg"
							alt="diary"
						/>
					</a>

					<a href="#">
						<i className="far fa-heart fw-900"></i>
					</a>

					<div className="price-container text-center">
						<p className="item-name">Handmade Diary</p>
						<span className="currency">Rs 560.00</span>
					</div>
					<a href="../cart/cart.html">
						<button className="btn btn-primary btn-category">
							Move to cart
						</button>
					</a>
				</div>

				<div className="featured-items">
					<a href="#">
						<img
							src="https://aipan-store.netlify.app/assets/paintings/sun-face-painting.jpg"
							alt="paintings"
						/>
					</a>

					<a href="#">
						<i className="far fa-heart fw-900"></i>
					</a>

					<div className="price-container text-center">
						<p className="item-name">Sun Face Aipan Painting</p>
						<span className="currency">Rs 3800.00</span>
					</div>
					<a href="../cart/cart.html">
						<button className="btn btn-primary btn-category">
							Move to cart
						</button>
					</a>
				</div>

				<div className="featured-items">
					<a href="#">
						<img
							src="https://aipan-store.netlify.app/assets/bags/bag3.jpg"
							alt="bags"
						/>
					</a>

					<a href="#">
						<i className="far fa-heart fw-900"></i>
					</a>

					<div className="price-container text-center">
						<p className="item-name">Cotton Fabric Bag</p>
						<span className="currency">Rs 740.00</span>
					</div>
					<a href="../cart/cart.html">
						<button className="btn btn-primary btn-category">
							Move to cart
						</button>
					</a>
				</div>
			</div>
		</>
	);
};
