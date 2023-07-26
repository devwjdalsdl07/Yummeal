import styled from "@emotion/styled";
export const MainDiv = styled.div`
  .wrap {
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    padding: 100px 0;
    .info {
      margin: 0 auto;
      margin-top: 50px;
      width: 100%;
      max-width: 1400px;
      height: 100%;
      min-height: 700px;
      }
      .best_item {
        display: flex;
        justify-content: space-between;
        /* column-gap: 35rem; */
        text-align: center;
        margin: 100px 0;
        .best_title {
          text-align: center;
        }
        .confirm {
          background-color: #3498db;
          color: #fff;
          cursor: pointer;
          border: none;
          padding: 10px 10px;
          /* margin-left: auto; */
          border-radius: 4px;
        }
      }

      .list_area {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: space-between;
        .product-card {
          position: relative;
          display: inline-block;

          &:hover .product-description {
            opacity: 1;
          }
          /* 이미지크기 조절하기 */
          .product-image {
            width: 250px;
            height: 250px;
            /* border-radius: 25px; */
            background: skyblue;
          }
          .item_numbering {
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
            /* border-radius: 25px; */
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
      opacity: 1;
    }
  }
  .title {
    margin: 30px;
    text-align: center;
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
