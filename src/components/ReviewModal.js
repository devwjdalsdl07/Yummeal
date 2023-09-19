import React, { useState } from "react";
import { faFilePen, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartItemModalCss } from "../style/ModalCss";

const ReviewModal = ({
  handleClickReview,
  setReviewModal,
  selectProdNm,
  text,
  setText,
}) => {
//   const _addReply = async () => {
//     let reply = document.getElementsByName("write_reply")[0].value.trim();

//     // 내용 줄바꿈 처리하기
//     reply = reply.replace(/(\n|\r\n)/g, "<br>");

//     const board_id = this.props.match.params.data;
//     const { user_id } = this.props;

//     // if (!this._loginCheck()) {
//     //     return
//     // }

//     if (reply === "" || reply.length === 0) {
//       document.getElementsByName("write_reply")[0].focus();
//       document.getElementsByName("write_reply")[0].value = reply;

//       return alert("댓글을 입력해주세요.");
//     } else if (reply.split("<br>").length > 5) {
//       return alert("댓글 내용이 5줄 이상 초과되었습니다.");
//     }

//     alert("댓글이 등록되었습니다.");
//   };

  return (
    <CartItemModalCss>
      <div className="cart-modal">
        <FontAwesomeIcon
          icon={faXmark}
          className="close-icon"
          onClick={() => setReviewModal(false)}
        />
        <div className="modal-content">
          <h3>
            <i>
              <FontAwesomeIcon icon={faFilePen} />
            </i>
            리뷰 작성
          </h3>
          <div className="comment"></div>
          <textarea
            rows="3"
            placeholder="100자 이내의 글을 입력해주세요."
            maxLength="100"
            name="comment-write"
            value={text}
            onChange={e => setText(e.target.value)}
          ></textarea>
          <div>
            <input
              type="button"
              value="등록"
              id="submit-button"
              onClick={() => handleClickReview(selectProdNm)}
            />
          </div>
        </div>
      </div>
    </CartItemModalCss>
  );
};

export default ReviewModal;
