import React, { useEffect, useState } from "react";
import OrderItem from "../components/OrderItem";
import { OrderInfo, OrderPay, OrderWrap } from "../style/OrderCss";

const Order = () => {
  const [orderItems, setOrderItems] = useState([
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
      quantity: 1,
    },
    {
      title: "Product 3",
      price: 7500,
      image: "https://via.placeholder.com/150",
      quantity: 1,
    },
  ]);
  const [point, setPoint] = useState(5000);
  const [usePoint, setUsePoint] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const handlePoint = e => {
    const inputValue = e.target.value.replace(/[^0-9]/g, "");
    const availablePoint = parseInt(point);
    const enteredPoint = inputValue === "" ? "" : parseInt(inputValue);

    if (
      enteredPoint === "" ||
      (enteredPoint >= 0 && enteredPoint <= availablePoint)
    ) {
      setUsePoint(inputValue);
    } else {
      setUsePoint(availablePoint.toString());
    }
  };

  const handleAllPoint = () => {
    setUsePoint(point);
  };

  const handleOrder = () => {
    window.open(
      "/payment",
      "결제페이지",
      "width=430, height=500, location=no, status=no, scrollbars=yes",
    );
  };

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleMessage = e => {
    setMessage(e.target.value);
  };

  const prodTotalPrice = orderItems.reduce((item, idx) => {
    const productPrice = parseInt(idx.price) * parseInt(idx.quantity);
    return item + productPrice;
  }, 0);

  useEffect(() => {
    const enteredPoint = usePoint === "" ? 0 : parseInt(usePoint);
    setTotalPrice(prodTotalPrice - enteredPoint);
  }, [usePoint, prodTotalPrice]);

  return (
    <OrderWrap>
      <OrderInfo>
        <h2>결제하기</h2>
        <div className="user-text">
          <h3>배송지 정보</h3>
          <hr />
          <div className="user-info">
            <p>받는분</p>
            <input
              type="text"
              value={name}
              onChange={e => handleNameChange(e)}
            />
          </div>
          <div className="user-info">
            <p>주소</p>
            <input type="text" value="주소" readOnly />
          </div>
          <div className="user-info">
            <p>휴대폰</p>
            <input type="text" value="휴대폰" readOnly />
          </div>
        </div>
        <div className="request-box">
          <h3>배송 요청사항</h3>
          <hr />
          <div className="message">
            <p>메세지</p>
            <input
              type="text"
              value={message}
              onChange={e => handleMessage(e)}
              placeholder="메세지를 입력해주세요."
            />
          </div>
        </div>
        <OrderItem orderItems={orderItems} />
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
            <p>{prodTotalPrice}원</p>
          </div>
          <div className="price">
            <p>할인금액</p>
            <p>{usePoint !== "" ? `${usePoint}` : "0"}원</p>
          </div>
          <div className="price">
            <p>총 결제예정금액</p>
            <p>{totalPrice}원</p>
          </div>
        </div>
        <div className="order_btn" onClick={handleOrder}>
          결제하기
        </div>
      </OrderPay>
    </OrderWrap>
  );
};

export default Order;
