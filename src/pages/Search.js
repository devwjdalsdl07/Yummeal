import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { searchResult } from "../api/axios";
import { cartIn } from "../api/client";
import Paging from "../components/Paging";
import SearchProd from "../components/SearchProd";
import SortFilter from "../components/SortFilter";
import { SearchWrap } from "../style/SearchCss";

const Search = () => {
  const [searchData, setSearchData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const { state } = location;
  const product = state?.product;
  const navigate = useNavigate();
  const isLoggedIn = sessionStorage.getItem("accessToken") ? true : false;

  // 검색 결과 불러오기
  const searchRes = async () => {
    const result = await searchResult(product, 1);
    setSearchData(result);
    console.log("검색결과 뭐 넘어와", searchData);
    return result;
  };

  useEffect(() => {
    searchRes();
  }, [product]);

  // 제품 상세정보 이동
  const handleItemClick = _id => {
    navigate(`/product/${_id}`);
  };

  // 페이지네이션 기능
  const handleSearchPaging = _page => {
    searchResult(product, _page);
  };

  // 장바구니 담기
  const handleShoppingClick = async _item => {
    console.log(_item.productid);
    if (isLoggedIn) {
      try {
        const cartItem = {
          productId: _item.productid,
          count: 1,
        };
        const result = await cartIn(cartItem);
        setShowModal(true);
        return result;
      } catch (err) {
        console.error("주문 처리 중 오류 발생:", err);
      }
    } else {
      const baskets = JSON.parse(localStorage.getItem("baskets") ?? "[]");
      const existingItemIndex = baskets.findIndex(
        item => item.productId === _item.productid,
      );
      console.log(existingItemIndex);
      if (existingItemIndex === -1) {
        const item = {
          productId: _item.productid,
          count: 1,
          name: _item.name,
          thumbnail: _item.thumbnail,
          price: _item.price,
        };
        baskets.push(item);
      } else {
        baskets[existingItemIndex].count += 1;
      }
      localStorage.setItem("baskets", JSON.stringify(baskets));
      setShowModal(true);
    }
  };

  return (
    <SearchWrap>
      <div className="wrap">
        <SortFilter product={product} setSearchData={setSearchData} />
        <div className="info">
          <SearchProd
            product={product}
            handleItemClick={handleItemClick}
            searchData={searchData}
            handleShoppingClick={handleShoppingClick}
            setShowModal={setShowModal}
            showModal={showModal}
          />
          <Paging
            onPageChange={handleSearchPaging}
            pageRangeDisplayed={searchData.maxpage}
            totalItemsCount={searchData.count}
          />
        </div>
      </div>
    </SearchWrap>
  );
};

export default Search;
