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

//제일 많이 팔린 상품
export const getBestProduct = async () => {
  try {
    const res = await axios.get(`/api/main/bestproduct`);
    const result = res.data;
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