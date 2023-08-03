import { faEquals, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useLocation } from "react-router";
import { OrderDetailWrap } from "../style/OrderDetailCss";

const OrderDetail = () => {
  const [orderEnds, setOrderEnds] = useState([
    {
      title: "Product 1",
      price: 15000,
      image: "https://via.placeholder.com/150",
      quantity: 1,
    },
    {
      title: "Product 2",
      price: 10000,
      image: "https://via.placeholder.com/150",
      quantity: 2,
    },
    {
      title: "Product 3",
      price: 7500,
      image: "https://via.placeholder.com/150",
      quantity: 1,
    },
  ]);

  const handleInCart = () => {};

  const prodTotalPrice = orderEnds.reduce((item, idx) => {
    const productPrice = idx.price * idx.quantity;
    return item + productPrice;
  }, 0);

  const location = useLocation();
  const { state } = location;
  const usePoint = state?.usePoint ? state.usePoint : 0;

  return (
    <OrderDetailWrap>
      <div className="container">
        <h2>결제내역</h2>
        <h3>주문날짜</h3>
        <div className="order-prodwrap">
          <h3>주문상품</h3>
          <hr />
          {orderEnds.map((item, idx) => (
            <div key={idx} className="order-prodtext">
              <div>
                <img src={item.image} alt={item.title} />
              </div>
              <div className="order-textwrap">
                <p>{item.title}</p>
                <p>{item.price * item.quantity}</p>
                <p>{item.quantity}</p>
                <div className="order-prodbtn">
                  <button onClick={handleInCart}>장바구니 담기</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="order-userinfo">
          <h3>배송 정보</h3>
          <hr />
          <div className="order-infowrap">
            <div className="info-data">
              <p>받는분</p>
              <div>데이터자리</div>
            </div>
            <div className="info-data">
              <p>주소</p>
              <div>데이터자리</div>
            </div>
            <div className="info-data">
              <p>휴대폰</p>
              <div>데이터자리</div>
            </div>
            <div className="info-data">
              <p>메세지</p>
              <div>데이터자리</div>
            </div>
          </div>
        </div>
        <div className="order-price">
          <h3>주문 금액 정보</h3>
          <hr />
          <div className="order-pricewrap">
            <div className="price-data">
              <p>주문금액</p>
              <span>{prodTotalPrice}원</span>
            </div>
            <div>
              <i>
                <FontAwesomeIcon icon={faMinus} />
              </i>
            </div>
            <div className="price-data">
              <p>할인금액</p>
              <span>{usePoint}원</span>
            </div>
            <div>
              <i>
                <FontAwesomeIcon icon={faEquals} />
              </i>
            </div>
            <div className="price-data">
              <p>총 결제금액</p>
              <span>{prodTotalPrice - usePoint}원</span>
            </div>
          </div>
        </div>
      </div>
    </OrderDetailWrap>
  );
};

export default OrderDetail;
