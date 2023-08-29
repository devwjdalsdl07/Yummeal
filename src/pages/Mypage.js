import React, { useState } from "react";
import "../style/MypageCss";
import { ContainerWrap, MypageContainer } from "../style/MypageCss";
import OrderList from "../components/OrderList";
import UserInfo from "../components/UserInfo";
import PassWordCheck from "../components/PassWordCheck";

const Mypage = () => {
  const [activeComponent, setActiveComponent] = useState("order");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  const handleComponentChange = component => {
    setActiveComponent(component);
    if (component === "user") {
      setIsPasswordCorrect(false);
    }
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "order":
        return <OrderList />;
      case "user":
        if (isPasswordCorrect) {
          return <UserInfo setActiveComponent={setActiveComponent} />;
        } else {
          return <PassWordCheck setPasswordCorrect={setIsPasswordCorrect} />;
        }
      default:
        return null;
    }
  };

  return (
    <ContainerWrap>
      <MypageContainer>
        <div className="side-nav">
          <h1>마이 페이지</h1>
          <ul className="menu-list">
            <li onClick={() => handleComponentChange("order")}>
              <p>나의 주문 관리</p>
              <ul className="two-depth">
                <li>
                  <p
                    style={
                      activeComponent === "order" ? { color: "#8EB111" } : null
                    }
                  >
                    주문 배송
                  </p>
                </li>
              </ul>
            </li>
            <li onClick={() => handleComponentChange("user")}>
              <p>나의 정보 관리</p>
              <ul className="two-depth">
                <li>
                  <p
                    style={
                      activeComponent === "user" ? { color: "#8EB111" } : null
                    }
                  >
                    정보 수정
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {renderActiveComponent()}
      </MypageContainer>
    </ContainerWrap>
  );
};

export default Mypage;
