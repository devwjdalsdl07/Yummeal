import { faEquals, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { cartIn, getOrderEnd } from "../api/cartaxios";
import { OrderDetailWrap } from "../style/OrderDetailCss";

const OrderDetail = () => {
  const [orderList, setOrderList] = useState([]);
  const [userInfo, setUserInfo] = useState({});

  const location = useLocation();
  const { state } = location;
  console.log(state);

  const orderEndData = async () => {
    const result = await getOrderEnd(state?.orderId);
    setOrderList(result.orderlist);
    setUserInfo(result.user);
  };

  useEffect(() => {
    orderEndData();
  }, []);

  const handleInCart = async _item => {
    try {
      const cartItem = {
        productId: _item.productId,
        count: 1,
      };
      const result = await cartIn(cartItem);
      console.log(result);
      return result;
    } catch (err) {
      console.error("주문 처리 중 오류 발생:", err);
    }
  };

  return (
    <OrderDetailWrap>
      <div className="container">
        <h2>결제내역</h2>
        <h3>{orderList[0]?.createdAt}</h3>
        <div className="order-prodwrap">
          <h3>주문상품</h3>
          <hr />
          {orderList.map(item => (
            <div key={item.productId} className="order-prodtext">
              <div className="order-imgbox">
                <img src={item.thumbnail} alt={item.title} />
              </div>
              <div className="order-textwrap">
                <p>{item.name}</p>
                <p>{(item.price * parseInt(item.count)).toLocaleString()}</p>
                <p>{item.count}</p>
                <div className="order-prodbtn">
                  <button onClick={() => handleInCart(item)}>
                    장바구니 담기
                  </button>
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
              <div>{userInfo.reciever}</div>
            </div>
            <div className="info-data">
              <p>주소</p>
              <div>
                {userInfo.address}
                {userInfo.addressDetail}
              </div>
            </div>
            <div className="info-data">
              <p>휴대폰</p>
              <div>{userInfo.phoneNm}</div>
            </div>
            <div className="info-data">
              <p>메세지</p>
              <div>{userInfo.request}</div>
            </div>
          </div>
        </div>
        <div className="order-price">
          <h3>주문 금액 정보</h3>
          <hr />
          <div className="order-pricewrap">
            <div className="price-data">
              <p>주문금액</p>
              <span>{state?.paymentprice.toLocaleString()}원</span>
            </div>
            <div>
              <i>
                <FontAwesomeIcon icon={faMinus} />
              </i>
            </div>
            <div className="price-data">
              <p>할인금액</p>
              <span>{state?.point.toLocaleString()}원</span>
            </div>
            <div>
              <i>
                <FontAwesomeIcon icon={faEquals} />
              </i>
            </div>
            <div className="price-data">
              <p>총 결제금액</p>
              <span>{state?.totalprice.toLocaleString()}원</span>
            </div>
          </div>
        </div>
      </div>
    </OrderDetailWrap>
  );
};

export default OrderDetail;
