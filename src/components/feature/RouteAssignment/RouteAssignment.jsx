import React from "react";
import "./RouteAssignment.css";
import { SelectionList } from "../../shared/SelectionList/SelectionList";
import { LoadBar } from "../LoadBar/LoadBar";

export const RouteAssignment = () => {
	return (
		<div className="assignment-container">
			<div className="selection-panel-container">
				<SelectionList />
				<SelectionList />
				<SelectionList />
			</div>
			<div className="load-bar-container">
				<LoadBar />
			</div>
			<div className="bottom-selection-panel">
				<div className="details-container">
					<span className="text1">text 1</span>
					<span className="text2">text 1</span>
				</div>
				<div className="action-container">
					<button className="button button1" />
					<button className="button button2" />
				</div>
			</div>
		</div>
	);
};
