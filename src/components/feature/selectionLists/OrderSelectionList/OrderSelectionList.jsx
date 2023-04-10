import { OrderListElement } from "../../listElements/OrderListElement/OrderListElement";
import "../SelectionList.css";

export const OrderSelectionList = ({
  ordersInfo,
  setOrdersInfo,
  selectedOrder,
  setSelectedOrder,
}) => {
  console.log("OrderSelectionList", ordersInfo);
  return (
    <div className="selection-list-container">
      <h1 className="title">Ordenes</h1>
      <div className="list-container">
        {ordersInfo.length > 0
          ? ordersInfo.map((element, index) => {
              return (
                <OrderListElement
                  key={index}
                  props={{
                    element: { ...element },
                    ordersInfo,
                    setSelectedOrder,
                    setOrdersInfo,
                    selectedOrder,
                  }}
                />
              );
            })
          : ""}
      </div>
    </div>
  );
};
