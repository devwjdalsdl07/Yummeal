import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { quickBuy } from "../api/axios";
import { getCart, orderPost } from "../api/client";
import OrderItem from "../components/OrderItem";
import { pointReducer } from "../reducers/userSlice";
import { OrderInfo, OrderPay, OrderWrap } from "../style/OrderCss";

const Order = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [userPoint, setUserPoint] = useState(0);
  const [usePoint, setUsePoint] = useState("");
  const [receiver, setReceiver] = useState("");
  const [message, setMessage] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [orderPayFixed, setOrderPayFixed] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 임시테스트
  const location = useLocation();
  const { state } = location;
  console.log("상품 상세정보에서 넘어오는 스테이트", state);

  const [buyData, setBuyData] = useState({});
  const quickBuyData = async () => {
    const productId = state?.productId;
    const count = state?.count;
    const result = await quickBuy(productId, count);
    setBuyData(result);
  };

  // 유저정보 접근
  const { name, mobileNb, address, addressDetail, point } = useSelector(
    state => state.user,
  );
  const addressAll = address + addressDetail;

  // 장바구니 정보 가져오기
  const cartList = async () => {
    const result = await getCart();
    setOrderItems(result);
  };

  useEffect(() => {
    cartList();
    setReceiver(name);
    setUserPoint(point);
    quickBuyData();
  }, []);

  // 사용한 포인트 처리
  const handleUsePoint = e => {
    const inputValue = e.target.value.replace(/[^0-9]/g, "");
    const availablePoint = userPoint;
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

  // 사용한 포인트값 업데이트
  const handleAllPoint = () => {
    const maxUsePoint = Math.min(userPoint, prodTotalPrice);
    setUsePoint(maxUsePoint);
  };

  // 주문하기
  const handleOrder = () => {
    const orderBasket = orderItems.map((item, idx) => ({
      key: idx,
      cartId: item.cartId,
      productId: item.productId,
      count: item.count,
      totalprice: item.price * item.count,
    }));
    const item = {
      receiver: name,
      address: address,
      addressDetail: addressDetail,
      phoneNm: mobileNb,
      request: message,
      payment: 1,
      point: usePoint !== "" ? usePoint : 0,
      insorderbasket: orderBasket,
    };
    console.log(item);
    // 결제 팝업창
    const newWindow = window.open(
      "/payment",
      "결제페이지",
      "width=430, height=500, location=no, status=no, scrollbars=yes",
    );
    newWindow.addEventListener("beforeunload", async () => {
      try {
        dispatch(pointReducer(point - usePoint));
        const result = await orderPost(item);
        navigate("/orderdetail", {
          state: {
            orderId: result.orderId,
            point: result.point,
          },
        });
      } catch (err) {
        console.err("주문 처리 중 오류 발생:", err);
      }
    });
  };

  // 유저이름 업데이트
  const handleNameChange = e => {
    setReceiver(e.target.value.replace(/\s/gi, ""));
  };

  // 메세지 업데이트
  const handleMessage = e => {
    setMessage(e.target.value);
  };

  // 주문금액 총합
  const prodTotalPrice = orderItems.reduce((item, idx) => {
    const productPrice = idx.price * idx.count;
    return item + productPrice;
  }, 0);

  // 렌더링 시 사용포인트 값 처리
  useEffect(() => {
    const enteredPoint = usePoint === "" ? 0 : parseInt(usePoint);
    setTotalPrice(prodTotalPrice - enteredPoint);
  }, [usePoint, prodTotalPrice]);

  return (
    <OrderWrap>
      <div className="wrap">
        <OrderInfo>
          <h2>결제하기</h2>
          <div className="user-text">
            <h3>배송지 정보</h3>
            <hr />
            <div className="user-info">
              <p>받는분</p>
              <input
                type="text"
                value={receiver}
                onChange={e => handleNameChange(e)}
              />
            </div>
            <div className="user-info">
              <p>주소</p>
              <input type="text" value={addressAll} readOnly />
            </div>
            <div className="user-info">
              <p>휴대폰</p>
              <input type="text" value={mobileNb} readOnly />
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
          <OrderItem
            orderItems={orderItems}
            state={state}
            buyData={buyData}
          />
          <div className="point-wrap">
            <h3>포인트 사용</h3>
            <hr />
            <div className="point-box">
              <div className="point-view">
                <p>포인트</p>
                <p>{userPoint.toLocaleString()}P</p>
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
              <p>
                {state == null
                  ? prodTotalPrice.toLocaleString()
                  : (buyData.price * buyData.count)?.toLocaleString()}
                원
              </p>
            </div>
            <div className="price">
              <p>할인금액</p>
              <p>
                {usePoint !== "" ? `${parseInt(usePoint).toLocaleString()}` : 0}
                원
              </p>
            </div>
            <div className="price">
              <p>총 결제예정금액</p>
              <p>
                {state == null
                  ? totalPrice.toLocaleString()
                  : (buyData.price * buyData.count).toLocaleString()}
                원
              </p>
            </div>
          </div>
          <div className="order_btn" onClick={handleOrder}>
            결제하기
          </div>
        </OrderPay>
      </div>
    </OrderWrap>
  );
};

export default Order;
