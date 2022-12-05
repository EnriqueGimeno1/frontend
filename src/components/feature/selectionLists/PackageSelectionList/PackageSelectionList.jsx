import { PackageListElement } from "../../listElements/PackageListElement/PackageListElement";
import "../SelectionList.css";

export const PackageSelectionList = ({ sectionTitle, elementsList }) => {
  return (
    <div className="selection-list-container">
      <h1 className="title">{sectionTitle}</h1>
      <div className="list-container">
        {elementsList.map((element, index) => {
          return <PackageListElement key={index} props={element} />;
        })}
      </div>
    </div>
  );
};
