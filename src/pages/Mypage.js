import React, { useState } from “react”;
import “../style/MypageCss”;
import { MypageContainer } from “../style/MypageCss”;
import OrderList from “../components/OrderList”;
import UserInfo from “../components/UserInfo”;

const Mypage = () => {
  const [activeComponent, setActiveComponent] = useState("order");

  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "order":
        return <OrderList />;
      case "user":
        return <UserInfo />;
      default:
        return null;
    }
  };

  return (
    <MypageContainer>
      <div className="side-nav">
        <h1>마이 페이지</h1>
        <ul className="menu-list">
          <li onClick={() => handleComponentChange("order")}>
            <p>나의 주문 관리</p>
            <ul className="two-depth">
              <li>
                <p style={activeComponent === "order" ? { color: "hotpink" } : null}>주문 배송</p>
              </li>
            </ul>
          </li>
          <li onClick={() => handleComponentChange("user")}>
            <p>나의 정보 관리</p>
            <ul className="two-depth">
              <li>
                <p style={activeComponent === "user" ? { color: "hotpink" } : null}>정보 수정</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      {renderActiveComponent()}
    </MypageContainer>
  );
};

export default Mypage;
