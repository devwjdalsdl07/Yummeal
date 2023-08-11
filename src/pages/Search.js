import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { cartIn } from "../api/cartaxios";
import AllProd from "../components/AllProd";
import CateProd from "../components/CateProd";
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

console.log("스테이트에 뭐 담겨?", state);

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
  const handleItemClick = _id => {
    navigate(`/product/${_id}`);
  };

  const handlePageChange = () => {};

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

  let content;

  if (state.cartId) {
    content = (
      <CateProd
        state={state}
        handleItemClick={handleItemClick}
        handleShoppingClick={handleShoppingClick}
      />
    );
  } else if (state.product) {
    content = (
      <SearchProd
        product={product}
        getCategoryLabel={getCategoryLabel}
        handleItemClick={handleItemClick}
        searchData={searchData}
        setSearchData={setSearchData}
        handleShoppingClick={handleShoppingClick}
      />
    );
  } else {
    content = (
      <AllProd
        state={state}
        handleItemClick={handleItemClick}
        handleShoppingClick={handleShoppingClick}
      />
    );
  }
  return (
    <SearchWrap>
      <div className="wrap">
        <SortFilter product={product} setSearchData={setSearchData} />
        <div className="info">
          {content}
          <Paging onPageChange={handlePageChange} />
        </div>
      </div>
    </SearchWrap>
  );
};

export default Search;
