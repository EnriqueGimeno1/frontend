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
		let updatedTasks = [];
		const updatedOrdersInfo = ordersInfo.map((order) => {
			if (order.orderNumber === element.orderNumber) {
				// console.log(order);
				updatedTasks = order.tasks.map((task) => {
					if (task.checked) return { ...task, checked: false };
					else {
						return { ...task, checked: true };
					}
				});
				order.tasks = updatedTasks;
				if (order.checked) {
					// order.checked = false;
					updatedTasks = order.tasks.map((task) => {
						return { ...task, checked: false };
					});

					// Remove order from checked orders

					return { ...order, checked: false };
				} else {
					// order.checked = true;
					updatedTasks = order.tasks.map((task) => {
						return { ...task, checked: true };
					});

					// Add order to checked orders

					return { ...order, checked: true };
				}
			} else {
				return { ...order };
			}
		});
		console.log(updatedOrdersInfo);
		setOrdersInfo(updatedOrdersInfo);
		setSelectedOrder({ ...element, tasks: updatedTasks });
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
			{/* <div className="check-box">Check</div> */}
		</div>
	);
};
