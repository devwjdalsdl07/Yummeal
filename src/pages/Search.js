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
  const location = useLocation();
  const { state } = location;
  const product = state?.product;
  const navigate = useNavigate();

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
          />
          <Paging onPageChange={handleSearchPaging} searchData={searchData} />
        </div>
      </div>
    </SearchWrap>
  );
};

export default Search;
