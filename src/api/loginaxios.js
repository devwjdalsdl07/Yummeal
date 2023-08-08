import axios from "axios";
import { getCookie } from "./cookie";

// 회원가입 post
export const postLogin = async () => {
  try {
    const res = await axios.post("/sign-api/sign-in");
    const result = res.data;
    return result;
  } catch (err) {
    console.log(err);
  }
};

