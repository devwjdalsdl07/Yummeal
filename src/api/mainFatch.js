import axios from "axios";
import { instance } from "./client";

//상품 상세 페이지
export const getProductId = async _productId => {
  try {
    const res = await axios.get(`/api/product?productId=${_productId}`);
    const result = res.data;
    console.log("getProductId 요청완료 성공!!", result);
    return result;
  } catch (err) {
    console.log(err);
    return {};
  }
};

//기본으로 보여줄 상품(전체 상품)
export const getMain = async _page => {
  try {
    const res = await axios.get(`/api/main?page=${_page}&row=16`);
    const result = res.data;
    console.log("getMain 요청성공!!", result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

//램덤으로 상품추천(비로그인)
export const getRandom = async () => {
  try {
    const res = await axios.get(`/api/main/random`);
    const result = res.data;
    console.log("getRandom 요청성공!!", result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

//회원 자녀의 개월에 따라 상품추천(로그인)
export const getRecommend = async () => {
  try {
    const res = await instance.get(`/api/main/recommend?row=6`);
    const result = res.data;
    console.log("getRecommend 요청성공!!", result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

//제일 많이 팔린 상품
export const getBestProduct = async () => {
  try {
    const res = await axios.get(`/api/main/bestproduct`);
    const result = res.data;
    console.log("getBestProduct 요청성공!!", result);
    return result;
  } catch (err) {
    console.log(err);
    //   return [{
    //     "productId": 2,
    //     "thumbnail": "main2.pic",
    //     "title": "과일",
    //     "name": "사과",
    //     "price": 20000,
    //     "quantity": 200,
    //     "volumn": 20
    //   },
    //   {
    //     "productId": 4,
    //     "thumbnail": "main4.png",
    //     "title": "덮밥",
    //     "name": "연어덮밥",
    //     "price": 9000,
    //     "quantity": 40,
    //     "volumn": 10
    //   },
    //   {
    //     "productId": 6,
    //     "thumbnail": "porridge.png",
    //     "title": "미음",
    //     "name": "고구마미음",
    //     "price": 1100,
    //     "quantity": 494,
    //     "volumn": 7
    //   },
    //   {
    //     "productId": 5,
    //     "thumbnail": "main5.png",
    //     "title": "파스타",
    //     "name": "봉골레파스타",
    //     "price": 20000,
    //     "quantity": 27,
    //     "volumn": 5
    //   }
    // ]
  }
};
//제일 많이 팔린 상품 더보기
export const getBestProductAll = async _page => {
  try {
    const res = await axios.get(
      `/api/main/bestproduct/all?page=${_page}&row=16`,
    );
    const result = res.data;
    console.log("getBestProductAll 요청성공!!", result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

//상품 상세페이지 바로구매하기 버튼

export const getProduct = async _productId => {
  try {
    const res = await instance.get(`/api/buy/product?productId=_productId`);
    const result = res.data;
    console.log("getProduct 요청성공!!", result);
    return result;
  } catch (err) {
    console.log(err);
  }
};
