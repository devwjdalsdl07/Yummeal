import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlickDiv } from "../style/MainCss";
import { getMain, getRecommend } from "../api/mainFatch";
import { useNavigate } from "react-router";

const Slick = () => {
  // const [recommend, setRecommend] = useState([]);

  // //회원 자녀의 개월에 따라 상품추천 가져오기
  // const getRecommendFetch = async () => {
  //   try {
  //     const recommendJson = await getRecommend();
  //     setRecommend(recommendJson);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   getRecommendFetch();
  // }, []);

  const [main, setMain] = useState([]);
  const [mainImage, setItemImage] = useState([]);

  //기본으로 보여줄 상품(비로그인)
  const getMainFetch = async () => {
    try {
      const mainJson = await getMain();
      console.log(mainJson);
      setMain(mainJson.list);
      setItemImage(mainJson.list.map(item => item.thumbnail));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getMainFetch();
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
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
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
      <SlickDiv>
        <h1 className="title">추천 상품 </h1>
        <Slider {...settings}>
          {main.map((item, index) => (
            <div key={item.productId}>
              <img
                key={index}
                src={mainImage[index]}
                alt={`Product ${index + 1}`}
                onClick={() => handleItemClick(item.productId)}
              />
              <span>
                <p>{item.name}</p>
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
