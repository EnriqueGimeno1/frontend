import React from "react";
import { ListElement } from "../ListElement/ListElement";
import "./SelectionList.css";

export const SelectionList = ({ sectionTitle, elementsList }) => {
	return (
		<div className="selection-list-container">
			<h1 className="title">{sectionTitle}</h1>
			<div className="list-container">
				{elementsList.map((element, index) => {
					return <ListElement key={index} props={element} />;
				})}
			</div>
		</div>
	);
};
