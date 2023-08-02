import React, { useState } from "react";
import { OrderListContainer } from "../style/OrderListCss";
import OrderNumber from "./OrderNumber";

const OrderList = () => {
  // 선택된 날짜 기간 동안의 주문 목록 수량
  const [orderCount, setOrderCount] = useState(0);
  const button = [
    { value: 1, date: "1개월" },
    { value: 2, date: "6개월" },
    { value: 3, date: "1년" },
    { value: 4, date: "전체" },
  ];
  const [active, setActive] = useState(1);
  // orderNumver 컴포넌트 더미데이터
  const [orderList, setOrderList] = useState([1, 2, 3, 4]);

  const handleDateClick = value => {
    setActive(value);
  };
  return (
    <OrderListContainer>
      <div className="top">
        <h3>주문 배송</h3>
        <span>
          <strong>{orderCount}</strong>
        </span>
        <span>개</span>
      </div>
      <div className="button-wrap">
        {button.map((item, idx) => (
          <span
            key={idx}
            className={active === item.value ? "active" : ""}
            value={active}
            onClick={() => handleDateClick(item.value)}
          >
            {item.date}
          </span>
        ))}
      </div>
      {orderList.map((item, idx) => {
        return <OrderNumber key={idx} />;
      })}
    </OrderListContainer>
  );
};

export default OrderList;
