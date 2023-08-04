import React from "react";
import { OrderNumberContainer } from "../style/OrderNumberCss";

const OrderNumber = ({ item }) => {
  return (
    <OrderNumberContainer>
      <div className="orderInfo">
        <div className="responsive-1">
          <div className="orderDate">
            <p>주문날짜</p>
            <span>{item.date}</span>
          </div>
          <div className="orderNum">
            <p>주문번호</p>
            <span>{item.OrderNumber}</span>
          </div>
        </div>
      </div>
      <div className="itemInfo">
        <div className="imgWrap">
          <img src={item.thumNail} alt="썸네일"></img>
        </div>
        <div className="titleWrap">
          <p>제품 명</p>
          <span>{item.name}</span>
        </div>
      </div>
      <div className="responsive-2">
        <div className="orderPrice">
          <span>
            <strong>{item.price}</strong>
          </span>
          <span>원</span>
        </div>
        <div className="delivery">
          <span>{item.delivery}</span>
        </div>
      </div>
    </OrderNumberContainer>
  );
};

export default OrderNumber;
