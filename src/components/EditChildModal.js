import { useNavigate } from "react-router-dom";
import React from "react";
import { DatePicker, Space } from "antd";
import { useState } from "react";
import makeAnimated from "react-select/animated";
import { ChildModalCss, ModalDim } from "../style/ModalCss";
import { useEffect } from "react";
import { putChildInfo } from "../api/axios";
import Select from "react-select";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";

const EditChildModal = ({
  setShowModal,
  selectChild,
  setSelectChild,
  updateBabyInfo,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [childBirth, setChildBirth] = useState("");
  const [tasteValue, setTasteValue] = useState("");
  const [selectAllergy, setSelectAllergy] = useState([]);

  const selectAllergyArr = () => {
    console.log(
      "뭘까 333 ===========selectAllergyArr : ",
      selectChild.babyAllergyList,
    );
    const arr = selectChild?.babyAllergyList.map(item => {
      const formatData = {
        value: item.allergyId,
        label: item.allergyName,
      };
      console.log(formatData);
      return formatData;
    });
    // console.log(arr);
    setSelectAllergy(arr);
  };

  useEffect(() => {
    console.log(selectChild);
    setChildBirth(selectChild.baByInfoVo.childBirth);
    setTasteValue(selectChild.baByInfoVo.prefer);
    selectAllergyArr();
  }, [selectChild]);

  const allergyArr = [
    { value: 1, label: "난류" },
    { value: 2, label: "우유" },
    { value: 3, label: "메밀" },
    { value: 4, label: "땅콩" },
    { value: 5, label: "대두" },
    { value: 6, label: "밀" },
    { value: 7, label: "잣" },
    { value: 8, label: "호두" },
    { value: 9, label: "게" },
    { value: 10, label: "새우" },
    { value: 11, label: "오징어" },
    { value: 12, label: "고등어" },
    { value: 13, label: "조개류" },
    { value: 14, label: "복숭아" },
    { value: 15, label: "토마토" },
    { value: 16, label: "닭고기" },
    { value: 17, label: "돼지고기" },
    { value: 18, label: "소고기" },
    { value: 19, label: "아황산류" },
    { value: 20, label: "생선류" },
  ];

  // 알레르기 value값
  console.log("뭘까 111 ===========selectAllergy ==", selectAllergy);
  const newAllergyData = selectAllergy.map(selected => selected.value);
  let allergyStrings = [];
  console.log("뭘까 222 =======================", newAllergyData);
  if (newAllergyData.length > 0) {
    allergyStrings = newAllergyData.map(value => value.toString());
  }
  // console.log("adfasdf", selectAllergy);

  const handleTaste = e => {
    setTasteValue(e.target.value);
  };

  const onChildBirthChange = (value, dateString) => {
    setChildBirth(dateString);
  };
  const handleAllergy = allergyArr => {
    setSelectAllergy(allergyArr);
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  const handleChildEdit = async () => {
    const allergyIdStr = selectAllergy.map(item => {
      let newItem = { allergyId: item.value, allergyName: item.label };
      return newItem;
    });

    console.log("allergyIdStr =====================", allergyIdStr);
    const allergyIdStrNum = selectAllergy.map(item => item.value);
    // put 진행(알러지는 숫자를 모은 문자열을 보내야 함.)
    const editChildInfo = {
      childBirth: childBirth,
      prefer: tasteValue,
      allergyId: allergyIdStrNum.join(),
      babyId: selectChild.baByInfoVo.babyId,
    };
    console.log(editChildInfo);
    // redux update
    const selectChildInfoUpdate = {
      baByInfoVo: {
        babyId: selectChild.baByInfoVo.babyId,
        childBirth: childBirth,
        prefer: tasteValue,
      },
      babyAllergyList: allergyIdStr,
    };
    console.log("새로운 정보를 set 처리 함.: ", selectChildInfoUpdate);
    setSelectChild(selectChildInfoUpdate);
    updateBabyInfo(selectChildInfoUpdate);
    setShowModal(false);
    try {
      const result = await putChildInfo(editChildInfo);
      // 새로운 정보를 set 처리 함.
      console.log("새로운 정보를 set 처리 함.: ", selectChildInfoUpdate);
      setSelectChild(selectChildInfoUpdate);
      updateBabyInfo(selectChildInfoUpdate);
      setShowModal(false);
      alert("아이 정보가 수정되었어용");
    } catch (err) {
      alert("다시 시도해주세요");
    }
  };

  const handleSkip = () => {
    setShowModal(false);
    // navigate("/main");
  };
  const animatedComponents = makeAnimated();
  //   console.log(childInfo);
  return (
    <>
      <ModalDim />
      <ChildModalCss>
        <div className="login-modal">
          {/* <FontAwesomeIcon
          icon={faXmark}
          className="close-icon"
          onClick={() => setLoginShowModal(false)}
        /> */}
          <img
            className="modal-img"
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="logo"
          />
          <div className="modal-content">
            <h4>
              우리 아이 취향에 딱 맞는 이유식 !
              <br />
              <br />
              <h5>아이의 취향을 알려주세요 :)</h5>
              <br />
              <span>아이가 언제 태어났나요?</span>
              <Space direction="vertical">
                <DatePicker
                  onChange={onChildBirthChange}
                  value={dayjs(childBirth, "YYYY-MM-DD")}
                  placeholder="YYYY-MM-DD"
                  allowClear={false}
                  style={{
                    height: "30px",
                  }}
                />
              </Space>
              <br />
              <div className="search-wrap">
                <span>아이가 가지고 있는 알레르기가 있다면?</span>
                <div className="search-form">
                  <Select
                    className="allergy"
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    onChange={allergyArr => handleAllergy(allergyArr)}
                    value={selectAllergy}
                    isMulti
                    options={allergyArr}
                    placeholder="꼭 선택하지 않아도 돼요 :)"
                    isSearchable={false}
                  />
                </div>
              </div>
              <span>아이가 좋아하거나 싫어하는 건 뭔가요?</span>
              <input
                className="child-box"
                type="text"
                name="value"
                placeholder="없다면 쓰지 않아도 돼요:)"
                value={tasteValue}
                onChange={handleTaste}
              />
              <br />
            </h4>

            <div className="modal-buttons">
              <button onClick={handleChildEdit}>수정하기</button>
              {/* <input type="button" value="시작하기" /> */}
              <button onClick={handleSkip}>건너뛰기</button>
              {/* <input type="button" value="건너뛰기" /> */}
              {/* <input
              type="button"
              value="건너뛰기"
              onClick={() => setLoginShowModal(!loginShowModal)}
            /> */}
            </div>
          </div>
        </div>
      </ChildModalCss>
    </>
  );
};

export default EditChildModal;
