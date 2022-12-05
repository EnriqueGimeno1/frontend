import React from "react";
import "./RouteAssignment.css";
import { LoadBar } from "../LoadBar/LoadBar";
import axios from "axios";
import { useEffect, useState } from "react";
import driverThumbnail from "../../../assets/images/driver.png";
import orderThumbnail from "../../../assets/images/order.png";
import packageThumbnail from "../../../assets/images/package.png";
import { DriverListElement } from "../listElements/DriverListElement/DriverListElement";
import { OrderListElement } from "../listElements/OrderListElement/OrderListElement";
import { PackageListElement } from "../listElements/PackageListElement/PackageListElement";
import { DriverSelectionList } from "../selectionLists/DriverSelectionList/DriverSelectionList";
import { OrderSelectionList } from "../selectionLists/OrderSelectionList/OrderSelectionList";
import { PackageSelectionList } from "../selectionLists/PackageSelectionList/PackageSelectionList";

export const RouteAssignment = () => {
	// Driver data from the server
	const [driversInfo, setDriversInfo] = useState([]);
	// Order data from the server
	const [ordersInfo, setOrdersInfo] = useState([]);
	// CURRENTLY SELECTED ORDER (Not necessarily checked)
	const [selectedOrder, setSelectedOrder] = useState();

	// ASSIGNATION STATE
	// Checked Driver
	const [checkedDriver, setCheckedDriver] = useState();
	// Checked Order
	const [checkedOrder, setCheckedOrder] = useState();
	// Checked Packages
	const [selectedPackages, setSelectedPackages] = useState();

	// Data to be sent to the server for assignment
	const [assignmentInfo, setAssignmentInfo] = useState("estado");

	//Get server information when component mounts
	useEffect(() => {
		// Get driver data from server
		axios({
			method: "get",
			url: "http://localhost:3333/users/drivers",
			responseType: "json",
		}).then(function (response) {
			// console.log(response.data);

			// Add 'selected' property to every driver object
			let transformedDriversInfo = response.data.map((driver) => ({
				...driver,
				checked: "false",
			}));
			setDriversInfo(transformedDriversInfo);
		});

		// Get Orders data from server
		axios({
			method: "get",
			url: "http://localhost:3333/orders",
			responseType: "json",
		}).then(function (response) {
			// console.log(response.data);

			let transformedOrdersInfo = response.data.map((order) => ({
				...order,
				currentlySelected: "false",
				checked: "false", //Possible values: false, partially,completely
				numberOfPackages: order.tasks.length,
			}));
			// Add 'selected' property to every driver object
			setOrdersInfo(transformedOrdersInfo);
		});
	}, []);

	// Drivers properties to be sent to DriverSelectionList
	const driversProps = { driversInfo, setDriversInfo };

	// orders properties to be sent to DriverSelectionList
	const ordersProps = {
		ordersInfo,
		setOrdersInfo,
		selectedOrder,
		setSelectedOrder,
	};

	// Package properties to be sent to DriverSelectionList
	const packageProps = { selectedOrder };

	return (
		<div className="assignment-container">
			<div className="selection-panel-container">
				<DriverSelectionList {...driversProps} />
				<OrderSelectionList {...ordersProps} />
				<PackageSelectionList {...packageProps} />
			</div>
			<div className="load-bar-section">
				<LoadBar />
			</div>
			<div className="bottom-section">
				<div className="bottom-selection-container">
					<div className="details-container">
						<span className="selection-info">
							{JSON.stringify(driversInfo)}
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
