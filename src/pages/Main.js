import React from "react";
import Slick from "../components/Slick";
import { MainDiv } from "../style/MainCss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/search`);
  };
  const handleBestClick = () => {
    navigate(`/search`);
  };

  return (
    <MainDiv>
      <div className="wrap">
        <div className="info">
          <Slick />
          <div className=" best-item">
            <h1 className="best-title">요즘, 많이 찾는 상품</h1>
            <button type="button" className="confirm" onClick={handleClick}>
              더보기
            </button>
          </div>

          <Link to="/product">
            <ul className="list-area">
              <li className="product-card">
                <img
                  src="http://fpoimg.com/150x150" // 이미지 파일 경로를 넣으세요.
                  alt="상품 이미지"
                  className="product-image"
                />
                <span className="product-description">
                  <span className="item-numbering">1단계</span>
                  <FontAwesomeIcon icon={faBasketShopping} className="shopping-icon" />
                </span>
                <div className="item-info">
                  <h2>[1단계] 한우 배추 죽 </h2>
                  <p>가격 : 4,500원</p>
                </div>
              </li>

              <li className="product-card">
                <img
                  src="http://fpoimg.com/150x150" // 이미지 파일 경로를 넣으세요.
                  alt="상품 이미지"
                  className="product-image"
                />
                <span className="product-description">
                  <span className="item-numbering">2단계</span>
                  <FontAwesomeIcon icon={faBasketShopping} className="shopping-icon" />
                </span>
                <div className="item-info">
                  <h2>[1단계] 한우 배추 죽 </h2>
                  <p>가격 : 4,500원</p>
                </div>
              </li>

              <li className="product-card">
                <img
                  src="http://fpoimg.com/150x150" // 이미지 파일 경로를 넣으세요.
                  alt="상품 이미지"
                  className="product-image"
                />
                <span className="product-description">
                  <span className="item-numbering">3단계</span>
                  <FontAwesomeIcon icon={faBasketShopping} className="shopping-icon" />
                </span>
                <div className="item-info">
                  <h2>[1단계] 한우 배추 죽 </h2>
                  <p>가격 : 4,500원</p>
                </div>
              </li>

              <li className="product-card">
                <img
                  src="http://fpoimg.com/150x150" // 이미지 파일 경로를 넣으세요.
                  alt="상품 이미지"
                  className="product-image"
                />
                <span className="product-description">
                  <span className="item-numbering">4단계</span>
                  <FontAwesomeIcon icon={faBasketShopping} className="shopping-icon" />
                </span>
                <div className="item-info">
                  <h2>[1단계] 한우 배추 죽 </h2>
                  <p>가격 : 4,500원</p>
                </div>
              </li>
            </ul>
          </Link>

          <h1 className="best-item">
            추천 상품
            <button type="button" className="confirm" onClick={handleBestClick}>
              더보기
            </button>
          </h1>
          <Link to="/product">
            <ul className="list-area">
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
              </li>ㅠ

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
