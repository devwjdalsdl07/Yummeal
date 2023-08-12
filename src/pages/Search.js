import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { cartIn } from "../api/cartaxios";
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

  return (
    <SearchWrap>
      <div className="wrap">
        <SortFilter product={product} setSearchData={setSearchData} />
        <div className="info">
          <SearchProd
            product={product}
            handleItemClick={handleItemClick}
            searchData={searchData}
            setSearchData={setSearchData}
            handleShoppingClick={handleShoppingClick}
          />
          <Paging onPageChange={handlePageChange} />
        </div>
      </div>
    </SearchWrap>
  );
};

export default Search;
