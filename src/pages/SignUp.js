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
  JoinNickNm,
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
  const [nameMessage, setNameMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");
  const [birthMessage, setBirthMessage] = useState("");
  const [detailAddressMessage, setDetailAddressMessage] = useState("");

  // 유효성 검사
  const [isNickName, setIsNickName] = useState(false);
  const [isId, setIsId] = useState(false);
  const [isPw, setIsPw] = useState(false);
  const [isPwConfirm, setIsPwConfirm] = useState(false);
  const [isName, setIsName] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [isBirth, setIsBirth] = useState(false);
  const [isPostCode, setIsPostCode] = useState(false);
  const [isAddress, setIsAddress] = useState(false);
  // 회원가입 버튼 활성화 여부
  const [isSignup, setIsSignup] = useState(true);

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

  const handleOpenAddressSearch = () => {
    setAddressSearchOpen(true);
  };
  const handleCloseAddressSearch = () => {
    setAddressSearchOpen(false);
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
    // setIdMessage("");
    // setIsId(false);
  };
  // 아이디 중복 체크
  const onIdCheck = e => {
    e.preventDefault();
    console.log("아이디 중복체크 axios");
    if (isId) {
      setIdMessage("사용 가능한 아이디에요");
      setIsId(true);
    } else if (!isId) {
      setIdMessage("이메일 형식이 아니에요");
      setIsId(false);
    }
    // if (e.target.value.length == 0 || e.target.value.length > 0) {
    //   setIdMessage("사용 가능한 아이디에요");
    //   setIsId(true);
    // } else {
    //   setIdMessage("이미 다른 사용자가 사용 중이에요 ㅜㅜ");
    //   setIsId(false);
    // }
  };
  // const onIdCheck = async e => {
  //   e.preventDefault();
  //   try {
  //     // 서버에 이메일 중복 체크 요청을 보내고 응답을 받아 처리
  //     const response = await checkEmailDuplicate(e.target.value);
  //     if (response.data.isDuplicate) {
  //       setIdMessage("이미 다른 사용자가 사용 중이에요 ㅜㅜ");
  //       setIsId(false);
  //     } else {
  //       setIdMessage("사용 가능한 아이디에요");
  //       setIsId(true);
  //     }
  //   } catch (error) {
  //     // 에러 처리
  //     console.error("이메일 중복 체크 오류:", error);
  //   }
  // };
  // 닉네임 (추후 업데이트)
  const onNickNameChange = e => {
    const nickNameRegex = /^[a-zA-Z0-9ㄱ-힣]{3,5}$/;
    // setNickName(e.target.value.replace(/\s/gi, ""));

    setNickName(
      e.target.value.replace(/[!?,@#$%^&*()]/g, "").replace(/\s/gi, ""),
    );
    if (!nickNameRegex.test(nickName)) {
      setNickNameMessage("알파벳, 숫자, 한글만 사용해서 설정해주세요 !");
    }
    // if (e.target.value.length == 0) {
    //   setNickNameMessage("닉네임을 입력해주세요.");
    // }
    // setNickNameMessage("");
    // setIsNickName(false);
  };
  // 닉네임 중복 체크
  const onNickNameCheck = e => {
    e.preventDefault();
    console.log("닉네임 중복체크 axios");
    if (isNickName) {
      setNickNameMessage("사용 가능한 닉네임이에요");
      setIsNickName(true);
    } else if (!isNickName) {
      setNickNameMessage("이미 다른 사용자가 사용 중이에요 ㅜㅜ");
      setIsNickName(false);
    }
    // if (e.target.value.length == 0 || e.target.value.length > 0) {
    //   setNickNameMessage("사용 가능한 닉네임이에요");
    //   setIsNickName(true);
    // } else {
    //   setNickNameMessage("이미 다른 사용자가 사용 중이에요 ㅜㅜ");
    //   setIsNickName(false);
    // }
  };
  // const onNickNameCheck = async e => {
  //   e.preventDefault();
  //   try {
  //     // 서버에 닉네임 중복 체크 요청을 보내고 응답을 받아 처리
  //     const response = await checkNickNameDuplicate(e.target.value);
  //     if (response.data.isDuplicate) {
  //       setNickNameMessage("이미 다른 사용자가 사용 중이에요 ㅜㅜ");
  //       setIsNickName(false);
  //     } else {
  //       setNickNameMessage("사용 가능한 닉네임이에요");
  //       setIsNickName(true);
  //     }
  //   } catch (error) {
  //     // 에러 처리
  //     console.error("닉네임 중복 체크 오류:", error);
  //   }
  // };

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
    if (pwConfirm !== pwCurrent) {
      setPwConfirmMessage("비밀번호가 달라요 ! 다시 확인해주세요 ");
      setIsPwConfirm(false);
    } else {
      setPwConfirmMessage("비밀번호가 동일해요 :)"); // 비밀번호가 동일하면 메시지를 지워줍니다.
      setIsPwConfirm(true);
    }
    // setPwMessage("");
    // setIsPw(false);
  };
  //pwConfirm
  const onPwConfirmChange = e => {
    const pwConfirmCurrent = e.target.value.replace(/\s/gi, "");
    setPwConfirm(pwConfirmCurrent);

    if (pw !== pwConfirmCurrent) {
      setPwConfirmMessage("비밀번호가 달라요 ! 다시 확인해주세요 ");
      setIsPwConfirm(false);
    } else {
      setPwConfirmMessage("비밀번호가 동일해요 :)");
      setIsPwConfirm(true);
    }

    // if (!pwConfirmRegex.test(pwConfirmCurrent)) {
    //   setPwConfirmMessage("비밀번호가 달라요 ! 다시 확인해주세요 ");
    //   setIsPwConfirm(true);
    // } else {
    //   setPwConfirmMessage("비밀번호가 동일해요 :)");
    //   setIsPwConfirm(false);
    // }
  };
  // 이름 작성
  const onChangeName = e => {
    setName(e.target.value.replace(/[!?,@#$%^&*()]/g, "").replace(/\s/gi, ""));
    if (e.target.value.length === 0) {
      setNameMessage("이름을 입력하여 주세요. ");
      setIsName(false);
    } else {
      setNameMessage("정상적으로 이름을 입력하셨습니다.");
      setIsName(true);
    }
    // setNameMessage("");
    // setIsName(false);
  };

  // 전화번호
  const onChangePhone = e => {
    // 한국 휴대폰 번호 형식에 맞는 정규표현식
    const koreanPhoneNumberRegex = /^01(?:0|1|[6-9])(\d{3}|\d{4})\d{4}$/;
    // 검증할 휴대폰 번호 (하이픈 제거)
    const phoneNumber = e.target.value.replace(/[^\d]/g, "");
    setPhone(phoneNumber);
    if (koreanPhoneNumberRegex.test(phoneNumber)) {
      setPhoneMessage("정상적으로 전화번호를 입력하셨습니다.");
      setIsPhone(true);
    } else {
      setPhoneMessage("전화번호를 입력하여 주세요. ");
      setIsPhone(false);
    }
    // setNameMessage("");
    // setIsName(false);
  };

  // 생년월일 변경
  const onBirthChange = (value, dateString) => {
    setBirth(dateString);
    if (birth) {
      setIsBirth(true);
    } else {
      setIsBirth(false);
    }
  };

  // 우편번호 변경
  const onPostChange = e => {
    setPostcode(e.target.value);
    console.log("우편번호", e.target);

    if (postcode) {
      setIsPostCode(true);
    } else {
      setIsPostCode(false);
    }
  };

  // 주소 변경
  const onAddressChange = e => {
    setAddress(e.target.value);
    console.log("주소", address);
    if (address) {
      setIsAddress(true);
    } else {
      setIsAddress(false);
    }
  };

  // 상세주소 변경
  const onDetailAddressChange = e => {
    setDetailAddress(
      e.target.value.replace(/[!?,@#$%^&*()]/g, "").replace(/\s/gi, ""),
    );
  };

  const handleSignUp = () => {
    console.log("입력");
    if (!isId) {
      setIdMessage("이메일을 입력해주세요.");
      // alert("이메일을 입력해주세요.");
      return;
    }
    if (!isNickName) {
      setNickNameMessage("닉네임을 입력해주세요.");
      // alert("닉네임을 입력해주세요.");
      return;
    }
    if (!isPw) {
      setPwMessage("비밀번호를 확인해주세요.");
      // alert("비밀번호를 확인해주세요.");
      return;
    }
    if (!isPwConfirm) {
      setPwMessage("비밀번호 재입력을 확인해주세요.");
      // alert("비밀번호 재입력을 확인해주세요.");
      return;
    }
    if (!isName) {
      setNameMessage("이름을 입력하여 주세요. ");
      // alert("이름을 입력해 주세요");
      return;
    }
    if (!isPhone) {
      setPhoneMessage("전화번호를 입력하여 주세요. ");
      // alert("전화번호를 입력해 주세요");
      return;
    }
    if (!isPostCode) {
      detailAddressMessage("주소를 입력하여 주세요. ");
      // alert("주소를 입력해 주세요");
      return;
    }
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
    navigate("/login");
  };

  // useEffect(() => {
  //   if (
  //     isNickName &&
  //     isId &&
  //     isPw &&
  //     isPwConfirm &&
  //     isName &&
  //     isPhone &&
  //     isBirth &&
  //     isPostCode &&
  //     isAddress
  //   ) {
  //     setIsSignup(false);
  //   } else {
  //     setIsSignup(true);
  //   }
  // }, [id, nickName, pw, pwConfirm, name, phone, birth, postcode, address]);

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
              <div className="idBox">
                <input
                  type="text"
                  placeholder="이메일 형식으로 입력하세요"
                  value={id}
                  maxLength={50}
                  onChange={onIdChange}
                />
                <button onClick={onIdCheck}>중복확인</button>
              </div>
              <span>
                {id.length > 0 && (
                  <span className={`message ${isId ? "success" : "error"}`}>
                    {idMessage}
                  </span>
                )}
              </span>
            </JoinId>
            <JoinNickNm>
              <span>
                <i>
                  <FontAwesomeIcon icon={faCircle} />
                </i>
                닉네임
              </span>
              <div className="nmBox">
                <input
                  type="text"
                  placeholder="닉네임을 입력하세요"
                  value={nickName}
                  onChange={onNickNameChange}
                  maxLength={5}
                />
                <button onClick={onNickNameCheck}>중복확인</button>
              </div>
              {nickName.length > 0 && (
                <span className={`message ${isNickName ? "success" : "error"}`}>
                  {nickNameMessage}
                </span>
              )}
            </JoinNickNm>
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
                maxLength={30}
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
                maxLength={30}
              />
              {pwConfirm.length > 0 && (
                <span
                  className={`message ${isPwConfirm ? "success" : "error"}`}
                >
                  {pwConfirmMessage}
                </span>
              )}
            </JoinPwConfirm>
            <div style={{ height: "70px" }}>
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
                onChange={onChangeName}
                maxLength={8}
              />
            </div>
            <div style={{ height: "75px" }}>
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
                onChange={onChangePhone}
                maxLength={11}
              />
              {phone.length > 0 && (
                <span className={`message ${isPhone ? "success" : "error"}`}>
                  {phoneMessage}
                </span>
              )}
            </div>

            {/* 생년월일 드랍박스 들어갈 자리 */}
            <div style={{ height: "50px" }}>
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

              <span className={`message ${isBirth ? "success" : "error"}`}>
                {birthMessage}
              </span>

              {/* <input
                type="text"
                placeholder="이메일을 입력하세요"
                maxLength={100}
              /> */}
            </div>
            <div className="postBox">
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
                onChange={onPostChange}
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
                onChange={onAddressChange}
                readOnly
              />
              <br />
              <input
                type="text"
                id="sample6_detailAddress"
                value={detailAddress}
                onChange={onDetailAddressChange}
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
          <JoinBtn onClick={handleSignUp}>회원가입</JoinBtn>
        </JoinWrap>
      </JoinArea>
    </JoinContainer>
  );
};

export default SignUp;
