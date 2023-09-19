import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { subCateProdList } from "../api/axios";
import Paging from "./Paging";

const CateProd = ({
  state,
  getCategoryLabel,
  handleItemClick,
  handleShoppingClick,
  pageRangeDisplayed,
  totalItemsCount,
}) => {
  const [prodList, setProdList] = useState([]);

  // 카테고리별 상품 목록 불러오기
  const cateProdData = async _page => {
    const cateId = state?.cateId;
    const subCateId = state?.subCate == undefined ? "" : state?.subCate;
    console.log("1", cateId);
    console.log("2", subCateId);
    const result = await subCateProdList(_page, cateId, subCateId);
    setProdList(result);
  };

  useEffect(() => {
    cateProdData(0);
  }, [state]);

  // 페이지네이션 업데이트
  const handleCatePaging = newPage => {
    cateProdData(newPage, state?.cateId, state?.subCate);
  };
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
        {prodList?.list?.map((item, index) => (
          <div key={index}>
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
        onPageChange={handleCatePaging}
        pageRangeDisplayed={pageRangeDisplayed}
        totalItemsCount={totalItemsCount}
      />
    </>
  );
};

export default CateProd;
