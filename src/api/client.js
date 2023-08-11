import axios from "axios";
import { getCookie, removeCookie, setCookie } from "./cookie";
import { useDispatch } from "react-redux";
import { loginReducer } from "../reducers/userSlice";

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
// client.interceptors.request.use(
//   config => {
//     const token = getCookie("accessToken");
//     config.headers["Content-Type"] = "application/json";
//     config.headers["Authorization"] = `Bearer ${token}`;
//     if (!token) {
//       return config;
//     }
//     return config;
//   },
//   error => {
//     console.log(error);
//     return Promise.reject(error);
//   },
// );

// 쿠키 set 하기
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
