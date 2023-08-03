import React from "react";
import { Link } from "react-router-dom";
import Review from "../components/Review";

const ItemDetail = () => {
  return (
    <div>
      <h1>상품상세페이지준비중입니다.</h1>
      <div className="product-tabs">
        <ul>
          <li>
            <Link to="#detail-section01">
              <span>상품 상세정보</span>
            </Link>
          </li>
          <li>
            <Link to="#detail-section02">
              <span>기본정보</span>
            </Link>
          </li>
          <li>
            <Link to="#detail-section02">
              <span>상품리뷰</span>
            </Link>
          </li>
          <li>
            <Link to="#detail-section02">
              <span>상품문의</span>
            </Link>
          </li>
        </ul>
      </div>
      <Review />
    </div>
  );
};

export default ItemDetail;
