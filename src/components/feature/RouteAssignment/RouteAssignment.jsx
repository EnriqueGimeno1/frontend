import "./RouteAssignment.css";
import { LoadBar } from "../LoadBar/LoadBar";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { DriverSelectionList } from "../selectionLists/DriverSelectionList/DriverSelectionList";
import { OrderSelectionList } from "../selectionLists/OrderSelectionList/OrderSelectionList";
import { PackageSelectionList } from "../selectionLists/PackageSelectionList/PackageSelectionList";

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
        return updatedSelectedPackages;
      });
    }
  }, [selectedOrder]);

  //   Automatically updating selectedPackages
  useEffect(() => {
    updateSelectedPackages();
  }, [selectedOrder, updateSelectedPackages]);

  useEffect(() => {
    console.log("weight", selectedPackagesWeight);
  }, [selectedPackagesWeight]);

  //   Automatically update selected packages weight and volume
  useEffect(() => {
    if (selectedPackages) {
      let totalWeight = 0;
      let totalVolume = 0;
      selectedPackages.forEach((order) => {
        order.tasks.forEach((task) => {
          totalWeight += task.weight;
          totalVolume += task.volume;
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
          (selectedPackagesWeight / checkedDriver.vehicleWeight) * 100;
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
  };

  //   Capacity props
  const capacityProps = {
    weightBarWidth,
    volumeBarWidth,
    checkedDriver,
    selectedPackagesWeight,
    selectedPackagesVolume,
  };

  return (
    <div className="assignment-container">
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
            >
              Asignar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
