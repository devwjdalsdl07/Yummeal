import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import CartItemModal from "../components/CartItemModal";

const SearchProd = ({
  product,
  searchData,
  handleShoppingClick,
  handleItemClick,
  setShowModal,
  showModal
}) => {
  const navigate = useNavigate();
  const handleCartShow = () => {
    setShowModal(false);
    navigate(`/cart`);
  };
  return (
    <>
      <div className="best-item">
        <h1 className="best-title">{product ? `${product} 검색결과` : ""}</h1>
      </div>
      <ul className="list-area">
        {searchData?.dto?.map((item, index) => (
          <div key={index}>
            <li className="product-card">
              <img
                src={`http://192.168.0.144:5001/img/product/${item.productid}/${item.thumbnail}`}
                alt="상품 이미지"
                className="product-image"
              />
              <span className="product-description">
                <span
                  className="item-numbering"
                  onClick={() => handleItemClick(item.productid)}
                />
                <FontAwesomeIcon
                  icon={faBasketShopping}
                  className="shopping-icon"
                  onClick={() => handleShoppingClick(item)}
                />
              </span>
              {showModal === true ? (
                <CartItemModal
                  setShowModal={setShowModal}
                  handleCartShow={handleCartShow}
                />
              ) : null}
              <div className="item-info">
                <h2>{item.name}</h2>
                <p>판매가 : {item.price.toLocaleString()}원</p>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </>
  );
};

export default SearchProd;
