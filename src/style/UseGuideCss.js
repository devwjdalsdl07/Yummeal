import styled from "@emotion/styled";
export const Container = styled.div`
  position: relative;
  background: #f9f6f1;
  @media screen and (max-width: 1024px) {
    font-size: 25px;
    margin-bottom: 25px;
  }
`;
export const ContentsWrap = styled.div`
  padding-top: 122px;
  background: #f5f5f5;
  padding-bottom: 96px;
  position: relative;
`;
export const ContentHeader = styled.span`
  position: absolute;
  top: 50px;
  right: 50%;
  font-size: 25px;
  line-height: 37px;
  color: #313133;
  font-weight: bold;
  text-align: center;
  transform: translate(50%, 0px);
`;
export const ContentInner = styled.div`
  position: relative;
  width: 1200px;
  margin: 0 auto;
  background: #fff;
  border-radius: 20px;
`;
export const ContentTxtWrap = styled.div`
  position: relative;
  padding: 40px;
  margin: 0 auto;
  word-break: break-all;
  white-space: pre-line;
  height: 800px;
  overflow-y: auto;
  font-size: 15px;
  line-height: 25px;
`;
