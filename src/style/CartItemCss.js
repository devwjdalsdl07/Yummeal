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
    .prod-img{
      width: 15rem;
      height: 15rem;
    }
    .prod-text {
      padding-left: 2rem;
      width: 30rem;
      p {
        padding: 0.5rem 0;
        font-size: 2rem;
      }
    }
  }
  .prod-info {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10rem;
    padding-right: 1rem;
    font-size: 2rem;
    p{
      width: 7rem;
      text-align: center;
    }
    .counter {
      padding: 0 1rem;
      display: flex;
      gap: 2rem;
      .counter-btn {
        cursor: pointer;
      }
      .counter-number {
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
      .prod-img {
        min-width: 7rem;
        min-height: 10rem;
      }
      .prod-text {
        p {
          font-size: 1.5rem;
        }
      }
    }
    .prod-info {
      font-size: 1.5rem;
      gap: 7rem;
    }
  }
  @media screen and (max-width: 800px) {
    .list{
      flex-wrap: wrap;
    }
    .prodwrap {
      width: 100%;
      justify-content: space-around;
    }
    .prod-info {
      width: 100%;
      justify-content: center;
    }
  }
`;
