import styled from "@emotion/styled";

export const JoinContainer = styled.div`
  width: 80%;
  position: relative;
  margin-bottom: 100px;
  @media screen and (max-width: 1024px) {
    font-size: 25px;
    /* font-weight: 500; */
    margin-bottom: 25px;
  }
  .btnWrap {
    display: flex;
    justify-content: space-around;
  }
  .userDelete {
    border: none;
    background: transparent;
    color: crimson;
    cursor: pointer;
    float: right;
    margin-right: 15px;
    font-family: "Pretendard", "SUITE", sans-serif;
    font-weight: 500;
  }
`;
export const JoinArea = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;
export const JoinText = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  padding-bottom: 20px;
  cursor: pointer;
`;
export const JoinWrap = styled.div`
  position: relative;
  background: #fff;
  padding: 40px;
  border-radius: 20px;

  span {
    display: block;
    color: #000;
    font-size: 14px;
    font-weight: 500;
    /* width: 10%; */
  }
`;
export const JoinFormGroup = styled.div`
  font-size: 14px;
  /* width: 20px; */
  margin: 0 auto;
  margin-bottom: 10px;
  transform: translateX(25px);
  > div {
    margin-bottom: 13px;
  }
  i {
    color: #ff0000;
    font-size: 4px;
    margin-right: 5px;
    .fa-circle {
      transform: translateY(-4px);
    }
  }
  span {
    display: block;
    color: #000;
    font-size: 14px;
    font-weight: 500;
    /* width: 10%; */
  }
  input {
    padding: 3px 15px;
    background-color: #fff;
    border: 1px solid #ccc;
    font-size: 13px;
    border-radius: 10px;
    /* margin: 8px 0; */
    height: 45px;
    width: 90%;
  }
  /* .ant-picker .ant-picker-input > input:hover {
    border-color: #ccc;
  }
  .ant-picker .ant-picker-input > input:focus {
    border-color: #ccc;
  } */
  .adress {
    input {
      margin: 3px;
      height: 35px;
    }
  }
  .success {
    color: darkseagreen;
  }
  .error {
    color: crimson;
  }
`;
export const JoinTitleWrapTop = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #000;
  margin-bottom: 25px;
  h3 {
    padding-bottom: 10px;
    font-size: 18px;
  }
  div {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    i {
      color: #ff0000;
      font-size: 6px;
      margin-right: 5px;
      span {
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
`;
export const JoinId = styled.div`
  height: 75px;
`;
export const JoinNickNm = styled.div`
  height: 75px;
  .nmBox {
    display: flex;
    width: 90%;
    gap: 5%;
    button {
      border: none;
      background: transparent;
      cursor: pointer;
      background: #f9f6f1;
      border-radius: 10px;
      padding: 10px;
      font-size: 14px;
      font-weight: 500;
      font-family: "Pretendard", "SUITE", sans-serif;
    }
  }
  /* .success {
    color: darkseagreen;
  }
  .error {
    color: indianred;
  } */
`;
export const JoinPw = styled.div`
  /* display: flex;
  align-items: center; */
  height: 75px;
`;
export const JoinPwConfirm = styled.div`
  height: 75px;
`;
export const JoinBtn = styled.button`
  width: 45%;
  position: relative;
  margin: 20px 0px;
  background: #f9f6f1;
  border: 1px solid #f9f6f1;
  border-radius: 10px;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  height: 50px;
  cursor: pointer;
  font-family: "Pretendard", "SUITE", sans-serif;
  & span {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    /* color: #000; */
    margin: 0 auto;
    text-align: center;
  }
`;

export const ChildBirth = styled.div`
  .child {
    .css-13cymwt-control {
      /* height: 10px; */
      .css-1fdsijx-ValueContainer {
        /* text-align: center; */
        padding: 0 15px;
        .css-1jqq78o-placeholder {
          font-size: 14px;
          font-weight: 400;
          text-align: center;
          /* padding-left: 38px; */
          white-space: nowrap;
        }
      }
    }
  }
`;

export const AddChildBirth = styled.div`
  & button {
    background-color: white;
    border: 1px solid #d1d1d1;
    padding: 5px;
    border-radius: 10px;
    font-family: "Pretendard", "SUITE", sans-serif;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    margin-top: 10px;
    /* margin-bottom: 15px; */
    &:hover {
      background-color: #8eb111;
      color: white;
    }
  }
`;
