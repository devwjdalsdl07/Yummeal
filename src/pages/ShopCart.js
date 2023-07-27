import React from "react";
import { useNavigate } from "react-router";
import CartItem from "../components/CartItem";
import { Cart, Payment, ShopWrap } from "../style/ShopCartCss";

const ShopCart = () => {
  const navigate = useNavigate();
  const handleGoOrder = () => {
    navigate("/order");
  };
  return (
    <ShopWrap>
      <Cart>
        <h2>장바구니</h2>
        <hr />
        <CartItem />
        <CartItem />
        <CartItem />
      </Cart>
      <Payment>
        <h2>결제 예정 금액</h2>
        <div className="paywrap">
          <div className="price">
            <p>상품금액</p>
            <p>원</p>
          </div>
        </div>
        <div className="order_btn" onClick={handleGoOrder}>
          주문하기
        </div>
      </Payment>
    </ShopWrap>
  );
};

export default ShopCart;
