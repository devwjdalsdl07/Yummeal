import {
  faBars,
  faMagnifyingGlass,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CateProdList, menuCate } from "../api/cartaxios";
import { postLogout } from "../api/client";
import { removeCookie } from "../api/cookie";
import { Head } from "../style/HeaderCss";

function Header() {
  const [isToggled, setIsToggled] = useState(false);
  const [userToggled, setUserToggled] = useState(false);
  const [search, setSearch] = useState("");
  const [cate, setCate] = useState([]);
  const [subCate, setSubCate] = useState([]);
  const navigate = useNavigate();

  // 카테고리 메뉴 불러오기
  const cateGet = async () => {
    const result = await menuCate();
    setCate(result);
  };

  useEffect(() => {
    cateGet();
  }, []);

  // 카테고리 메뉴 클릭 시 이동
  const handleCateClick = async (mainMenu, subMenu) => {
    console.log("카테고리 번호 찍자", mainMenu?.cateId, subMenu?.cateDetailId);
    const item = {
      cateId: mainMenu?.cateId,
      cateDetailId:
        subMenu?.cateDetailId == undefined ? 0 : subMenu.cateDetailId,
      page: 1,
      row: 16,
    };
    const result = await CateProdList(item);
    navigate("/productlist", {
      state: { maxPaige: result.maxPaige, list: result.list },
    });
  };

  // 검색어 업데이트
  const handleSearch = e => {
    setSearch(e.target.value);
  };

  // 검색결과창 이동
  const handleSearchPost = e => {
    e.preventDefault();
    navigate("/search", { state: { product: search } });
  };

  // 로그아웃
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
      {/* <ul className="header_menulist">
        {cate.map(mainMenu => (
          <li key={mainMenu.cateName} onClick={() => handleCateClick(mainMenu)}>
            {mainMenu.cateId}단계
            <ul>
              {mainMenu.list?.map(subMenu => (
                <li
                  key={subMenu.cateDetailId}
                  onClick={() => handleCateClick(mainMenu, subMenu)}
                >
                  {subMenu.cateName}
                </li>
              ))}
            </ul>
          </li>
        ))}
        <li onClick={() => navigate("/")}>전체보기</li>
      </ul> */}
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
