import React from "react";
import { OrderItems } from "../style/OrderItemCss";

const OrderItem = () => {
  return (
    <OrderItems>
      <h3>주문상품</h3>
      <hr />
      <div className="order-prod">
        <div className="order-prod-info">
          <div className="order-prod-img">
            <img src="http://fpoimg.com/100x100" alt="" />
          </div>
          <div className="order-prod-title">
            <p>타이틀</p>
            <p>가격</p>
          </div>
        </div>
        <div className="order-prod-count">
          <p>수량</p>
          <p>총 가격</p>
        </div>
      </div>
    </OrderItems>
  );
};

export default OrderItem;
