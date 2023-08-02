import React from "react";
import { OrderItems } from "../style/OrderItemCss";

const OrderItem = ({ dummy }) => {
  return (
    <OrderItems>
      <h3>주문상품</h3>
      <hr />
      {dummy.map((item, idx) => (
        <div key={idx} className="order-prod">
          <div className="order-prod-info">
            <div className="order-prod-img">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="order-prod-title">
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>
          </div>
          <div className="order-prod-count">
            <p>{item.count}</p>
            <p>{parseInt(item.price) * parseInt(item.count)}</p>
          </div>
        </div>
      ))}
    </OrderItems>
  );
};

export default OrderItem;
