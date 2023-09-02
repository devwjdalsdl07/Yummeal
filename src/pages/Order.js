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
  const [buyData, setBuyData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { state } = location;
  const isLoggedIn = sessionStorage.getItem("accessToken") ? true : false;
  const getBasket = JSON.parse(localStorage.getItem("baskets"));

  // 바로 구매 시 데이터 조회
  const quickBuyData = async () => {
    if (state !== null) {
      const productId = state?.productId;
      const count = state?.count;
      const result = await quickBuy(productId, count);
      console.log("바이데이터 결과물", result);
      setBuyData(result);
    }
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
    if (receiver == undefined || addressAll == undefined || mobileNb == undefined) {
      alert("회원정보가 없습니다. 등록해주세요");
      navigate("/mypage");
    }
  }, []);

  // 주문하기
  const handleOrder = async () => {
    const orderBasket = orderItems.map((item, idx) => ({
      key: idx,
      cartId: item.cartId,
      productId: item.productId,
      count: item.count,
      totalprice: item.price * item.count,
    }));
    const quickOrder = [
      {
        cartId: 0,
        productId: buyData.productId,
        count: buyData.count,
        totalprice: buyData.price * buyData.count,
      },
    ];

    // 조건별 장바구니 데이터
    let selectedBasket;
    if (!getBasket && orderBasket.length === 0) {
      selectedBasket = quickOrder;
    } else if (getBasket && getBasket.length > 0) {
      selectedBasket = getBasket.map((item, idx) => ({
        key: idx,
        cartId: item.cartId,
        productId: item.productId,
        count: item.count,
        totalprice: item.price * item.count,
      }));
    } else {
      selectedBasket = orderBasket;
    }
    const item = {
      receiver: name,
      address: address,
      addressDetail: addressDetail,
      phoneNm: mobileNb,
      request: message == "" ? "요청사항 없음":message,
      payment: 1,
      point: usePoint !== "" ? parseInt(usePoint) : 0,
      insorderbasket: selectedBasket,
    };
    try {
      dispatch(pointReducer(point - usePoint));
      const result = await orderPost(item);
      localStorage.clear();
      navigate("/orderdetail", {
        state: {
          orderId: result.orderId,
          point: result.point,
        },
      });
    } catch (err) {
      console.log("주문 처리 중 오류 발생:", err);
    }
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

  // 총 결제예정금액 처리
  useEffect(() => {
    const enteredPoint = usePoint === "" ? 0 : parseInt(usePoint);
    setTotalPrice(prodTotalPrice - enteredPoint);
  }, [usePoint, prodTotalPrice]);

  // 상품금액 조건부 렌더링
  let prodPriceToShow;
  const parsedBaskets = JSON.parse(localStorage.getItem("baskets"));
  const totalProd = parsedBaskets
    ? parsedBaskets.reduce((item, idx) => {
        const prodTotal = parseFloat(idx.count) * idx.price;
        return item + prodTotal;
      }, 0)
    : 0;
  if (isLoggedIn) {
    if (parsedBaskets && parsedBaskets.length > 0) {
      prodPriceToShow = totalProd?.toLocaleString();
    } else {
      prodPriceToShow =
        state == null
          ? prodTotalPrice.toLocaleString()
          : (buyData.price * buyData.count)?.toLocaleString();
    }
  } else {
    prodPriceToShow = totalProd?.toLocaleString();
  }

  // 총 결제예정금액 조건부 렌더링
  let totalPriceToShow;
  const totalPay = parsedBaskets
    ? parsedBaskets.reduce((item, idx) => {
        const prodTotal = parseFloat(idx.count) * idx.price;
        return item + prodTotal;
      }, 0)
    : 0;
  if (isLoggedIn) {
    if (parsedBaskets && parsedBaskets.length > 0) {
      totalPriceToShow = (totalPay - usePoint)?.toLocaleString();
    } else {
      totalPriceToShow =
        state == null
          ? totalPrice.toLocaleString()
          : parseFloat(
              buyData.price * buyData.count - usePoint,
            ).toLocaleString();
    }
  } else {
    totalPriceToShow = (totalPay - usePoint)?.toLocaleString();
  }

  // 포인트 직접입력
  const handleUsePoint = e => {
    const inputValue = e.target.value.replace(/[^0-9]/g, "");
    const enteredPoint = inputValue === "" ? 0 : inputValue;

    const priceWithoutComma = prodPriceToShow.replace(/,/g, "");
    const parsedPrice = parseInt(priceWithoutComma, 10);

    let adjustedPoint;
    if (state == null && !getBasket) {
      adjustedPoint = Math.min(enteredPoint, parsedPrice, userPoint);
    } else if (state !== null) {
      // const maxQuickUsePoint = buyData.price * buyData.count;
      adjustedPoint = Math.min(enteredPoint, parsedPrice, userPoint);
    } else if (state == null && getBasket) {
      adjustedPoint = Math.min(enteredPoint, parsedPrice, userPoint);
    }
    console.log(adjustedPoint);
    setUsePoint(adjustedPoint);
  };

  // 전액 사용
  const handleAllPoint = () => {
    if (state == null && !getBasket) {
      const maxUsePoint = Math.min(userPoint, prodTotalPrice);
      setUsePoint(maxUsePoint);
    } else if (state !== null) {
      const quickMaxUsePoint = Math.min(userPoint, buyData.price);
      setUsePoint(quickMaxUsePoint);
    } else if (state == null && getBasket) {
      const priceWithoutComma = totalPriceToShow.replace(/,/g, "");
      const parsedPrice = parseInt(priceWithoutComma, 10);
      const localMaxUsePoint = Math.min(userPoint, parsedPrice);
      setUsePoint(localMaxUsePoint);
    }
  };

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
          <OrderItem orderItems={orderItems} state={state} buyData={buyData} />
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
        <OrderPay>
          <h2>결제 금액</h2>
          <div className="paywrap">
            <div className="price">
              <p>상품금액</p>
              <p>{prodPriceToShow}원</p>
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
              <p>{totalPriceToShow}원</p>
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
