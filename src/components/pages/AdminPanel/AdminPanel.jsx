import React from "react";
import { FormContainer } from "../../feature/FormContainer/FormContainer";
import Sidebar from "../../shared/Sidebar/Sidebar";
import { TopNavBar } from "../../shared/TopNavBar/TopNavBar";
import "./AdminPanel.css";
import { Navigate } from "react-router-dom";

export default function AdminPanel(props) {
	const userActions = [
		{
			text: "Sucursales",
			path: "create-branch-office",
		},
		{
			text: "Usuarios",
			path: "create-destination",
		},
		{
			text: "Rutas",
			path: "route-assignment",
		},
	];

	const sidebarProps = { ...props, userActions: userActions };

	if (
		typeof props.authenticatedUser !== "undefined" &&
		props.authenticatedUser.User.accessLevel === "Administrador de Sistema"
	) {
		return (
			<div className="panel-container">
				<TopNavBar />
				<div className="bottom-panel">
					<Sidebar {...sidebarProps} />
					<FormContainer />
				</div>
			</div>
		);
	} else {
		return <Navigate to="/" />;
	}
}
