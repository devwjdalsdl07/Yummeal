import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React } from "react";
import { LoginContainer } from "../style/LoginCss";

const Login = () => {
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
                maxLength={100}
                style={{ height: "50px" }}
              />
            </div>
            <div className="pw-group">
              <span style={{ fontSize: "16px", fontWeight: "500" }}>
                비밀번호
              </span>
              <input
                type="text"
                placeholder="비밀번호를 입력하세요"
                maxLength={100}
                style={{ height: "50px" }}
              />
            </div>
            <button
              className="login-btn"
              style={{ height: "50px", fontSize: "15px", fontWeight: "500" }}
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
              <li style={{ cursor: "pointer" }}>회원가입</li>
            </ul>
          </div>
        </div>
      </div>
    </LoginContainer>
  );
};

export default Login;
