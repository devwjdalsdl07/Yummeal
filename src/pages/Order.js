import React, { useState } from "react";
import OrderItem from "../components/OrderItem";
import { OrderInfo, OrderPay, OrderWrap } from "../style/OrderCss";

const Order = () => {
  const [point, setPoint] = useState(0);
  const [usePoint, setUsePoint] = useState("");
  const handlePoint = e => {
    setUsePoint(e.target.value.replace(/[^0-9]/g, ""));
  };
  const handleAllPoint = () => {
    setUsePoint(point);
  };
  return (
    <OrderWrap>
      <OrderInfo>
        <h2>결제하기</h2>
        <div className="user-text">
          <h3>배송지 정보</h3>
          <hr />
          <div className="user-info">
            <p>받는분</p>
            <input type="text" />
          </div>
          <div className="user-info">
            <p>주소</p>
            <input type="text" />
          </div>
          <div className="user-info">
            <p>휴대폰</p>
            <input type="text" />
          </div>
        </div>
        <div className="request-box">
          <h3>배송 요청사항</h3>
          <hr />
          <div className="message">
            <p>메세지</p>
            <input type="text" />
          </div>
        </div>
        <OrderItem />
        <div className="point-wrap">
          <h3>포인트 사용</h3>
          <hr />
          <div className="point-box">
            <div className="point-view">
              <p>포인트</p>
              <p>{point}P</p>
            </div>
            <div className="point-text">
              <input
                type="text"
                value={usePoint}
                placeholder="Point 입력"
                onChange={handlePoint}
              />
              <button onClick={handleAllPoint}>전액 사용</button>
            </div>
          </div>
        </div>
      </OrderInfo>
      <OrderPay>
        <h2>결제 금액</h2>
        <div className="paywrap">
          <div className="price">
            <p>상품금액</p>
            <p>원</p>
          </div>
          <div className="price">
            <p>할인금액</p>
            <p>원</p>
          </div>
          <div className="price">
            <p>총 결제예정금액</p>
            <p>원</p>
          </div>
        </div>
        <div className="order_btn">결제하기</div>
      </OrderPay>
    </OrderWrap>
  );
};

export default Order;
