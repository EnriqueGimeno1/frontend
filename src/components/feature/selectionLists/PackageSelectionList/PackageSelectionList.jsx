import { PackageListElement } from "../../listElements/PackageListElement/PackageListElement";
import "../SelectionList.css";

export const PackageSelectionList = ({
  selectedOrder,
  setSelectedOrder,
  ordersInfo,
  setOrdersInfo,
  selectedPackages,
  setSelectedPackages,
}) => {
  // console.log(selectedOrder);
  return (
    <div className="selection-list-container">
      <h1 className="title">Paquetes</h1>
      <div className="list-container">
        {selectedOrder && selectedOrder.tasks && selectedOrder.tasks.length > 0
          ? selectedOrder.tasks.map((element, index) => {
              return (
                <PackageListElement
                  key={element.productID}
                  props={{
                    element: { ...element },
                    selectedOrder,
                    setSelectedOrder,
                    ordersInfo,
                    setOrdersInfo,
                    selectedPackages,
                    setSelectedPackages,
                  }}
                />
              );
            })
          : ""}
      </div>
    </div>
  );
};
