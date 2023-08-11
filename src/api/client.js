import axios from "axios";
import { getCookie, removeCookie, setCookie } from "./cookie";

export const instance = axios.create({
  baseURL: "http://localhost:3000",
  // timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  async config => {
    // 여기서 작업을 수행합니다. 예: 토큰 작업 및 헤더 변경
    const token = await getCookie("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; // 헤더에 토큰을 추가합니다.
    }
    return config;
  },
  error => {
    // 요청 오류 처리
    return Promise.reject(error);
  },
);
// 로그인
export const fetchLogin = async (id, pw) => {
  console.log("fetchLogin 진행");
  try {
    const res = await instance.post(`/sign-api/sign-in`, {
      email: id,
      password: pw,
    });
    console.log("넘어온 데이터 : ", res.data);
    const result = await res.data;
    setCookie("refreshToken", result.refreshToken, {
      path: "/",
      // secure: true,
      // sameSite: "none",
      // httpOnly: true,
    });
    setCookie("accessToken", result.accessToken, {
      path: "/",
      // secure: true,
      // sameSite: "none",
      // httpOnly: true,
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

// 로그아웃 post
export const postLogout = async () => {
  try {
    const res = await instance.post("/sign-api/logout");
    console.log("로그아웃");
    removeCookie("accessToken");
    removeCookie("refreshToken");
    const result = await res.data;
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const getUser = async _iuser => {
  try {
    const res = await instance.get(`/api/mypage/profile?iuser=${_iuser}`);
    const result = {
      iuser: res.data.iuser,
      email: res.data.email,
      name: res.data.name,
      mobileNb: res.data.mobileNb,
      zipcode: res.data.zipcode,
      address: res.data.address,
      addressDetail: res.data.addressDetail,
      nickNm: res.data.nickNm,
      point: res.data.point,
      birthday: res.data.birthday,
    };
    return result;
  } catch (err) {
    console.log(err);
  }
};
export const getOrderList = async (_date) => {
  try {
    const res = await instance.get(`/api/mypage/orderlist?month=${_date}`);
    const result = res.data;
    console.log(result);
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
export const fetchUserInfo = async _data => {
  console.log(_data);
  try {
    const res = await instance.patch(`/api/mypage/profile`, _data);
    const result = res.data;
    console.log("유저 패치 진행 : ", result);
    return result;
  } catch (err) {
    console.log(err);
  }
};
// 회원 탈퇴
export const deleteUser = async () => {
  try {
    const res = await instance.delete("/api/mypage/profile");
    const result = res.data;
    return result;
  } catch (err) {
    console.log(err);
  }
};
