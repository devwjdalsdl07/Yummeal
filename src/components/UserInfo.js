import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { DatePicker, Space } from "antd";

const UserInfo = () => {
  const navigate = useNavigate();
  const [postcode, setPostcode] = useState("");
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [extraAddress, setExtraAddress] = useState("");

  useEffect(() => {
    // Daum 우편번호 스크립트를 동적으로 로드
    const script = document.createElement("script");
    script.src =
      "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    document.body.appendChild(script);

    // 스크립트가 로드되면 실행할 콜백 함수
    script.onload = () => {
      // Daum 우편번호 스크립트가 로드된 후에는 여기에서 코드를 실행할 수 있습니다.
      // 여기서 다음 스크립트를 사용하여 우편번호 찾기 기능을 구현할 수 있습니다.
    };
  }, []);
  const handleSignUp = () => {
    navigate("/Login");
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleExecDaumPostcode = () => {
    new window.daum.Postcode({
      oncomplete: function (data) {
        let addr = ""; // 주소 변수
        let extraAddr = ""; // 참고항목 변수

        // 사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
        if (data.userSelectedType === "R") {
          // 사용자가 도로명 주소를 선택했을 경우
          addr = data.roadAddress;
        } else {
          // 사용자가 지번 주소를 선택했을 경우(J)
          addr = data.jibunAddress;
        }

        // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
        if (data.userSelectedType === "R") {
          if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
            extraAddr += data.bname;
          }
          if (data.buildingName !== "" && data.apartment === "Y") {
            extraAddr +=
              extraAddr !== "" ? ", " + data.buildingName : data.buildingName;
          }
          if (extraAddr !== "") {
            extraAddr = " (" + extraAddr + ")";
          }
          setExtraAddress(extraAddr);
        } else {
          setExtraAddress("");
        }

        // 우편번호와 주소 정보를 상태에 저장한다.
        setPostcode(data.zonecode);
        setAddress(addr);
        // 커서를 상세주소 필드로 이동한다.
        document.getElementById("sample6_detailAddress").focus();
      },
    }).open();
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
            <div>
              <span>
                <i>
                  <FontAwesomeIcon icon={faCircle} />
                </i>
                아이 생년월일
              </span>
              {/* <input
                type="text"
                placeholder="이메일을 입력하세요"
                maxLength={100}
              /> */}
            </div>
          </JoinFormGroup>
          <Space direction="vertical">
            <DatePicker
              onChange={onChange}
              placeholder="YYYY-MM-DD"
              style={{ transform: "translateX(25px)" }}
            />
          </Space>
          <div>
            <input
              type="text"
              id="sample6_postcode"
              value={postcode}
              placeholder="우편번호"
            />
            <input
              type="button"
              onClick={handleExecDaumPostcode}
              value="우편번호 찾기"
            />
            <br />
            <input
              type="text"
              id="sample6_address"
              value={address}
              placeholder="주소"
            />
            <br />
            <input
              type="text"
              id="sample6_detailAddress"
              value={detailAddress}
              onChange={e => setDetailAddress(e.target.value)}
              placeholder="상세주소"
            />
            <input
              type="text"
              id="sample6_extraAddress"
              value={extraAddress}
              placeholder="참고항목"
            />
          </div>
          <JoinBtn onClick={handleSignUp}>회원가입</JoinBtn>
        </JoinWrap>
      </JoinArea>
    </JoinContainer>
  );
};

export default UserInfo;
