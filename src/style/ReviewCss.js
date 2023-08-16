import styled from "@emotion/styled";

export const ReviewWrap = styled.div`
  display: flex;
  flex-direction: column;
  /* margin: 0 auto; */
  width: 70rem;
  gap: 2rem;
  .review-list {
    margin-bottom: 70px;
    .review {
      display: flex;
      justify-content: space-between;
      padding: 1rem;
      .review-info {
        padding: 0 1rem;
        & > div {
          display: flex;
          gap: 2.5rem;
          span {
            display: block;
            font-size: 1.5rem;
            &:last-child::before {
              display: inline-block;
              content: "";
              width: 2px;
              height: 15px;
              vertical-align: middle;
              background: rgba(0, 0, 0, 0.3);
              margin: -0.5rem 2.5rem 0 0;
            }
          }
        }
        h3 {
          margin: 0.5rem 0;
          font-size: 2rem;
        }
        p {
          font-size: 1.5rem;
        }
      }
    }
  }
  /* .review-textwrap {
    .review-title {
      padding: 1rem 0;
      input{
        display: block;
        width: 80%;
        margin: 0 auto;
      }
    }
    .review-content {
      padding-bottom: 1rem;
      textarea{
        display: block;
        width: 80%;
        margin: 0 auto;
      }
    }
  } */
`;
