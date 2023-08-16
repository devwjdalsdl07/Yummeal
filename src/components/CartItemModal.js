import React from "react";
import { faCartArrowDown, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartItemModalCss } from "../style/ModalCss";


const CartModal = ({ setShowModal, handleCartShow }) => {
  const handleViewCart = () => {
    handleCartShow();
  };
  return (
<CartItemModalCss>
    <div className="cart-modal">
        <FontAwesomeIcon icon={faXmark}  className="close-icon" onClick={() => setShowModal(false)  }/> 
      <div className="modal-content">
        <FontAwesomeIcon icon={faCartArrowDown} className="cart-icon" />
        <h3>장바구니 추가 되었습니다.</h3>
      </div>
      <div className="modal-buttons">
        <button
          type="button"
          className="continue-shopping-button"
          onClick={() => setShowModal(false)}
        >
          계속 쇼핑하기
        </button>
        <button
          type="button"
          className="view-cart-button"
          onClick={handleViewCart}
        >
          장바구니 보기
        </button>
      </div>
    </div>
    </CartItemModalCss>
  );
};

export default CartModal;
