import React from "react";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartModal = ({ setShowModal, handleCartShow }) => {
  const handleViewCart = () => {
    handleCartShow();
  };
  return (
    <div className="cart-modal">
      <div className="modal-content">
        <FontAwesomeIcon icon={faCartArrowDown} />
        <p>장바구니 추가 되었습니다.</p>
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
  );
};

export default CartModal;
