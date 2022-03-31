import React from "react";
import { Link } from "react-router-dom";
import { CategoriesCard } from "../../components/CategoriesCard/CategoriesCard";
import "./Home.css";

export const Home = () => {
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
					<div className="featured-items">
						<Link to="/product">
							<img
								src="https://aipan-store.netlify.app/assets/paintings/sun-painting.jpg"
								alt="paintings"
							/>
						</Link>

						<div className="price-container text-center">
							<p className="item-name">Sun Painting</p>
							<span className="currency">Rs 999.00</span>
						</div>
						<Link to="/product">
							<button className="btn btn-primary btn-category">
								Add to cart
							</button>
						</Link>
					</div>

					<div className="featured-items">
						<Link to="/product">
							<img
								src="https://aipan-store.netlify.app/assets/diary/diary3.jpg"
								alt="diary"
							/>
						</Link>
						<div className="price-container text-center">
							<p className="item-name">Handmade Diary</p>
							<span className="currency">Rs 560.00</span>
						</div>
						<Link to="/product">
							<button className="btn btn-primary btn-category">
								Add to cart
							</button>
						</Link>
					</div>

					<div className="featured-items">
						<Link to="/product">
							<img
								src="https://aipan-store.netlify.app/assets/paintings/lord-budha-wall-painting.jpg"
								alt="paintings"
							/>
						</Link>
						<div className="price-container text-center">
							<p className="item-name">Lord Buddha Wall Painting</p>
							<span className="currency">Rs 999.00</span>
						</div>
						<Link to="/product">
							<button className="btn btn-primary btn-category">
								Add to cart
							</button>
						</Link>
					</div>

					<div className="featured-items">
						<Link to="/product">
							<img
								src="https://aipan-store.netlify.app/assets/coaster/coaster2.jpg"
								alt="coaster"
							/>
						</Link>
						<div className="price-container text-center">
							<p className="item-name">Handcrafted tea coaster</p>
							<span className="currency">Rs 740.00</span>
						</div>
						<Link to="/product">
							<button className="btn btn-primary btn-category">
								Add to cart
							</button>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};
