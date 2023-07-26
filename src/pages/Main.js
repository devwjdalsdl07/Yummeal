import React from "react";
import Slick from "../components/Slick";
import { MainDiv } from "../style/MainCss";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/search`);
  };
  return (
    <MainDiv>
      <div className="wrap">
        <div className="info">
          <Slick />
          <div className=" best_item">
            <h1 className="best_title">요즘, 많이 찾는 상품</h1>
            <button type="button" className="confirm" onClick={handleClick}>
              더보기
            </button>
          </div>

          <Link to="/search">
            <ul className="list_area">
              <li className="product-card">
                <img
                  src="http://fpoimg.com/150x150" // 이미지 파일 경로를 넣으세요.
                  alt="상품 이미지"
                  className="product-image"
                />
                <span className="product-description">
                  <span className="item_numbering">1단계</span>
                  <p>타이틀</p>
                  <p>가격</p>
                </span>
              </li>

              <li className="product-card">
                <img
                  src="http://fpoimg.com/150x150" // 이미지 파일 경로를 넣으세요.
                  alt="상품 이미지"
                  className="product-image"
                />
                <span className="product-description">
                  <span className="item_numbering">2단계</span>
                  <p>타이틀</p>
                  <p>가격</p>
                </span>
              </li>

              <li className="product-card">
                <img
                  src="http://fpoimg.com/150x150" // 이미지 파일 경로를 넣으세요.
                  alt="상품 이미지"
                  className="product-image"
                />
                <span className="product-description">
                  <span className="item_numbering">3단계</span>
                  <p>타이틀</p>
                  <p>가격</p>
                </span>
              </li>

              <li className="product-card">
                <img
                  src="http://fpoimg.com/150x150" // 이미지 파일 경로를 넣으세요.
                  alt="상품 이미지"
                  className="product-image"
                />
                <span className="product-description">
                  <span className="item_numbering">4단계</span>
                  <p>타이틀</p>
                  <p>가격</p>
                </span>
              </li>
            </ul>
          </Link>

          <h1 className="best_item">
            추천 상품
            <button type="button" className="confirm" onClick={handleClick}>
              더보기
            </button>
          </h1>
          <Link to="/search">
            <ul className="list_area">
              <li className="product-card">
                <img
                  src="http://fpoimg.com/150x150" // 이미지 파일 경로를 넣으세요.
                  alt="상품 이미지"
                  className="product-image"
                />

                <span className="product-description">
                  <p>타이틀</p>
                  <p>가격</p>
                </span>
              </li>

              <li className="product-card">
                <img
                  src="http://fpoimg.com/150x150" // 이미지 파일 경로를 넣으세요.
                  alt="상품 이미지"
                  className="product-image"
                />

                <span className="product-description">
                  <p>타이틀</p>
                  <p>가격</p>
                </span>
              </li>

              <li className="product-card">
                <img
                  src="http://fpoimg.com/150x150" // 이미지 파일 경로를 넣으세요.
                  alt="상품 이미지"
                  className="product-image"
                />

                <span className="product-description">
                  <p>타이틀</p>
                  <p>가격</p>
                </span>
              </li>

              <li className="product-card">
                <img
                  src="http://fpoimg.com/150x150" // 이미지 파일 경로를 넣으세요.
                  alt="상품 이미지"
                  className="product-image"
                />

                <span className="product-description">
                  <p>타이틀</p>
                  <p>가격</p>
                </span>
              </li>
            </ul>
          </Link>
        </div>
      </div>
    </MainDiv>
  );
};

export default Main;
