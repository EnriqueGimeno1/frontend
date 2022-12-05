import { DriverListElement } from "../../listElements/DriverListElement/DriverListElement";
import "../SelectionList.css";

export const DriverSelectionList = ({
	driversInfo,
	setDriversInfo,
	checkedDriver,
	setCheckedDriver,
}) => {
	// console.log("elementsList: ", elementsList);
	return (
		<div className="selection-list-container">
			<h1 className="title">Conductores</h1>
			<div className="list-container">
				{driversInfo.map((element, index) => {
					return (
						<DriverListElement
							key={index}
							props={{
								element: { ...element },
								driversInfo,
								setDriversInfo,
								checkedDriver,
								setCheckedDriver,
							}}
						/>
					);
				})}
			</div>
		</div>
	);
};
