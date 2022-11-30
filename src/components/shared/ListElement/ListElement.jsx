// import React from "react";
import "./ListElement.css";

export const ListElement = ({ props }) => {
	return (
		<div className="list-element-container">
			<div className="picture-container">
				<img className="picture" src={props.imageSrc} alt="Miniatura" />
			</div>
			<div className="info-container">
				<span className="element-title">{props.title}</span>
				<span className="element-text">{props.text1}</span>
				<span className="element-text2">{props.text2}</span>
			</div>
		</div>
	);
};
