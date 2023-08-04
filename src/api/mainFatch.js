import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

//상품 상세 페이지
export const getProductId = async _productId => {
  try {
    const res = await axiosInstance.get(`/api/product?productId=${_productId}`);
    const result = res.data;
    console.log("getProductId 요청완료 성공!!");
    return result;
  } catch (err) {
    console.log(err);
    return [];
  }
};
