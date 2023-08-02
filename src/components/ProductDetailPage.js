import React from "react";
import ItemDetail from "../pages/ItemDetail";

const ProductDetailPage = () => {
  return (
    <div>
      <h1>상품 상세 페이지</h1>
      <ItemDetail />
      {/* 여기에 상품 상세 정보와 기본 정보 내용을 추가 */}
      <div id="detail-section01">
        <h2>상품 상세 정보</h2>
        {/* 상품 상세 정보 내용 */}
      </div>
      <div id="detail-section02">
        <h2>기본 정보</h2>
        {/* 기본 정보 내용 */}
      </div>
      <div id="detail-section03">
        <h2>상품리뷰</h2>
        {/* 상품 상세 정보 내용 */}
      </div>
      <div id="detail-section04">
        <h2>상품문의</h2>
        {/* 상품 상세 정보 내용 */}
      </div>
    </div>
  );
};

export default ProductDetailPage;
