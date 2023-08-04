import styled from "@emotion/styled";

export const OrderListContainer = styled.div`
  width: 80%;
  min-height: 300px;
  .top {
    width: 100%;
    height: 50px;
    border-bottom: 2px solid;
    h3 {
      display: inline-block;
      font-size: 20px;
    }
    span {
      font-size: 20px;
      strong {
        margin-left: 5px;
        color: red;
      }
    }
  }
  .button-wrap {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    margin-bottom: 50px;
    @media screen and (max-width:600px){
    margin-bottom: 10px;
    }
    .active {
      background: pink;
      color: #fff;
    }
    span {
      width: 20%;
      padding: 15px 0;
      text-align: center;
      display: inline-block;
      font-size: 16px;
      border-radius: 10px;
      background: #eee;
      cursor: pointer;
    }
  }
  .text-wrap {
    text-align: center;
    span {
      font-size: 30px;
      font-weight: 700;
      color: grey;
    }
  }
`;
