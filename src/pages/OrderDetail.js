import styled from "@emotion/styled";
import { faEquals, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const OrderDetail = () => {
  const OrderDetailWrap = styled.div`
    max-width: 140rem;
    width: 130rem;
    margin: 0 auto;
    padding: 5rem;
    display: flex;
    flex-direction: column;
    h2 {
      font-size: 2.5rem;
    }
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
    .order-prodwrap {
      .order-prodtext {
        display: flex;
        align-items: center;
        padding: 1rem 3rem;
        gap: 4rem;
        .order-textwrap {
          width: 100%;
          p {
            font-size: 2rem;
          }
        }
        .order-prodbtn {
          display: flex;
          justify-content: flex-end;
          button {
            border-radius: 0.8rem;
            padding: 0.8rem;
            background: white;
            font-size: 1.5rem;
            cursor: pointer;
          }
        }
      }
    }
    .order-userinfo {
      .order-infowrap {
        padding: 1rem 3rem;
        .info-data {
          display: flex;
          align-items: center;
          gap: 4rem;
          padding-bottom: 1rem;
          & > div {
            width: 80%;
            text-align: center;
            font-size: 2rem;
          }
        }
        p {
          font-size: 2rem;
          padding: 0 1rem;
          width: 7rem;
        }
      }
    }
    .order-price {
      .order-pricewrap {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        background: #eebb75;
        padding: 1rem 3rem;
        border-radius: 1.2rem;
        transform: translateY(1rem);
        .fa-minus {
          font-size: 2rem;
          color: #fff;
        }
        .fa-equals {
          font-size: 2rem;
          color: #fff;
        }
        .price-data {
          display: flex;
          align-items: center;
          gap: 1rem;
          span {
            font-size: 2rem;
            color: #fff;
          }
        }
        p {
          font-size: 2rem;
          color: #fff;
        }
      }
    }
  `;
  return (
    <OrderDetailWrap>
      <h2>결제내역</h2>
      <h3>주문날짜</h3>
      <div className="order-prodwrap">
        <h3>주문상품</h3>
        <hr />
        <div className="order-prodtext">
          <div>
            <img src="http://fpoimg.com/150x150" alt="" />
          </div>
          <div className="order-textwrap">
            <p>타이틀</p>
            <p>가격</p>
            <p>수량</p>
            <div className="order-prodbtn">
              <button>장바구니 담기</button>
            </div>
          </div>
        </div>
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
            <span>가격</span>
          </div>
          <div>
            <i>
              <FontAwesomeIcon icon={faMinus} />
            </i>
          </div>
          <div className="price-data">
            <p>할인금액</p>
            <span>가격</span>
          </div>
          <div>
            <i>
              <FontAwesomeIcon icon={faEquals} />
            </i>
          </div>
          <div className="price-data">
            <p>총 결제금액</p>
            <span>가격</span>
          </div>
        </div>
      </div>
    </OrderDetailWrap>
  );
};

export default OrderDetail;
