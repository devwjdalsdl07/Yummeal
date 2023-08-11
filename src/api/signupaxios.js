import axios from "axios";

//회원가입 post
export const postSignUp = async _Item => {
  try {
    const res = await axios.post("/sign-api/sign-up", _Item);
    const result = res.data;
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const postEmail = async _email => {
  try {
    const res = await axios.post(`/sign-api/email?email=${_email}`);
    const result = res.data;
    console.log(result);
    console.log("이메일중복확인 axios");
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const postNickName = async _name => {
  try {
    const res = await axios.post(`/sign-api/nickname?nickname=${_name}`)
    const result = res.data
    console.log("닛ㄱ네임중복검사 실행", result)
    return result
  }catch(err){
    console.log(err)
  }
}