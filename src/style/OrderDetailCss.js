import styled from "@emotion/styled";

export const OrderDetailWrap = styled.div`
  max-width: 140rem;
  width: 100%;
  margin: 0 auto;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  .container {
    padding: 0 2rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 2rem;
    padding-top: 2rem;
  }
  hr {
    width: 100%;
    margin-top: 1rem;
    border: 0;
    height: 0.1rem;
    background: #000;
  }
  .order-prodwrap {
    .order-prodtext {
      display: flex;
      align-items: center;
      padding: 2rem 3rem;
      gap: 4rem;
      .order-imgbox {
        width: 15rem;
        min-width: 10rem;
        height: 15rem;
        min-height: 10rem;
      }
      .order-textwrap {
        width: 90%;
        p {
          font-size: 2rem;
        }
      }
      .order-prodbtn {
        display: flex;
        justify-content: flex-end;
        button {
          border: 0.1rem solid;
          border-radius: 0.8rem;
          padding: 0.8rem;
          background: #fff;
          font-size: 1.5rem;
          cursor: pointer;
          transform: translateY(2.3rem);
        }
      }
    }
  }
  .order-userinfo {
    .order-infowrap {
      padding: 2rem 3rem;
      .info-data {
        display: flex;
        align-items: center;
        gap: 4rem;
        padding-bottom: 1rem;
        & > div {
          width: 80%;
          text-align: center;
          font-size: 2rem;
        }
      }
      p {
        font-size: 2rem;
        padding: 0 1rem;
        width: 7rem;
      }
    }
  }
  .order-price {
    .order-pricewrap {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      background: #eebb75;
      padding: 1rem 3rem;
      border-radius: 1.2rem;
      transform: translateY(2rem);
      .fa-minus {
        font-size: 2rem;
        color: #fff;
      }
      .fa-equals {
        font-size: 2rem;
        color: #fff;
      }
      .price-data {
        display: flex;
        align-items: center;
        gap: 1rem;
        span {
          font-size: 2rem;
          color: #fff;
        }
      }
      p {
        font-size: 2rem;
        color: #fff;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    min-width: 45rem;
    padding: 2rem;
    .container {
      min-width: 45rem;
    }
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.5rem;
      padding-top: 1rem;
    }
    .order-prodwrap {
      .order-prodtext {
        padding: 1rem 2rem;
        gap: 4rem;
        .order-imgbox {
          width: 15rem;
          height: 15rem;
          img {
            min-width: 10rem;
            min-height: 10rem;
          }
        }
        .order-textwrap {
          width: 90%;
          p {
            font-size: 1.5rem;
          }
        }
      }
    }
    .order-userinfo {
      .order-infowrap {
        padding: 2rem 3rem;
        .info-data {
          display: flex;
          align-items: center;
          gap: 4rem;
          padding-bottom: 1rem;
          & > div {
            width: 80%;
            text-align: center;
            font-size: 1.5rem;
          }
        }
        p {
          font-size: 1.5rem;
          padding: 0 1rem;
          width: 7rem;
        }
      }
    }
    .order-price {
      .order-pricewrap {
        padding: 1rem 1rem;
        border-radius: 1.2rem;
        transform: translateY(2rem);
        min-width: 42rem;
        margin-bottom: 2rem;
        .fa-minus {
          font-size: 1.5rem;
        }
        .fa-equals {
          font-size: 1.5rem;
        }
        .price-data {
          span {
            font-size: 1.5rem;
          }
        }
        p {
          font-size: 1.5rem;
        }
      }
    }
  }
`;
