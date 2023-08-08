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

// client.interceptors.request.use(
//   config => {
//     // cookie를 활용 한 경우
//     const token = getCookie("accessToken");
//     console.log(token);
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   error => console.log(error),
// );

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

// client.interceptors.response.use(
//   res => {
//     return res;
//   },
//   async error => {
//     // response에서 error가 발생했을 경우 catch로 넘어가기 전에 처리
//     try {
//       const errResponseStatus = error.response.status;
//       const errResponseData = error.response.data;
//       const prevRequest = error.config;

//       // access token이 만료되어 발생하는 에러인 경우
//       if (
//         errResponseData.error?.message === "jwt expired" ||
//         errResponseStatus === 401
//       ) {
//         const preRefreshToken = getCookie("refreshToken");
//         if (preRefreshToken) {
//           // refresh token을 이용하여 access token 재발급
//           const regenerateToken = async () => {
//             return await axios
//               .get(`/sign-api/refresh-token?refreshToken=${preRefreshToken}`)
//               .then(async res => {
//                 const { accessToken, refreshToken } = res.data;
//                 // 새로 받은 token들 저장
//                 setCookie("accessToken", accessToken, {
//                   path: "/" /*httpOnly: true */,
//                 });
//                 setCookie("refreshToken", refreshToken, {
//                   path: "/" /*httpOnly: true */,
//                 });

//                 // header 새로운 token으로 재설정
//                 prevRequest.headers.Authorization = `Bearer ${accessToken}`;

//                 // 실패했던 기존 request 재시도
//                 return await axios(prevRequest);
//               })
//               .catch(e => {
//                 /*
//                  token 재발행 또는 기존 요청 재시도 실패 시
//                  기존 token 제거
//                  */
//                 removeCookie("accessToken");
//                 removeCookie("refreshToken");
//                 window.location.href = "/";

//                 return new Error(e);
//               });
//           };
//           return await regenerateToken();
//         } else {
//           throw new Error("There is no refresh token");
//         }
//       }
//     } catch (e) {
//       // 오류 내용 출력 후 요청 거절
//       return Promise.reject(e);
//     }
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
    ClientHeaders(token);
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
