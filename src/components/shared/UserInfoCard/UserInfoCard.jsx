import React from "react";
import "./UserInfoCard.css";

export default function UserInfoCard({
  profilePicture,
  userName = "Sin nombre",
  userWorkPosition = "Sin cargo",
}) {
  return (
    <div className="card-container">
      {/* CONTAINER - Profile Picture */}
      <div className="picture-container">
        <img
          className="profile-picture"
          src={profilePicture}
          alt="Foto Usuario"
        />
      </div>
      {/* CONTAINER - User Information */}
      <div className="user-info-container">
        <span className="user-name">{userName}</span>
        <span className="work-position">{userWorkPosition} </span>
        <a href="" className="logout-link">
          Cerrar Sesión
        </a>
      </div>
    </div>
  );
}
