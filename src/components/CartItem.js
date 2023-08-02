import { faMinus, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { CartItems } from "../style/CartItemCss";

const CartItem = ({cartItems, setCartItems}) => {

  const handleCountUp = idx => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[idx].quantity += 1;
    setCartItems(updatedCartItems);
  };

  const handleCountDown = idx => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[idx].quantity > 1) {
      updatedCartItems[idx].quantity -= 1;
      setCartItems(updatedCartItems);
    }
  };

  const handleOrderDel = idx => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(idx, 1);
    setCartItems(updatedCartItems);
  };

  return (
    <CartItems>
      {cartItems.map((item, idx) => (
        <div key={idx} className="list">
          <div className="prodwrap">
            <div>
              <img src={item.image} alt={item.title} />
            </div>
            <div className="prod_text">
              <p>{item.title}</p>
              <p>{item.price}원</p>
            </div>
          </div>
          <div className="prod_info">
            <div className="counter">
              <div className="counter_btn" onClick={() => handleCountUp(idx)}>
                <i>
                  <FontAwesomeIcon icon={faPlus} />
                </i>
              </div>
              <div className="counter_number">{item.quantity}</div>
              <div className="counter_btn" onClick={() => handleCountDown(idx)}>
                <i>
                  <FontAwesomeIcon icon={faMinus} />
                </i>
              </div>
            </div>
            <p>{item.price * item.quantity}</p>
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
