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
            return task;
          });

          //   setOrdersInfo({...ordersInfo, tasks: updatedTasks})
        }
        return { ...order, tasks: updatedTasks };
      });
      console.log("updatedOrdersInfo", updatedOrdersInfo);
      setOrdersInfo(updatedOrdersInfo);
      setSelectedOrder({ ...selectedOrder, tasks: updatedTasks });
    },
    [ordersInfo, selectedOrder, setOrdersInfo, setSelectedOrder]
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
        <span className="element-text">Peso Total: {element.weight} Kg</span>
        {/* <span className="element-text2">
					Peso: {element.weight} Volumen: {element.volume}
				</span> */}
      </div>
    </div>
  );
};
