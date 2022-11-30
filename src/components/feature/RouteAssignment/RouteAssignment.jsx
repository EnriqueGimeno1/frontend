import React from "react";
import "./RouteAssignment.css";
import { SelectionList } from "../../shared/SelectionList/SelectionList";
import { LoadBar } from "../LoadBar/LoadBar";
import axios from "axios";
import { useEffect, useState } from "react";

export const RouteAssignment = () => {
  //Get server information when component mounts

  const [assignmentInfo, setAssignmentInfo] = useState("estado");

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3333/users/",
      responseType: "json",
    }).then(function (response) {
      //   console.log(response.data);
      setAssignmentInfo(JSON.stringify(response.data));
    });
  }, []);

  return (
    <div className="assignment-container">
      <div className="selection-panel-container">
        <SelectionList />
        <SelectionList />
        <SelectionList />
      </div>
      <div className="load-bar-section">
        <LoadBar />
      </div>
      <div className="bottom-section">
        <div className="bottom-selection-container">
          <div className="details-container">
            <span className="selection-info">{assignmentInfo}</span>
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
