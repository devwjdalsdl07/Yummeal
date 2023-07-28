import React, { useState } from "react";
import { OrderNumberContainer } from "../style/OrderNumberCss";

const OrderNumber = () => {
  const [delivery, setDelivery] = useState("배송 중");
  return (
    <OrderNumberContainer>
      <div className="orderInfo">
        <div className="orderDate">
          <p>주문날짜</p>
          <span>{"2020-05-03"}</span>
        </div>
        <div className="orderNum">
          <p>주문번호</p>
          <span>{129804129842189}</span>
        </div>
      </div>
      <div className="itemInfo">
        <div className="imgWrap">
          <img src="http://fpoimg.com/80x80"></img>
        </div>
        <div className="titleWrap">
          <p>제품 명</p>
          <span>밀푀유나베(1~2인)</span>
        </div>
      </div>
      <div className="orderPrice">
        <span>
          <strong>123,125,123</strong>
        </span>
        <span>원</span>
      </div>
      <div className="delivery">
        <span>{delivery}</span>
      </div>
    </OrderNumberContainer>
  );
};

export default OrderNumber;
