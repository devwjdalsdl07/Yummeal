import axios from "axios";

//상품 상세 페이지
export const getProductId = async _productId => {
  try {
    const res = await axios.get(`/api/product?productId=${_productId}`);
    const result = res.data;
    console.log("getProductId 요청완료 성공!!");
    return result;
  } catch (err) {
    console.log(err);
    return {};
  }
};

//기본으로 보여줄 상품(비로그인)
export const getMain = async (_paige, _row) => {
  try {
    const res = await axios.get(`/api/main?paige=1&row=16`);
    const result = res.data;
    console.log("getMain 요청성공!!");
    return result;
  } catch (err) {
    console.log(err);
  }
};

//회원 자녀의 개월에 따라 상품추천(로그인)
export const getRecommend = async (_iuser, _row) => {
  try {
    const res = await axios.get(`/api/main/recommend?iuser=1&row=16`);
    const result = res.data;
    console.log("getRecommend 요청성공!!");
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
    console.log("getBestProduct 요청성공!!");
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
export const getBestProductAll = async () => {
  try {
    const res = await axios.get(`/api/main/bestproduct/all?page=1&row=16`);
    const result = res.data;
    console.log("getBestProductAll 요청성공!!");
    return result;
  } catch (err) {
    console.log(err);
  }
};
