import React from "react";
import "./RouteStepCard.css";

export default function RouteStepCard({
  originPointID,
  destinationPointID,
  destinationAddress,
  travelTime,
  totalNumberOfPackages,
  tasks,
  ordersNumbers,
  index,
  arrivalDate,
  status,
  stepsCount,
  updateStepStatus,
  updateArrivalDate,
}) {
  return (
    <div className="route-step-container">
      <div className="left-step-panel">
        <div className="step-number-container">{index + 1}</div>
      </div>
      <div className="driver-step-info-panel">
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
      <div className="driver-action-buttons">
        <button
          className="driver-action-button"
          disabled={arrivalDate !== ""}
          onClick={() => updateArrivalDate(index)}
        >
          Marcar llegada
        </button>
        {index < stepsCount - 1 ? (
          <button
            className="driver-action-button"
            disabled={status === "Entregado"}
            onClick={() => updateStepStatus(index)}
          >
            Completar Entrega
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
