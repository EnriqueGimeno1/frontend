import "../ListElement.css";

import orderThumbnail from "../../../../assets/images/order.png";
import { useCallback } from "react";

export const OrderListElement = ({
	props: {
		element,
		ordersInfo,
		setSelectedOrder,
		setOrdersInfo,
		selectedOrder,
	},
}) => {
	// Mark order as selected
	const selectOrder = useCallback(() => {
		const updatedOrdersInfo = ordersInfo.map((order) => {
			if (order.orderNumber === element.orderNumber) {
				return { ...order, checked: true };
			} else {
				return { ...order, checked: false };
			}
		});
		setOrdersInfo(updatedOrdersInfo);
		setSelectedOrder({ ...element });
	}, [element, ordersInfo, setOrdersInfo, setSelectedOrder]);

	return (
		<div
			className={[
				"list-element-container",
				element.checked ? "selected-list-element" : "",
			]
				.join(" ")
				.trim()}
			onClick={selectOrder}
		>
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
