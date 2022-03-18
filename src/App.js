import "./App.css";
import { Navbar } from "./components/index";
import { Home, Product, Login, Signup, Cart, Wishlist } from "./pages/index";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import "./App.css";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/product" element={<Product />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/wishlist" element={<Wishlist />} />
				<Route path="/mockman" element={<Mockman />} />
			</Routes>
		</div>
	);
}

export default App;
