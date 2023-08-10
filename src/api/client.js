import axios from "axios";
import { getCookie, setCookie } from "./cookie";

export const client = axios.create({
  baseURL: "http://localhost:3000",
  // timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

// const cookieString = document.cookie;

// // 쿠키 문자열을 세미콜론(`;`)을 기준으로 분리하여 배열로 만듦
// const cookieArray = cookieString.split(";");

// // 각 쿠키 문자열을 순회하면서 accessToken 값을 찾음
// let accessToken = null;
// for (const cookie of cookieArray) {
//   const trimmedCookie = cookie.trim();
//   if (trimmedCookie.startsWith("accessToken=")) {
//     accessToken = trimmedCookie.substring("accessToken=".length);
//     console.log(accessToken);
//     break;
//   }
// }

// const setAccessToken = accessToken => {
//   client.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
// };

// Request 처리
export const ClientHeaders = token => {
  client.interceptors.request.use(
    config => {
      // cookie를 활용 한 경우
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => console.log(error),
  );
};

client.interceptors.request.use(
  config => {
    // cookie를 활용 한 경우
    const token = getCookie("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  error => console.log(error),
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
  try {
    const res = await client.post(`/sign-api/sign-in`, {
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
    const token = getCookie("accessToken");
    ClientHeaders(token);
    // setAccessToken(accessToken);
  } catch (error) {
    console.log(error);
  }
};

// 로그아웃 post
export const postLogout = async () => {
  try {
    const res = await client.post("/sign-api/logout");
    console.log("로그아웃");
    const result = await res.data;
    return result;
  } catch (err) {
    console.log(err);
  }
};
