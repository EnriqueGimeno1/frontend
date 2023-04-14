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
}) {
  return (
    <div className="user-card-container">
      Holis{JSON.stringify(destinationAddress)}
    </div>
  );
}
