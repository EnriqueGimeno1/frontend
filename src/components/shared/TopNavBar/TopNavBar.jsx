import React from "react";
import "./TopNavBar.css";
import logo from "../../../assets/images/logo.png";

export const TopNavBar = () => {
	return (
		<div className="top-bar-container">
			<img src={logo} className="nav-logo" alt="Logo" />
		</div>
	);
};
