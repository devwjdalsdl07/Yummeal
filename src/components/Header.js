import { faBars, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Head } from "../style/Header";

// export default Header;
function Header() {
  const [isToggled, setIsToggled] = useState(false);
  const [userToggled, setUserToggled] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // 스크롤 이벤트
  const handleScroll = () => {
    const scrolled = window.scrollY > 0;
    setIsScrolled(scrolled);
  };

  useEffect(() => {
    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);
    // 컴포넌트가 언마운트되면 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Head
      isToggled={isToggled}
      userToggled={userToggled}
      isScrolled={isScrolled}
    >
      {/* 햄버거 버튼(bar) */}
      <div
        className="toggle"
        onClick={() => {
          setIsToggled(!isToggled);
        }}
      >
        <FontAwesomeIcon icon={!isToggled ? faBars : faTimes} />
      </div>

      {/* Headerle 로고 */}
      <div className="logo">
        {/* <FontAwesomeIcon icon={faHeaderle} /> */}
        <img src="http://fpoimg.com/150x150"></img>
      </div>

      {/* User 버튼 */}
      <div
        className="user"
        onClick={() => {
          setUserToggled(!userToggled);
        }}
      >
        <FontAwesomeIcon icon={!userToggled ? faUser : faTimes} />
      </div>

      {/* 메뉴 리스트 */}
      <ul className="header__menulist">
        <li onClick={() => navigate("/")}>1단계</li>
        <li onClick={() => navigate("/")}>2단계</li>
        <li onClick={() => navigate("/")}>3단계</li>
        <li onClick={() => navigate("/")}>4단계</li>
        <li onClick={() => navigate("/")}>전체보기</li>
      </ul>
      {/* User 메뉴 리스트 */}
      <ul className="header__right">
        <li onClick={() => navigate("/login")}>로그인</li>
        <li onClick={() => navigate("/signup")}>회원가입</li>
      </ul>
    </Head>
  );
}

export default Header;
