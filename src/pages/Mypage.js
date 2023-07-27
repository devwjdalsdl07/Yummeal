import React from "react";
import "../style/MypageCss";
import { MypageContainer } from "../style/MypageCss";
import OrderList from "../components/OrderList";

const Mypage = () => {
  return (
    <MypageContainer>
      <div className="side-nav">
        <h1>마이 페이지</h1>
        <ul className="menu-list">
          <li>
            <p>나의 주문 관리</p>
            <ul className="two-depth">
              <li>
                <p>주문 배송</p>
              </li>
            </ul>
          </li>
          <li>
            <p>나의 정보 관리</p>
            <ul className="two-depth">
              <li>
                <p>정보 수정</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <OrderList />
    </MypageContainer>
  );
};

export default Mypage;
