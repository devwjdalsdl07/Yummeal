import styled from "@emotion/styled";

export const ShopWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  margin: 0 auto;
  padding: 5rem;
  @media screen and (max-width: 1024px) {
    padding: 3rem;
    min-width: 50rem;
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
    margin: 1rem 0;
    border: 0;
    height: 0.1rem;
    background: black;
  }
  @media screen and (max-width: 1024px) {
    min-width: 45rem;
  }
`;
export const Payment = styled.div`
  width: 80%;
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
    background: beige;
    color: black;
    font-weight: bold;
    font-size: 2rem;
    cursor: pointer;
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
