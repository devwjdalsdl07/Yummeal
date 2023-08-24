import styled from "@emotion/styled";

export const AdminWrapper = styled.div`
  max-width: 1400px;
  margin: 50px auto;
  .titleArea {
    display: flex;
    justify-content: space-evenly;
  }
  .uploadContainer {
    display: flex;
    gap: 15px;
  }
  .img {
    position: relative;
  }
  .upload {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100px;
    height: 100px;
    background: skyblue;
    border-radius: 10px;
    cursor: pointer;
    input {
      position: relative;
      display: none;
    }
    img {
      width: 100%;
      height: 100%;
    }
    button {
      position: absolute;
      transform: translate(-50%, -50%);
      white-space: nowrap;
      left: 50%;
      top: 50%;
    }
  }
  .editorWrapper {
    margin: 50px;
    border-top: 1px solid;
  }
  .modalWrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    .modalBody {
      position: absolute;
      width: 300px;
      height: 150px;
      padding: 40px;
      text-align: center;
      background: rgb(255, 255, 255);
      border-radius: 25px;
      span {
        font-size: 20px;
      }
      .modalButton {
        display: flex;
        justify-content: space-around;
        margin-top: 30px;
        font-size: 15px;
        .goButton {
          padding: 5px 10px;
          background: rgb(200, 200, 200);
          color: white;
          cursor: pointer;
        }
        .delButton {
          padding: 5px 10px;
          background: rgb(200, 200, 200);
          color: red;
          cursor: pointer;
        }
      }
    }
  }
`;
