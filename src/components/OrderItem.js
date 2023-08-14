import React, { useEffect } from "react";
import { OrderItems } from "../style/OrderItemCss";

const OrderItem = ({ orderItems, state, buyData }) => {

  return (
    <OrderItems>
      <h3>주문상품</h3>
      <hr />
      {state == null
        ? orderItems.map(item => (
            <div key={item.cartId} className="order-prod">
              <div className="order-prod-info">
                <div className="order-prod-img">
                  <img src={item.thumbnail} alt={item.title} />
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
          ))
        : (
            <div className="order-prod">
              <div className="order-prod-info">
                <div className="order-prod-img">
                  <img src={buyData.thumbnail} alt={buyData.title} />
                </div>
                <div className="order-prod-title">
                  <p>{buyData.name}</p>
                  <p>{buyData.price?.toLocaleString()}원</p>
                </div>
              </div>
              <div className="order-prod-count">
                <p>{buyData.count}</p>
                <p>{(buyData.price * buyData.count).toLocaleString()}원</p>
              </div>
            </div>
          )}
    </OrderItems>
  );
};

export default OrderItem;
