import styled from "@emotion/styled";

export const ShopWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  padding: 10rem;
  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
    gap: 1.5rem 0;
  }
`;
export const Cart = styled.div`
  width: 60%;
  padding: 2rem;
  h2 {
    font-size: 2.5rem;
  }
  hr {
    margin: 1rem 0;
    border: 0;
    height: 0.1rem;
    background: black;
  }
  @media screen and (max-width: 1024px) {
    width: 80%;
    min-width: 45rem;
  }
`;
export const Payment = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 2rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.3);
  padding: 3rem;
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
    background: beige;
    color: black;
    font-weight: bold;
    font-size: 2rem;
    cursor: pointer;
  }
  @media screen and (max-width: 1024px) {
    width: 80%;
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
