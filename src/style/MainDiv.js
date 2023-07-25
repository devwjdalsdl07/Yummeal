import styled from "@emotion/styled";
export const MainDiv = styled.div`
  .wrap {
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    .info {
      margin: 0 auto;
      margin-top: 50px;
      width: 100%;
      max-width: 1400px;
      height: 100%;
      min-height: 700px;
      padding-bottom: 200px;
      .best_item {
        display: flex;
        justify-content: flex-end;
        column-gap: 35rem;
        text-align: center;
        margin: 100px 0;
      }
      .img_area {
        display: block;
        background: skyblue;
        width: 300px;
        height: 300px;
        border-radius: 35px;
        position: relative;
        overflow: hidden;
        .img {
          display: contents;
          width: 20px;
          height: 20px;
          position: absolute;
        }
        &:hover .img {
          opacity: 0.5;
        }
      }

      .item_hover {
        opacity: 0;
        transition: opacity 0.3s ease;
      }
    }
  }
`;
export const SlickDiv = styled.div`
  .container {
    margin: 0 auto;
    padding: 0px 40px 40px 40px;
    width: 400px;
  }
  .title {
    margin-bottom: 30px 0;
  }
  div {
    h3 {
      background: #5f9ea0;
      color: #fff;
      font-size: 36px;
      line-height: 350px;
      margin: 15px;
      padding: 2%;
      position: relative;
      text-align: center;
    }
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
  /* 반응형 슬라이드 스타일링 */
  /* @media (max-width: 1200px) {
    .slick-slide {
      margin: 0 10px; /* 화면 사이즈가 1200px 이하일 때 각 슬라이드 양쪽에 10px 마진 추가 */
    }
  } */

  /* @media (max-width: 1023px) {
    .slick-slide {
      margin: 0 5px; /* 화면 사이즈가 1023px 이하일 때 각 슬라이드 양쪽에 5px 마진 추가 */
    }
  } */

  /* @media (max-width: 767px) {
    .slick-slide {
      margin: 0 0; /* 화면 사이즈가 767px 이하일 때 슬라이드 간격 없음 */
    }
  } */
`;
