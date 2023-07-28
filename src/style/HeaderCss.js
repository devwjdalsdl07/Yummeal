import styled from "@emotion/styled";

export const Head = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #000;
  background: #F5EEDA;
  position: relative;
  .logo {
    margin: 0 1rem;
    font-size: 2rem;
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
      top: 50%;
      right: 3%;
      transform: translateY(-50%);
      font-size: 3rem;
      border: 0;
      background: #fff;
      cursor: pointer;
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

  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
    min-width: 40rem;

    .header_right {
      display: ${props => (props.userToggled ? "flex" : "none")};
      flex-direction: column;
      width: 100%;
      background-color: #000;
    }

    .searchwrap {
      display: none;
    }

    .header_menulist {
      display: ${props => (props.isToggled ? "flex" : "none")};
      flex-direction: column;
      width: 100%;
      background-color: #000;
      gap: 1rem;
      padding: 0;
      transform: translateY(0);
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
