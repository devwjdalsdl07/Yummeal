import styled from "@emotion/styled";
export const MainDiv = styled.div`
  .wrap {
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    padding: 100px 0;
    background: #f9f6f1;
    .info {
      margin: 0 auto;
      margin-top: 50px;
      width: 1440px;
      max-width: 1400px;
      height: 100%;
      min-height: 700px;
      /* div{
        display: flex;
      justify-content: space-between;

      text-align: center;
      margin: 50px 0;
      font-weight: 500;
      font-size: 32px;
      h1{
        text-align: center;
        font-weight: 500;
        font-size: 32px;
      }
      button{
        background-color: #000;
        color: #fff;
        cursor: pointer;
        border: none;
        padding: 10px 10px;

        border-radius: 4px;
      }
      } */
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
      gap: 10px;
      justify-content: space-evenly;
      .product-card {
        position: relative;
        display: inline-block;

        &:hover .product-description {
          opacity: 0.5;
        }
        /* 이미지크기 조절하기 */
        .product-image {
          width: 250px;
          height: 250px;

          background: skyblue;
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
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.8);
          color: #fff;
          padding: 8px;
          opacity: 0;
          transition: opacity 0.3s ease;
          .shopping-icon {
            color: #fff;
            position: relative;
            left: 90px;
            bottom: 110px;
       
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
`;
export const SlickDiv = styled.div`
  .container {
    position: relative;
    display: inline-block;
    margin: 0 auto;
    padding: 0px 40px 40px 40px;
    width: 400px;
    &:hover .product-description {
      opacity: 0.5;
    }
  }
  .title {
    margin-bottom: 70px;
    text-align: center;
    font-weight: 500;
    font-size: 30px;
  }
  h3 {
    background: #3498db;
    color: #fff;
    font-size: 36px;
    line-height: 350px;
    margin: 15px;
    padding: 2%;
    position: relative;
    text-align: center;
  }

  .slick-next:before,
  .slick-prev:before {
    color: #000;
  }
  .center .slick-center h3 {
    color: #e67e22;
    opacity: 1;
    -ms-transform: scale(1.08);
    transform: scale(1.08);
  }
  .center h3 {
    transition: all 0.1s ease;
  }

  .center .slick-center span {
    color: #e67e22;
    opacity: 1;
    -ms-transform: scale(1.08);
    transform: scale(1.08);
  }
  .center span {
    transition: all 0.1s ease;
  }
`;

export const PaginationDiv = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }

  ul.pagination li:first-child {
    border-radius: 5px 0 0 5px;
  }

  ul.pagination li:last-child {
    border-radius: 0 5px 5px 0;
  }

  ul.pagination li a {
    text-decoration: none;
    color: #337ab7;
    font-size: 1rem;
  }

  ul.pagination li.active a {
    color: white;
  }

  ul.pagination li.active {
    background-color: #337ab7;
  }

  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: blue;
  }

  .page-selection {
    width: 48px;
    height: 30px;
    color: #337ab7;
  }
`;
