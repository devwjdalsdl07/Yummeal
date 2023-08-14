import { faMinus, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { CartItems } from "../style/CartItemCss";
import { cartDelete, downPatch, upPatch } from "../api/client";

const CartItem = ({ cartItems, setCartItems }) => {
  const handleCountUp = idx => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[idx].count += 1;
    setCartItems(updatedCartItems);
    upPatch(updatedCartItems[idx].cartId, updatedCartItems[idx].count);
  };

  const handleCountDown = idx => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[idx].count > 1) {
      updatedCartItems[idx].count -= 1;
      setCartItems(updatedCartItems);
      downPatch(updatedCartItems[idx].cartId, updatedCartItems[idx].count);
    }
  };

  const handleOrderDel = idx => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(idx, 1);
    setCartItems(updatedCartItems);
    cartDelete(cartItems[idx].cartId);
  };

  return (
    <CartItems>
      {cartItems.map((item, idx) => (
        <div key={item.cartId} className="list">
          <div className="prodwrap">
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
              <div className="counter-btn" onClick={() => handleCountUp(idx)}>
                <i>
                  <FontAwesomeIcon icon={faPlus} />
                </i>
              </div>
              <div className="counter-number">{item.count}</div>
              <div className="counter-btn" onClick={() => handleCountDown(idx)}>
                <i>
                  <FontAwesomeIcon icon={faMinus} />
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
