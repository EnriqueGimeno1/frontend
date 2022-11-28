import React from "react";
import "./LoadBar.css";

export const LoadBar = () => {
	return (
		<div className="load-bar-container">
			<div className="progress-bar" style={{ width: "30%" }}></div>
		</div>
	);
};
