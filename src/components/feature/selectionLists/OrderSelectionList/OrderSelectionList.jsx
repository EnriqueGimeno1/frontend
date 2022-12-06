import { OrderListElement } from "../../listElements/OrderListElement/OrderListElement";
import "../SelectionList.css";

export const OrderSelectionList = ({
	ordersInfo,
	setOrdersInfo,
	selectedOrder,
	setSelectedOrder,
}) => {
	return (
		<div className="selection-list-container">
			<h1 className="title">Ordenes</h1>
			<div className="list-container">
				{ordersInfo.map((element, index) => {
					return (
						<OrderListElement
							key={index}
							props={{
								element: { ...element },
								ordersInfo,
								setSelectedOrder,
								setOrdersInfo,
								selectedOrder,
							}}
						/>
					);
				})}
			</div>
		</div>
	);
};
