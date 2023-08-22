import { faMinus, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router";
import { cartDelete, downPatch, upPatch } from "../api/client";
import { CartItems } from "../style/CartItemCss";

const CartItem = ({
  cartItems,
  setCartItems,
  basketData,
  setBasketData,
  isLoggedIn,
}) => {
  const navigate = useNavigate();

  // 수량 카운트 업
  const handleCountUp = idx => {
    if (isLoggedIn) {
      // 회원 장바구니
      const updatedCartItems = [...cartItems];
      updatedCartItems[idx].count += 1;
      setCartItems(updatedCartItems);
      upPatch(updatedCartItems[idx].cartId, updatedCartItems[idx].count);
    } else {
      // 비회원 장바구니
      const updatedBasketData = basketData.map((item, index) => {
        if (index === idx) {
          return {
            ...item,
            count: item.count + 1,
          };
        }
        return item;
      });
      setBasketData(updatedBasketData);
      localStorage.setItem("baskets", JSON.stringify(updatedBasketData));
    }
  };

  // 수량 카운트 다운
  const handleCountDown = idx => {
    if (isLoggedIn) {
      // 회원 장바구니
      const updatedCartItems = [...cartItems];
      if (updatedCartItems[idx].count > 1) {
        updatedCartItems[idx].count -= 1;
        setCartItems(updatedCartItems);
        downPatch(updatedCartItems[idx].cartId, updatedCartItems[idx].count);
      }
    } else {
      // 비회원 장바구니
      const updatedBasketData = basketData.map((item, index) => {
        if (index === idx) {
          return {
            ...item,
            count: Math.max(item.count - 1, 1),
          };
        }
        return item;
      });
      setBasketData(updatedBasketData);
      localStorage.setItem("baskets", JSON.stringify(updatedBasketData));
    }
  };

  // 장바구니 목록 삭제
  const handleOrderDel = idx => {
    if (isLoggedIn) {
      // 회원 장바구니
      const updatedCartItems = [...cartItems];
      updatedCartItems.splice(idx, 1);
      setCartItems(updatedCartItems);
      cartDelete(cartItems[idx].cartId);
    } else {
      // 비회원 장바구니
      const updatedBasketData = basketData.filter(
        (item, index) => index !== idx,
      );
      setBasketData(updatedBasketData);
      localStorage.setItem("baskets", JSON.stringify(updatedBasketData));
    }
  };

  // 상품 상제정보 이동
  const handleGoProd = _id => {
    navigate(`/product/${_id}`);
  };

  return (
    <CartItems>
      {isLoggedIn
        ? cartItems.map((item, idx) => (
            <div key={item.cartId} className="list">
              <div
                className="prodwrap"
                onClick={() => handleGoProd(item.productId)}
              >
                <div className="prod-img">
                  <img src={item.thumbnail} alt={item.title} />
                </div>
                <div className="prod-text">
                  <p>{item.name}</p>
                  <p>{item.price.toLocaleString()}원</p>
                </div>
              </div>
              <div className="prod-info">
                <div className="counter">
                  <div
                    className="counter-btn"
                    onClick={() => handleCountDown(idx)}
                  >
                    <i>
                      <FontAwesomeIcon icon={faMinus} />
                    </i>
                  </div>
                  <div className="counter-number">{item.count}</div>
                  <div
                    className="counter-btn"
                    onClick={() => handleCountUp(idx)}
                  >
                    <i>
                      <FontAwesomeIcon icon={faPlus} />
                    </i>
                  </div>
                </div>
                <p>{(item.price * item.count).toLocaleString()}원</p>
                <i onClick={() => handleOrderDel(idx)}>
                  <FontAwesomeIcon icon={faTrashCan} />
                </i>
              </div>
            </div>
          ))
        : basketData.map((item, idx) => (
            <div key={idx} className="list">
              <div
                className="prodwrap"
                onClick={() => handleGoProd(item.productId)}
              >
                <div className="prod-img">
                  <img src={item.thumbnail} alt={item.title} />
                </div>
                <div className="prod-text">
                  <p>{item.name}</p>
                  <p>{item.price.toLocaleString()}원</p>
                </div>
              </div>
              <div className="prod-info">
                <div className="counter">
                  <div
                    className="counter-btn"
                    onClick={() => handleCountDown(idx)}
                  >
                    <i>
                      <FontAwesomeIcon icon={faMinus} />
                    </i>
                  </div>
                  <div className="counter-number">{item.count}</div>
                  <div
                    className="counter-btn"
                    onClick={() => handleCountUp(idx)}
                  >
                    <i>
                      <FontAwesomeIcon icon={faPlus} />
                    </i>
                  </div>
                </div>
                <p>{(item.price * item.count).toLocaleString()}원</p>
                <i onClick={() => handleOrderDel(idx)}>
                  <FontAwesomeIcon icon={faTrashCan} />
                </i>
              </div>
            </div>
          ))}
    </CartItems>
  );
};

export default CartItem;
