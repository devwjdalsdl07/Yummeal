import { Link } from "react-router-dom";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { LoginModalCss } from "../style/ModalCss";

const ChildModal = () => {
  return (
    <LoginModalCss>
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
            <span>아이의 취향을 알려주세요 :)</span>
          </h4>
          <div className="modal-buttons">
            <Link to={"/login"}>
              <button>시작하기</button>
              {/* <input type="button" value="시작하기" /> */}
            </Link>
            <Link to={"/login"}>
              <button>건너뛰기</button>
              {/* <input type="button" value="건너뛰기" /> */}
            </Link>
            {/* <input
              type="button"
              value="건너뛰기"
              onClick={() => setLoginShowModal(!loginShowModal)}
            /> */}
          </div>
        </div>
      </div>
    </LoginModalCss>
  );
};

export default ChildModal;
