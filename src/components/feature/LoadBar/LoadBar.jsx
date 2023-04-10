import React from "react";
import "./LoadBar.css";

export const LoadBar = ({ weightBarWidth, volumeBarWidth }) => {
  const currentProgress = (weightBarWidth > 100 ? 100 : weightBarWidth) + "%";
  return (
    <div className="load-bar-container">
      <div className="progress-bar" style={{ width: currentProgress }}></div>
    </div>
  );
};
