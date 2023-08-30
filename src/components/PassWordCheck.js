import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { postPassWordCheck } from "../api/axios";
import { PasswordCheckWrap } from "../style/PassWordCheckCss";

const PassWordCheck = ({ setPasswordCorrect }) => {
  const [passWord, setPassWord] = useState();

  const handlePasswordChange = e => {
    setPassWord(e.target.value);
  };

  const handlePasswordSubmit = async e => {
    e.preventDefault();
    const postPassword = await postPassWordCheck(passWord);
    if (passWord) {
      if (postPassword === 1) {
        setPasswordCorrect(true);
      } else if (postPassword === 0) {
        setPasswordCorrect(false);
      }
    }
  };
  const handleKeydown = e => {
    if (e.key === "Enter") {
      handlePasswordSubmit(e);
    }
  };

  return (
    <PasswordCheckWrap>
      <div className="info-wrap">
        <div className="menu-title-area">
          <h3>정보수정</h3>
        </div>

        <div className="input-guide-box">
          <div className="txt-area">
            <h4>비밀번호를 입력해주세요.</h4>
            <p>
              안전한 회원정보 변경을 위해 비밀번호를 다시 한번 입력해 주세요.
            </p>
          </div>
          <div className="input-group">
            <input
              className="input-text"
              type="password"
              placeholder="비밀번호 입력"
              value={passWord}
              onChange={(e) => handlePasswordChange(e) }
              onKeyDown={(e) => handleKeydown(e)}
            />
            <span className="input-group-btn">
              <button type="button" onClick={(e) => handlePasswordSubmit(e)}>
                <span>확인</span>
              </button>
            </span>
          </div>
        </div>

        <div className="input-guide-box">
          <div className="txt-area">
            <h4 className="box-tit">SNS 인증을 해주세요.</h4>
            <p className="txt">
              안전한 회원정보 변경을 위해 SNS인증을 한번 더 해 주세요.
            </p>
          </div>
          <div className="kakao-sns-login-box">
            <a
              href="javascript:loginWithkakao()"

              //   onClick={handleSNSAuth}
            >
              <span className="logo">
                <FontAwesomeIcon icon={faComment} style={{ padding: "10px" }} />
              </span>
              <p>카카오로 확인하기</p>
            </a>
          </div>
        </div>
      </div>
    </PasswordCheckWrap>
  );
};

export default PassWordCheck;
