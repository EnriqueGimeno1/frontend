import React from "react";
import "./UserProfile.css";

export const UserProfile = () => {
  const userInfo = {
    imageURL:
      "https://media.istockphoto.com/photos/english-bulldog-in-a-pumpkin-wagon-picture-id1280623255?b=1&k=20&m=1280623255&s=612x612&w=0&h=KzVaFbeq9HJdQZdGPXNd5xbfPUbKsjvhZdNC6Ii92pM=",
    fullName: "Ernesto",
    accessLevel: "Administrador de sistema del orto",
  };

  return (
    <div className="user-profile-container">
      <div className="picture-container">
        <img className="picture" src={userInfo.imageURL} alt="Foto Usuario" />
      </div>
      <div className="user-info-container">
        <div className="user-info">
          <span className="user-name">{userInfo.fullName}</span>
          <span className="user-access-level">{userInfo.accessLevel}</span>
        </div>
        <div className="user-actions">
          <button className="user-action">Salir</button>
          <button className="user-action">Salir2</button>
        </div>
      </div>
    </div>
  );
};
