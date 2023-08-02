import { faEquals, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { OrderDetailWrap } from "../style/OrderDetailCss";

const OrderDetail = () => {
  return (
    <OrderDetailWrap>
      <div className="container">
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
      </div>
    </OrderDetailWrap>
  );
};

export default OrderDetail;
