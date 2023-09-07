import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { getMain } from "../api/mainFatch";
import Paging from "./Paging";

const AllProd = ({
  state,
  handleItemClick,
  handleShoppingClick,
  pageRangeDisplayed,
  totalItemsCount,
}) => {
  const [allProdList, setAllProdList] = useState({});

  // 전체상품 데이터 불러오기
  const allProdData = async _page => {
    const result = await getMain(_page);
    setAllProdList(result);
  };

  useEffect(() => {
    allProdData(1);
  }, [state]);

  // 페이지네이션 기능
  const handleAllPaging = newPage => {
    allProdData(newPage);
  };
  return (
    <>
      <div className="best-item">
        <h1 className="best-title">전체 상품</h1>
      </div>
      <ul className="list-area">
        {allProdList?.list?.map((item, productId) => (
          <div key={productId}>
            <li className="product-card">
              <img
                src={`/img/product/${item.productId}/${item.thumbnail}`}
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
      <Paging
        onPageChange={handleAllPaging}
        pageRangeDisplayed={pageRangeDisplayed}
        totalItemsCount={totalItemsCount}
      />
    </>
  );
};

export default AllProd;
