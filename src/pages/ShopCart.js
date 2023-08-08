import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCart } from "../api/cartaxios";
import { getCookie } from "../api/cookie";
import CartItem from "../components/CartItem";
import { Cart, NotList, Payment, ShopWrap } from "../style/ShopCartCss";

const ShopCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const cartList = async () => {
    const result = await getCart();
    setCartItems(result);
  };

  useEffect(() => {
    cartList();
  }, []);

  const navigate = useNavigate();

  const handleGoOrder = () => {
    navigate("/order");
  };

  const handleGoShoping = () => {
    navigate("/");
  };

  const prodTotalPrice = cartItems.reduce((item, idx) => {
    const productPrice = idx.price * idx.count;
    return item + productPrice;
  }, 0);

  return (
    <ShopWrap>
      {cartItems.length > 0 ? (
        <>
          <Cart>
            <h2>장바구니</h2>
            <hr />
            <CartItem cartItems={cartItems} setCartItems={setCartItems} />
          </Cart>
          <Payment>
            <h2>결제 예정 금액</h2>
            <div className="paywrap">
              <div className="price">
                <p>상품금액</p>
                <p>{prodTotalPrice.toLocaleString()}원</p>
              </div>
            </div>
            <div className="order_btn" onClick={handleGoOrder}>
              주문하기
            </div>
          </Payment>
        </>
      ) : (
        <NotList>
          <div className="icon-box">
            <i>
              <FontAwesomeIcon icon={faCartArrowDown} />
            </i>
          </div>
          <div className="text-box">
            <p>장바구니에 담긴 상품이 없습니다.</p>
            <button onClick={handleGoShoping}>상품 담으러 가기</button>
          </div>
        </NotList>
      )}
    </ShopWrap>
  );
};

export default ShopCart;
