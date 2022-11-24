import "./App.css";
import Login from "./components/pages/Login/Login";
import AdminPanel from "./components/pages/AdminPanel/AdminPanel";
import { CreateUser } from "./components/feature/forms/CreateUser";
import { CreateClient } from "./components/feature/forms/CreateClient";
import { CreateDestination } from "./components/feature/forms/CreateDestination";
import { CreateProduct } from "./components/feature/forms/CreateProduct";
import { CreateVehicleModel } from "./components/feature/forms/CreateVehicleModel";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";

function App() {
  let activeClassName = "nav-active";
  return (
    <div className="App">
      <div className="app-menu">
        <header>{/* <h1 className="App-header">COMPONENTS</h1> */}</header>
        <nav>
          <NavLink
            to=""
            className={
              ("nav-link ", ({ isActive }) => (isActive ? activeClassName : ""))
            }
          >
            Home
          </NavLink>
          <NavLink
            to="login"
            className={
              ("nav-link ", ({ isActive }) => (isActive ? activeClassName : ""))
            }
          >
            Login
          </NavLink>
          <NavLink
            to="admin-panel"
            className={
              ("nav-link ", ({ isActive }) => (isActive ? activeClassName : ""))
            }
          >
            Admin{" "}
          </NavLink>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
