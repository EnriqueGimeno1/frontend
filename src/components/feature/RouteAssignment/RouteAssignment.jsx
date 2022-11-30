import React from "react";
import "./RouteAssignment.css";
import { SelectionList } from "../../shared/SelectionList/SelectionList";
import { LoadBar } from "../LoadBar/LoadBar";
import axios from "axios";
import { useEffect, useState } from "react";

export const RouteAssignment = () => {
	//Get server information when component mounts

	const [assignmentInfo, setAssignmentInfo] = useState("estado");

	// Drivers
	const drivers = {
		sectionTitle: "Conductores",
		elementsList: [
			{
				imageSrc:
					"https://media.istockphoto.com/id/907605102/es/foto/hombre-atractivo.jpg?s=612x612&w=is&k=20&c=GsSs_u03geAAy0_1oW4_RR-42Nvh8wWTcJqf-jWBvHw=",
				title: "Primero",
				text1: "enrique",
				text2: "gimeno",
			},
			{
				imageSrc:
					"https://media.istockphoto.com/id/539681702/es/vector/bandera-de-piratas-icono-sobre-blanco-de-fondo-vector-de-de.jpg?s=612x612&w=0&k=20&c=wvchsVcbYqxAuhM3NXfeu0GAGnDq0evBHFRpRReIWvU=",
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
				imageSrc:
					"https://media.istockphoto.com/id/907605102/es/foto/hombre-atractivo.jpg?s=612x612&w=is&k=20&c=GsSs_u03geAAy0_1oW4_RR-42Nvh8wWTcJqf-jWBvHw=",
				title: "Primero",
				text1: "enrique",
				text2: "gimeno",
			},
			{
				imageSrc:
					"https://media.istockphoto.com/id/539681702/es/vector/bandera-de-piratas-icono-sobre-blanco-de-fondo-vector-de-de.jpg?s=612x612&w=0&k=20&c=wvchsVcbYqxAuhM3NXfeu0GAGnDq0evBHFRpRReIWvU=",
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
				imageSrc:
					"https://media.istockphoto.com/id/907605102/es/foto/hombre-atractivo.jpg?s=612x612&w=is&k=20&c=GsSs_u03geAAy0_1oW4_RR-42Nvh8wWTcJqf-jWBvHw=",
				title: "Primero",
				text1: "enrique",
				text2: "gimeno",
			},
			{
				imageSrc:
					"https://media.istockphoto.com/id/539681702/es/vector/bandera-de-piratas-icono-sobre-blanco-de-fondo-vector-de-de.jpg?s=612x612&w=0&k=20&c=wvchsVcbYqxAuhM3NXfeu0GAGnDq0evBHFRpRReIWvU=",
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
			//   console.log(response.data);
			setAssignmentInfo(JSON.stringify(response.data));
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
						<span className="selection-info">Información adicional</span>
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
