import React from "react";
import { useNavigate } from "react-router-dom";
import { OrderNumberContainer } from "../style/OrderNumberCss";

const OrderNumber = ({ item }) => {
  const navigate = useNavigate();
  const handleInfoClick = orderCode => {
    navigate(`/orderlist/${orderCode}`, { state: { orderCode } });
  };
  const price = item?.totalprice
    ?.toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <OrderNumberContainer>
      <div className="orderInfo">
        <div className="orderDate">
          <p>주문날짜</p>
          <span>{item.createdAt}</span>
        </div>
        <div className="orderNum">
          <p>주문번호</p>
          <span>{item.orderId}</span>
        </div>
      </div>

      <div className="itemInfo" onClick={() => handleInfoClick(item.orderCode)}>
        <div className="imgWrap">
          <img
            src={`/img/product/${item.productId}/${item.img}`}
            alt="썸네일"
          ></img>
        </div>
        <div className="titleWrap">
          <p>제품 명</p>
          <span>{item.pname}</span>
        </div>
      </div>
      <div className="responsive">
        <div className="orderPrice">
          <span>
            <strong>{price}</strong>
          </span>
          <span>원</span>
        </div>
        <div className="delivery">
          <span>{item.shipment}</span>
        </div>
      </div>
    </OrderNumberContainer>
  );
};

export default OrderNumber;
