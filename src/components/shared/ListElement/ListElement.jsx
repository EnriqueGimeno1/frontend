import React from "react";
import "./ListElement.css";

export const ListElement = () => {
  return (
    <div className="list-element-container">
      <div className="picture-container">
        <img
          className="picture"
          src="https://media.istockphoto.com/photos/english-bulldog-in-a-pumpkin-wagon-picture-id1280623255?b=1&k=20&m=1280623255&s=612x612&w=0&h=KzVaFbeq9HJdQZdGPXNd5xbfPUbKsjvhZdNC6Ii92pM="
          alt="Foto Usuario"
        />
      </div>
      <div className="info-container">
        <span className="element-title">Enrique Gimeno</span>
        <span className="element-text">Tiene sueño</span>
        <span className="element-text2">Tiene sueño</span>
      </div>
    </div>
  );
};
