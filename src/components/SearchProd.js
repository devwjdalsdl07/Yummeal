import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { searchResult } from "../api/cartaxios";

const SearchProd = ({
  product,
  searchData,
  setSearchData,
  handleShoppingClick,
  handleItemClick,
}) => {
  // 검색 결과 get
  const searchRes = async () => {
    const result = await searchResult(product);
    setSearchData(result);
    return result;
  };

  useEffect(() => {
    searchRes();
  }, [product]);

  return (
    <>
      <div className="best-item">
        <h1 className="best-title">{product ? `${product} 검색결과` : ""}</h1>
      </div>
      <ul className="list-area">
        {searchData?.dto?.map((item, productId) => (
          <div key={productId}>
            <li className="product-card">
              <img
                src={item.thumbnail}
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

export default SearchProd;
