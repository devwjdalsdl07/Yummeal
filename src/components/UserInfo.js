import React, { useEffect, useState } from "react";
import {
  JoinArea,
  JoinBtn,
  JoinContainer,
  JoinFormGroup,
  JoinId,
  JoinPost,
  JoinPw,
  JoinPwConfirm,
  JoinText,
  JoinTitleWrapTop,
  JoinWrap,
  JoinNickNm,
  AddChildBirth,
} from "../style/UserInfoCss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { DatePicker, Space } from "antd";
import { deleteUser, fetchUserInfo } from "../api/client";
import dayjs from "dayjs";
import locale from "antd/locale/ko_KR";
import { Modal, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logoutReducer, userEditReducer } from "../reducers/userSlice";
import { getNickNameCheck, postPassWordCheck } from "../api/axios";
import ChildModal from "./ChildModal";
import PlusChildModal from "./PlusChildModal";

const UserInfo = ({ setActiveComponent }) => {
  const {
    uid,
    name,
    birthday,
    mobileNb,
    zipcode,
    address,
    addressDetail,
    nickNm,
    point,
  } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [postcode, setPostcode] = useState("");
  const [userAddress, setUserAddress] = useState();
  const [detailAddress, setDetailAddress] = useState();
  // const [extraAddress, setExtraAddress] = useState("");
  const [id, setId] = useState();
  const [pw, setPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");
  const [userName, setUserName] = useState();
  const [phone, setPhone] = useState("");

  const [nickName, setNickName] = useState("");
  const [nickNameRemember, setNickNameRemember] = useState("");

  const [birth, setBirth] = useState();
  const [childBirth, setChildBirth] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChildModalOpen, setIsChildModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // 유효성 검사
  const [isPw, setIsPw] = useState(true);
  const [isPwConfirm, setIsPwConfirm] = useState(true);
  const [isPhone, setIsPhone] = useState(true);
  const [isNickNameCheck, setIsNickNameCheck] = useState(true);

  // 오류메시지 상태 저장
  const [idMessage, setIdMessage] = useState("");
  const [nickNameMessage, setNickNameMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [pwConfirmMessage, setPwConfirmMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");

  //  닉네임 입력 값 체크
  const [nickNameInput, setNickNameInput] = useState(nickName);

  const validationStates = [isPw, isPwConfirm, isPhone, isNickNameCheck];

  const canEdit = validationStates.every(state => state);

  const onBirthChange = (value, dateString) => {
    setBirth(dateString);
  };
  const onChildBirthChange = (value, dateString) => {
    setChildBirth(dateString);
  };

  // 닉네임 (추후 업데이트)
  const onNickNameChange = e => {
    setIsNickNameCheck(false);
    const nickNameRegex = /^[a-zA-Z0-9ㄱ-힣]{3,5}$/;
    setNickName(e.target.value.replace(/\s/gi, ""));
    setNickNameMessage(null);
    const newNickName = e.target.value
      .replace(/[!?,@#$%^&*()]/g, "")
      .replace(/\s/gi, "");
    setNickNameInput(newNickName);
    if (newNickName === nickNameRemember) {
      setIsNickNameCheck(true);
    } else {
      setIsNickNameCheck(false);
    }
  };
  // 닉네임 중복 체크
  const onNickNameCheck = async e => {
    e.preventDefault();

    // nickName 중복체크시 기준 이름과 비교를 함.
    if (nickNameInput !== nickNameRemember) {
      const getNickName = await getNickNameCheck(nickNameInput);
      if (nickNameInput) {
        if (getNickName === 0) {
          setNickNameMessage("사용 가능한 닉네임이에요");
          setIsNickNameCheck(true);
        } else if (getNickName === 1) {
          setNickNameMessage("이미 다른 사용자가 사용 중이에요 ㅜㅜ");
          setIsNickNameCheck(false);
        }
      }

      // if (e.target.value.length == 0 || e.target.value.length > 0) {
      //   setNickNameMessage("사용 가능한 닉네임이에요");
      //   setIsNickName(true);
      // } else {
      //   setNickNameMessage("이미 다른 사용자가 사용 중이에요 ㅜㅜ");
      //   setIsNickName(false);
      // }
    }
  };

  //pw
  const onPwChange = e => {
    const pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const pwCurrent = e.target.value.replace(/\s/gi, "");
    setPw(pwCurrent);

    if (pwCurrent === pwConfirm) {
      setPwConfirmMessage("비밀번호가 동일해요");
      setIsPwConfirm(true);
    } else if (pwCurrent !== pwConfirm) {
      setPwConfirmMessage("비밀번호가 달라요 ! 다시 확인해주세요");
      setIsPwConfirm(false);
    }

    if (!pwRegex.test(pwCurrent)) {
      setPwMessage("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!");
      setIsPw(false);
    } else {
      setPwMessage("안전한 비밀번호에요 : )");
      setIsPw(true);
    }

    // setPwMessage("");
    // setIsPw(false);
  };
  //pwConfirm
  const onPwConfirmChange = e => {
    const pwConfirmCurrent = e.target.value.replace(/\s/gi, "");
    setPwConfirm(pwConfirmCurrent);
    if (isPw) {
      if (pw !== pwConfirmCurrent) {
        setPwConfirmMessage("비밀번호가 달라요 ! 다시 확인해주세요 ");
        setIsPwConfirm(false);
      } else {
        setPwConfirmMessage("비밀번호가 동일해요 :)");
        setIsPwConfirm(true);
      }
    } else if (!isPw) {
      setPwConfirmMessage("비밀번호를 먼저 확인해 주세요");
      setIsPwConfirm(false);
    }
    // if (!pwConfirmRegex.test(pwConfirmCurrent)) {
    //   setPwConfirmMessage("비밀번호가 달라요 ! 다시 확인해주세요 ");
    //   setIsPwConfirm(true);
    // } else {
    //   setPwConfirmMessage("비밀번호가 동일해요 :)");
    //   setIsPwConfirm(false);
    // }
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

  // 상세주소 변경
  const onDetailAddressChange = e => {
    setDetailAddress(
      e.target.value.replace(/[!?,@#$%^&*()]/g, "").replace(/\s/gi, ""),
    );
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
        setUserAddress(addr);
        // 커서를 상세주소 필드로 이동한다.
        document.getElementById("sample6_detailAddress").focus();
      },
    }).open();
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleBirth = () => {
    setIsChildModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const showDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };
  const handleEdit = async () => {
    if (!isNickNameCheck) {
      alert("닉네임 중복검사를 해 주세요 !");
      return;
    }
    if (!isPw) {
      alert("비밀번호를 확인 해 주세요");
      return;
    }
    if (!isPwConfirm) {
      alert("동일한 비밀번호가 아니에요 ");
      return;
    }
    if (!isPhone) {
      alert("전화번호를 확인 해주세요");
      return;
    }

    if (canEdit) {
      showModal();
    } else {
      // 유효성 검사가 통과되지 않았을 때 처리
      alert("입력값을 다시 확인해주세요.");
    }
  };
  const handleOk = async () => {
    setIsModalOpen(false);
    const profile = {
      name: userName,
      nickNm: nickName,
      password: pw,
      phoneNumber: phone,
      birthday: birth,
      zipcode: postcode,
      address: userAddress,
      addressDetail: detailAddress,
    };
    const result = await fetchUserInfo(profile);
    dispatch(userEditReducer(profile));
    setNickNameMessage("");
    setPwMessage("");
    setPwConfirmMessage("");
    setPhoneMessage("");
  };
  const handleCancel = () => {
    setActiveComponent("order");
  };
  const userProfile = () => {
    setPostcode(zipcode);
    setUserAddress(address);
    setDetailAddress(addressDetail);
    setId(uid);
    setUserName(name);
    setPhone(mobileNb);
    setBirth(birthday);
    setNickName(nickNm);
    setNickNameRemember(nickNm);
  };
  const handleDelete = () => {
    showDeleteModal();
  };
  const handleDeleteOk = async () => {
    setIsDeleteModalOpen(false);
    const result = await deleteUser();
    if (result === 1) {
      dispatch(logoutReducer());
      alert("회원탈퇴가 완료 되었습니다.");
      navigate("/");
    } else {
      alert("회원탈퇴에 실패 하였습니다.");
    }
  };
  const handleDeleteModalClose = () => {
    setIsDeleteModalOpen(false);
  };
  const handlePlusChild = () => {
    setIsChildModalOpen(true);
  };
  const handleChildModalClose = () => {
    setIsChildModalOpen(false);
  };

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
    userProfile();
  }, []);

  return (
    <JoinContainer>
      <JoinArea>
        <JoinText>회원정보</JoinText>
        <JoinWrap>
          <JoinTitleWrapTop>
            <h3>정보수정</h3>
            <div>
              <i>
                <FontAwesomeIcon icon={faCircle} />
              </i>
              <span>는 수정불가 항목 입니다.</span>
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
                onChange={e => setId(e.target.value)}
                readOnly
              />
            </JoinId>
            <JoinNickNm>
              <span>닉네임</span>
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
                <span
                  className={`message ${isNickNameCheck ? "success" : "error"}`}
                >
                  {nickNameMessage}
                </span>
              )}
            </JoinNickNm>
            <JoinPw>
              <span>새 비밀번호</span>
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
              <span>새 비밀번호 확인</span>
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
              <span>이름</span>
              <input
                type="text"
                placeholder="이름을 입력하세요"
                value={userName}
                onChange={e => setUserName(e.target.value)}
                maxLength={8}
              />
            </div>
            <div style={{ height: "75px" }}>
              <span>휴대전화</span>
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
            <div>
              {/* 생년월일 드랍박스 들어갈 자리 */}
              <div
                style={{
                  height: "70px",
                  display: "flex",
                  flexDirection: "column-reverse",
                  flexWrap: "wrap",
                  justifyContent: "flex-end",
                  cursor: "pointer",
                }}
              >
                <div>
                  <span>생년월일</span>
                  <Space direction="vertical">
                    <DatePicker
                      locale={locale}
                      onChange={onBirthChange}
                      value={dayjs(birth, "YYYY-MM-DD")}
                      style={{
                        height: "30px",
                      }}
                    />
                  </Space>
                </div>
                {/* <FontAwesomeIcon icon={faPlus} style={{ marginLeft: "5px" }} /> */}
                <div onClick={handleBirth}>
                  <span>아이 생년월일</span>
                  <Space direction="vertical">
                    <DatePicker
                      locale={locale}
                      onChange={onChildBirthChange}
                      // value={dayjs(childBirth, "YYYY-MM-DD")}
                      placeholder="YYYY-MM-DD"
                      style={{
                        height: "30px",
                      }}
                    />
                  </Space>
                  {/* <FontAwesomeIcon icon={faPlus} style={{ marginLeft: "5px" }} /> */}
                </div>
                <AddChildBirth>
                  <button onClick={handlePlusChild}>아이 추가</button>
                </AddChildBirth>
              </div>
            </div>
            <div className="adress">
              <span>주소</span>
              <input
                style={{ width: "150px", cursor: "pointer" }}
                type="text"
                id="sample6_postcode"
                value={postcode}
                placeholder="우편번호"
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
                value={userAddress}
                placeholder="주소"
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
          <div className="btnWrap">
            <JoinBtn onClick={handleEdit}>수정</JoinBtn>
            <JoinBtn onClick={handleCancel}>취소</JoinBtn>
          </div>
          <Modal
            title="회원탈퇴"
            open={isDeleteModalOpen}
            onOk={handleDeleteOk}
            onCancel={handleDeleteModalClose}
            footer={[
              <Button
                onClick={handleDeleteOk}
                style={{ backgroundColor: "#red", color: "white" }}
                key="submit"
                type="primary"
              >
                탈퇴
              </Button>,
              <Button key="back" onClick={handleDeleteModalClose}>
                취소
              </Button>,
            ]}
          >
            <p>정말 탈퇴 하시겠어요 ?</p>
          </Modal>
          <button className="userDelete" onClick={handleDelete}>
            회원탈퇴
          </button>
          <Modal
            title="회원수정"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleModalClose}
            footer={[
              <Button
                onClick={handleOk}
                style={{ backgroundColor: "#8eb111" }}
                key="submit"
                type="primary"
              >
                수정
              </Button>,
              <Button key="back" onClick={handleModalClose}>
                취소
              </Button>,
            ]}
          >
            <p>회원수정을 마치시겠어요 ?</p>
          </Modal>
        </JoinWrap>
      </JoinArea>{" "}
      {isChildModalOpen === true ? (
        <PlusChildModal setShowModal={setIsChildModalOpen} />
      ) : null}
    </JoinContainer>
  );
};

export default UserInfo;
