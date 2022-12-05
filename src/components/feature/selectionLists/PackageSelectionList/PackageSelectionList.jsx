import { PackageListElement } from "../../listElements/PackageListElement/PackageListElement";
import "../SelectionList.css";

export const PackageSelectionList = ({ selectedOrder }) => {
	console.log(selectedOrder);
	return (
		<div className="selection-list-container">
			<h1 className="title">Paquetes</h1>
			<div className="list-container">
				{selectedOrder && selectedOrder.tasks
					? selectedOrder.tasks.map((element, index) => {
							return <PackageListElement key={index} props={element} />;
					  })
					: ""}
			</div>
		</div>
	);
};
