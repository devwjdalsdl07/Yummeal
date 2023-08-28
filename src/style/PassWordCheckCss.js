import styled from "@emotion/styled";

export const PasswordCheckWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .info-wrap {
    margin-top: 40px;
    .menu-title-area {
      padding-bottom: 25px;
      margin-bottom: 25px;
      border-bottom: 1px solid #000;
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
    }
  }
`;
