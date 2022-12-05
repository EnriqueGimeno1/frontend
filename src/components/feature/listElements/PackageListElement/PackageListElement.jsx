import "../ListElement.css";
import packageThumbnail from "../../../../assets/images/package.png";

export const PackageListElement = ({ props }) => {
	return (
		<div className="list-element-container">
			<div className="picture-container">
				<img className="picture" src={packageThumbnail} alt="Miniatura" />
			</div>
			<div className="info-container">
				<span className="element-title">{props.firstName}</span>
				<span className="element-text">{props.idNumber}</span>
				<span className="element-text2">{props.phoneNumber}</span>
			</div>
		</div>
	);
};
