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
  const [search, setSearch] = useState("");
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

  const handleSearch = e => {
    setSearch(e.target.value);
  };

  // const [suggestions, setSuggestions] = useState([]);
  // // 여기에 검색어 자동완성을 위한 데이터 배열을 추가해주세요.
  // const searchSuggestions = ["미음", "죽", "소고기죽", "이유식", "60"];

  // useEffect(() => {
  //   // 검색어 자동완성을 위한 로직을 작성합니다.
  //   if (search) {
  //     const filteredSuggestions = searchSuggestions.filter(suggestion =>
  //       suggestion.toLowerCase().includes(search.toLowerCase()),
  //     );
  //     setSuggestions(filteredSuggestions);
  //   } else {
  //     setSuggestions([]);
  //   }
  // }, [search]);

  // const handleSuggestionClick = suggestion => {
  //   setSearch(suggestion);
  //   setSuggestions([]);
  // };

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
      <div className="menu_wrap">
        <div>
          <input
            className="search"
            type="text"
            value={search}
            onChange={e => handleSearch(e)}
            placeholder="검색어를 입력하세요"
          />
          {/* {suggestions.length > 0 && (
            <ul>
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )} */}
        </div>
        {/* 메뉴 리스트 */}
        <ul className="header_menulist">
          <li onClick={() => navigate("/")}>1단계</li>
          <li onClick={() => navigate("/")}>2단계</li>
          <li onClick={() => navigate("/")}>3단계</li>
          <li onClick={() => navigate("/")}>4단계</li>
          <li onClick={() => navigate("/")}>전체보기</li>
        </ul>
      </div>
      {/* User 메뉴 리스트 */}
      <ul className="header_right">
        <li onClick={() => navigate("/login")}>로그인</li>
        <li onClick={() => navigate("/signup")}>회원가입</li>
      </ul>
    </Head>
  );
}

export default Header;
