import "./App.css";
import { Navbar } from "./components/index";
import { Home, Product, Login, Signup, Cart, Wishlist } from "./pages/index";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/product" element={<Product />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/wishlist" element={<Wishlist />} />
			</Routes>
		</div>
	);
}

export default App;
