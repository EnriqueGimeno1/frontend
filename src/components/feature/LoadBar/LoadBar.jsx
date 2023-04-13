import React from "react";
import "./LoadBar.css";

export const LoadBar = ({
  weightBarWidth,
  volumeBarWidth,
  checkedDriver,
  selectedPackagesWeight,
  selectedPackagesVolume,
}) => {
  const currentWeightProgress =
    (weightBarWidth > 100 ? 100 : weightBarWidth) + "%";
  const currentVolumeProgress =
    (volumeBarWidth > 100 ? 100 : volumeBarWidth) + "%";
  return (
    <>
      <div className="capacity-info-container">
        <div className="capacity-bar-container">
          <div className="capacity-text">
            <div className="capacity-title">Peso:</div>

            {checkedDriver
              ? " " +
                selectedPackagesWeight +
                " / " +
                checkedDriver.vehicleWeight +
                " Kg"
              : ""}
          </div>
          <div className="load-bar-container">
            <div
              className="progress-bar"
              style={{ width: currentWeightProgress }}
            ></div>
          </div>
        </div>
      </div>
      <div className="capacity-info-container">
        <div className="capacity-bar-container">
          <div className="capacity-text">
            <div className="capacity-title">Volumen:</div>

            {checkedDriver ? (
              <>
                {" " +
                  selectedPackagesVolume +
                  " / " +
                  checkedDriver.vehicleVolume +
                  " m"}
                <sup>3</sup>
              </>
            ) : (
              ""
            )}
          </div>
          <div className="load-bar-container">
            <div
              className="progress-bar"
              style={{ width: currentVolumeProgress }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};
