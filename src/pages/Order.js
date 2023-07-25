import styled from "@emotion/styled";
import React from "react";

const Order = () => {
  const OrderWrap = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 10rem;
    margin: 0 auto;
  `;
  const OrderInfo = styled.div`
    width: 60%;
    h2 {
      font-size: 2.5rem;
    }
    .usertext {
      padding: 1rem 0;
      border-bottom: 0.1rem solid rgba(0, 0, 0, 0.3);
      h3 {
        font-size: 2rem;
        padding-top: 1rem;
      }
      hr {
        margin: 1rem 0;
        border: 0;
        height: 0.1rem;
        background: black;
      }
      .user-info {
        display: flex;
        padding: 0.5rem 0;
        p {
          text-align: center;
          font-size: 2rem;
          width: 9rem;
          height: 3rem;
          line-height: 3rem;
        }
        input {
          width: 70%;
          border-radius: 0.8rem;
          border: 0.1rem solid;
        }
      }
    }
    .request-box {
      padding-bottom: 1rem;
      border-bottom: 0.1rem solid rgba(0, 0, 0, 0.3);
      h3 {
        font-size: 2rem;
        padding-top: 2rem;
      }
      hr {
        margin: 1rem 0;
        border: 0;
        height: 0.1rem;
        background: black;
      }
      .message {
        display: flex;
        padding: 0.5rem 0;
        p {
          text-align: center;
          font-size: 2rem;
          width: 9rem;
          height: 3rem;
          line-height: 3rem;
        }
        input {
          width: 70%;
          border-radius: 0.8rem;
          border: 0.1rem solid;
        }
      }
    }
    .order-box {
      h3 {
        font-size: 2rem;
        padding-top: 2rem;
      }
      hr {
        margin: 1rem 0;
        border: 0;
        height: 0.1rem;
        background: black;
      }
      .order-prod {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 0;
        .order-prod-info {
          display: flex;
          align-items: center;
          .order-prod-title {
            padding-left: 1.5rem;
            font-size: 2rem;
          }
        }
        .order-prod-count {
          text-align: end;
          font-size: 2rem;
        }
      }
    }
  `;
  const OrderPay = styled.div`
    width: 30%;
  `;
  return (
    <OrderWrap>
      <OrderInfo>
        <h2>결제하기</h2>
        <div className="usertext">
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
        <div className="order-box">
          <h3>주문상품</h3>
          <hr />
          <div className="order-prod">
            <div className="order-prod-info">
              <div className="order-prod-img">
                <img src="http://fpoimg.com/100x100" alt="" />
              </div>
              <div className="order-prod-title">
                <p>타이틀</p>
                <p>가격</p>
              </div>
            </div>
            <div className="order-prod-count">
              <p>수량</p>
              <p>총 가격</p>
            </div>
          </div>
        </div>
      </OrderInfo>
      <OrderPay>
        <h2>결제 금액</h2>
      </OrderPay>
    </OrderWrap>
  );
};

export default Order;
