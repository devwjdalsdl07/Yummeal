import styled from "@emotion/styled";

export const LoginContainer = styled.div`
  position: relative;
  height: calc(100vh - 150px);
  /* background: #f5f5f5; */
  background: #f9f6f1;
  .login-area {
    /* position: absolute; */
    width: 600px;
    margin: 0 auto;
    padding-bottom: 140px;
    /* left: 50%; */
    /* top: 20%; */
  }
  .login-text {
    padding-top: 50px;
    text-align: center;
    font-size: 30px;
    font-weight: 500;
    padding-bottom: 20px;
    cursor: pointer;
  }
  .login-wrap {
    position: relative;
    background: #fff;
    padding: 40px;
    border-radius: 20px;
    /* width: 100%;
    margin-left: auto;
    margin-right: auto; */
    /* display: flex;
    flex-wrap: wrap;
    justify-content: center; */
  }
  .login-form {
    font-size: 14px;
    /* width: 20px; */
    margin: 0 auto;
    & input {
      padding: 3px 15px;
      background-color: #fff;
      border: 1px solid #ccc;
      font-size: 13px;
      border-radius: 10px;
      margin: 10px 0;
    }
  }
  .id-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    & span {
      /* font-size: 14px; */
      margin-top: 10px;
      color: #000;
    }
  }
  .pw-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
    & span {
      color: #000;
    }
  }
  .login-btn {
    width: 100%;
    position: relative;
    margin-top: 20px;
    background: #f9f6f1;
    border: 1px solid #f9f6f1;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    & span {
      position: absolute;
      transform: translate(-50%, -50%);
      left: 50%;
      top: 50%;
      /* color: #000; */
      margin: 0 auto;
      text-align: center;
    }
  }
  .login-find {
    margin-top: 20px;
    display: flex;
    justify-content: end;
    font-size: 14px;
    cursor: pointer;
    & li {
      font-weight: 500;
    }
    & li:last-child::before {
      display: inline-block;
      content: "";
      width: 1px;
      height: 8px;
      background: #ccc;
      vertical-align: middle;
      margin: 0 8px 0 8px;
    }
  }
  .sns-login {
    margin: 53px 0 40px 0;
    cursor: pointer;
    & ul {
      /* text-align: center; */
      background: #fee500;
      border-radius: 10px;
    }
    & li {
      padding: 8px;
      display: flex;
      justify-content: start;
      align-items: center;
      font-size: 16px;
      font-weight: 500;
    }
  }
  @media screen and (max-width: 1024px) {
    .login-area {
      width: 400px;
    }
    .login-text {
      font-size: 25px;
      /* font-weight: 500; */
      margin-bottom: 25px;
    }
  }
`;
