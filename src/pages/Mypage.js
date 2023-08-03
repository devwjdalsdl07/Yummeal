import React, { useState } from "react";
import "../style/MypageCss";
import { MypageContainer } from "../style/MypageCss";
import OrderList from "../components/OrderList";
import UserInfo from "../components/UserInfo";

const Mypage = () => {
  const [cate, setCate] = useState(true);
  const handleOrderClick = () => {
    setCate(true);
  };
  const handleUserClick = () => {
    setCate(false);
  };
  return (
    <MypageContainer>
      <div className="side-nav">
        <h1>마이 페이지</h1>
        <ul className="menu-list">
          <li onClick={handleOrderClick}>
            <p>나의 주문 관리</p>
            <ul className="two-depth">
              <li>
                <p style={cate ? { color: "hotpink" } : null}>주문 배송</p>
              </li>
            </ul>
          </li>
          <li onClick={handleUserClick}>
            <p>나의 정보 관리</p>
            <ul className="two-depth">
              <li>
                <p style={cate ? null : { color: "hotpink" }}>정보 수정</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      {cate ? <OrderList /> : <UserInfo />}
    </MypageContainer>
  );
};

export default Mypage;
