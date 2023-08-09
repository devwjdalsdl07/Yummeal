import axios from "axios";
import { getCookie, setCookie } from "./cookie";

export const client = axios.create({
  baseURL: "http://localhost:3000",
  // timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    // withCredentials: true,
  },
});

// Request 처리
// export const ClientHeaders = token => {
//   client.interceptors.request.use(
//     config => {
//       // cookie를 활용 한 경우
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//       return config;
//     },
//     error => console.log(error),
//   );
// };

client.interceptors.request.use(
  config => {
    // cookie를 활용 한 경우
    const token = getCookie("accessToken");
    if (token) {
      config.headers.common["Authorization"] = `Bearer ${token}`;
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
    console.log(token);
    // ClientHeaders(token);
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
