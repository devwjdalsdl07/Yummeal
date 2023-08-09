import styled from "@emotion/styled";

export const OrderNumberContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  height: 150px;
  border-bottom: 2px solid #eee;
  align-items: center;
  @media screen and (max-width: 950px) {
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    height: auto;
    margin-top: 10px;
  }
  > div {
    height: 100px;
    @media screen and (max-width: 600px) {
      height: auto;
    }
  }
  .orderInfo {
    display: flex;
    width: 15%;
    justify-content: space-evenly;
    flex-direction: column;
    @media screen and (max-width: 950px) {
      width: 100%;
      flex-direction: row;
      justify-content: space-evenly;
      height: auto;
    }
    @media screen and (max-width: 600px) {
      justify-content: space-between;
      flex-direction: row;
      width: 80%;
    }
    .orderDate {
      margin-left: 20px;
      margin-bottom: 5px;
      p {
        font-size: 12px;
        color: grey;
      }
      span {
        font-size: 15px;
      }
    }
    .orderNum {
      margin-left: 20px;
      p {
        font-size: 12px;
        color: grey;
      }
      span {
        font-size: 15px;
      }
    }
  }
  .itemInfo {
    display: flex;
    width: 50%;
    @media screen and (max-width: 600px) {
      width: 100%;
    }
    .imgWrap {
      display: flex;
      align-items: center;
      img {
        width: 80px;
        height: 80px;
      }
    }
    .titleWrap {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 10px;
      p {
        font-size: 15px;
        color: grey;
      }
      span {
        font-size: 20px;
      }
    }
  }
  .orderPrice {
    display: flex;
    align-items: center;
    strong {
      font-size: 18px;
    }
    span {
      margin-left: 3px;
      font-size: 15px;
    }
  }
  .delivery {
    display: flex;
    align-items: center;
    span {
      font-size: 15px;
    }
  }
  .responsive {
    display: flex;
    gap: 50px;
    @media screen and (max-width: 600px) {
      width: 100%;
      display: flex;
      justify-content: space-around;
    }
  }
`;
