import React from "react";
import { FormContainer } from "../../feature/FormContainer/FormContainer";
import Sidebar from "../../shared/Sidebar/Sidebar";
import { TopNavBar } from "../../shared/TopNavBar/TopNavBar";
import "./OperatorPanel.css";
import { Navigate } from "react-router-dom";

export default function OperatorPanel(props) {
  const userActions = [
    {
      text: "Gestión de Rutas",
      path: "create-destination",
    },
    {
      text: "Asignación de Rutas",
      path: "route-assignment",
    },
  ];

  const sidebarProps = { ...props, userActions: userActions };

  if (
    typeof props.authenticatedUser !== "undefined" &&
    props.authenticatedUser.User.accessLevel === "Operador de Transporte"
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
