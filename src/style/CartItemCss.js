import styled from "@emotion/styled";

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .list {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    border-bottom: 0.1rem solid rgba(0, 0, 0, 0.3);
    padding: 2rem 0;
  }
  .prodwrap {
    display: flex;
    align-items: center;
    width: 70%;
    .prod_text {
      padding-left: 2rem;
      p {
        padding: 0.5rem 0;
        font-size: 2rem;
      }
    }
  }
  .prod_info {
    width: 30%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10rem;
    padding-right: 1rem;
    font-size: 2rem;
    .counter {
      padding: 0 1rem;
      display: flex;
      gap: 2rem;
      .counter_btn {
        cursor: pointer;
      }
      .counter_number {
        width: 3rem;
        text-align: center;
      }
    }
    i {
      cursor: pointer;
      vertical-align: 0;
      &:hover {
        color: rgba(255, 0, 0, 0.5);
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .prodwrap {
      img {
        width: 10rem;
        height: 10rem;
      }
      .prod_text {
        p {
          font-size: 1.5rem;
        }
      }
    }
    .prod_info {
      font-size: 1.5rem;
      gap: 7rem;
    }
  }
  @media screen and (max-width: 800px) {
    .prodwrap {
      min-width: 20rem;
    }
    .prod_info {
      min-width: 13rem;
      gap: 2rem;
    }
  }
`;
