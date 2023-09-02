import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { cartIn } from "../api/client";
import { getBestProductAll } from "../api/mainFatch";
import AllProd from "../components/AllProd";
import BestProd from "../components/BestProd";
import CateProd from "../components/CateProd";
import { MainDiv } from "../style/MainCss";

const SearchList = () => {
  const [bestProductAll, setBestProductAll] = useState({});
  const [mainImage, setItemImage] = useState([]);
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();
  const isLoggedIn = sessionStorage.getItem("accessToken") ? true : false;

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

  // 장바구니 담기
  const handleShoppingClick = async _item => {
    if (isLoggedIn) {
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
    } else {
      const baskets = JSON.parse(localStorage.getItem("baskets") ?? "[]");
      const existingItemIndex = baskets.findIndex(item => item.productId === _item.productId);
      if(existingItemIndex === -1){
        const item = {
          productId: _item.productId,
          count: 1,
          productName:_item.productName,
          thumbnail: _item.thumbnail,
          price:_item.price,
        };
        baskets.push(item);
      } else {
        baskets[existingItemIndex].count += 1;
      }
      localStorage.setItem("baskets", JSON.stringify(baskets));
    }
  };

  // 상세정보 이동
  const handleItemClick = _id => {
    navigate(`/product/${_id}`);
  };

  // 페이지네이션 액티브 페이지 기능
  const handlePageChange = newPage => {
    getBestProductAllFetch(newPage);
  };

  // 카테고리 값에 따른 이름변경
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
  // state로 넘어오는 값에 따른 화면 렌더링
  let content;
  if (state && state.cateId) {
    content = (
      <CateProd
        state={state}
        handleItemClick={handleItemClick}
        handleShoppingClick={handleShoppingClick}
        getCategoryLabel={getCategoryLabel}
        pageRangeDisplayed={state.maxPaige}
        totalItemsCount={state.pageCount}
      />
    );
  } else if (state && state.maxPage) {
    content = (
      <AllProd
        state={state}
        handleItemClick={handleItemClick}
        handleShoppingClick={handleShoppingClick}
        bestProductAll={bestProductAll}
        pageRangeDisplayed={state.maxPage}
        totalItemsCount={state.pageCount}
      />
    );
  } else if (state == null) {
    content = (
      <BestProd
        bestProductAll={bestProductAll}
        mainImage={mainImage}
        handleItemClick={handleItemClick}
        handleShoppingClick={handleShoppingClick}
        onPageChange={handlePageChange}
        pageRangeDisplayed={bestProductAll.maxPage}
        totalItemsCount={bestProductAll.pageCount}
      />
    );
  }

  return (
    <MainDiv>
      <div className="wrap">
        <div className="info">{content}</div>
      </div>
    </MainDiv>
  );
};

export default SearchList;
