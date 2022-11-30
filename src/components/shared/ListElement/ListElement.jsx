import React from "react";
import "./ListElement.css";

export const ListElement = ({ imageSrc, title, text1, text2 }) => {
  return (
    <div className="list-element-container">
      <div className="picture-container">
        <img className="picture" src={imageSrc} alt="Miniatura" />
      </div>
      <div className="info-container">
        <span className="element-title">{title}</span>
        <span className="element-text">{text1}</span>
        <span className="element-text2">{text2}</span>
      </div>
    </div>
  );
};
