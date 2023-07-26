import React from "react";
import {
  JoinArea,
  JoinBtn,
  JoinContainer,
  JoinFormGroup,
  JoinId,
  JoinPw,
  JoinPwConfirm,
  JoinText,
  JoinTitleWrapTop,
  JoinWrap,
} from "../style/SignUpCss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

const SignUp = () => {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/Login");
  };
  return (
    <JoinContainer>
      <JoinArea>
        <JoinText>회원가입</JoinText>
        <JoinWrap>
          <JoinTitleWrapTop>
            <h3>정보입력</h3>
            <div>
              <i>
                <FontAwesomeIcon icon={faCircle} />
              </i>
              <span>는 필수입력사항 입니다.</span>
            </div>
          </JoinTitleWrapTop>
          <JoinFormGroup>
            <JoinId>
              <span>
                <i>
                  <FontAwesomeIcon icon={faCircle} />
                </i>
                아이디
              </span>
              <input
                type="text"
                placeholder="아이디를 입력하세요"
                maxLength={100}
              />
            </JoinId>
            <JoinPw>
              <span>
                <i>
                  <FontAwesomeIcon icon={faCircle} />
                </i>
                비밀번호
              </span>
              <input
                type="text"
                placeholder="비밀번호를 입력하세요"
                maxLength={100}
              />
            </JoinPw>
            <JoinPwConfirm>
              <span>
                <i>
                  <FontAwesomeIcon icon={faCircle} />
                </i>
                비밀번호 확인
              </span>
              <input
                type="text"
                placeholder="비밀번호를 한번 더 입력하세요"
                maxLength={100}
              />
            </JoinPwConfirm>
            <div className="pw-group">
              <span>
                <i>
                  <FontAwesomeIcon icon={faCircle} />
                </i>
                이름
              </span>
              <input
                type="text"
                placeholder="이름을 입력하세요"
                maxLength={100}
              />
            </div>
            <div>
              <span>
                <i>
                  <FontAwesomeIcon icon={faCircle} />
                </i>
                휴대전화
              </span>
              <input
                type="text"
                placeholder="전화번호를 입력하세요"
                maxLength={100}
              />
            </div>
            <div>
              <span>
                <i>
                  <FontAwesomeIcon icon={faCircle} />
                </i>
                이메일
              </span>
              <input
                type="text"
                placeholder="이메일을 입력하세요"
                maxLength={100}
              />
            </div>
            {/* 생년월일 드랍박스 들어갈 자리 */}
          </JoinFormGroup>
          <JoinBtn onClick={handleSignUp}>회원가입</JoinBtn>
        </JoinWrap>
      </JoinArea>
    </JoinContainer>
  );
};

export default SignUp;
