import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
	AuthProvider,
	CartProvider,
	FilterProvider,
	WishlistProvider,
	AddressProvider,
} from "./context/index";

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<AddressProvider>
					<WishlistProvider>
						<CartProvider>
							<FilterProvider>
								<App />
							</FilterProvider>
						</CartProvider>
					</WishlistProvider>
				</AddressProvider>
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
