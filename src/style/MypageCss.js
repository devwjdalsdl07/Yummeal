import styled from "@emotion/styled";

export const MypageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1200px;
  margin: 80px auto;
  .side-nav {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    width: 20%;
    height: 200px;
    h1 {
      font-size: 30px;
      font-weight: 700;
    }
    .menu-list {
      > li {
        p {
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
        }
        margin-bottom: 10px;
      }
      .two-depth {
        > li {
          p {
            margin: 3px 0;
            font-size: 12px;
            color:#888;
            cursor: pointer;
          }
        }
      }
    }
  }
`;
