import "../ListElement.css";

import driverThumbnail from "../../../../assets/images/driver.png";

export const DriverListElement = ({ props }) => {
	return (
		<div className="list-element-container">
			<div className="picture-container">
				<img className="picture" src={driverThumbnail} alt="Miniatura" />
			</div>
			<div className="info-container">
				<span className="element-title">{props.firstName}</span>
				<span className="element-text">V-{props.idNumber}</span>
				<span className="element-text2">{props.phoneNumber}</span>
			</div>
		</div>
	);
};
