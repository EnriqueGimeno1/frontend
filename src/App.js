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
import ManagerPanel from "./components/pages/ManagerPanel/ManagerPanel";
import OperatorPanel from "./components/pages/OperatorPanel/OperatorPanel";
import DriverPanel from "./components/pages/DriverPanel/DriverPanel";
import {
  CreateClient,
  CreateDestination,
  CreateUser,
  CreateVehicle,
} from "./components/feature/forms";
import { CreateOrder } from "./components/feature/forms/CreateOrder";

function App() {
  let activeClassName = "nav-active";
  const [authenticatedUser, setAuthenticatedUser] = useState();

  const props = { authenticatedUser, setAuthenticatedUser };

  return (
    <div className="App">
      <Routes>
        <Route index element={<Login {...props} />} />
        {/* RUTA - Administrador */}
        <Route path="admin-panel" element={<AdminPanel {...props} />}>
          <Route path="register-user" element={<CreateUser />} />
          <Route path="register-client" element={<CreateClient />} />
          <Route path="register-order" element={<CreateOrder />} />
          <Route path="register-vehicle" element={<CreateVehicle />} />
        </Route>
        {/* RUTA - Gerente */}
        <Route path="manager-panel" element={<ManagerPanel {...props} />}>
          {" "}
          <Route path="register-user" element={<CreateUser />} />
          <Route path="register-client" element={<CreateClient />} />
          <Route path="register-destination" element={<CreateDestination />} />
          <Route path="register-order" element={<CreateOrder />} />
          <Route path="register-vehicle" element={<CreateVehicle />} />
        </Route>
        {/* RUTA - Operador */}
        <Route path="operator-panel" element={<OperatorPanel {...props} />}>
          <Route path="route-assignment" element={<RouteAssignment />} />
        </Route>
        {/* RUTA - Conductor */}
        <Route path="driver-panel" element={<DriverPanel {...props} />}></Route>
        {/* RUTA - Por Defecto */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>

      {/* TEMPORAL FLOATING MENU */}
      {/* <div className="app-menu">
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
			</div> */}
    </div>
  );
}

export default App;
