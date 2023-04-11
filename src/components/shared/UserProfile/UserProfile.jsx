import React, { useCallback } from "react";
import "./UserProfile.css";

export const UserProfile = ({ authenticatedUser, setAuthenticatedUser }) => {
  const userInfo = authenticatedUser
    ? {
        imageURL:
          "https://media.istockphoto.com/photos/english-bulldog-in-a-pumpkin-wagon-picture-id1280623255?b=1&k=20&m=1280623255&s=612x612&w=0&h=KzVaFbeq9HJdQZdGPXNd5xbfPUbKsjvhZdNC6Ii92pM=",
        fullName: authenticatedUser.User.userName,
        accessLevel: authenticatedUser.User.accessLevel,
      }
    : {
        imageURL:
          "https://media.istockphoto.com/photos/english-bulldog-in-a-pumpkin-wagon-picture-id1280623255?b=1&k=20&m=1280623255&s=612x612&w=0&h=KzVaFbeq9HJdQZdGPXNd5xbfPUbKsjvhZdNC6Ii92pM=",
        fullName: "Luis Martínez",
        accessLevel: "Operador de Despacho",
      };
  console.log(authenticatedUser);

  const handleLogout = useCallback(
    (event) => {
      // event.preventDefault();
      // console.log(authenticatedUser);
      setAuthenticatedUser();

      // console.log(event.target.value);
    },
    [setAuthenticatedUser]
  );

  return (
    <div className="user-profile-container">
      <div className="profile-picture-container">
        <img
          className="profile-picture"
          src={userInfo.imageURL}
          alt="Foto Usuario"
        />
      </div>
      <div className="user-info-container">
        <div className="user-info">
          <span className="user-name">{userInfo.fullName}</span>
          <span className="user-access-level">{userInfo.accessLevel}</span>
        </div>
        <div className="user-actions">
          <button className="user-action-button" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
};
