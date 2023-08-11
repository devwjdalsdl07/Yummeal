import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { searchResult } from "../api/cartaxios";
import Paging from "../components/Paging";
import SortFilter from "../components/SortFilter";
import { SearchWrap } from "../style/SearchCss";

const Search = () => {
  const [searchData, setSearchData] = useState([]);
  const location = useLocation();
  const { state } = location;
  console.log("서치페이지 정보", state);
  const product = state?.product;
  const navigate = useNavigate();

  // 검색 결과 get
  const searchRes = async () => {
    const result = await searchResult(product);
    setSearchData(result.dto);
    return result;
  };

  useEffect(() => {
    searchRes();
  }, [product]);

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

  const handlePageChange = newPage => {};

  return state.cateId ? (
    <SearchWrap>
      <div className="wrap">
        <SortFilter product={product} setSearchData={setSearchData} />
        <div className="info">
          <div className="best-item">
            <h1 className="best-title">
              {state.cateId}단계{" "}
              {state.subCate == undefined
                ? "상품"
                : `${getCategoryLabel(state.subCate)} 상품`}
            </h1>
          </div>
          <ul className="list-area">
            {state.list?.map((item, productId) => (
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
          <Paging onPageChange={handlePageChange} />
        </div>
      </div>
    </SearchWrap>
  ) : (
    <SearchWrap>
      <div className="wrap">
        <SortFilter product={product} setSearchData={setSearchData} />
        <div className="info">
          <div className=" best-item">
            <h1 className="best-title">{product ? `${product} 검색결과` : ""}</h1>
          </div>
          <ul className="list-area">
            {searchData?.map((item, productId) => (
              <div key={productId}>
                <li>
                  <div className="product-card">
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
    </SearchWrap>
  );
};

export default Search;
