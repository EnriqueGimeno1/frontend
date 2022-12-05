import { OrderListElement } from "../../listElements/OrderListElement/OrderListElement";
import "../SelectionList.css";

export const OrderSelectionList = ({ sectionTitle, elementsList }) => {
  return (
    <div className="selection-list-container">
      <h1 className="title">{sectionTitle}</h1>
      <div className="list-container">
        {elementsList.map((element, index) => {
          return <OrderListElement key={index} props={element} />;
        })}
      </div>
    </div>
  );
};
