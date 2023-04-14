import "./RouteAssignment.css";
import { LoadBar } from "../LoadBar/LoadBar";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState, useCallback } from "react";
import { DriverSelectionList } from "../selectionLists/DriverSelectionList/DriverSelectionList";
import { OrderSelectionList } from "../selectionLists/OrderSelectionList/OrderSelectionList";
import { PackageSelectionList } from "../selectionLists/PackageSelectionList/PackageSelectionList";
import DeliveryStepCard from "../../shared/DeliveryStepCard/DeliveryStepCard";
import { toast } from "react-toastify";

export const RouteAssignment = () => {
  // Driver data from the server
  const [driversInfo, setDriversInfo] = useState([]);
  // Order data from the server
  const [ordersInfo, setOrdersInfo] = useState([]);
  // CURRENTLY SELECTED ORDER (Not necessarily checked)
  const [selectedOrder, setSelectedOrder] = useState();

  // ASSIGNATION STATE
  // Checked Driver
  const [checkedDriver, setCheckedDriver] = useState();
  // Checked Order
  const [checkedOrders, setCheckedOrders] = useState([]);
  // Checked Packages
  const [selectedPackages, setSelectedPackages] = useState([]);
  // Capacity values
  const [selectedPackagesVolume, setSelectedPackagesVolume] = useState(0);
  const [selectedPackagesWeight, setSelectedPackagesWeight] = useState(0);
  const [weightBarWidth, setWeightBarWidth] = useState(0);
  const [volumeBarWidth, setVolumeBarWidth] = useState(0);
  //   Information panel state
  const [deliveryDate, setDeliveryDate] = useState(new Date());
  const [packagesQuantity, setPackagesQuantity] = useState(0);
  const [numberOfDestinations, setNumberOfDestinations] = useState(0);
  // Generated Route state
  const [optimizedRoute, setOptimizedRoute] = useState([]);
  const [vehicleSpeed, setVehicleSpeed] = useState(50);
  // Source Storage location
  const [sourceCoordinates, setSourceCoordinates] = useState({
    receptionPointId: "Alamacen01",
    latitude: "55.7558",
    longitude: "37.6173",
  });
  const [sourceStorageData, setSourceStorageData] = useState({
    receptionPointId: "Alamacen01",
    address: "Av. Bolivar, Lecheria, Anzoátegui",
    latitude: "55.7558",
    longitude: "37.6173",
    tasks: [],
  });

  // Data to be sent to the server for assignment
  const [assignmentInfo, setAssignmentInfo] = useState([]);

  // Initialize or disable drivers checked state
  const uncheckDriversInfo = useCallback((driversInformation) => {
    let transformedDriversInfo = driversInformation.map((driver) => ({
      ...driver,
      checked: false,
    }));
    setDriversInfo(transformedDriversInfo);
  }, []);

  // Initialize or disable drivers checked state
  const uncheckOrdersInfo = useCallback(() => {
    // let transformedOrdersInfo = ordersInformation.map((order) => ({
    //   ...order,
    //   currentlySelected: false,
    //   checked: false, //Possible values: false, partially,completely
    //   numberOfPackages: order.tasks.length,
    // }));
    // // Add 'selected' property to every driver object
    // setOrdersInfo(transformedOrdersInfo);
    console.log(selectedPackages);
    let transformedOrdersInfo = ordersInfo.map((order) => ({
      ...order,
      tasks: order.tasks.map((task) =>
        selectedPackages.some((selectedPackage) =>
          selectedPackage.tasks.some(
            (selectedTask) => selectedTask._id === task._id
          )
        )
          ? { ...task, checked: false }
          : task
      ),
    }));
    setOrdersInfo(transformedOrdersInfo);
    // setOrdersInfo((prevOrdersInfo) =>
    //   prevOrdersInfo.map((order) => ({
    //     ...order,
    //     tasks: order.tasks.map((task) =>
    //       selectedPackages.some(
    //         (selectedPackage) => selectedPackage._id === task._id
    //       )
    //         ? { ...task, checked: false }
    //         : task
    //     ),
    //   }))
    // );
    setSelectedPackages([]);
  }, [ordersInfo, selectedPackages]);

  //   Calculate number of selected packages
  const sumSelectedPackagesQuantity = useCallback((selectedPackages) => {
    let sum = 0;
    selectedPackages.forEach((order) => {
      order.tasks.forEach((task) => {
        sum += task.quantity;
      });
    });
    return sum;
  }, []);

  //   Count unique receptions points form the selected packages
  const countUniqueReceptionPoints = useCallback((selectedPackages) => {
    const receptionPoints = selectedPackages.map(
      (order) => order.receptionPointId
    );
    const uniqueReceptionPoints = new Set(receptionPoints);
    return uniqueReceptionPoints.size;
  }, []);

  // Uncheck and deselect elements on selection panels
  const clearSelection = useCallback(() => {
    setSelectedOrder();
    setCheckedDriver();
    setCheckedOrders([]);
    uncheckDriversInfo(driversInfo);
    uncheckOrdersInfo();
  }, [driversInfo, uncheckDriversInfo, uncheckOrdersInfo]);

  //Get server information when component mounts
  useEffect(() => {
    // Get driver data from server
    axios({
      method: "get",
      url: "http://localhost:3333/users",
      responseType: "json",
    }).then(function (response) {
      // console.log(response.data);

      // Add 'selected' property to every driver object
      //   let transformedDriversInfo = response.data.map((driver) => ({
      //     ...driver,
      //     checked: false,
      //   }));
      let transformedDriversInfo = response.data
        .filter((user) => user.accessLevel === "Conductor")
        .map((user) => ({ ...user, checked: false }));
      setDriversInfo(transformedDriversInfo);
    });

    // Get Orders data from server
    axios({
      method: "get",
      url: "http://localhost:3333/orders",
      responseType: "json",
    }).then(function (response) {
      // console.log(response.data);

      let transformedOrdersInfo = response.data.map(
        (order) => {
          order.currentlySelected = false;
          order.numberOfPackages = order.tasks.length;
          order.tasks = order.tasks.map((task) => {
            task.checked = false;
            return task;
          });
          return order;
        }
        // ({
        // 	...order,
        // 	currentlySelected: false,
        // 	checked: false, //Possible values: false, partially,completely
        // 	numberOfPackages: order.tasks.length,
        // })
      );

      console.log("ordersInfo: ", transformedOrdersInfo);
      // Add 'selected' property to every driver object
      setOrdersInfo(transformedOrdersInfo);
    });
  }, []);

  //   Update selectedPackags array
  const updateSelectedPackages = useCallback(() => {
    if (selectedOrder) {
      setSelectedPackages((selectedPackages) => {
        const updatedSelectedPackages = [...selectedPackages];
        const checkedTasks = selectedOrder.tasks.filter((task) => task.checked);
        if (checkedTasks.length > 0) {
          const selectedOrderIndex = updatedSelectedPackages.findIndex(
            (order) => order._id === selectedOrder._id
          );
          if (selectedOrderIndex !== -1) {
            updatedSelectedPackages[selectedOrderIndex].tasks = checkedTasks;
          } else {
            updatedSelectedPackages.push({
              ...selectedOrder,
              tasks: checkedTasks,
            });
          }
        } else {
          const selectedOrderIndex = updatedSelectedPackages.findIndex(
            (order) => order._id === selectedOrder._id
          );
          if (selectedOrderIndex !== -1) {
            updatedSelectedPackages.splice(selectedOrderIndex, 1);
          }
        }
        console.log("updatedSelectedPackages ", updatedSelectedPackages);
        return updatedSelectedPackages;
      });
    }
  }, [selectedOrder]);

  function requestRouteOptimization(coordinates) {
    return axios.post("http://localhost:3333/distance", { coordinates });
  }

  const handleRouteOptimizationRequest = useCallback(async () => {
    // const coordinates = [
    //   { receptionPointID: "l1", latitude: "51.5074", longitude: "-0.1278" },
    //   { receptionPointID: "l2", latitude: "-33.8688", longitude: "151.2093" },
    //   { receptionPointID: "l3", latitude: "35.6895", longitude: "139.6917" },
    //   { receptionPointID: "l4", latitude: "40.7128", longitude: "-74.0060" },
    //   { receptionPointID: "l5", latitude: "48.8566", longitude: "2.3522" },
    //   { receptionPointID: "l6", latitude: "-22.9068", longitude: "-43.1729" },
    //   { receptionPointID: "l7", latitude: "52.5200", longitude: "13.4050" },
    //   { receptionPointID: "l8", latitude: "37.7749", longitude: "-122.4194" },
    //   { receptionPointID: "l9", latitude: "-26.2041", longitude: "28.0473" },
    //   { receptionPointID: "l10", latitude: "55.7558", longitude: "37.6173" },
    // ];
    const coordinates = selectedPackages.reduce((acc, curr) => {
      if (acc.length === 0) {
        acc.push(sourceCoordinates);
      }
      console.log(curr);
      if (
        !acc.some((item) => item.receptionPointId === curr.receptionPointId)
      ) {
        acc.push({
          receptionPointId: curr.receptionPointId,
          latitude: curr.latitude,
          longitude: curr.longitude,
        });
      }
      return acc;
    }, []);
    const response = await requestRouteOptimization(coordinates);
    console.log(response);
    setOptimizedRoute(response.data);
  }, [selectedPackages, sourceCoordinates]);

  // Generate elements for the optimized route
  const generateOptimizedRouteInfo = useCallback(() => {
    let result = [];
    console.log("selectedPackages", selectedPackages);
    console.log("optimizedRoute", optimizedRoute);
    let selectedPackagesCopy = [...selectedPackages];
    selectedPackagesCopy.unshift(sourceStorageData);
    optimizedRoute.forEach((route) => {
      let originPointId = route.startingReceptionPointId;
      let destinationPointId = route.endingReceptionPointId;
      let destinationAddress = selectedPackagesCopy.find(
        (order) => order.receptionPointId === destinationPointId
      ).address;
      let travelTimeInMinutes =
        route.distanceBetweenPoints / 1000 / (vehicleSpeed / 60);
      let travelTime = "";
      if (travelTimeInMinutes < 60) {
        travelTime = `${Math.round(travelTimeInMinutes)} minutos`;
      } else {
        let hours = Math.floor(travelTimeInMinutes / 60);
        let minutes = Math.round(travelTimeInMinutes % 60);
        travelTime = `${hours} ${hours === 1 ? "hora" : "horas"} ${minutes} ${
          minutes === 1 ? "minuto" : "minutos"
        }`;
      }
      let packagesAtDestination = selectedPackagesCopy.filter(
        (order) => order.receptionPointId === destinationPointId
      );
      let totalNumberOfPackages = packagesAtDestination.reduce(
        (acc, curr) =>
          acc + curr.tasks.reduce((acc, curr) => acc + curr.quantity, 0),
        0
      );
      let tasks = packagesAtDestination.map((order) => order.tasks).flat();
      let ordersNumbers = packagesAtDestination.map(
        (order) => order.orderNumber
      );
      result.push({
        originPointId: originPointId,
        destinationPointId: destinationPointId,
        destinationAddress,
        travelTime,
        totalNumberOfPackages,
        tasks,
        ordersNumbers,
      });
    });
    // console.log("Optimized route info: ", result);
    return result;
  }, [selectedPackages, optimizedRoute, sourceStorageData, vehicleSpeed]);

  const createRouteObject = useCallback(() => {
    console.log("checkedDriver", checkedDriver);
    console.log("assignmentInfo", assignmentInfo);
    if (!checkedDriver || !assignmentInfo) return null;

    const newObject = {
      driverId: checkedDriver.userId,
      service: uuidv4(),
      status: "En Proceso",
      steps: JSON.parse(JSON.stringify(assignmentInfo)),
    };
    return newObject;
  }, [assignmentInfo, checkedDriver]);

  // Confirm Route assignation
  const handleConfirmRouteAssignment = useCallback(async () => {
    const newRouteObject = createRouteObject();
    if (!newRouteObject) return;

    try {
      const response = await axios.post(
        "http://localhost:3333/delivery-routes",
        newRouteObject
      );
      console.log(response.data);
      toast.success("Ruta generada exitosamente");
      setAssignmentInfo([]);
      setOptimizedRoute([]);
    } catch (error) {
      console.error(error);
    }
    // setAssignmentInfo([]);
    // setOptimizedRoute([]);
  }, [createRouteObject]);

  // Cancel Route assignation
  const handleCancelRouteAssignment = useCallback(() => {
    setAssignmentInfo([]);
    setOptimizedRoute([]);
  }, []);

  useEffect(() => {
    if (optimizedRoute.length > 0) {
      // console.log("optimizedRoute", optimizedRoute);
      setAssignmentInfo(generateOptimizedRouteInfo());
    }
  }, [generateOptimizedRouteInfo, optimizedRoute]);

  //   Automatically updating selectedPackages
  useEffect(() => {
    updateSelectedPackages();
  }, [selectedOrder, updateSelectedPackages]);

  //   Automatically update selected packages weight and volume
  useEffect(() => {
    if (selectedPackages) {
      let totalWeight = 0;
      let totalVolume = 0;
      selectedPackages.forEach((order) => {
        order.tasks.forEach((task) => {
          totalWeight += task.weight * task.quantity;
          totalVolume += task.volume * task.quantity;
        });
      });
      setSelectedPackagesWeight(totalWeight);
      setSelectedPackagesVolume(totalVolume);
      setPackagesQuantity(sumSelectedPackagesQuantity(selectedPackages));
      setNumberOfDestinations(countUniqueReceptionPoints(selectedPackages));
    }
  }, [
    selectedPackages,
    countUniqueReceptionPoints,
    sumSelectedPackagesQuantity,
  ]);

  //   Update capacity bars width
  useEffect(() => {
    let weightPercentage = 0;
    let volumePercentage = 0;
    if (checkedDriver) {
      if (selectedPackagesWeight && selectedPackagesVolume) {
        weightPercentage =
          (selectedPackagesWeight / checkedDriver.vehicleWeight) * 100;
        volumePercentage =
          (selectedPackagesVolume / checkedDriver.vehicleVolume) * 100;
      }
    }

    setWeightBarWidth(weightPercentage);
    setVolumeBarWidth(volumePercentage);
  }, [checkedDriver, selectedPackagesVolume, selectedPackagesWeight]);

  // Update estimated delivery date whenever packagesQuanity changes and every minute after that
  useEffect(() => {
    const currentTime = new Date();
    const minTimeInFuture = new Date(
      currentTime.setMinutes(currentTime.getMinutes() + 10)
    );
    const timeInFuture = new Date(
      currentTime.setSeconds(currentTime.getSeconds() + packagesQuantity * 10)
    );
    setDeliveryDate(
      timeInFuture > minTimeInFuture ? timeInFuture : minTimeInFuture
    );

    const intervalId = setInterval(() => {
      const currentTime = new Date();
      const minTimeInFuture = new Date(
        currentTime.setMinutes(currentTime.getMinutes() + 10)
      );
      const timeInFuture = new Date(
        currentTime.setSeconds(currentTime.getSeconds() + packagesQuantity * 10)
      );
      setDeliveryDate(
        timeInFuture > minTimeInFuture ? timeInFuture : minTimeInFuture
      );
    }, 60 * 1000); // update every minute

    return () => clearInterval(intervalId);
  }, [packagesQuantity]);

  // CHILDREN PROPS
  // Drivers properties to be sent to DriverSelectionList
  const driversProps = {
    driversInfo,
    setDriversInfo,
    checkedDriver,
    setCheckedDriver,
  };

  // orders properties to be sent to OrderSelectionList
  const ordersProps = {
    ordersInfo,
    setOrdersInfo,
    selectedOrder,
    setSelectedOrder,
    selectedPackagesVolume,
    setSelectedPackagesVolume,
    selectedPackagesWeight,
    setSelectedPackagesWeight,
  };

  // Package properties to be sent to PackageSelectionList
  const packageProps = {
    selectedOrder,
    setSelectedOrder,
    ordersInfo,
    setOrdersInfo,
    selectedPackagesVolume,
    setSelectedPackagesVolume,
    selectedPackagesWeight,
    setSelectedPackagesWeight,
    selectedPackages,
    setSelectedPackages,
  };

  //   Capacity props
  const capacityProps = {
    weightBarWidth,
    volumeBarWidth,
    checkedDriver,
    selectedPackagesWeight,
    selectedPackagesVolume,
  };

  // Generated route props
  const generatedRouteProps = {
    assignmentInfo,
  };

  return (
    <div className="assignment-container">
      {assignmentInfo.length === 0 ? (
        <>
          {/* STEP 1 - Driver and Order selection */}
          <div className="selection-panel-container">
            <DriverSelectionList {...driversProps} />
            <OrderSelectionList {...ordersProps} />
            <PackageSelectionList {...packageProps} />
          </div>
          <div className="load-bar-section">
            <LoadBar {...capacityProps} />
          </div>
          <div className="bottom-section">
            <div className="bottom-selection-container">
              <div className="details-container">
                <span className="selection-info">
                  {/* {JSON.stringify(driversInfo)} */}
                  Cantidad de Destinos: {numberOfDestinations}
                </span>
                <span className="selection-info">
                  Cantidad de paquetes: {packagesQuantity}
                </span>
                {/* Estimated delivery date */}
                <span className="selection-info">
                  Hora de salida estimada:{" "}
                  {deliveryDate.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </span>
              </div>
              <div className="action-container">
                <button
                  className="button button1"
                  onClick={clearSelection}
                  disabled={
                    !checkedDriver &&
                    checkedOrders.length === 0 &&
                    selectedPackages.length === 0
                  }
                >
                  Cancelar Selección
                </button>
                <button
                  className="button button2"
                  disabled={!checkedDriver || selectedPackages.length < 1}
                  onClick={handleRouteOptimizationRequest}
                >
                  Generar Ruta
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Part 2 - Generated Route Review */}
          {assignmentInfo.map((task, index) => {
            let deliveryProps = { ...task };
            deliveryProps.index = index;
            return <DeliveryStepCard {...deliveryProps} />;
          })}
          <div className="route-confirmation-panel">
            <button
              className="route-confirmation-button assignment-confirmation-button"
              onClick={handleConfirmRouteAssignment}
            >
              Asignar Ruta
            </button>
            <button
              className="route-confirmation-button cancel-assignment-button"
              onClick={handleCancelRouteAssignment}
            >
              Cancelar
            </button>
          </div>
        </>
      )}
    </div>
  );
};
