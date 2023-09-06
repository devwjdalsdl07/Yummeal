import styled from "@emotion/styled";
export const CartItemModalCss = styled.div`
  .cart-modal {
    display: flex;
    width: 400px;
    height: 300px;
    background-color: white;
    border: 1px solid #8eb111;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    margin: auto;
    flex-wrap: wrap;
    justify-content: center;
    box-sizing: border-box;
    border-radius: 5px;
    .close-icon {
      width: 100%;
      padding-top: 20px;
      margin-left: 32rem;
      font-size: 2rem;
      &:hover {
        color: rgba(255, 0, 0, 0.5);
      }
    }
    .modal-content {
      .cart-icon {
        width: 100%;
        font-size: 5rem;
        color: #8eb111;
      }
      h3 {
        width: 100%;
        padding-top: 20px;
        text-align: center;
        font-weight: 700;
        font-size: 2rem;
      }
    }
    .modal-buttons {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 20px 30px 20px;
      gap: 10px;
      > button {
        font-family: "Pretendard", "SUITE", sans-serif;
        font-weight: 600;
        width: 45%;
        height: 3.5rem;
        line-height: 25px;
        background-color: white;
        border-radius: 7px;
        border: 1px solid #d1d1d1;
        color: #3f3f3f;
        &:hover {
          background-color: #8eb111;
          color: white;
          border: none;
        }
      }
    }
  }
`;
export const LoginModalCss = styled.div`
  .login-modal {
    display: flex;
    width: 400px;
    height: 300px;
    background-color: white;
    border: 1px solid #8eb111;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    margin: auto;
    flex-wrap: wrap;
    justify-content: center;
    box-sizing: border-box;
    border-radius: 5px;
    .close-icon {
      width: 100%;
      padding-top: 20px;
      margin-left: 32rem;
      font-size: 2rem;
      &:hover {
        color: rgba(255, 0, 0, 0.5);
      }
    }
    .modal-content {
      h4 {
        width: 100%;
        text-align: center;
        font-weight: 700;
        font-size: 2rem;
      }
    }
    .modal-buttons {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      /* padding: 0 20px 10px 20px; */
      padding: 30px 20px;
      gap: 10px;
      input {
        width: 150px;
        height: 3.5rem;
        line-height: 25px;
        background-color: white;
        border-radius: 7px;
        border: 1px solid #d1d1d1;
        color: #3f3f3f;
        &:hover {
          background-color: #8eb111;
          color: white;
        }
      }
    }
  }
`;
export const ModalDim = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3); /* 반투명한 검은 배경 */
  z-index: 500;
`;
export const ChildModalCss = styled.div`
  .login-modal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 600px;
    height: 700px;
    background-color: white;
    border: 1px solid #8eb111;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 600;
    margin: auto;
    box-sizing: border-box;
    border-radius: 5px;
    .close-icon {
      width: 100%;
      padding-top: 15px;
      margin-left: 55rem;
      font-size: 2rem;
      &:hover {
        color: rgba(255, 0, 0, 0.5);
      }
    }
    .modal-img {
      width: 25%;
      height: 25%;
    }
    .modal-content {
      h4 {
        display: flex;
        flex-direction: column;
        width: 100%;
        text-align: center;
        font-weight: 700;
        font-size: 2rem;
        margin-bottom: 25px;
      }
      span {
        font-family: "Pretendard", "SUITE", sans-serif;
        font-size: 15px;
        font-weight: 500;
        color: #8eb111;
        margin-bottom: 5px;
      }
      .search-wrap {
        margin-bottom: 20px;

        .search-form {
          display: flex;
          gap: 40px;
          max-width: 500px;
          .allergy {
            width: 100%;
            font-size: 15px;
            font-weight: 600;
            .css-1fdsijx-ValueContainer {
              padding: 0 15px;
              .css-1jqq78o-placeholder {
                font-size: 14px;
                font-weight: 600;
                text-align: center;
                padding-left: 38px;
              }
            }
          }
        }
      }
      .child-box {
        width: 100%;
        height: 3.5rem;
        line-height: 25px;
        border-radius: 7px;
        border: 1px solid #d1d1d1;
        color: #3f3f3f;
        font-weight: 600;
        text-align: center;
      }
    }

    .modal-buttons {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      /* padding: 0 20px 10px 20px; */
      padding: 30px 20px;
      gap: 20px;
      button {
        cursor: pointer;
        font-family: "Pretendard", "SUITE", sans-serif;
        width: 150px;
        height: 3.5rem;
        line-height: 25px;
        background-color: white;
        border-radius: 7px;
        border: 1px solid #d1d1d1;
        color: #3f3f3f;
        font-weight: 700;
        &:hover {
          background-color: #8eb111;
          color: white;
        }
      }
    }
  }
`;
export const PlusChildModalCss = styled.div`
  .login-modal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 600px;
    height: 700px;
    background-color: white;
    border: 1px solid #8eb111;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 600;
    margin: auto;
    box-sizing: border-box;
    border-radius: 5px;
    .close-icon {
      width: 100%;
      padding-top: 15px;
      margin-left: 55rem;
      font-size: 2rem;
      &:hover {
        color: rgba(255, 0, 0, 0.5);
      }
    }
    .modal-img {
      width: 25%;
      height: 25%;
    }
    .modal-content {
      display: flex;
      flex-direction: column;
      font-family: "Pretendard", "SUITE", sans-serif;
      h4 {
        text-align: center;
        width: 100%;
        font-weight: 700;
        font-size: 2rem;
        margin-bottom: 25px;
      }
      span {
        font-family: "Pretendard", "SUITE", sans-serif;
        font-size: 15px;
        font-weight: 500;
        color: #8eb111;
        /* margin-bottom: 5px; */
      }
      .search-wrap {
        margin-bottom: 20px;
        .child-allergy {
          margin-bottom: 5px;
        }
        .search-form {
          display: flex;
          gap: 40px;
          max-width: 500px;
          .allergy {
            width: 100%;
            font-size: 15px;
            font-weight: 600;
            .css-1fdsijx-ValueContainer {
              padding: 0 15px;
              .css-1jqq78o-placeholder {
                font-size: 14px;
                font-weight: 600;
                text-align: center;
                padding-left: 38px;
              }
            }
          }
        }
      }
      .child-taste {
        margin-bottom: 5px;
      }
      .child-box {
        width: 100%;
        height: 4rem;
        line-height: 25px;
        border-radius: 7px;
        border: 1px solid #d1d1d1;
        color: #3f3f3f;
        font-weight: 600;
        text-align: center;
        font-family: "Pretendard", "SUITE", sans-serif;
      }
    }

    .modal-buttons {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      /* padding: 0 20px 10px 20px; */
      padding: 30px 20px;
      gap: 20px;
      button {
        cursor: pointer;
        font-family: "Pretendard", "SUITE", sans-serif;
        width: 150px;
        height: 3.5rem;
        line-height: 25px;
        background-color: white;
        border-radius: 7px;
        border: 1px solid #d1d1d1;
        color: #3f3f3f;
        font-weight: 700;
        &:hover {
          background-color: #8eb111;
          color: white;
        }
      }
    }
  }
`;
