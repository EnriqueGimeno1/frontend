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
import { UserProfile } from "./../../shared/UserProfile/UserProfile";

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

  const updateArrivalDate = useCallback(
    async (index) => {
      const updatedRouteInfo = {
        driverId: assignedRouteInfo.driverId,
        service: assignedRouteInfo.service,
        status: assignedRouteInfo.status,
        steps: assignedRouteInfo.steps.map((step, i) => {
          if (i === index) {
            return {
              ...step,
              arrivalDate: new Date().toISOString(),
            };
          }
          return step;
        }),
      };
      const url = `http://localhost:3333/delivery-routes/${assignedRouteInfo._id}`;
      try {
        const response = await axios.patch(url, updatedRouteInfo);
        console.log(response.data);
        axios({
          method: "get",
          url: "http://localhost:3333/delivery-routes",
          responseType: "json",
        }).then(function (response) {
          console.log(response.data);
          let loggedUserId = props.authenticatedUser.User.userId;
          let assignedRoute = response.data.find(
            (route) =>
              route.driverId === loggedUserId && route.status === "En Proceso"
          );
          setAssignedRouteInfo(assignedRoute);
          // setDriversInfo(transformedDriversInfo);
        });
      } catch (error) {
        console.error(error);
      }
    },
    [assignedRouteInfo, props]
  );

  const updateStepStatus = useCallback(
    async (index) => {
      const updatedRouteInfo = {
        driverId: assignedRouteInfo.driverId,
        service: assignedRouteInfo.service,
        status: assignedRouteInfo.status,
        steps: assignedRouteInfo.steps.map((step, i) => {
          if (i === index) {
            return {
              ...step,
              status: "Entregado",
            };
          }
          return step;
        }),
      };
      const url = `http://localhost:3333/delivery-routes/${assignedRouteInfo._id}`;
      try {
        const response = await axios.patch(url, updatedRouteInfo);
        console.log(response.data);
        axios({
          method: "get",
          url: "http://localhost:3333/delivery-routes",
          responseType: "json",
        }).then(function (response) {
          console.log(response.data);
          let loggedUserId = props.authenticatedUser.User.userId;
          let assignedRoute = response.data.find(
            (route) =>
              route.driverId === loggedUserId && route.status === "En Proceso"
          );
          setAssignedRouteInfo(assignedRoute);
          // setDriversInfo(transformedDriversInfo);
        });
      } catch (error) {
        console.error(error);
      }
    },
    [assignedRouteInfo, props]
  );

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
                stepProps.stepsCount = assignedRouteInfo.steps.length;
                stepProps.assignedRouteInfo = { ...assignedRouteInfo };
                stepProps.updateStepStatus = updateStepStatus;
                stepProps.updateArrivalDate = updateArrivalDate;
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
