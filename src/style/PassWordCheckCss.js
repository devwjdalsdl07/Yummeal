import styled from "@emotion/styled";

export const PasswordCheckWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "Pretendard", "SUITE", sans-serif;

  .info-wrap {
    margin-top: 80px;
    .menu-title-area {
      padding-bottom: 25px;
      margin-bottom: 25px;
      border-bottom: 1px solid #ccc;
      h3 {
        font-size: 20px;
        line-height: 29px;
        font-weight: 600;
      }
    }
    .input-guide-box {
      height: 20%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;

      padding: 30px;
      border-radius: 10px;
      background: #fff;
      border: 1px solid #e7e7e7;
      margin-bottom: 25px;
      .txt-area {
        margin-left: 13px;
      }
      h4 {
        font-size: 16px;
        font-weight: 500;
        color: #83b111;
      }
      p {
        color: #000;
        line-height: 30px;
        font-size: 14px;
        letter-spacing: -0.5px;
      }
    }
    .input-group {
      width: 389px;
      margin-left: 45px;
      display: flex;
      justify-content: center;
      align-items: cneter;

      .input-text {
        margin: 0;
        padding: 3px 15px;
        background-color: #fff;
        border: 1px solid #ccc;
        font-size: 13px;
        border-radius: 10px;
        font-family: "Pretendard", "SUITE", sans-serif;
      }
      .input-group-btn {
        padding: 0 0 0 10px;
        position: relative;
        white-space: nowrap;
        width: 1%;
        vertical-align: middle;
        border: 0;
        button {
          font-family: "Pretendard", "SUITE", sans-serif;
          font-weight: 500;
          width: 100px;
          font-size: 15px;
          border: 1px solid #d1d1d1;
          color: #3f3f3f;
          background: #fff;
          border-radius: 10px;
          cursor: pointer;
          &:hover {
            background-color: #8eb111;
            color: white;
          }
        }
        span {
          line-height: 3.2;
        }
      }
    }
    .kakao-sns-login-box {
      background: #fee500;
      color: #313133;
      width: 390px;
      height: 52px;
      padding: 14px 0 13px 14px;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .logo {
        width: 25px;
        height: 25px;
        margin-right: 15px;
        float: left;
      }
      span {
        line-height: 24px;
        font-size: 16px;
      }
      p {
        font-family: "Pretendard", "SUITE", sans-serif;
        font-weight: 600;
      }
    }
  }
`;
