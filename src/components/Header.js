import {
  faBars,
  faMagnifyingGlass,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cateProdList, menuCate } from "../api/axios";
import { postLogout } from "../api/client";
import { getMain } from "../api/mainFatch";
import { logoutReducer } from "../reducers/userSlice";
import { Head } from "../style/HeaderCss";

function Header() {
  const accessToken = sessionStorage.getItem("accessToken");
  const dispatch = useDispatch();
  const [isToggled, setIsToggled] = useState(false);
  const [userToggled, setUserToggled] = useState(false);
  const [search, setSearch] = useState("");
  const [cate, setCate] = useState([]);
  const navigate = useNavigate();

  // 카테고리 메뉴 불러오기
  const cateGet = async () => {
    const result = await menuCate();
    setCate(result);
  };

  useEffect(() => {
    cateGet();
  }, []);

  // 서브 메뉴 클릭 시 이동
  const handleSubMenuClick = async (mainMenu, subMenu, e) => {
    e.stopPropagation();
    console.log("카테고리 번호 찍자", mainMenu?.cateId, subMenu?.cateDetailId);
    const cateId = mainMenu.cateId;
    const subCateId =
      subMenu?.cateDetailId == undefined ? 0 : subMenu?.cateDetailId;
    const result = await cateProdList(1, cateId, subCateId);
    navigate("/productlist", {
      state: {
        maxPaige: result.maxPaige,
        list: result.list,
        pageCount: result.pageCount,
        cateId: cateId,
        subCate: subCateId,
      },
    });
  };

  // 메인 메뉴 클릭 시 이동
  const handleMainMenuClick = async mainMenu => {
    console.log("메인메뉴 번호 찍자", mainMenu?.cateId);
    const cateId = mainMenu.cateId;
    const result = await cateProdList(1, cateId, 0);
    navigate("/productlist", {
      state: {
        maxPaige: result.maxPaige,
        list: result.list,
        pageCount: result.pageCount,
        cateId: cateId,
      },
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
  const handleRemove = async () => {
    const logout = await postLogout();
    if (!logout) {
      dispatch(logoutReducer());
    }
    navigate("/");
  };

  // 상품 전체보기
  const handleAllProd = async () => {
    const result = await getMain(1);
    navigate("/productlist", {
      state: {
        maxPage: result.maxPage,
        list: result.list,
        pageCount: result.pageCount,
      },
    });
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
          onClick={() => setSearch("")}
        />
        <button className="glasswrap" onClick={e => handleSearchPost(e)}>
          <i className="glass">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </i>
        </button>
        {/* 메뉴 리스트 */}
      </form>
      <ul className="header_menulist">
        {cate.map(mainMenu => (
          <li
            key={mainMenu.cateName}
            onClick={() => handleMainMenuClick(mainMenu)}
          >
            {mainMenu.cateId}단계
            <ul>
              {mainMenu.list?.map(subMenu => (
                <li
                  key={subMenu.cateDetailId}
                  onClick={e => handleSubMenuClick(mainMenu, subMenu, e)}
                >
                  {subMenu.cateName}
                </li>
              ))}
            </ul>
          </li>
        ))}
        <li onClick={handleAllProd}>전체보기</li>
      </ul>
      {/* User 메뉴 리스트 */}
      <ul className="header_right">
        {accessToken ? (
          <>
            <li onClick={handleRemove}>로그아웃</li>
            <li onClick={() => navigate("/mypage")}>마이페이지</li>
            <li onClick={() => navigate("/cart")}>장바구니</li>
          </>
        ) : (
          <>
            <li onClick={() => navigate("/login")}>로그인</li>
            <li onClick={() => navigate("/signup")}>회원가입</li>
          </>
        )}
      </ul>
    </Head>
  );
}

export default Header;
