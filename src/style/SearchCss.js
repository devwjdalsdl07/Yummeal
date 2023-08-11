import styled from "@emotion/styled";
export const SearchWrap = styled.div`
    background: #f9f6f1;
  .wrap {
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    padding: 50px 0;
    min-width: 500px;
    max-width: 1400px;
    .searchbox {
      font-size: 15px;
      padding: 20px;
      width: 90%;
      margin: 0 auto;
      min-width: 450px;
      border: 1px solid #000;
      border-radius: 10px;
      box-shadow: 10px 10px 3px -4px rgba(0,0,0,0.4);
      h3 {
        width: 100px;
      }
      .search-sort {
        display: flex;
        gap: 40px;
        padding: 20px 0;
        .sortwrap {
          width: 300px;
          .css-1fdsijx-ValueContainer {
            padding: 0 15px;
          }
        }
      }
      .search-form {
        display: flex;
        gap: 40px;
        .allergy {
          width: 60%;
          .css-1fdsijx-ValueContainer {
            padding: 0 15px;
          }
        }
      }
    }
    .info {
      margin: 0 auto;
      margin-top: 50px;
      width: 90%;
      max-width: 1400px;
    }
    .best-item {
      display: flex;
      justify-content: space-between;
      text-align: center;
      margin: 50px 0;
      font-weight: 500;
      font-size: 32px;
      .best-title {
        text-align: center;
        font-weight: 500;
        font-size: 32px;
      }
      .confirm {
        background-color: #000;
        color: #fff;
        cursor: pointer;
        border: none;
        padding: 10px 10px;
        border-radius: 4px;
      }
    }

    .list-area {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      padding-left: 15px;
      justify-content: flex-start;
      .product-card {
        position: relative;
        display: inline-block;
        cursor: pointer;
        &:hover .product-description {
          opacity: 0.5;
        }
        /* 이미지크기 조절하기 */
        .product-image {
          width: 250px;
          height: 250px;
        }
        .item-numbering {
          display: flex;
          justify-content: flex-start;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .product-description {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          position: absolute;
          top: 0;
          left: 0;
          width: 250px;
          height: 250px;
          background-color: rgba(0, 0, 0, 0.8);
          color: #fff;
          padding: 8px;
          opacity: 0;
          transition: opacity 0.3s ease;
          .shopping-icon {
            color: #fff;
            position: relative;
            left: 90px;
            bottom: 10%;
            font-size: x-large;

            &:hover {
              color: green;
            }
          }
        }
        .item-info {
          padding: 10px;
          margin-top: 15px;
          h2 {
            font-size: 20px;
            margin-bottom: 7px;
            font-weight: 800;
          }
          p {
            font-size: 15px;
            font-weight: 700;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .wrap {
      .list-area {
        gap: 20px;
        .product-card {
          .product-image {
          }
          .product-description {
          }
        }
      }
    }
  }
  @media screen and (max-width: 610px) {
    .wrap {
      .searchbox {
        padding-left: 25px;
      }
      .list-area {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        max-width: 450px;
        & > div {
          width: 200px;
          height: 200px;
        }
        .product-card {
          .product-image {
            width: 200px;
            height: 200px;
          }
          .product-description {
            width: 200px;
            height: 200px;
          }
        }
      }
    }
  }
`;
