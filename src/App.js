import "./App.css";
import Login from "./components/pages/Login/Login";
import AdminPanel from "./components/pages/AdminPanel/AdminPanel";
// import { CreateUser } from "./components/feature/forms/CreateUser";
// import { CreateClient } from "./components/feature/forms/CreateClient";
// import { CreateDestination } from "./components/feature/forms/CreateDestination";
// import { CreateProduct } from "./components/feature/forms/CreateProduct";
// import { CreateVehicleModel } from "./components/feature/forms/CreateVehicleModel";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { RouteAssignment } from "./components/feature/RouteAssignment/RouteAssignment";
import { useState } from "react";

function App() {
	let activeClassName = "nav-active";
	const [authenticatedUser, setAuthenticatedUser] = useState();

	const props = { authenticatedUser, setAuthenticatedUser };
	return (
		<div className="App">
			<Routes>
				<Route index element={<Login {...props} />} />
				<Route path="admin-panel" element={<AdminPanel />}>
					<Route path="route-assignment" element={<RouteAssignment />} />
				</Route>
				<Route path="/*" element={<Navigate to="/" />} />
			</Routes>

			{/* TEMPORAL FLOATING MENU */}
			<div className="app-menu">
				<header>{/* <h1 className="App-header">COMPONENTS</h1> */}</header>
				<nav>
					<NavLink
						to=""
						className={({ isActive }) =>
							isActive ? activeClassName : "nav-link"
						}
					>
						Home
					</NavLink>
					<NavLink
						to="login"
						className={({ isActive }) =>
							isActive ? activeClassName : "nav-link"
						}
					>
						Login
					</NavLink>
					<NavLink
						to="admin-panel"
						className={({ isActive }) =>
							isActive ? activeClassName : "nav-link"
						}
					>
						Admin
					</NavLink>
					<NavLink
						to="route-assignment"
						className={({ isActive }) =>
							isActive ? activeClassName : "nav-link"
						}
					>
						Route
					</NavLink>
				</nav>
			</div>
		</div>
	);
}

export default App;
