import React from "react";
import "./DeliveryStepCard.css";

export default function DeliveryStepCard({
  originPointID,
  destinationPointID,
  destinationAddress,
  travelTime,
  totalNumberOfPackages,
  tasks,
  ordersNumbers,
  index,
}) {
  return (
    <div className="route-step-container">
      <div className="left-panel">
        <div className="step-icon-container">{index + 1}</div>
      </div>
      <div className="step-info-panel">
        {totalNumberOfPackages === 0 ? (
          <div className="step-info step-info-title">
            <div className="info-title"> Regreso a Almacén</div>
          </div>
        ) : (
          ""
        )}
        <div className="step-info">
          <div className="info-title">Dirección:</div>
          <div className="info-text">{destinationAddress}</div>
        </div>
        {totalNumberOfPackages > 0 ? (
          <div className="step-info">
            <div className="info-title">Nro. de Paquetes:</div>
            <div className="info-text">{totalNumberOfPackages}</div>
          </div>
        ) : (
          ""
        )}

        <div className="step-info">
          <div className="info-title">Tiempo de viaje estimado:</div>
          <div className="info-text">{travelTime}</div>
        </div>
      </div>
    </div>
  );
}
