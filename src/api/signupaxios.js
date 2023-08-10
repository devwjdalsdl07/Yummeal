import axios from "axios";

//회원가입 post
export const postSignUp = async _Item => {
  try {
    const res = await axios.post("/sign-api/sign-up", _Item);
    const result = res.data;
    console.log("해언가입설ㅇ공");
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const postIdCheck = async _email => {
  try {
    const res = await axios.post(`/sign-api/email?email=${_email}`);
    const result = res.data;
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const postNickNameCheck = async _nickName => {
  try {
    const res = await axios.post(`/sign-api/nickname?nickname=${_nickName}`);
    const result = res.data;
    return result;
  } catch (err) {
    console.log(err);
  }
};
