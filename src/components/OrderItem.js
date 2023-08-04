import React from "react";
import { OrderItems } from "../style/OrderItemCss";

const OrderItem = ({ orderItems }) => {
  return (
    <OrderItems>
      <h3>주문상품</h3>
      <hr />
      {orderItems.map((item) => (
        <div key={item.cartId} className="order-prod">
          <div className="order-prod-info">
            <div className="order-prod-img">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="order-prod-title">
              <p>{item.name}</p>
              <p>{item.price.toLocaleString()}원</p>
            </div>
          </div>
          <div className="order-prod-count">
            <p>{item.count}</p>
            <p>{(item.price * item.count).toLocaleString()}원</p>
          </div>
        </div>
      ))}
    </OrderItems>
  );
};

export default OrderItem;
