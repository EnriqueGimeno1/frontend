import React from "react";
import "./RouteAssignment.css";
import { SelectionList } from "../../shared/SelectionList/SelectionList";
import { LoadBar } from "../LoadBar/LoadBar";
import axios from "axios";
import { useEffect, useState } from "react";
import driverThumbnail from "../../../assets/images/driver.png";
import orderThumbnail from "../../../assets/images/order.png";
import packageThumbnail from "../../../assets/images/package.png";

export const RouteAssignment = () => {
	//Get server information when component mounts

	const [assignmentInfo, setAssignmentInfo] = useState("estado");

	// Drivers
	const drivers = {
		sectionTitle: "Conductores",
		elementsList: [
			{
				imageSrc: driverThumbnail,
				title: "Primero",
				text1: "enrique",
				text2: "gimeno",
			},
			{
				imageSrc: driverThumbnail,
				title: "Segundo",
				text1: "ernecius",
				text2: "Figueroa",
			},
		],
	};

	// Orders
	const orders = {
		sectionTitle: "Ordenes",
		elementsList: [
			{
				imageSrc: orderThumbnail,
				title: "Primero",
				text1: "enrique",
				text2: "gimeno",
			},
			{
				imageSrc: orderThumbnail,
				title: "Segundo",
				text1: "ernecius",
				text2: "Figueroa",
			},
		],
	};
	// Packages
	const packages = {
		sectionTitle: "Paquetes",
		elementsList: [
			{
				imageSrc: packageThumbnail,
				title: "Primero",
				text1: "enrique",
				text2: "gimeno",
			},
			{
				imageSrc: packageThumbnail,
				title: "Segundo",
				text1: "ernecius",
				text2: "Figueroa",
			},
		],
	};

	useEffect(() => {
		axios({
			method: "get",
			url: "http://localhost:3333/users/",
			responseType: "json",
		}).then(function (response) {
			console.log(response.data);
			setAssignmentInfo({
				sectionTitle: "Conductores",
				elementsList: response.data,
			});
		});
	}, []);

	return (
		<div className="assignment-container">
			<div className="selection-panel-container">
				<SelectionList {...drivers} />
				<SelectionList {...orders} />
				<SelectionList {...packages} />
			</div>
			<div className="load-bar-section">
				<LoadBar />
			</div>
			<div className="bottom-section">
				<div className="bottom-selection-container">
					<div className="details-container">
						<span className="selection-info">
							{JSON.stringify(assignmentInfo)}
						</span>
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
