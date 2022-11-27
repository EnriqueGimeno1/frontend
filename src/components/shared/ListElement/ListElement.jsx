import React from "react";
import "./ListElement.css";

export const ListElement = () => {
  return (
    <div className="list-element-container">
      <div className="picture container">
        <img src="" alt="Foto Usuario" />
      </div>
      <div className="info-container">
        <div className="element-info">
          <span>Enrique Gimeno</span>
          <span>Tiene sueño</span>
        </div>
      </div>
    </div>
  );
};
