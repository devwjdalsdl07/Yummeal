import React from "react";
import { MainDiv } from "../style/MainCss";
import Paging from "../components/Paging";
import { Link } from "react-router-dom";

const SearchList = () => {
  
  return (
    <MainDiv>
      <div className="wrap">
        <div className="info">
          <div className=" best-item">
            <h1 className="best-title">요즘, 많이 찾는 상품</h1>
          </div>

          <Link to="/product">
            <ul className="list-area">
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
          </Link>
          <Paging />
        </div>
      </div>
    </MainDiv>
  );
};

export default SearchList;
