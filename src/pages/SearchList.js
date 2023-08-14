import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { cartIn } from "../api/cartaxios";
import { getBestProductAll } from "../api/mainFatch";
import AllProd from "../components/AllProd";
import CateProd from "../components/CateProd";
import Paging from "../components/Paging";
import { MainDiv } from "../style/MainCss";

const SearchList = () => {
  const [bestProductAll, setBestProductAll] = useState({});
  const [mainImage, setItemImage] = useState([]);
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();

  // console.log("스테이트에 뭐 담겨?", state);

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

  const getCategoryLabel = subCate => {
    if (subCate === null) {
      return "";
    }
    switch (subCate) {
      case 1:
        return "곡물류";
      case 2:
        return "야채류";
      case 3:
        return "고기류";
      case 4:
        return "해산물류";
      case 5:
        return "과일류";
      default:
        return "기타";
    }
  };

  let content;

  if (state && state.cateId) {
    content = (
      <CateProd
        state={state}
        handleItemClick={handleItemClick}
        handleShoppingClick={handleShoppingClick}
        getCategoryLabel={getCategoryLabel}
        handlePageChange={handlePageChange}
      />
    );
  } else if (state && state.maxPage) {
    content = (
      <AllProd
        state={state}
        handleItemClick={handleItemClick}
        handleShoppingClick={handleShoppingClick}
        handlePageChange={handlePageChange}
      />
    );
  } else if (state == null) {
    content = (
      <>
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
        <Paging
          onPageChange={handlePageChange}
          bestProductAll={bestProductAll}
        />
      </>
    );
  }

  return (
    <MainDiv>
      <div className="wrap">
        <div className="info">
          {/* <div className="best-item">
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
          </ul> */}
          {content}
        </div>
      </div>
    </MainDiv>
  );
};

export default SearchList;
