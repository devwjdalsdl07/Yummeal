import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlickDiv } from "../style/MainDiv";

const Slick = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <SlickDiv>
        <h1 className="title">ㅇㅇ님의 추천 상품 </h1>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
            <span>
              <p>타이틀</p>
              <p>가격</p>
            </span>
          </div>
          <div>
            <h3>2</h3>
            <span>
              <p>타이틀</p>
              <p>가격</p>
            </span>
          </div>
          <div>
            <h3>3</h3>
            <span>
              <p>타이틀</p>
              <p>가격</p>
            </span>
          </div>
          <div>
            <h3>4</h3>
            <span>
              <p>타이틀</p>
              <p>가격</p>
            </span>
          </div>
          <div>
            <h3>5</h3>
            <span>
              <p>타이틀</p>
              <p>가격</p>
            </span>
          </div>
          <div>
            <h3>6</h3>
            <span>
              <p>타이틀</p>
              <p>가격</p>
            </span>
          </div>
        </Slider>
      </SlickDiv>
    </div>
  );
};

export default Slick;
