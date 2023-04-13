import "../ListElement.css";
import driverThumbnail from "../../../../assets/images/driver.png";
import { useCallback } from "react";
import { useState } from "react";

export const DriverListElement = ({
  props: {
    element,
    driversInfo,
    setDriversInfo,
    checkedDriver,
    setCheckedDriver,
  },
}) => {
  const selectDriver = useCallback(() => {
    const updatedDriversInfo = driversInfo.map((driver) => {
      if (driver.idNumber === element.idNumber) {
        return { ...driver, checked: true };
      } else {
        return { ...driver, checked: false };
      }
    });
    setDriversInfo(updatedDriversInfo);
    setCheckedDriver({ ...element });
  }, [driversInfo, element, setCheckedDriver, setDriversInfo]);

  return (
    <div
      className={[
        "list-element-container",
        element.checked ? "selected-list-element" : "",
      ]
        .join(" ")
        .trim()}
      onClick={selectDriver}
    >
      <div className="picture-container">
        <img className="picture" src={driverThumbnail} alt="Miniatura" />
      </div>
      <div className="info-container">
        <span className="element-title">{element.firstName}</span>
        <span className="element-text">V-{element.idNumber}</span>
        <span className="element-text2">
          Capacidad: {element.vehicleWeight} Kg
        </span>
      </div>
    </div>
  );
};
