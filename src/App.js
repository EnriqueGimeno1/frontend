import "./App.css";
import Login from "./components/pages/Login/Login";
import AdminPanel from "./components/pages/AdminPanel/AdminPanel";
import { CreateUser } from "./components/feature/forms/CreateUser";
import { CreateClient } from "./components/feature/forms/CreateClient";
import { CreateDestination } from "./components/feature/forms/CreateDestination";
import { CreateProduct } from "./components/feature/forms/CreateProduct";
import { CreateVehicleModel } from "./components/feature/forms/CreateVehicleModel";

function App() {
  return (
    <div className="App">
      {/* <Login />
      <AdminPanel /> */}
      {/* <CreateUser /> */}
      {/* <CreateClient /> */}
      {/* <CreateDestination /> */}
      {/* <CreateProduct /> */}
      <CreateVehicleModel />
    </div>
  );
}

export default App;
