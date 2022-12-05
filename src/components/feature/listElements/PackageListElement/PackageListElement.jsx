import "../ListElement.css";
import packageThumbnail from "../../../../assets/images/package.png";

export const PackageListElement = ({ props }) => {
	return (
		<div className="list-element-container">
			<div className="picture-container">
				<img className="picture" src={packageThumbnail} alt="Miniatura" />
			</div>
			<div className="info-container">
				<span className="element-title">{props.productName}</span>
				<span className="element-text">{props.quantity}</span>
				<span className="element-text2">
					Peso: {props.weight} Volumen: {props.volume}
				</span>
			</div>
		</div>
	);
};
