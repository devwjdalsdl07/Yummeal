import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, DatePicker, Modal, Space } from "antd";
import locale from "antd/locale/ko_KR";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { getNickNameCheck } from "../api/axios";
import { deleteUser, fetchUserInfo } from "../api/client";
import {
  logoutReducer,
  updateBaby,
  userEditReducer,
} from "../reducers/userSlice";
import {
  AddChildBirth,
  ChildBirth,
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
} from "../style/UserInfoCss";
import EditChildModal from "./EditChildModal";
import PlusChildModal from "./PlusChildModal";

const UserInfo = ({ setActiveComponent }) => {
  const {
    uid,
    unm,
    birthday,
    mobileNb,
    zipcode,
    address,
    addressDetail,
    nickNm,
    baby,
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
  const [childInfo, setChildInfo] = useState([]);
  const [selectedChildIndex, setSelectedChildIndex] = useState(null);
  const [selectDataIndex, setSelectDataIndex] = useState(null);
  const [modalAction, setModalAction] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChildModalOpen, setIsChildModalOpen] = useState(false);
  const [isEditChildModalOpen, setIsEditChildModalOpen] = useState(false);
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
  const [childBirthArr, setChildBirthArr] = useState([]);
  const [selectChildDay, setSelectChildDay] = useState("");
  const [selectChild, setSelectChild] = useState(null);

  const onBirthChange = (value, dateString) => {
    setBirth(dateString);
  };
  // const onChildBirthChange = (value, dateString) => {
  //   setChildBirth(dateString);
  // };

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
    if (selectChild && selectChild.baByInfoVo) {
      setIsEditChildModalOpen(true);
    } else {
      alert("수정 할 아이를 선택해주세용");
    }
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
      unm: userName,
      nickNm: nickName,
      upw: pw,
      phoneNumber: phone,
      birthday: birth,
      zipcode: postcode,
      address: userAddress,
      addressDetail: detailAddress,
    };
    try {
      const result = await fetchUserInfo(profile);
      dispatch(userEditReducer(profile));
      setNickNameMessage("");
      setPwMessage("");
      setPwConfirmMessage("");
      setPhoneMessage("");
      alert("수정이 성공적으로 이루어졌어용");
    } catch (err) {
      alert("다시 시도해주세요");
    }
  };
  const handleCancel = () => {
    setActiveComponent("order");
  };
  const userProfile = () => {
    setPostcode(zipcode);
    setUserAddress(address);
    setDetailAddress(addressDetail);
    setId(uid);
    setUserName(unm);
    setPhone(mobileNb);
    setBirth(birthday);
    setNickName(nickNm);
    setNickNameRemember(nickNm);
    console.log("================== baby : ", baby);
    setChildInfo(baby);
  };
  // console.log(baby);
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
    setModalAction("add");
  };

  // const handleDatePickerClick = index => {
  //   setSelectedChildIndex(index);
  //   setModalAction("edit");
  // };

  // const handleChildModalClose = () => {
  //   setIsChildModalOpen(false);
  // };

  const handleSaveChildInfo = info => {
    setChildInfo(info);
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

  const birthArr = () => {
    const arr = childInfo?.map(item => {
      const birthValue = item?.baByInfoVo?.childBirth;
      const formatData = {
        value: birthValue,
        label: birthValue,
      };
      return formatData;
    });
    setChildBirthArr(arr);
  };

  const handleSortChange = _date => {
    let tempDataIndex;
    childInfo.map((item, index) => {
      if (item.baByInfoVo.childBirth === _date.value) {
        setSelectDataIndex(index);
        tempDataIndex = index;
      }
    });
    // 출력용
    setSelectChildDay(_date);
    // 팝업전달용
    console.log("팝업전달용 번호: ", childInfo[tempDataIndex]);
    setSelectChild(childInfo[tempDataIndex]);
  };

  useEffect(() => {
    console.log("선택된 번호: ", selectDataIndex);
  }, [selectDataIndex]);

  const updateBabyInfo = _babyData => {
    const arr = [...childInfo];
    // console.log("총개수 : ", arr.length);
    const nowInfo = arr.map((item, index) => {
      if (item.baByInfoVo.babyId === _babyData.baByInfoVo.babyId) {
        // console.log("찾았다. 요놈 : ", item);
        console.log(
          // "찾은놈 업데이트 _babyData: ",
          _babyData.baByInfoVo.childBirth,
        );
        // console.log("찾은놈 업데이트 : ", item.baByInfoVo.childBirth);
        // item.baByInfoVo.childBirth = _babyData.baByInfoVo.childBirth;
        // 생일 강제 셋팅
        console.log("생일 강제 셋팅", _babyData.baByInfoVo.childBirth);
        setSelectChildDay(_babyData.baByInfoVo.childBirth);
        return _babyData;
      } else {
        return item;
      }
    });

    console.log("nowInfo : ", nowInfo);

    dispatch(updateBaby({ nowInfo }));

    setChildInfo(nowInfo);

    const arrBirth = nowInfo?.map(item => {
      const birthValue = item?.baByInfoVo?.childBirth;
      const formatData = {
        value: birthValue,
        label: birthValue,
      };
      return formatData;
    });
    setChildBirthArr(arrBirth);

    // setSelectChildDay(childInfo[selectDataIndex]);
  };
  useEffect(() => {
    console.log("변경된", selectChild);
  }, [selectChild]);

  useEffect(() => {
    birthArr();
  }, [childInfo]);

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
              {nickName?.length > 0 && (
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
              {pw?.length > 0 && (
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
              {pwConfirm?.length > 0 && (
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
              {phone?.length > 0 && (
                <span className={`message ${isPhone ? "success" : "error"}`}>
                  {phoneMessage}
                </span>
              )}
            </div>
            <div>
              {/* 생년월일 드랍박스 들어갈 자리 */}
              <div
                style={{
                  height: "80px",
                  display: "flex",
                  alignItems: "center",
                  gap: "30px",
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
                      allowClear={false}
                    />
                  </Space>
                </div>
                {/* <FontAwesomeIcon icon={faPlus} style={{ marginLeft: "5px" }} /> */}
                <ChildBirth>
                  <span>아이 생년월일</span>

                  <Select
                    className="child"
                    options={childBirthArr}
                    onChange={childInfo => handleSortChange(childInfo)}
                    placeholder="수정할 아이 생일을 선택하세요"
                    value={selectChildDay}
                    isSearchable={false}
                  />
                  {/* {baby.map((item, index) => (
                      <>
                        <DatePicker
                          key={index}
                          locale={locale}
                          onChange={onChildBirthChange}
                          value={dayjs(
                            item.baByInfoVo.childBirth,
                            "YYYY-MM-DD",
                          )}
                          placeholder="YYYY-MM-DD"
                          style={{
                            height: "30px",
                          }}
                        />
                      </>
                    ))} */}
                  {/* <FontAwesomeIcon icon={faPlus} style={{ marginLeft: "5px" }} /> */}
                </ChildBirth>
                <AddChildBirth>
                  <button onClick={handlePlusChild}>아이 추가</button>
                  <button onClick={handleBirth}>아이 수정</button>
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
        <PlusChildModal
          setShowModal={setIsChildModalOpen}
          onSaveChildInfo={handleSaveChildInfo}
          childInfo={childInfo}
          setChildInfo={setChildInfo}
        />
      ) : null}
      {isEditChildModalOpen === true ? (
        <EditChildModal
          selectChild={selectChild}
          setSelectChild={setSelectChild}
          updateBabyInfo={updateBabyInfo}
          setShowModal={setIsEditChildModalOpen}
          // onSaveChildInfo={handleSaveChildInfo}
          // childInfo={childInfo}
          // setChildInfo={setChildInfo}
        />
      ) : null}
    </JoinContainer>
  );
};

export default UserInfo;
