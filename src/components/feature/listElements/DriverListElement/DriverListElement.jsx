import "../ListElement.css";
import driverThumbnail from "../../../../assets/images/driver.png";
import { useCallback } from "react";

export const DriverListElement = ({
	props: {
		element,
		driversInfo,
		setDriversInfo,
		checkedDriver,
		setCheckedDriver,
	},
}) => {
	// console.log(element);
	const selectDriver = useCallback(
		(event) => {
			// console.log(element);
			setCheckedDriver({ ...element });
		},
		[element, setCheckedDriver]
	);

	return (
		<div className="list-element-container">
			<div className="picture-container">
				<img className="picture" src={driverThumbnail} alt="Miniatura" />
			</div>
			<div className="info-container">
				<span className="element-title">{element.firstName}</span>
				<span className="element-text">V-{element.idNumber}</span>
				<span className="element-text2">{element.phoneNumber}</span>
			</div>
		</div>
	);
};
