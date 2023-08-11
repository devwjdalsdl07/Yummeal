import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { cartIn } from "../api/cartaxios";
import { getBestProductAll } from "../api/mainFatch";
import Paging from "../components/Paging";
import { MainDiv } from "../style/MainCss";

const SearchList = () => {
  const [bestProductAll, setBestProductAll] = useState({});
  const [mainImage, setItemImage] = useState([]);
  const navigate = useNavigate();

  //제일 많이 팔린 상품 가져오기 더보기
  const getBestProductAllFetch = async _page => {
    try {
      const productIdJson = await getBestProductAll(_page);
      setBestProductAll(productIdJson);
      setItemImage(productIdJson.list.map(item => item.thumbnail));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBestProductAllFetch(1);
  }, []);

  const handleShoppingClick = async _item => {
    console.log(_item.productId);
    try {
      const cartItem = {
        productId: _item.productId,
        count: 1,
      };
      const result = await cartIn(cartItem);
      console.log(result);
      navigate(`/cart`);
      return result;
    } catch (err) {
      console.error("주문 처리 중 오류 발생:", err);
    }
  };

  const handleItemClick = _id => {
    navigate(`/product/${_id}`);
  };

  const handlePageChange = newPage => {
    getBestProductAllFetch(newPage);
  };

  return (
    <MainDiv>
      <div className="wrap">
        <div className="info">
          <div className="best-item">
            <h1 className="best-title">요즘, 많이 찾는 상품</h1>
          </div>
          <ul className="list-area">
            {bestProductAll.list?.map((item, productId) => (
              <div key={productId}>
                <li className="product-card">
                  <img
                    src={mainImage[productId]}
                    alt="상품 이미지"
                    className="product-image"
                  />
                  <span className="product-description">
                    <span
                      className="item-numbering"
                      onClick={() => handleItemClick(item.productId)}
                    />

                    <FontAwesomeIcon
                      icon={faBasketShopping}
                      className="shopping-icon"
                      onClick={() => handleShoppingClick(item)}
                    />
                  </span>
                  <div className="item-info">
                    <h2>{item.name}</h2>
                    <p>판매가 :{item.price.toLocaleString()}원</p>
                  </div>
                </li>
              </div>
            ))}
          </ul>

          <Paging onPageChange={handlePageChange} />
        </div>
      </div>
    </MainDiv>
  );
};

export default SearchList;
