import styled from "@emotion/styled";

export const OrderItems = styled.div`
  .order-prod {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
    border-bottom: 0.1rem solid rgba(0, 0, 0, 0.3);
    .order-prod-info {
      display: flex;
      align-items: center;
      .order-prod-title {
        padding-left: 1.5rem;
        font-size: 2rem;
      }
    }
    .order-prod-count {
      text-align: end;
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 1024px) {
    .order-prod {
      padding: 1rem 0;
      .order-prod-info {
        .order-prod-title {
          font-size: 1.5rem;
        }
      }
    }
  }
`;
