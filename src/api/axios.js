import axios from "axios";
import UserInfo from "../components/UserInfo";
import { instance } from "./client";

//회원가입 post
export const postSignUp = async _Item => {
  console.log(_Item);
  try {
    const res = await axios.post("/api/user/sign-up", _Item);
    const result = res.data;
    console.log("해언가입설ㅇ공");
    return result;
  } catch (err) {
    console.log(err);
  }
};

//아이 정보 get
// export const getChildInfo = async () => {
//   try {
//     const res = await axios.get("/baby");
//     const result = {};
//     return result;
//   } catch (err) {
//     console.log(err);
//   }
// };

//아이 정보 post
export const postChildInfo = async _childInfo => {
  console.log(_childInfo);
  try {
    const res = await instance.post(`/api/baby`, _childInfo);
    const result = res.data;
    console.log("아이 정보 post tjdrhd ~");
    return result;
  } catch (err) {
    console.log(err);
  }
};

// 아이 정보 put
export const putChildInfo = async _childInfo => {
  try {
    const res = await instance.put(`/api/baby`, _childInfo);
    const result = res.data;
    console.log("수정 완료 데스 ~", result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

// 아이디 중복확인 post
export const postIdCheck = async _email => {
  try {
    const res = await axios.post(`/api/user/id?uid=${_email}`);
    const result = res.data;
    return result;
  } catch (err) {
    console.log(err);
  }
};

// 닉네임 중복확인 get
export const getNickNameCheck = async _nickName => {
  try {
    const res = await axios.get(`/api/user/nickname?nickname=${_nickName}`);
    const result = res.data;
    return result;
  } catch (err) {
    console.log(err);
  }
};

// 정보 수정 비밀번호 체크
export const postPassWordCheck = async _passWord => {
  try {
    const res = await instance.post(`/api/mypage/checkpw?upw=${_passWord}`);
    const result = res.data;
    // console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
  return <UserInfo />;
};

// 검색 결과 get
export const searchResult = async (_product, _page) => {
  try {
    const res = await axios.get(
      `/api/search?product=${_product}&page=${_page}&row=16`,
    );
    const result = res.data;
    console.log("검색결과 : ", result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

// 필터 정렬 get
export const filterSort = async (product, sorter, allergyStrings) => {
  try {
    const res = await axios.get(
      `/api/search?product=${product}&page=1&row=16&sorter=${
        sorter ? sorter : 0
      }&filter=${allergyStrings[0] ? allergyStrings[0] : 0}&filter=${
        allergyStrings[1] ? allergyStrings[1] : 0
      }&filter=${allergyStrings[2] ? allergyStrings[2] : 0}&filter=${
        allergyStrings[3] ? allergyStrings[3] : 0
      }&filter=${allergyStrings[4] ? allergyStrings[4] : 0}&filter=${
        allergyStrings[5] ? allergyStrings[5] : 0
      }&filter=${allergyStrings[6] ? allergyStrings[6] : 0}&filter=${
        allergyStrings[7] ? allergyStrings[7] : 0
      }&filter=${allergyStrings[8] ? allergyStrings[8] : 0}&filter=${
        allergyStrings[9] ? allergyStrings[9] : 0
      }&filter=${allergyStrings[10] ? allergyStrings[10] : 0}&filter=${
        allergyStrings[11] ? allergyStrings[11] : 0
      }&filter=${allergyStrings[12] ? allergyStrings[12] : 0}&filter=${
        allergyStrings[13] ? allergyStrings[13] : 0
      }&filter=${allergyStrings[14] ? allergyStrings[14] : 0}&filter=${
        allergyStrings[15] ? allergyStrings[15] : 0
      }&filter=${allergyStrings[16] ? allergyStrings[16] : 0}&filter=${
        allergyStrings[17] ? allergyStrings[17] : 0
      }&filter=${allergyStrings[18] ? allergyStrings[18] : 0}&filter=${
        allergyStrings[19] ? allergyStrings[19] : 0
      }`,
    );
    const result = res.data;
    console.log("검색필터결과 : ", result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

// 카테고리 메뉴 get
export const menuCate = async () => {
  try {
    const res = await axios.get("/api/cate/list");
    const result = res.data;
    console.log("카테고리 메뉴 : ", result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

// 메뉴 클릭 시 품목 get
export const cateProdList = async (_page, cateId, subCateId) => {
  console.log("카테액시오스 순서 테스트", _page, cateId, subCateId);
  try {
    const res = await axios.get(
      `/api/cate?cateId=${cateId}&cateDetailId=${subCateId}`,
    );
    const result = res.data;
    console.log("통신되는데 : ", result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

// 상세정보 바로구매 get
export const quickBuy = async (_productId, count) => {
  try {
    const res = await axios.get(
      `/api/buy/product?productId=${_productId}&count=${count}`,
    );
    const result = res.data;
    return result;
  } catch (err) {
    console.log(err);
  }
};
