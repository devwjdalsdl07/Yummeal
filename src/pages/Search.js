import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { filterSort, searchResult } from "../api/cartaxios";
import Paging from "../components/Paging";
import { SearchWrap } from "../style/SearchCss";

// 정렬용 배열
const sortArr = [
  { value: 0, label: "판매량 많은 순" },
  { value: 1, label: "판매량 적은 순" },
  { value: 2, label: "가격 높은 순" },
  { value: 3, label: "가격 낮은 순" },
];
const allergyArr = [
  { value: 1, label: "난류" },
  { value: 2, label: "우유" },
  { value: 3, label: "메밀" },
  { value: 4, label: "땅콩" },
  { value: 5, label: "대두" },
  { value: 6, label: "밀" },
  { value: 7, label: "잣" },
  { value: 8, label: "호두" },
  { value: 9, label: "게" },
  { value: 10, label: "새우" },
  { value: 11, label: "오징어" },
  { value: 12, label: "고등어" },
  { value: 13, label: "조개류" },
  { value: 14, label: "복숭아" },
  { value: 15, label: "토마토" },
  { value: 16, label: "닭고기" },
  { value: 17, label: "돼지고기" },
  { value: 18, label: "소고기" },
  { value: 19, label: "아황산류" },
  { value: 20, label: "생선류" },
];

const Search = () => {
  const [searchData, setSearchData] = useState([]);
  const [selectSort, setSelectSort] = useState("");
  const [selectAllergy, setSelectAllergy] = useState([]);
  const location = useLocation();
  const { state } = location;
  const product = state?.product;
  const animatedComponents = makeAnimated();

  // 검색 결과 get
  const searchRes = async () => {
    const result = await searchResult(product);
    setSearchData(result);
    return result;
  };

  useEffect(() => {
    searchRes();
    setSelectSort("");
    setSelectAllergy([]);
    allergyStrings = [];
  }, [product]);

  // 정렬 기능 get
  const sortData = async () => {
    const item = {
      product: product,
      row: 16,
      page: 1,
      sorter: selectSort.value !== undefined ? selectSort.value : null,
      filter: allergyStrings,
    };
    console.log("아이템에 뭐 담기냐", item);
    const result = await filterSort(item);
    console.log(result);
    setSearchData(result);
    return result;
  };

  // 알레르기 value값
  const newAllergyData = selectAllergy.map(selected => selected.value);
  let allergyStrings = newAllergyData.map(value => value.toString());
  // console.log("알레르기 밸류 담기냐!?!?!?!", allergyStrings);

  // 정렬 기능이 선택될 때만 데이터 불러오기
  useEffect(() => {
    if (selectSort !== "") {
      sortData();
    } else if (selectAllergy.length > 0) {
      sortData();
    }
  }, [selectSort, selectAllergy]);

  const handleSortChange = sortArr => {
    setSelectSort(sortArr);
  };

  const handleAllergy = allergyArr => {
    setSelectAllergy(allergyArr);
  };

  return (
    <SearchWrap>
      <div className="wrap">
        <div className="searchbox">
          <h2>서치필터</h2>
          <div className="search-sort">
            <h3>정렬 기능</h3>
            <Select
              className="sortwrap"
              options={sortArr}
              onChange={sortArr => handleSortChange(sortArr)}
              placeholder="옵션을 선택하세요"
              value={selectSort}
              isSearchable={false}
            />
          </div>
          <div className="search-form">
            <h3>알러지</h3>
            <Select
              className="allergy"
              closeMenuOnSelect={false}
              components={animatedComponents}
              onChange={allergyArr => handleAllergy(allergyArr)}
              value={selectAllergy}
              isMulti
              options={allergyArr}
              placeholder="알러지를 선택하면 제외한 결과가 나타납니다"
              isSearchable={false}
            />
          </div>
        </div>
        <div className="info">
          <div className=" best-item">
            <h1 className="best-title">{product} 검색결과</h1>
          </div>
          <ul className="list-area">
            {searchData?.dto?.map((item, productId) => (
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
