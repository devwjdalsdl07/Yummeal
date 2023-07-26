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
`;
