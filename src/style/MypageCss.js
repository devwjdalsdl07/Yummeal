import styled from "@emotion/styled";

export const MypageContainer = styled.div`
  max-width: 1200px;
  margin: 30px auto;
  .side-nav {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    width: 200px;
    background: skyblue;
    h1 {
      font-size: 30px;
    }
    .menu-list {
      > li {
        p {
          font-size: 20px;
          cursor: pointer;
        }
        margin-bottom: 10px;
      }
      .two-depth {
        > li {
          p {
            font-size: 16px;
            cursor: pointer;
          }
        }
      }
    }
  }
`;
