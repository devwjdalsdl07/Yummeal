import { FooterWrap } from "../style/FooterCss";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const handleAbout = () => {
    navigate("/about");
  };
  const handleUseService = () => {
    navigate("/useservice");
  };
  const handlePolicy = () => {
    navigate("policy");
  };
  const handleUseGuide = () => {
    navigate("useguide");
  };

  return (
    <FooterWrap>
      <div className="footer-menu">
        <ul className="footer-menu-list">
          <li onClick={handleAbout}>회사소개</li>
          <li onClick={handleUseService}>이용약관</li>
          <li onClick={handlePolicy}>개인정보처리방침</li>
          <li onClick={handleUseGuide}>이용안내</li>
        </ul>
      </div>
      <div className="footer-cs">
        <div className="imgbox">
          <img src={`${process.env.PUBLIC_URL}/images/footerlogo.png`} alt="logo" />
        </div>
        <div className="csbox">
          <h3>고객센터</h3>
          <p>053-572-1005</p>
          <span>월-금 : 09:30 ~ 18:10</span>
          <span>점심시간 : 13:20 ~ 14:20</span>
          <span className="offday">토/일/공휴일 휴무</span>
        </div>
        <div className="footer-info">
          <div>
            <h3>회사정보</h3>
            <span>팩토리 : 대구 중구 중앙대로 394, 제일빌딩 5층</span>
            <span>사업자 번호 : 123-45-67890</span>
            <span>TEL : 053-572-1005</span>
            <span>Copyright 2023. YUMMEAL. All rights reserved.</span>
          </div>
        </div>
      </div>
    </FooterWrap>
  );
};

export default Footer;
