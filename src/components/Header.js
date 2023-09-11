import {
  faBars,
  faCircleXmark,
  faClockRotateLeft,
  faMagnifyingGlass,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cateProdList, menuCate } from "../api/axios";
import {
  popularKeyword,
  postLogout,
  recentDelete,
  recentKeyword,
} from "../api/client";
import { getMain } from "../api/mainFatch";
import { logoutReducer } from "../reducers/userSlice";
import { Head } from "../style/HeaderCss";

function Header() {
  const accessToken = sessionStorage.getItem("accessToken")||localStorage.getItem("accessToken");
  const dispatch = useDispatch();
  const [isToggled, setIsToggled] = useState(false);
  const [userToggled, setUserToggled] = useState(false);
  const [search, setSearch] = useState("");
  const [cate, setCate] = useState([]);
  const [recentwordList, setRecentwordList] = useState([]);
  const [isRecently, setIsRecently] = useState(false);
  const [popularSearch, setPopularSearch] = useState([]);
  const [isPopular, setIsPopular] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);
  const navigate = useNavigate();

  // 카테고리 메뉴 불러오기
  const cateGet = async () => {
    const result = await menuCate();
    setCate(result);
  };

  // 최근검색어 데이터 불러오기
  const recentSearch = async () => {
    const result = await recentKeyword();
    setRecentwordList(result);
  };

  // 인기검색어 데이터 불러오기
  const popularSearchData = async () => {
    const result = await popularKeyword();
    setPopularSearch(result);
  };

  useEffect(() => {
    cateGet();
    if (accessToken) {
      recentSearch();
      popularSearchData();
    }
  }, [accessToken]);

  // 서브 메뉴 클릭 시 이동
  const handleSubMenuClick = async (mainMenu, subMenu, e) => {
    e.stopPropagation();
    console.log(
      "카테고리 번호 찍자",
      mainMenu?.category?.cateId,
      subMenu?.cateDetailId,
    );
    const cateId = mainMenu?.category?.cateId;
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
        maxCount: result.maxCount,
        cateId: cateId,
      },
    });
  };

  // 최신검색어 인풋창 마우스호버
  const handleHover = e => {
    if (accessToken) {
      setIsRecently(true);
      setIsPopular(true);
    }
  };

  // 최신검색어 인풋창 마우스리브
  const handleLeave = e => {
    if (accessToken) {
      setIsRecently(false);
      setIsPopular(false);
    }
  };

  // 최근검색어 삭제
  const handleRecentDelete = async item => {
    const res = await recentDelete(item);
    recentSearch();
  };

  // 최근/인기검색어 검색결과 이동
  const handleRecentClick = item => {
    navigate("/search", { state: { product: item } });
    setSearch("");
  };

  // 검색결과창 이동
  const handleSearchPost = e => {
    e.preventDefault();
    navigate("/search", { state: { product: search } });
    setSearch("");
  };

  // 로그아웃
  const handleRemove = async () => {
    const logout = await postLogout();
    if (!logout) {
      localStorage.removeItem("accessToken")
      dispatch(logoutReducer());
    }
    navigate("/main");
  };

  // 상품 전체보기
  const handleAllProd = async () => {
    const result = await getMain(1);
    navigate("/productlist", {
      state: {
        maxPage: result.maxPage,
        list: result.list,
        maxCount: result.maxCount,
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
        <img
          src={`${process.env.PUBLIC_URL}/images/logo.png`}
          onClick={() => navigate("/main")}
        ></img>
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
      <form
        className="searchwrap"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <input
          className="search"
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="검색어를 입력하세요"
        />
        <button className="glasswrap" onClick={handleSearchPost}>
          <i className="glass">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </i>
        </button>
        {/* 메뉴 리스트 */}
      </form>
      {accessToken && isRecently && (
        <>
          <div className="recent-title" onMouseEnter={handleHover}>
            <h3>최근검색어</h3>
            <h3>인기검색어</h3>
          </div>
          <div
            className="grid-wrap"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <div className="recent-wrap">
              {recentwordList?.map((item, idx) => (
                <div
                  key={idx + 6}
                  onMouseEnter={() => setHoverIndex(idx)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <div className="recent-content">
                    <div>
                      <i>
                        <FontAwesomeIcon icon={faClockRotateLeft} />
                      </i>
                    </div>
                    <div
                      className="content-title"
                      onClick={() => handleRecentClick(item)}
                    >
                      {item}
                    </div>
                  </div>
                  <div
                    className="xmark"
                    onClick={() => handleRecentDelete(item)}
                  >
                    <i
                      style={{
                        display: hoverIndex === idx ? "inline" : "none",
                      }}
                    >
                      <FontAwesomeIcon icon={faCircleXmark} />
                    </i>
                  </div>
                </div>
              ))}
            </div>
            <div className="popular-wrap">
              {popularSearch?.map((item, idx) => (
                <div key={idx + 6}>
                  <div className="popular-content">
                    <div
                      className="content-title"
                      onClick={() => handleRecentClick(item.value)}
                    >
                      <span>{idx + 1}.</span>
                      <strong>{item.product}</strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      <ul className="header_menulist">
        {cate.map((mainMenu, idx) => (
          <li
            key={idx + 5}
            onClick={() => handleMainMenuClick(mainMenu?.category)}
          >
            {mainMenu?.category?.cateId}단계
            <ul>
              {mainMenu?.cateDetail?.map(subMenu => (
                <li
                  key={subMenu?.cateDetailEntity?.cateDetailId}
                  onClick={e =>
                    handleSubMenuClick(mainMenu, subMenu?.cateDetailEntity, e)
                  }
                >
                  {subMenu?.cateDetailEntity?.cateDetailName}
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
            <li onClick={() => navigate("/cart")}>장바구니</li>
          </>
        )}
      </ul>
    </Head>
  );
}

export default Header;
