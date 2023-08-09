import {
  faBars,
  faMagnifyingGlass,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLogout } from "../api/client";
import { removeCookie } from "../api/cookie";
import { Head } from "../style/HeaderCss";

// export default Header;
function Header() {
  const [isToggled, setIsToggled] = useState(false);
  const [userToggled, setUserToggled] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = e => {
    setSearch(e.target.value);
  };
  const handleSearchPost = e => {
    e.preventDefault();
    navigate("/search", { state: { product: search } });
  };

  const handleRemove = () => {
    postLogout();
    removeCookie("accessToken");
    removeCookie("refreshToken");
    navigate("/login");
  };

  return (
    <Head isToggled={isToggled} userToggled={userToggled}>
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
        <img src="/img/logo.png" onClick={() => navigate("/")}></img>
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
      <form className="searchwrap">
        <input
          className="search"
          type="text"
          value={search}
          onChange={e => handleSearch(e)}
          placeholder="검색어를 입력하세요"
        />
        <button className="glasswrap" onClick={e => handleSearchPost(e)}>
          <i className="glass">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </i>
        </button>
        {/* 메뉴 리스트 */}
      </form>
      <ul className="header_menulist">
        <li onClick={() => navigate("/")}>
          1단계
          <ul>
            <li>곡물류</li>
            <li>야채류</li>
          </ul>
        </li>
        <li onClick={() => navigate("/")}>
          2단계
          <ul>
            <li>곡물류</li>
            <li>야채류</li>
            <li>고기류</li>
            <li>해산물류</li>
            <li>과일류</li>
          </ul>
        </li>
        <li onClick={() => navigate("/")}>
          3단계
          <ul>
            <li>곡물류</li>
            <li>야채류</li>
            <li>고기류</li>
            <li>해산물류</li>
            <li>과일류</li>
          </ul>
        </li>
        <li onClick={() => navigate("/")}>
          4단계
          <ul>
            <li>곡물류</li>
            <li>야채류</li>
            <li>고기류</li>
            <li>해산물류</li>
            <li>과일류</li>
          </ul>
        </li>
        <li onClick={() => navigate("/")}>전체보기</li>
      </ul>
      {/* User 메뉴 리스트 */}
      <ul className="header_right">
        <li onClick={() => navigate("/login")}>로그인</li>
        <li onClick={() => navigate("/signup")}>회원가입</li>
        <li onClick={handleRemove}>로그아웃</li>
      </ul>
    </Head>
  );
}

export default Header;
