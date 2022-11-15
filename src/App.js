import "./App.css";
import Login from "./components/feature/Login/Login";
import AdminPanel from "./components/feature/AdminPanel/AdminPanel";
import { CreateUser } from "./components/feature/forms/CreateUser";

function App() {
  return (
    <div className="App">
      {/* <Login />
      <AdminPanel /> */}
      <CreateUser />
    </div>
  );
}

export default App;
