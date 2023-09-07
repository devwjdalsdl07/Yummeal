import React from "react";
import { OrderItems } from "../style/OrderItemCss";

const OrderItem = ({ orderItems, state, buyData }) => {

  let content;
  // 로그인 후 로컬스토리지 남아 있을 때
  const parsedBaskets = JSON.parse(localStorage.getItem("baskets"));
  if (parsedBaskets && parsedBaskets.length > 0) {
    content = JSON.parse(localStorage.getItem("baskets")).map(item => (
      <div key={item.cartId} className="order-prod">
        <div className="order-prod-info">
          <div className="order-prod-img">
            <img src={`/img/product/${item.productId}/${item.thumbnail}`} alt={item.title} />
          </div>
          <div className="order-prod-title">
            <p>{item.productName}</p>
            <p>{item.price.toLocaleString()}원</p>
          </div>
        </div>
        <div className="order-prod-count">
          <p>{item.count}</p>
          <p>{(item.price * item.count).toLocaleString()}원</p>
        </div>
      </div>
    ));
  } else if (state == null) {
    content = orderItems.map(item => (
      <div key={item.cartId} className="order-prod">
        <div className="order-prod-info">
          <div className="order-prod-img">
            <img src={`/img/product/${item.productId}/${item.thumbnail}`} alt={item.title} />
          </div>
          <div className="order-prod-title">
            <p>{item.productName}</p>
            <p>{item.price.toLocaleString()}원</p>
          </div>
        </div>
        <div className="order-prod-count">
          <p>{item.count}</p>
          <p>{(item.price * item.count).toLocaleString()}원</p>
        </div>
      </div>
    ));
  } else {
    content = (
      <div className="order-prod">
        <div className="order-prod-info">
          <div className="order-prod-img">
            <img src={`/img/product/${buyData.productId}/${buyData.thumbnail}`} alt={buyData.title} />
          </div>
          <div className="order-prod-title">
            <p>{buyData.productName}</p>
            <p>{buyData.price?.toLocaleString()}원</p>
          </div>
        </div>
        <div className="order-prod-count">
          <p>{buyData.count}</p>
          <p>{(buyData.price * buyData.count).toLocaleString()}원</p>
        </div>
      </div>
    );
  }
  return (
    <OrderItems>
      <h3>주문상품</h3>
      <hr />
      {content}
    </OrderItems>
  );
};

export default OrderItem;
