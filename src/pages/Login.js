import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContainer } from "../style/LoginCss";
import { fetchLogin, getUser } from "../api/client";
import { useDispatch } from "react-redux";
import { loginReducer } from "../reducers/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const handleSignUPClick = () => {
    navigate("/signup");
  };

  const handleLoginClick = async () => {
    const login = await fetchLogin(id, pw);
    console.log("로그인 시 넘어오는 : ", login);
    if (login.success) {
      const fetchUser = await getUser(1);
      dispatch(loginReducer(fetchUser));
      navigate("/");
    }
  };
  return (
    <LoginContainer>
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
                onChange={e => setPw(e.target.value)}
                maxLength={100}
                style={{ height: "50px" }}
              />
            </div>
            <button
              className="login-btn"
              style={{ height: "50px", fontSize: "15px", fontWeight: "500" }}
              onClick={handleLoginClick}
            >
              로그인
            </button>
            <ul className="login-find">
              <li>아이디 찾기</li>
              <li>비밀번호 찾기</li>
            </ul>
          </div>
          <div className="sns-login">
            <ul>
              <li>
                <FontAwesomeIcon icon={faComment} style={{ padding: "10px" }} />
                카카오로 시작하기
              </li>
            </ul>
          </div>
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
    </LoginContainer>
  );
};

export default Login;
