import React from "react";
import "./RouteAssignment.css";
import { LoadBar } from "../LoadBar/LoadBar";
import axios from "axios";
import { useEffect, useState } from "react";
import driverThumbnail from "../../../assets/images/driver.png";
import orderThumbnail from "../../../assets/images/order.png";
import packageThumbnail from "../../../assets/images/package.png";
import { DriverListElement } from "../listElements/DriverListElement/DriverListElement";
import { OrderListElement } from "../listElements/OrderListElement/OrderListElement";
import { PackageListElement } from "../listElements/PackageListElement/PackageListElement";
import { DriverSelectionList } from "../selectionLists/DriverSelectionList/DriverSelectionList";
import { OrderSelectionList } from "../selectionLists/OrderSelectionList/OrderSelectionList";
import { PackageSelectionList } from "../selectionLists/PackageSelectionList/PackageSelectionList";

export const RouteAssignment = () => {
  // Driver data from the server
  const [driverInfo, setDriverInfo] = useState([]);
  // Order data from the server
  const [ordersInfo, setOrdersInfo] = useState([]);
  // SELECTED INFORMATION
  const [selectedDriver, setSelectedDriver] = useState();
  // SELECTED ORDER
  const [selectedOrder, setSelectedOrder] = useState();
  // SELECTED PACKAGES
  const [selectedPackages, setSelectedPackages] = useState();
  // Data to be sent to the server for assignment
  const [assignmentInfo, setAssignmentInfo] = useState("estado");

  // Drivers
  const drivers = {
    sectionTitle: "Conductores",
    elementsList: [
      {
        imageSrc: driverThumbnail,
        title: "Primero",
        text1: "enrique",
        text2: "gimeno",
      },
      {
        imageSrc: driverThumbnail,
        title: "Segundo",
        text1: "ernecius",
        text2: "Figueroa",
      },
    ],
  };

  // Orders
  const orders = {
    sectionTitle: "Ordenes",
    elementsList: [
      {
        imageSrc: orderThumbnail,
        title: "Primero",
        text1: "enrique",
        text2: "gimeno",
      },
      {
        imageSrc: orderThumbnail,
        title: "Segundo",
        text1: "ernecius",
        text2: "Figueroa",
      },
    ],
  };
  // Packages
  const packages = {
    sectionTitle: "Paquetes",
    elementsList: [
      {
        imageSrc: packageThumbnail,
        title: "Primero",
        text1: "enrique",
        text2: "gimeno",
      },
      {
        imageSrc: packageThumbnail,
        title: "Segundo",
        text1: "ernecius",
        text2: "Figueroa",
      },
    ],
  };

  //Get server information when component mounts
  useEffect(() => {
    // Get driver data
    axios({
      method: "get",
      url: "http://localhost:3333/users/drivers",
      responseType: "json",
    }).then(function (response) {
      console.log(response.data);
      setDriverInfo({
        sectionTitle: "Conductores",
        elementsList: response.data,
      });
    });
    // Get Orders data
    axios({
      method: "get",
      url: "http://localhost:3333/orders",
      responseType: "json",
    }).then(function (response) {
      console.log(response.data);
      setOrdersInfo({
        sectionTitle: "Ordenes",
        elementsList: response.data,
      });
    });
  }, []);

  return (
    <div className="assignment-container">
      <div className="selection-panel-container">
        <DriverSelectionList {...drivers} />
        <OrderSelectionList {...orders} />
        <PackageSelectionList {...packages} />
      </div>
      <div className="load-bar-section">
        <LoadBar />
      </div>
      <div className="bottom-section">
        <div className="bottom-selection-container">
          <div className="details-container">
            <span className="selection-info">{JSON.stringify(driverInfo)}</span>
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
