import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const RequireAuth = ({ children }) => {
	const location = useLocation();
	const { token } = useAuth();
	return token ? (
		children
	) : (
		<Navigate to="/login" state={{ from: location }} replace />
	);
};
