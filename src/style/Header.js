import styled from "@emotion/styled";

export const Head = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: black;

  .logo {
    margin: 0 1rem;
    font-size: 2rem;
  }

  .menu_wrap {
    display: grid;
    place-items: center;
  }

  .search {
    width: 50rem;
  }

  .header_menulist {
    padding-top: 3rem;
    list-style: none;
    display: flex;
    gap: 6rem;
  }

  .header_left {
    display: flex;
  }

  .header_right {
    list-style: none;
    display: flex;
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
  }

  .user {
    display: none;
    font-size: 1.5rem;
    padding: 1rem 1rem;
  }

  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
    min-width: 50rem;

    .header_right {
      display: ${props => (props.userToggled ? "flex" : "none")};
      flex-direction: column;
      width: 100%;
      background-color: black;
    }

    .menu_wrap {
      display: none;
    }

    .search {
      display: none;
    }

    .header_menulist {
      display: ${props => (props.isToggled ? "flex" : "none")};
      flex-direction: column;
      width: 100%;
      background-color: black;
      gap: 1rem;
      padding: 0;
    }

    .header_menulist li,
    .header_right li {
      margin: 1rem 0;
      padding: 0;
    }

    .toggle {
      display: block;
    }

    .user {
      display: block;
    }
  }
`;
