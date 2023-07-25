import React from "react";
import Slick from "../components/Slick";
import { MainDiv } from "../style/MainDiv";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/searchlist`);
  };
  return (
    <div>
      <MainDiv>
        <div className="wrap">
          <div className="info">
            <Slick />
            <h2 className="best_item">
              요즘, 많이 찾는 상품
              <button
                type="button"
                // className="confirm"
                onClick={handleClick}
              >
                더보기
              </button>
            </h2>

            <div className="list_area">
              <Link to="/serachlist">
                <div className="img_area">
                  {/* <img src={`/images/04.img`} alt="이미지" /> */}
                </div>
                {/* <div className="item_numbering">
        <span>1</span>
      </div> */}
                {/* ItemHover 컴포넌트를 사용하여 item_hover 스타일 적용 */}
                <div className="item_hover">
                  <p>타이틀</p>
                  <p>가격</p>
                  <p>조리시간</p>
                </div>
              </Link>
            </div>
            <h2>추천 상품</h2>
          </div>
        </div>
      </MainDiv>
    </div>
  );
};

export default Main;
