import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContainer, SnsLoginWrap } from "../style/LoginCss";
import { fetchLogin, getChild, getUser } from "../api/client";
import { useDispatch } from "react-redux";
import { loginReducer } from "../reducers/userSlice";
import ChildModal from "../components/ChildModal";
import { useEffect } from "react";
import sessionStorage from "redux-persist/es/storage/session";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [id, setId] = useState("tt@tt.com");
  // const [pw, setPw] = useState("1234");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  // const [showModal, setShowModal] = useState(false);

  const handleSignUPClick = () => {
    navigate("/signup");
  };

  const handleLoginClick = async () => {
    const login = await fetchLogin(id, pw);
    console.log("로그인 시 넘어오는 : ", login);
    if (!login) {
      alert("로그인에 실패 하였습니다.");
    }
    if (login) {
      // if (login.success) {
      const fetchUser = await getUser();
      const fetchChild = await getChild();
      dispatch(loginReducer(fetchUser, fetchChild));
      navigate("/main");
      // }
      // setShowModal(true);
    }
  };
  const handleSubmit = event => {
    event.preventDefault(); // 기본 엔터 동작 방지
    if (event.key === "Enter") {
      handleLoginClick();
    }
  };
  // useEffect(() => {
  //   const isFirstLogin = sessionStorage.getItem("isFirstLogin");
  //   if (isFirstLogin === "true") {
  //     setShowModal(true);
  //     sessionStorage.setItem("isFirstLogin", "false");
  //   }
  // });
  return (
    <LoginContainer>
      <form onSubmit={handleSubmit}>
        <div className="login-area">
          <div className="login-text">로그인</div>
          <div className="login-wrap">
            <div className="login-form">
              <div className="id-group">
                <span style={{ fontSize: "16px", fontWeight: "500" }}>
                  아이디
                </span>
                <input
                  type="text"
                  placeholder="아이디를 입력하세요"
                  value={id}
                  onChange={e => setId(e.target.value)}
                  maxLength={100}
                  style={{ height: "50px" }}
                />
              </div>
              <div className="pw-group">
                <span style={{ fontSize: "16px", fontWeight: "500" }}>
                  비밀번호
                </span>
                <input
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  value={pw}
                  maxLength={100}
                  style={{ height: "50px" }}
                  onChange={e => setPw(e.target.value)}
                />
              </div>
              <button
                className="login-btn"
                style={{ height: "50px", fontSize: "15px", fontWeight: "500" }}
                onClick={handleLoginClick}
                tabIndex={0}
              >
                로그인
              </button>
              {/* {showModal === true ? (
                <ChildModal setShowModal={setShowModal} />
              ) : null} */}
              <ul className="login-find">
                <li>아이디 찾기</li>
                <li>비밀번호 찾기</li>
              </ul>
            </div>
            <SnsLoginWrap>
              {/* <button className="kakao-login">
                <FontAwesomeIcon icon={faComment} style={{ padding: "10px" }} />
                카카오로 시작하기
              </button> */}
              {/* 카카오 샘플 */}
              <button className="kakao-login">
                <FontAwesomeIcon
                  icon={faComment}
                  style={{ padding: "10px", fontSize: "20px" }}
                />
                <a href="/oauth2/authorization/kakao?redirect_uri=http://192.168.0.144:5001/sns">
                  카카오로 시작하기
                </a>
              </button>
              <button className="naver-login">
                <img
                  src={`${process.env.PUBLIC_URL}/images/naver.png`}
                  alt="logo"
                  style={{ padding: "5px" }}
                />
                네이버로 시작하기
              </button>
            </SnsLoginWrap>
            <div>
              <ul
                style={{
                  textAlign: "center",
                  fontSize: "18pX",
                  fontWeight: "500",
                  color: "#ccc",
                }}
              >
                <li
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={handleSignUPClick}
                >
                  회원가입
                </li>
              </ul>
            </div>
          </div>
        </div>
      </form>
    </LoginContainer>
  );
};

export default Login;
