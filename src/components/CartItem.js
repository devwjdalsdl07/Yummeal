import { faMinus, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { CartItems } from "../style/CartItemCss";

const CartItem = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <CartItems>
      <div className="list">
        <div className="prodwrap">
          <div>
            <img src="http://fpoimg.com/150x150" alt="" />
          </div>
          <div className="prod_text">
            <p>타이틀</p>
            <p>가격</p>
          </div>
        </div>
        <div className="prod_info">
          <div className="counter">
            <div
              className="counter_btn"
              onClick={() => setQuantity(quantity + 1)}
            >
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
            </div>
            <div className="counter_number">{quantity}</div>
            <div
              className="counter_btn"
              onClick={() => setQuantity(quantity - 1)}
            >
              <i>
                <FontAwesomeIcon icon={faMinus} />
              </i>
            </div>
          </div>
          <p>가격</p>
          <i>
            <FontAwesomeIcon icon={faTrashCan} />
          </i>
        </div>
      </div>
    </CartItems>
  );
};

export default CartItem;
