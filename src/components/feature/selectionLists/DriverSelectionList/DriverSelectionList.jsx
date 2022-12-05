import { DriverListElement } from "../../listElements/DriverListElement/DriverListElement";
import "../SelectionList.css";

export const DriverSelectionList = ({ sectionTitle, elementsList }) => {
  return (
    <div className="selection-list-container">
      <h1 className="title">{sectionTitle}</h1>
      <div className="list-container">
        {elementsList.map((element, index) => {
          return <DriverListElement key={index} props={element} />;
        })}
      </div>
    </div>
  );
};
