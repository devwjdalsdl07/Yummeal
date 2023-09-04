import styled from "@emotion/styled";

export const Head = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #000;
  background: #f5eeda;
  position: relative;
  .logo {
    margin: 0 1rem;
    font-size: 2rem;
    cursor: pointer;
    img {
      width: 15rem;
      height: 15rem;
    }
  }

  .searchwrap {
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    padding-bottom: 15px;
    .search {
      width: 60rem;
      height: 5rem;
      border: 0.1rem solid;
      border-radius: 1.2rem;
      padding: 1.5rem;
      overflow: hidden;
    }
    .glasswrap {
      position: absolute;
      top: 40%;
      right: 3%;
      transform: translateY(-45%);
      font-size: 3rem;
      border: 0;
      background: #fff;
      cursor: pointer;
    }
  }
  .recent-title {
    position: absolute;
    left: 50%;
    top: 55%;
    transform: translateX(-50%);
    z-index: 9999;
    width: 600px;
    height: 40px;
    background: #fff;
    z-index: 999;
    border-radius: 8px;
    text-align: center;
    font-size: 15px;
    padding-top: 10px;
  }
  .flex-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left: 50%;
    top: 75%;
    transform: translateX(-50%);
    width: 600px;
    height: 300px;
    background: #fff;
    z-index: 999;
    border-radius: 8px;
    text-align: center;
    font-size: 15px;
    box-shadow:
      rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    & > div {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      width: 100%;
      cursor: pointer;
      line-height: 60px;
      padding: 0 50px;
      &:hover {
        background: rgba(0, 0, 0, 0.1);
      }
      .recent-content {
        display: flex;
        gap: 20px;
        i {
          color: #aaa;
        }
        .content-title{
          width: 400px;
          text-align: left;
        }
      }
      .xmark {
        color: #aaa;
      }
    }
  }
  .header_menulist {
    padding-top: 3rem;
    list-style: none;
    display: flex;
    justify-content: space-between;
    gap: 10rem;
    font-size: 2rem;
    transform: translateY(30%);
    z-index: 99;
    transition: all 0.5s;
    & > li {
      position: relative;
      & > ul {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        background-color: #fff;
        border: 0.1rem solid #ccc;
        border-radius: 1.2rem;
        padding: 1rem 2rem;
        min-width: 10rem;
        box-shadow:
          rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
          rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
        & > li {
          padding: 0.5rem;
          text-align: center;
          color: #000;
          &:hover {
            opacity: 0.5;
          }
        }
      }
      &:hover > ul {
        display: block;
      }
    }
  }

  .header_left {
    display: flex;
  }

  .header_right {
    list-style: none;
    display: flex;
    font-size: 1.5rem;
    color: #000;
  }

  .header_right div {
    margin: 0 1rem;
  }

  li {
    padding: 0 1rem;
    cursor: pointer;
  }

  .toggle {
    display: none;
    font-size: 1.5rem;
    padding: 1rem 1rem;
    scale: 2.5;
    cursor: pointer;
  }

  .user {
    display: none;
    font-size: 1.5rem;
    padding: 1rem 1rem;
    scale: 2.5;
    cursor: pointer;
  }
  @media screen and (max-width: 1130px) {
    .header_menulist {
      gap: 7rem;
    }
  }
  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
    min-width: 45rem;
    height: 20rem;
    align-items: baseline;
    .header_right {
      display: ${props => (props.userToggled ? "flex" : "none")};
      flex-direction: column;
      width: 100%;
      background-color: #f5eeda;
      color: #000;
      transform: translateY(5rem);
      z-index: 99;
    }

    .searchwrap {
      top: 70%;
      width: 60%;
      .search {
        width: 100%;
      }
    }
    .trend-title {
      width: 60%;
      top: 100%;
    }
    .grid-wrap {
      width: 60%;
      top: 115%;
    }
    .header_menulist {
      display: ${props => (props.isToggled ? "flex" : "none")};
      flex-direction: column;
      width: 100%;
      background-color: #f5eeda;
      color: #000;
      gap: 1rem;
      padding: 0;
      transform: translateY(5rem);
      transition: all 0.5s;
      & > li {
        & > ul {
          & > li {
            &:hover {
            }
          }
        }
        &:hover > ul {
          display: none;
        }
      }
    }

    .header_menulist li,
    .header_right li {
      margin: 1rem 0;
      padding: 0;
      font-size: 1.5rem;
    }

    .toggle {
      display: block;
    }

    .user {
      display: block;
    }
  }
`;
