import "../ListElement.css";
import packageThumbnail from "../../../../assets/images/package.png";
import { useCallback } from "react";

export const PackageListElement = ({
	props: {
		element,
		selectedOrder,
		setSelectedOrder,
		ordersInfo,
		setOrdersInfo,
	},
}) => {
	console.log(selectedOrder);
	const selectPackage = useCallback(() => {
		let updatedTasks = [];
		const updatedOrdersInfo = ordersInfo.map((order) => {
			if (order.orderNumber === selectedOrder.orderNumber) {
				// console.log(order);
				updatedTasks = order.tasks.map((task) => {
					if (task.productID === element.productID) {
						if (task.checked) return { ...task, checked: false };
						else {
							return { ...task, checked: true };
						}
					} else {
						return { ...task };
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
		setSelectedOrder({ ...selectedOrder, tasks: updatedTasks });
	}, [ordersInfo, setOrdersInfo, setSelectedOrder, selectedOrder, element]);

	return (
		<div
			className={[
				"list-element-container",
				selectedOrder && selectedOrder.checked ? "selected-list-element" : "",
			]
				.join(" ")
				.trim()}
			onClick={selectPackage}
		>
			<div className="picture-container">
				<img className="picture" src={packageThumbnail} alt="Miniatura" />
			</div>
			<div className="info-container">
				<span className="element-title">{element.productName}</span>
				<span className="element-text">Cantidad: 4{element.quantity}</span>
				{/* <span className="element-text2">
					Peso: {element.weight} Volumen: {element.volume}
				</span> */}
			</div>
		</div>
	);
};
