import "../ListElement.css";
import packageThumbnail from "../../../../assets/images/package.png";
import { useCallback } from "react";

export const PackageListElement = ({
  props: {
    element,
    selectedOrder,
    setSelectedOrder,
    ordersInfo,
    setOrdersInfo,
    selectedPackages,
    setSelectedPackages,
  },
}) => {
  //   console.log(selectedOrder);
  const backgroundColor = element.checked
    ? "hsl(157, 90%, 28%)"
    : "hsl(188, 100%, 15%)";

  const updateProductChecked = useCallback(
    (_id) => {
      let updatedTasks = {};
      const updatedOrdersInfo = ordersInfo.map((order) => {
        // console.log(order.orderNumber);
        // console.log(selectedOrder.orderNumber);
        // console.log(ordersInfo);

        if (order.orderNumber === selectedOrder.orderNumber) {
          updatedTasks = order.tasks.map((task) => {
            if (task._id === _id) {
              return { ...task, checked: !task.checked };
            }
            return { ...task };
          });
          return { ...order, tasks: updatedTasks };
          //   setOrdersInfo({...ordersInfo, tasks: updatedTasks})
        } else {
          return { ...order };
        }
      });
      console.log("updatedOrdersInfo", updatedOrdersInfo);
      setOrdersInfo(updatedOrdersInfo);
      const updatedSelectedOrder = { ...selectedOrder, tasks: updatedTasks };
      setSelectedOrder(updatedSelectedOrder);

      // Update selected packages
      setSelectedPackages((selectedPackages) => {
        const updatedSelectedPackages = [...selectedPackages];
        const checkedTasks = updatedSelectedOrder.tasks.filter(
          (task) => task.checked
        );
        if (checkedTasks.length > 0) {
          const selectedOrderIndex = updatedSelectedPackages.findIndex(
            (order) => order._id === updatedSelectedOrder._id
          );
          if (selectedOrderIndex !== -1) {
            updatedSelectedPackages[selectedOrderIndex].tasks = checkedTasks;
          } else {
            updatedSelectedPackages.push({
              ...updatedSelectedOrder,
              tasks: checkedTasks,
            });
          }
        } else {
          const selectedOrderIndex = updatedSelectedPackages.findIndex(
            (order) => order._id === updatedSelectedOrder._id
          );
          if (selectedOrderIndex !== -1) {
            updatedSelectedPackages.splice(selectedOrderIndex, 1);
          }
        }
        return updatedSelectedPackages;
      });
    },
    [
      ordersInfo,
      selectedOrder,
      setOrdersInfo,
      setSelectedOrder,
      setSelectedPackages,
    ]
  );

  return (
    <div
      className={[
        "list-element-container",
        selectedOrder && selectedOrder.checked ? "selected-list-element" : "",
      ]
        .join(" ")
        .trim()}
      style={{ backgroundColor }}
      // onClick={selectPackage}
      onClick={() => updateProductChecked(element._id)}
    >
      <div className="picture-container">
        <img className="picture" src={packageThumbnail} alt="Miniatura" />
      </div>
      <div className="info-container">
        <span className="element-title">{element.productName}</span>
        <span className="element-text">Cantidad: {element.quantity}</span>
        <span className="element-text">
          Peso Total: {element.quantity * element.weight} Kg
        </span>
        {/* <span className="element-text2">
					Peso: {element.weight} Volumen: {element.volume}
				</span> */}
      </div>
    </div>
  );
};
