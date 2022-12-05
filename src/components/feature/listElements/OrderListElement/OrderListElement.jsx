import "../ListElement.css";

import orderThumbnail from "../../../../assets/images/order.png";
import { useCallback } from "react";

export const OrderListElement = ({
	props: { element, setSelectedOrder, setOrdersInfo, selectedOrder },
}) => {
	// Element State
	// Mark order as selected

	const selectOrder = useCallback(
		(event) => {
			// console.log(element);
			setSelectedOrder({ ...element });
		},
		[element, setSelectedOrder]
	);

	return (
		<div className="list-element-container" onClick={selectOrder}>
			<div className="picture-container">
				<img className="picture" src={orderThumbnail} alt="Miniatura" />
			</div>
			<div className="info-container">
				<span className="element-title">{element.orderNumber}</span>
				<span className="element-text">{element.clientName}</span>
				<span className="element-text2">{element.numberOfPackages}</span>
			</div>
		</div>
	);
};
