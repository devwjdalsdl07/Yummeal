import React from "react";
import { MainDiv } from "../style/MainDiv";

const SearchList = () => {
  return (
    <MainDiv>
      <div className="wrap">
        <div className="info">
          <h1 className="best_title">요즘, 많이 찾는 상품</h1>
          <ul className="list_area">
            <li>
              <div className="product-card">
                <img
                  src="http://fpoimg.com/150x150"
                  alt="상품 이미지"
                  className="product-image"
                />

                <span className="product-description">
                  <p>타이틀</p>
                  <p>가격</p>
                </span>
              </div>
            </li>
            <li>
              <div className="product-card">
                <img
                  src="http://fpoimg.com/150x150"
                  alt="상품 이미지"
                  className="product-image"
                />

                <span className="product-description">
                  <p>타이틀</p>
                  <p>가격</p>
                </span>
              </div>
            </li>
            <li>
              <div className="product-card">
                <img
                  src="http://fpoimg.com/150x150"
                  alt="상품 이미지"
                  className="product-image"
                />

                <span className="product-description">
                  <p>타이틀</p>
                  <p>가격</p>
                </span>
              </div>
            </li>
            <li>
              <div className="product-card">
                <img
                  src="http://fpoimg.com/150x150"
                  alt="상품 이미지"
                  className="product-image"
                />

                <span className="product-description">
                  <p>타이틀</p>
                  <p>가격</p>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </MainDiv>
  );
};

export default SearchList;
