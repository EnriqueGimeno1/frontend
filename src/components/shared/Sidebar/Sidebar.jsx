import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
	let activeClassName = "side-nav-active";

	return (
		<div className="sidebar-container">
			{/* Load links based on user's access level */}
			<nav className="nav-container">
				<NavLink
					className={({ isActive }) =>
						isActive ? activeClassName : "side-nav-link"
					}
					to="/"
				>
					Registrar Usuario
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? activeClassName : "side-nav-link"
					}
					to="/about"
				>
					Registrar Vehículo
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? activeClassName : "side-nav-link"
					}
					to="/about"
				>
					Asignar Ruta
				</NavLink>
			</nav>
		</div>
	);
}
