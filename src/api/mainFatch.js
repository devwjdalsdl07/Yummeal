import axios from "axios";
import { instance } from "./client";


//2차 axios //상품 상세 페이지
export const getProductId = async _productId => {
  try {
    const res = await axios.get(
      `/api/product/{productId}?productId=${_productId}`,
    );
    const result = res.data;
    return result;
  } catch (err) {
    console.log(err);
    return {};
  }
};

// 2차 axios   //기본으로 보여줄 상품(전체 상품)
export const getMain = async _page => {
  try {
    const res = await axios.get(`/api/main?check=1&page=${_page}&row=16`);
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
    const res = await axios.get(`/api/main?check=3&page=1&row=6`);
    const result = res.data;
    return result;
  } catch (err) {
    console.log(err);
  }
};

//회원 자녀의 개월에 따라 상품추천(로그인)
export const getRecommend = async () => {
  try {
    const res = await instance.get(`/api/main?check=2&page=1&row=6`);
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
    const res = await axios.get(`/api/main?check=4&page=1&row=8`);
    const result = res.data;
  
    return result;
  } catch (err) {
    console.log(err);
  }
};
//제일 많이 팔린 상품 더보기
export const getBestProductAll = async _page => {
  try {
    const res = await axios.get(`/api/main?check=5&page=${_page}&row=16`);
    const result = res.data;
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
    return result;
  } catch (err) {
    console.log(err);
  }
};


// 상품 리뷰 작성 
export const postReview = async (data) => {
  try {
    const res = await instance.post(`/api/product/review`, data);
    const result = res.data;
    console.log("postReview 요청성공!!", result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

//상품 리뷰 조회
export const getReview = async (reviewId)=>{
  try {
    const res = await axios.get(`/api/product/review/${reviewId}`);
    const result = res.data;
    console.log("getReview 요청성공!!", result);
    return result;
  } catch (err) {
    console.log(err);
  }
}