import styled from "@emotion/styled";

export const ShopWrap = styled.div`
  background: #f9f6f1;
  .wrap {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    margin: 0 auto;
    padding: 5rem;
    width: 100%;
    max-width: 140rem;
    @media screen and (max-width: 1024px) {
      padding: 3rem;
      min-width: 40rem;
    }
  }
`;
export const Cart = styled.div`
  position: relative;
  padding: 2rem;
  h2 {
    font-size: 2.5rem;
  }
  button {
    position: absolute;
    right: 3%;
    top: 4%;
  }
  hr {
    margin-top: 1rem;
    border: 0;
    height: 0.1rem;
    background: black;
  }
  @media screen and (max-width: 1024px) {
    min-width: 39rem;
  }
`;
export const Payment = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 2rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.3);
  padding: 3rem;
  margin: 0 auto;
  h2 {
    font-size: 2.5rem;
  }
  .paywrap {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .price {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    border: 1px solid #d1d1d1;
    color: #3f3f3f;
    background-color: #fff;
    font-weight: bold;
    font-size: 2rem;
    cursor: pointer;
    &:hover {
      background-color: #8eb111;
      color: white;
    }
  }
  @media screen and (max-width: 1024px) {
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
export const NotList = styled.div`
  margin: 0 auto;
  max-width: 140rem;
  width: 80rem;
  height: 80rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .wrap {
    margin: 10rem 0;
  }
  .icon-box {
    .fa-cart-arrow-down {
      font-size: 10rem;
      color: #8eb111;
    }
  }
  .text-box {
    p {
      padding: 1.5rem;
      font-size: 3rem;
    }
    button {
      border-radius: 0.8rem;
      background: #fff;
      padding: 1rem;
      margin-top: 3rem;
      font-size: 1.5rem;
      border: 1px solid #d1d1d1;
      color: #3f3f3f;
      cursor: pointer;
      &:hover {
        background-color: #8eb111;
        color: white;
      }
    }
  }
`;
