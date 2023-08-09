import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getBestProductAll } from "../api/mainFatch";
import Paging from "../components/Paging";
import { MainDiv } from "../style/MainCss";

const SearchList = () => {
  const [bestProductAll, setBestProductAll] = useState({});
  const navigate = useNavigate();
  //제일 많이 팔린 상품 가져오기 더보기
  const getBestProductAllFetch = async () => {
    try {
      const productIdJson = await getBestProductAll();
      setBestProductAll(productIdJson);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBestProductAllFetch();
  }, []);

  const handleItemClick = _id => {
    navigate(`/product/${_id}`);
  };

  return (
    <MainDiv>
      <div className="wrap">
        <div className="info">
          <div className=" best-item">
            <h1 className="best-title">요즘, 많이 찾는 상품</h1>
          </div>
          <ul className="list-area">
            {bestProductAll.list?.map((item, productId) => (
              <div key={productId}>
                <li>
                  <div
                    className="product-card"
                    onClick={() => handleItemClick(item.productId)}
                  >
                    <img
                      src="http://fpoimg.com/150x150"
                      alt="상품 이미지"
                      className="product-image"
                    />
                    <span className="product-description">
                      <p>{item.name}</p>
                      <p>가격:{item.price.toLocaleString()}원</p>
                    </span>
                  </div>
                </li>
              </div>
            ))}
          </ul>
          <Paging />
        </div>
      </div>
    </MainDiv>
  );
};

export default SearchList;
