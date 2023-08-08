import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getCart, orderPost } from "../api/cartaxios";
import OrderItem from "../components/OrderItem";
import { OrderInfo, OrderPay, OrderWrap } from "../style/OrderCss";

const Order = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [point, setPoint] = useState(5000);
  const [usePoint, setUsePoint] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [orderPayFixed, setOrderPayFixed] = useState(false);
  const navigate = useNavigate();

  const cartList = async () => {
    const result = await getCart();
    setOrderItems(result);
  };

  useEffect(() => {
    cartList();
  }, []);

  const handleUsePoint = e => {
    const inputValue = e.target.value.replace(/[^0-9]/g, "");
    const availablePoint = point;
    const enteredPoint = inputValue === "" ? "" : inputValue;

    if (
      enteredPoint === "" ||
      (enteredPoint >= 0 && enteredPoint <= availablePoint)
    ) {
      setUsePoint(inputValue);
    } else {
      setUsePoint(availablePoint);
    }
  };

  const handleAllPoint = () => {
    setUsePoint(point);
  };

  const handleOrder = () => {
    const orderBasket = orderItems.map((item,idx) => ({
      key: idx,
      cartId: item.cartId,
      productId: item.productId,
      iuser: 1,
      count: item.count,
      totalprice: item.price * item.count,
    }));
    const item = {
      receiver: name,
      address: "주소1",
      addressDetail: "주소2",
      phoneNm: "전화번호",
      request: message,
      payment: 1,
      iuser: 1,
      point: usePoint !== "" ? usePoint : 0,
      orderbasket: orderBasket,
    };
    console.log(item);
    const newWindow = window.open(
      "/payment",
      "결제페이지",
      "width=430, height=500, location=no, status=no, scrollbars=yes",
    );
    newWindow.addEventListener("beforeunload", async () => {
      try {
        const result = await orderPost(item);
        navigate("/orderdetail", {
          state: { orderId: result.orderId, point: result.point },
        });
      } catch (err) {
        console.err("주문 처리 중 오류 발생:", err);
      }
    });
  };

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleMessage = e => {
    setMessage(e.target.value);
  };

  const prodTotalPrice = orderItems.reduce((item, idx) => {
    const productPrice = idx.price * idx.count;
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
              <p>{point.toLocaleString()}P</p>
            </div>
            <div className="point-text">
              <input
                type="text"
                value={usePoint}
                placeholder="Point 입력"
                onChange={handleUsePoint}
              />
              <button onClick={handleAllPoint}>전액 사용</button>
            </div>
          </div>
        </div>
      </OrderInfo>
      <OrderPay orderPayFixed={orderPayFixed}>
        <h2>결제 금액</h2>
        <div className="paywrap">
          <div className="price">
            <p>상품금액</p>
            <p>{prodTotalPrice.toLocaleString()}원</p>
          </div>
          <div className="price">
            <p>할인금액</p>
            <p>
              {usePoint !== "" ? `${parseInt(usePoint).toLocaleString()}` : 0}원
            </p>
          </div>
          <div className="price">
            <p>총 결제예정금액</p>
            <p>{totalPrice.toLocaleString()}원</p>
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
