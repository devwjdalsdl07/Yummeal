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
import { userEditReducer } from "../reducers/userSlice";
import { postNickNameCheck } from "../api/signupaxios";

const UserInfo = ({ setActiveComponent }) => {
  const {
    email,
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
  const [pw, setPw] = useState(null);
  const [pwConfirm, setPwConfirm] = useState(null);
  const [userName, setUserName] = useState();
  const [phone, setPhone] = useState();
  const [nickName, setNickName] = useState([]);
  const [birth, setBirth] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // 유효성 검사
  const [isNickName, setIsNickName] = useState(false);
  const [isId, setIsId] = useState(false);
  const [isPw, setIsPw] = useState(false);
  const [isPwConfirm, setIsPwConfirm] = useState(false);
  const [isPhone, setIsPhone] = useState(false);

  // 오류메시지 상태 저장
  const [idMessage, setIdMessage] = useState("");
  const [nickNameMessage, setNickNameMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [pwConfirmMessage, setPwConfirmMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");

  const onBirthChange = (value, dateString) => {
    setBirth(dateString);
  };

  // 닉네임 (추후 업데이트)
  const onNickNameChange = e => {
    const nickNameRegex = /^[a-zA-Z0-9ㄱ-힣]{3,5}$/;
    // setNickName(e.target.value.replace(/\s/gi, ""));
    setNickNameMessage(null);
    setNickName(
      e.target.value.replace(/[!?,@#$%^&*()]/g, "").replace(/\s/gi, ""),
    );
    // if (e.target.value.length == 0) {
    //   setNickNameMessage("닉네임을 입력해주세요.");
    // }
    // setNickNameMessage("");
    // setIsNickName(false);
  };
  // 닉네임 중복 체크
  const onNickNameCheck = async e => {
    e.preventDefault();
    const fetchNickName = await postNickNameCheck(nickName);
    if (nickName) {
      if (fetchNickName === 0) {
        setNickNameMessage("사용 가능한 닉네임이에요");
        setIsNickName(true);
      } else if (fetchNickName === 1) {
        setNickNameMessage("이미 다른 사용자가 사용 중이에요 ㅜㅜ");
        setIsNickName(false);
      }
    }

    // if (e.target.value.length == 0 || e.target.value.length > 0) {
    //   setNickNameMessage("사용 가능한 닉네임이에요");
    //   setIsNickName(true);
    // } else {
    //   setNickNameMessage("이미 다른 사용자가 사용 중이에요 ㅜㅜ");
    //   setIsNickName(false);
    // }
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
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const showDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };
  const handleEdit = async () => {
    showModal();
  };
  const handleCancel = () => {
    setActiveComponent("order");
  };
  const userProfile = () => {
    setPostcode(zipcode);
    setUserAddress(address);
    setDetailAddress(addressDetail);
    setId(email);
    setUserName(name);
    setPhone(mobileNb);
    setBirth(birthday);
    setNickName(nickNm);
  };
  const handleDelete = () => {
    showDeleteModal();
  };
  const handleDeleteOk = async () => {
    setIsDeleteModalOpen(false);
    const result = await deleteUser();
    alert("회원탈퇴가 완료 되었습니다.");
    navigate("/");
  };
  const handleDeleteModalClose = () => {
    setIsDeleteModalOpen(false);
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
            <div>
              <span>닉네임</span>
              <input
                type="text"
                placeholder="닉네임을 입력하세요"
                value={nickName}
                onChange={onNickNameCheck}
                maxLength={5}
              />
              <button onClick={onNickNameCheck}>중복확인</button>
            </div>
            {nickName.length > 0 && (
              <span className={`message ${isNickName ? "success" : "error"}`}>
                {nickNameMessage}
              </span>
            )}
            <JoinPw>
              <span>새 비밀번호</span>
              <input
                type="password"
                placeholder="비밀번호를 입력하세요"
                value={pw}
                onChange={e => setPw(e.target.value)}
                maxLength={100}
              />
            </JoinPw>
            <JoinPwConfirm>
              <span>새 비밀번호 확인</span>
              <input
                type="password"
                placeholder="비밀번호를 한번 더 입력하세요"
                value={pwConfirm}
                onChange={e => setPwConfirm(e.target.value)}
                maxLength={100}
              />
            </JoinPwConfirm>
            <div className="pw-group">
              <span>이름</span>
              <input
                type="text"
                placeholder="이름을 입력하세요"
                value={userName}
                onChange={e => setUserName(e.target.value)}
                maxLength={100}
              />
            </div>
            <div>
              <span>휴대전화</span>
              <input
                type="text"
                placeholder="전화번호를 입력하세요 ( - 없이 입력)"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                maxLength={11}
              />
            </div>

            {/* 생년월일 드랍박스 들어갈 자리 */}
            <div>
              <span>아이 생년월일</span>
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
              {/* <input
                type="text"
                placeholder="이메일을 입력하세요"
                maxLength={100}
              /> */}
            </div>
            <div className="adress">
              <span>주소</span>
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
                value={userAddress}
                placeholder="주소"
                disabled={false}
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
      </JoinArea>
    </JoinContainer>
  );
};

export default UserInfo;
