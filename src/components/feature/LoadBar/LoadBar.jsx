import React from "react";
import "./LoadBar.css";

export const LoadBar = () => {
  const currentProgress = "10%";
  return (
    <div className="load-bar-container">
      <div className="progress-bar" style={{ width: currentProgress }}></div>
    </div>
  );
};
