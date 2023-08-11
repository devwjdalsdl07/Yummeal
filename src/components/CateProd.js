import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CateProd = ({
  state,
  getCategoryLabel,
  handleItemClick,
  handleShoppingClick,
}) => {
  return (
    <>
      <div className="best-item">
        <h1 className="best-title">
          {state.cateId}단계{" "}
          {state.subCate == undefined
            ? "상품"
            : `${getCategoryLabel(state.subCate)} 상품`}
        </h1>
      </div>
      <ul className="list-area">
        {state.list?.map((item, productId) => (
          <div key={productId}>
            <li className="product-card">
              <img
                src="http://fpoimg.com/150x150"
                alt="상품 이미지"
                className="product-image"
              />
              <span className="product-description">
                <span
                  className="item-numbering"
                  onClick={() => handleItemClick(item.productId)}
                />
                <FontAwesomeIcon
                  icon={faBasketShopping}
                  className="shopping-icon"
                  onClick={() => handleShoppingClick(item)}
                />
              </span>
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

export default CateProd;
