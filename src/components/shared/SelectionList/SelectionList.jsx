import React from "react";
import { ListElement } from "../ListElement/ListElement";
import "./SelectionList.css";

export const SelectionList = () => {
  return (
    <div className="selection-list-container">
      <h1 className="title">Conductores</h1>
      <div className="list-container">
        <ListElement className="list-element" />
        <ListElement className="list-element" />
        <ListElement className="list-element" />
        <ListElement className="list-element" />
        <ListElement className="list-element" />
        <ListElement className="list-element" />
        <ListElement className="list-element" />
        <ListElement className="list-element" />
        <ListElement className="list-element" />
        <ListElement className="list-element" />
        <ListElement className="list-element" />
        <ListElement className="list-element" />
      </div>
    </div>
  );
};
