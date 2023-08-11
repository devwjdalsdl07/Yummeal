// // import axios from "axios";
// import { client } from "./client";
// import { setCookie } from "./cookie";

// //회원가입 post
// export const postLogin = async (id, pw) => {
//   try {
//     const res = await client.post(`/sign-api/sign-in`, {
//       email: id,
//       password: pw,
//     });
//     console.log("넘어온 데이터 : ", res.data);
//     const result = await res.data;
//     setCookie("refreshToken", result.refreshToken, {
//       path: "/",
//       secure: true,
//       sameSite: "none",
//       httpOnly: true,
//     });
//     setCookie("accessToken", result.accessToken, {
//       path: "/",
//       secure: true,
//       sameSite: "none",
//       httpOnly: true,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

