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
			<div className="load-bar-section">
				<LoadBar />
			</div>
			<div className="bottom-section">
				<div className="bottom-selection-container">
					<div className="details-container">
						<span className="selection-info">Información de capacidad</span>
						<span className="selection-info">Cantidad de Destinos</span>
						<span className="selection-info">Hora de salida estimada</span>
					</div>
					<div className="action-container">
						<button className="button button1">Reestablecer</button>
						<button className="button button2">Asignar</button>
					</div>
				</div>
			</div>
		</div>
	);
};
