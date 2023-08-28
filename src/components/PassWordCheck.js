import React from "react";
import { PasswordCheckWrap } from "../style/PassWordCheckCss";

const PassWordCheck = () => {
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
              // value={password}
              // onChange={handlePasswordChange}
            />
            <span className="input-group-btn">
              <button
                className="btn-submit"
                type="button"
                //   onClick={handlePasswordSubmit}
              >
                <span>확인</span>
              </button>
            </span>
          </div>
        </div>

        <div className="input-guide-box">
          <div className="txt-area">
            <h4 className="box-tit">SNS 인증을 해주세요.</h4>
            <p className="txt">
              안전한 회원정보 변경을 위해 SNS인증을 다시 한번해 주세요.
            </p>
          </div>
          <a
            href="javascript:loginWithkakao()"
            className="kakao sns-login-box type-lg"
            //   onClick={handleSNSAuth}
          >
            <span className="logo"></span>
            <p>카카오로 확인하기</p>
          </a>
        </div>
      </div>
    </PasswordCheckWrap>
  );
};

export default PassWordCheck;
