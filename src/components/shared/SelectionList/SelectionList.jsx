import React from "react";
import { ListElement } from "../ListElement/ListElement";
import "./SelectionList.css";

export const SelectionList = ({ sectionTitle, elementsList }) => {
  const elemento = [
    {
      imag: "https://media.istockphoto.com/id/907605102/es/foto/hombre-atractivo.jpg?s=612x612&w=is&k=20&c=GsSs_u03geAAy0_1oW4_RR-42Nvh8wWTcJqf-jWBvHw=",
      title: "Primero",
      text1: "enrique",
      text2: "gimeno",
    },
    {
      imag: "https://media.istockphoto.com/id/539681702/es/vector/bandera-de-piratas-icono-sobre-blanco-de-fondo-vector-de-de.jpg?s=612x612&w=0&k=20&c=wvchsVcbYqxAuhM3NXfeu0GAGnDq0evBHFRpRReIWvU=",
      title: "Segundo",
      text1: "ernecius",
      text2: "Figueroa",
    },
  ];
  return (
    <div className="selection-list-container">
      <h1 className="title">{sectionTitle}</h1>
      <div className="list-container">
        {elementsList.map((element, index) => {
          <ListElement key={index} props={element} />;
        })}
      </div>
    </div>
  );
};
