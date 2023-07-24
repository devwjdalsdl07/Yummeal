import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MainDiv } from "../style/MainDiv";

const Main = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <MainDiv>
      <div className="wrap">
        <div className="container">
          <h2>ㅇㅇ님의 추천 상품</h2>
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
          <h2>요즘, 많이 찾는 상품</h2>
          <h2>추천 상품</h2>
        </div>
      </div>
    </MainDiv>
  );
};

export default Main;
