import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DatePicker, Space } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postSignUp } from "../api/signupaxios";
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

const SignUp = () => {
  const navigate = useNavigate();
  const [isAddressSearchOpen, setAddressSearchOpen] = useState(false);
  const [postcode, setPostcode] = useState("");
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  // const [extraAddress, setExtraAddress] = useState("");

  //오류메시지 상태저장
  const [nickNameMessage, setNickNameMessage] = useState("");
  const [idMessage, setIdMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [pwConfirmMessage, setPwConfirmMessage] = useState("");

  // 유효성 검사
  const [isNickName, setIsNickName] = useState(false);
  const [isId, setIsId] = useState(false);
  const [isPw, setIsPw] = useState(false);
  const [isPwConfirm, setIsPwConfirm] = useState(false);

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nickName, setNickName] = useState("");
  const [birth, setBirth] = useState("");

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
    const item = {
      email: id,
      password: pw,
      name: name,
      mobileNb: phone,
      zipCode: postcode,
      address: address,
      addressDetail: detailAddress,
      nickNm: nickName,
    };
    const result = postSignUp(item);
  };
  const handleOpenAddressSearch = () => {
    setAddressSearchOpen(true);
  };
  const handleCloseAddressSearch = () => {
    setAddressSearchOpen(false);
  };

  const onBirthChange = dateString => {
    setBirth(dateString);
  };

  const handleExecDaumPostcode = () => {
    if (!isAddressSearchOpen) {
      handleOpenAddressSearch();

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
          // if (data.userSelectedType === "R") {
          //   if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
          //     extraAddr += data.bname;
          //   }
          //   if (data.buildingName !== "" && data.apartment === "Y") {
          //     extraAddr +=
          //       extraAddr !== "" ? ", " + data.buildingName : data.buildingName;
          //   }
          //   if (extraAddr !== "") {
          //     extraAddr = " (" + extraAddr + ")";
          //   }
          //   setExtraAddress(extraAddr);
          // } else {
          //   setExtraAddress("");
          // }

          // 우편번호와 주소 정보를 상태에 저장한다.
          setPostcode(data.zonecode);
          setAddress(addr);
          // 커서를 상세주소 필드로 이동한다.
          document.getElementById("sample6_detailAddress").focus();
          handleCloseAddressSearch();
        },
        onclose: function () {
          handleCloseAddressSearch(); // 검색 창 닫기
        },
      }).open();
    }
  };
  // 이름 (추후 업데이트)
  const onNickNameChange = e => {
    setNickName(e.target.value.replace(/\s/gi, ""));
    if (e.target.value.length == 0 || e.target.value.length > 0) {
      setNickNameMessage("사용 가능한 닉네임이에요");
      setIsNickName(true);
    } else {
      setNickNameMessage("이미 다른 사용자가 사용 중이에요 ㅜㅜ");
      setIsNickName(false);
    }
  };
  // id
  const onIdChange = e => {
    const idRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const idCurrent = e.target.value.replace(/\s/gi, "");
    setId(idCurrent);

    if (!idRegex.test(idCurrent)) {
      setIdMessage("이메일 형식이 틀렸어요! 다시 확인해주세요");
      setIsId(false);
    } else {
      setIdMessage("올바른 이메일 형식이에요 : )");
      setIsId(true);
    }
  };
  //pw

  const onPwChange = e => {
    const pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const pwCurrent = e.target.value.replace(/\s/gi, "");
    setPw(pwCurrent);

    if (!pwRegex.test(pwCurrent)) {
      setPwMessage("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!");
      setIsPw(false);
    } else {
      setPwMessage("안전한 비밀번호에요 : )");
      setIsPw(true);
    }
  };
  //pwConfirm
  const onPwConfirmChange = e => {
    const pwConfirmRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const pwConfirmCurrent = e.target.value.replace(/\s/gi, "");
    setPwConfirm(pwConfirmCurrent);

    if (!pwConfirmRegex.test(pwConfirmCurrent)) {
      setPwConfirmMessage("비밀번호가 달라요 ! 다시 확인해주세요 ");
      setIsPwConfirm(true);
    } else {
      setPwConfirmMessage("비밀번호가 동일해요 :)");
      setIsPwConfirm(false);
    }
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
                placeholder="이메일 형식으로 입력하세요"
                value={id}
                maxLength={100}
                onChange={onIdChange}
              />
              <span>
                {id.length > 0 && (
                  <span className={`message ${isId ? "success" : "error"}`}>
                    {idMessage}
                  </span>
                )}
              </span>
            </JoinId>
            <div>
              <span>
                <i>
                  <FontAwesomeIcon icon={faCircle} />
                </i>
                닉네임
              </span>
              <input
                type="text"
                placeholder="닉네임을 입력하세요"
                value={nickName}
                onChange={onNickNameChange}
                maxLength={100}
              />
              {nickName.length > 0 && (
                <span className={`message ${isNickName ? "success" : "error"}`}>
                  {nickNameMessage}
                </span>
              )}
            </div>
            <JoinPw>
              <span>
                <i>
                  <FontAwesomeIcon icon={faCircle} />
                </i>
                비밀번호
              </span>
              <input
                type="password"
                placeholder="비밀번호를 입력하세요"
                value={pw}
                onChange={onPwChange}
                maxLength={100}
              />
              {pw.length > 0 && (
                <span className={`message ${isPw ? "success" : "error"}`}>
                  {pwMessage}
                </span>
              )}
            </JoinPw>
            <JoinPwConfirm>
              <span>
                <i>
                  <FontAwesomeIcon icon={faCircle} />
                </i>
                비밀번호 확인
              </span>
              <input
                type="password"
                placeholder="비밀번호를 한번 더 입력하세요"
                value={pwConfirm}
                onChange={onPwConfirmChange}
                maxLength={100}
              />
              {pwConfirm.length > 0 && (
                <span
                  className={`message ${isPwConfirm ? "success" : "error"}`}
                >
                  {pwConfirmMessage}
                </span>
              )}
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
                value={name}
                onChange={e => setName(e.target.value.replace(/\s/gi, ""))}
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
                placeholder="전화번호를 입력하세요 ( - 없이 입력)"
                value={phone}
                onChange={e => setPhone(e.target.value.replace(/\s/gi, ""))}
                maxLength={11}
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
              <Space direction="vertical">
                <DatePicker
                  onChange={onBirthChange}
                  placeholder="YYYY-MM-DD"
                  style={{
                    height: "30px",
                  }}
                />
              </Space>
              {/* <input
                type="text"
                placeholder="이메일을 입력하세요"
                maxLength={100}
              /> */}
            </div>
            <div className="test">
              <span>
                <i>
                  <FontAwesomeIcon icon={faCircle} />
                </i>
                주소
              </span>
              <input
                style={{ width: "150px", cursor: "pointer" }}
                type="text"
                id="sample6_postcode"
                value={postcode}
                placeholder="우편번호"
                onChange={e => setPostcode(e.target.value)}
                onClick={handleExecDaumPostcode}
                readOnly
              />
              {/* <input
              type="button"
              onClick={handleExecDaumPostcode}
              value="우편번호 찾기"
            /> */}
              <br />
              <input
                type="text"
                id="sample6_address"
                value={address}
                placeholder="주소"
                onChange={e => setAddress(e.target.value)}
                readOnly
              />
              <br />
              <input
                type="text"
                id="sample6_detailAddress"
                value={detailAddress}
                onChange={e => setDetailAddress(e.target.value)}
                placeholder="상세주소"
              />
              {/* <input
                type="text"
                id="sample6_extraAddress"
                value={extraAddress}
                placeholder="참고항목"
                onChange={e => setExtraAddress(e.target.value)}
              /> */}
            </div>
          </JoinFormGroup>

          <JoinBtn onClick={handleSignUp} >
            회원가입
          </JoinBtn>
        </JoinWrap>
      </JoinArea>
    </JoinContainer>
  );
};

export default SignUp;
