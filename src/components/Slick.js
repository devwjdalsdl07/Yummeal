import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { getRandom, getRecommend } from "../api/mainFatch";
import { SlickDiv } from "../style/MainCss";

const Slick = () => {
  const [randomProduct, setRandomProduct] = useState([]);
  const [recommend, setRecommend] = useState([]);
  const [itemImage, setItemImage] = useState([]);
  const { nickNm } = useSelector(state => state.user);
  //로그인 여부 확인
  const isLoggedIn = sessionStorage.getItem("accessToken") ? true : false;

  const getProductRecommenderFetch = async () => {
    try {
      if (isLoggedIn) {
        const recommendJson = await getRecommend();
        if (recommendJson === null) {
          const randomJson = await getRandom();
          setRecommend(randomJson);
          setItemImage(randomJson.map(item => item.thumbnail));
        } else {
          setRecommend(recommendJson);
          setItemImage(recommendJson.map(item => item.thumbnail));
        }
      } else {
        const randomJson = await getRandom();
        setRandomProduct(randomJson);
        setItemImage(randomJson.map(item => item.thumbnail));
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProductRecommenderFetch();
  }, []);

  const navigate = useNavigate();

  const handleItemClick = _id => {
    navigate(`/product/${_id}`);
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,

    responsive: [
      {
        breakpoint: 1330,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: false,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="container-slick">
      <SlickDiv>
        <h1 className="title">
          {isLoggedIn ? `${nickNm}님을 위한 추천 상품` : "추천 상품"}
        </h1>
        <Slider {...settings}>
          {(isLoggedIn ? recommend : randomProduct).map((item, index) => (
            <div key={item.productId}>
              <img
                key={index}
                src={itemImage[index]}
                alt={`Product ${index + 1}`}
                onClick={() => handleItemClick(item.productId)}
              />
              <span>
                <h3>{item.name}</h3>
                <p>판매가 : {parseInt(item?.price).toLocaleString()}원</p>
              </span>
            </div>
          ))}
        </Slider>
      </SlickDiv>
    </div>
  );
};

export default Slick;
