import axios from "axios";

export const getOrderList = async (_iuser, _date) => {
  try {
    const res = await axios.get(
      `/api/mypage/orderlist?iuser=${_iuser}&month=${_date}`,
    );
    const result = res.data;
    return result;
  } catch (err) {
    [
      {
        orderId: 5,
        createdAt: "2023-08-04",
        thumbnail: "main1.pic",
        name: "닭고기파스타",
        price: 5000,
        shipment: "상품 준비중",
      },
      {
        orderId: 4,
        createdAt: "2023-08-02",
        thumbnail: "porridge.png",
        name: "고구마미음 외1개",
        price: 3300,
        shipment: "상품 준비중",
      },
      {
        orderId: 3,
        createdAt: "2023-07-26",
        thumbnail: "main5.png",
        name: "봉골레파스타",
        price: 40000,
        shipment: "상품 준비중",
      },
    ];
  }
};
export const getUserInfo = async _iuser => {
  try {
    const res = await axios.get(`/api/mypage/profile?iuser=${_iuser}`);
    const result = res.data;
    return result;
  } catch (err) {
    console.log(err);
  }
};
export const fetchUserInfo = async (_data) => {
  try {
    const res = await axios.patch('/api/mypage/profile', _data);
    const result = res.data;
    console.log("유저 패치 진행 : ", result);
    return result;
  } catch (err) {
    console.log(err);
  }
};
