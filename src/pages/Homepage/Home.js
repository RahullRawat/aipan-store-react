import React from "react";
import "./Home.css";

export const Home = () => {
	return (
		<div>
			<div className="hero-container">
				<h1>The Aipan Store</h1>
				<a href="../products-page/products.html">
					<button className="btn btn-primary">Shop Now</button>
				</a>
			</div>

			<section>
				<h1 className="section-title text-center md-text">
					Featured <span className="highlight-text md-text">Categories</span>
				</h1>
				<div className="featured-categories">
					<div className="featured-items">
						<a href="../products-page/products.html">
							<img
								src="https://aipan-store.netlify.app/assets/paintings/painting1.jpg"
								alt="paintings"
							/>
						</a>
						<button className="btn btn-primary btn-category">Paintings</button>
					</div>
					<div className="featured-items">
						<a href="../products-page/products.html">
							<img
								src="https://aipan-store.netlify.app/assets/bags/bag1.jpg"
								alt="bags"
							/>
						</a>
						<button className="btn btn-primary btn-category">Bags</button>
					</div>
					<div className="featured-items">
						<a href="../products-page/products.html">
							<img
								src="https://aipan-store.netlify.app/assets/diary/diary2.jpg"
								alt="diary"
							/>
						</a>
						<button className="btn btn-primary btn-category">Diary</button>
					</div>
					<div className="featured-items">
						<a href="../products-page/products.html">
							<img
								src="https://aipan-store.netlify.app/assets/coaster/coaster1.jpg"
								alt="coaster"
							/>
						</a>
						<button className="btn btn-primary btn-category">Coaster</button>
					</div>
				</div>
			</section>

			<section>
				<h1 className="section-title text-center md-text">
					Best <span className="highlight-text md-text">Selling</span>
				</h1>

				<div className="featured-categories">
					<div className="featured-items">
						<a href="#">
							<img
								src="https://aipan-store.netlify.app/assets/paintings/sun-painting.jpg"
								alt="paintings"
							/>
						</a>

						<div className="price-container text-center">
							<p className="item-name">Sun Painting</p>
							<span className="currency">Rs 999.00</span>
						</div>
						<a href="../cart/cart.html">
							<button className="btn btn-primary btn-category">
								Add to cart
							</button>
						</a>
					</div>

					<div className="featured-items">
						<a href="#">
							<img
								src="https://aipan-store.netlify.app/assets/diary/diary3.jpg"
								alt="diary"
							/>
						</a>
						<div className="price-container text-center">
							<p className="item-name">Handmade Diary</p>
							<span className="currency">Rs 560.00</span>
						</div>
						<a href="../cart/cart.html">
							<button className="btn btn-primary btn-category">
								Add to cart
							</button>
						</a>
					</div>

					<div className="featured-items">
						<a href="#">
							<img
								src="https://aipan-store.netlify.app/assets/paintings/lord-budha-wall-painting.jpg"
								alt="paintings"
							/>
						</a>
						<div className="price-container text-center">
							<p className="item-name">Lord Buddha Wall Painting</p>
							<span className="currency">Rs 999.00</span>
						</div>
						<a href="../cart/cart.html">
							<button className="btn btn-primary btn-category">
								Add to cart
							</button>
						</a>
					</div>

					<div className="featured-items">
						<a href="#">
							<img
								src="https://aipan-store.netlify.app/assets/coaster/coaster2.jpg"
								alt="coaster"
							/>
						</a>
						<div className="price-container text-center">
							<p className="item-name">Handcrafted tea coaster</p>
							<span className="currency">Rs 740.00</span>
						</div>
						<a href="../cart/cart.html">
							<button className="btn btn-primary btn-category">
								Add to cart
							</button>
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};
