import styled from "@emotion/styled";

export const OrderWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 5rem;
  margin: 0 auto;
  max-width: 140rem;
  @media screen and (max-width: 1024px) {
    padding: 2rem;
    min-width: 40rem;
    flex-direction: column;
    justify-content: center;
    gap: 3rem 0;
  }
`;
export const OrderInfo = styled.div`
  width: 60%;
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 2rem;
    padding-top: 2rem;
  }
  hr {
    margin-top: 1rem;
    border: 0;
    height: 0.1rem;
    background: black;
  }
  p {
    text-align: center;
    font-size: 2rem;
    width: 9rem;
    height: 3rem;
    line-height: 3rem;
  }
  input {
    width: 70%;
    border-radius: 0.8rem;
    border: 0.1rem solid;
  }
  .user-text {
    padding: 1rem 0;
    border-bottom: 0.1rem solid rgba(0, 0, 0, 0.3);
    .user-info {
      display: flex;
      padding: 2rem 0;
      gap: 3rem;
    }
  }
  .request-box {
    padding-bottom: 1rem;
    border-bottom: 0.1rem solid rgba(0, 0, 0, 0.3);
    .message {
      display: flex;
      padding: 2rem 0;
      gap: 3rem;
    }
  }
  .point-wrap {
    .point-box {
      padding: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 0.1rem solid rgba(0, 0, 0, 0.3);
      .point-view {
        display: flex;
        align-items: center;
      }
      .point-text {
        width: 60%;
        display: flex;
        justify-content: space-evenly;
        input {
          height: 3rem;
          padding: 0 1.5rem;
          width: 50%;
        }
        button {
          width: 8rem;
          height: 3rem;
          border: 0.1rem solid #000;
          border-radius: 1rem;
          background: #fff;
          line-height: 3rem;
          cursor: pointer;
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    width: 80%;
    min-width: 40rem;
    margin: 0 auto;
    h3 {
      font-size: 1.5rem;
      padding-top: 1rem;
    }
    p {
      font-size: 1.5rem;
    }
    input {
      width: 70%;
      border-radius: 0.8rem;
      border: 0.1rem solid;
    }
    .user-text {
      .user-info {
        padding: 1rem 0;
      }
    }
    .request-box {
      .message {
        padding: 1rem 0;
      }
    }
    .point-wrap {
      .point-box {
        padding: 1rem 0;
      }
    }
  }
`;
export const OrderPay = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4rem;
  border-radius: 2rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.3);
  padding: 3rem;
  margin: auto 0;
  h2 {
    font-size: 2.5rem;
  }
  .paywrap {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transform: translateY(-10%);
  }
  .price {
    display: flex;
    justify-content: space-between;
    padding: 3rem 0;
    font-size: 2rem;
  }
  .order_btn {
    width: 100%;
    border-radius: 1rem;
    margin-top: 2rem;
    height: 5rem;
    line-height: 5rem;
    text-align: Center;
    background: #f5f5dc;
    color: #000;
    font-weight: bold;
    font-size: 2rem;
    cursor: pointer;
  }
  @media screen and (max-width: 1024px) {
    width: 80%;
    margin: 0 auto;
    gap: 0;
    min-width: 40rem;
    h2 {
      margin-bottom: 1rem;
    }
    .price {
      font-size: 1.5rem;
      padding: 1rem 0;
    }
    .order_btn {
      margin: 0;
    }
  }
`;
