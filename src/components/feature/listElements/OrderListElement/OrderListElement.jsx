import "../ListElement.css";

import orderThumbnail from "../../../../assets/images/order.png";
import { useCallback } from "react";

export const OrderListElement = ({
  props: {
    element,
    ordersInfo,
    setSelectedOrder,
    setOrdersInfo,
    selectedOrder,
  },
}) => {
  const allChecked = element.tasks.every((task) => task.checked);
  const someChecked = element.tasks.some((task) => task.checked);
  let backgroundColor;

  if (allChecked) {
    backgroundColor = "hsl(157, 90%, 28%)";
  } else if (someChecked) {
    backgroundColor = "hsl(180, 50%, 32%)";
  } else {
    backgroundColor = "hsl(188, 100%, 15%)";
  }

  // Mark order as selected
  const selectOrder = useCallback(() => {
    // let updatedTasks = [];
    // const updatedOrdersInfo = ordersInfo.map((order) => {
    //   if (order.orderNumber === element.orderNumber) {
    //     // console.log(order);
    //     updatedTasks = order.tasks.map((task) => {
    //       if (task.checked) return { ...task, checked: false };
    //       else {
    //         return { ...task, checked: true };
    //       }
    //     });
    //     order.tasks = updatedTasks;
    //     if (order.checked) {
    //       // order.checked = false;
    //       updatedTasks = order.tasks.map((task) => {
    //         return { ...task, checked: false };
    //       });

    //       // Remove order from checked orders

    //       return { ...order, checked: false };
    //     } else {
    //       // order.checked = true;
    //       updatedTasks = order.tasks.map((task) => {
    //         return { ...task, checked: true };
    //       });

    //       // Add order to checked orders

    //       return { ...order, checked: true };
    //     }
    //   } else {
    //     return { ...order };
    //   }
    // });
    // console.log(updatedOrdersInfo);
    // setOrdersInfo(updatedOrdersInfo);
    // setSelectedOrder({ ...element, tasks: updatedTasks });

    // Mark current order's tasks as checked
    // setOrdersInfo((prevState) => {
    //   const updatedOrdersInfo = { ...prevState };
    //   // console.log("before: ", updatedOrdersInfo);
    //   if (updatedOrdersInfo._id === element._id) {
    //     updatedOrdersInfo.tasks.forEach((task) => {
    //       if (!task.hasOwnProperty("checked")) {
    //         task.checked = false;
    //       }
    //       task.checked = true;
    //     });
    //   }
    //   // console.log("after: ", updatedOrdersInfo);
    //   return updatedOrdersInfo;
    // });
    setOrdersInfo((ordersInfo) =>
      ordersInfo.map((order) => {
        if (order._id === element._id) {
          order.currentlySelected = !order.currentlySelected;
        }
        return order;
      })
    );

    setSelectedOrder({ ...element });
  }, [element, setOrdersInfo, setSelectedOrder]);

  return (
    <div
      className={[
        "list-element-container",
        element.checked ? "selected-list-element" : "",
      ]
        .join(" ")
        .trim()}
      style={{ backgroundColor }}
      onClick={selectOrder}
    >
      <div className="picture-container">
        <img className="picture" src={orderThumbnail} alt="Miniatura" />
      </div>
      <div className="info-container">
        <span className="element-title">{element.orderNumber}</span>
        <span className="element-text">{element.clientName}</span>
        <span className="element-text2">{element.numberOfPackages}</span>
      </div>
      {/* <div className="check-box">Check</div> */}
    </div>
  );
};
