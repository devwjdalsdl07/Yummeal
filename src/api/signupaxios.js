import axios from "axios";

//회원가입 post
export const postSignUp = async _Item => {
  try {
    const res = await axios.post("/sign-api/sign-up", _Item);
    const result = res.data;
    console.log("해언가입설ㅇ공")
    return result;
  } catch (err) {
    console.log(err);
    
  }
};
