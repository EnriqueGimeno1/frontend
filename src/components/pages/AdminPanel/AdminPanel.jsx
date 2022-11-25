import React from "react";
import { FormContainer } from "../../feature/FormContainer/FormContainer";
import Sidebar from "../../shared/Sidebar/Sidebar";
import { TopNavBar } from "../../shared/TopNavBar/TopNavBar";
import "./AdminPanel.css";

export default function AdminPanel() {
  return (
    <div className="panel-container">
      <TopNavBar />
      <div className="bottom-panel">
        <Sidebar />
        <FormContainer />
      </div>
    </div>
  );
}
