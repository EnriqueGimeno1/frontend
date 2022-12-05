import "../ListElement.css";

import orderThumbnail from "../../../../assets/images/order.png";

export const OrderListElement = ({ props }) => {
	return (
		<div className="list-element-container">
			<div className="picture-container">
				<img className="picture" src={orderThumbnail} alt="Miniatura" />
			</div>
			<div className="info-container">
				<span className="element-title">{props.orderNumber}</span>
				<span className="element-text">{props.clientName}</span>
				<span className="element-text2">{props.numberOfPackages}</span>
			</div>
		</div>
	);
};
