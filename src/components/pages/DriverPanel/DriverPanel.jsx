import React from "react";
import { FormContainer } from "../../feature/FormContainer/FormContainer";
import Sidebar from "../../shared/Sidebar/Sidebar";
import { TopNavBar } from "../../shared/TopNavBar/TopNavBar";
import "./DriverPanel.css";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState, useCallback } from "react";
import RouteStepCard from "../../shared/RouteStepCard/RouteStepCard";

export default function DriverPanel(props) {
  const [assignedRouteInfo, setAssignedRouteInfo] = useState({});
  // SIDEBAR CODE
  // const userActions = [
  //   {
  //     text: "Rutas",
  //     path: "route-assignment",
  //   },
  // ];

  // const sidebarProps = { ...props, userActions: userActions };

  //Get server information when component mounts
  useEffect(() => {
    if (props.authenticatedUser) {
      let loggedUserId = props.authenticatedUser.User.userId;
      console.log(props.authenticatedUser.User.userId);
      // Get driver data from server
      axios({
        method: "get",
        url: "http://localhost:3333/delivery-routes",
        responseType: "json",
      }).then(function (response) {
        console.log(response.data);

        // Add 'selected' property to every driver object
        //   let transformedDriversInfo = response.data.map((driver) => ({
        //     ...driver,
        //     checked: false,
        //   }));

        let assignedRoute = response.data.find(
          (route) =>
            route.driverId === loggedUserId && route.status === "En Proceso"
        );
        setAssignedRouteInfo(assignedRoute);
        // setDriversInfo(transformedDriversInfo);
      });
    }
  }, []);

  if (
    typeof props.authenticatedUser !== "undefined" &&
    props.authenticatedUser.User.accessLevel === "Conductor"
  ) {
    return (
      <div className="panel-container">
        <TopNavBar />
        <div className="bottom-panel">
          {/* <Sidebar {...sidebarProps} /> */}
          {/* <FormContainer /> */}
          <div className="assigned-route-elements">
            {assignedRouteInfo && assignedRouteInfo.steps ? (
              assignedRouteInfo.steps.map((step, index) => {
                let stepProps = { ...step };
                stepProps.index = index;
                return <RouteStepCard {...stepProps} />;
              })
            ) : (
              <div className="no-route">Sin ruta asignada</div>
            )}
          </div>
        </div>
      </div>
    );
  } else return <Navigate to="/" />;
}
