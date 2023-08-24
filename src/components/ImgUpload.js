import React, { useRef, useState } from "react";

const ImgUpload = ({ imgArr, setImgArr, idx }) => {
  const [imgPreview, setImgPreview] = useState(null);
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const fileInput = useRef(null);
  const handleImgUpload = () => {
    fileInput.current.click();
  };
  const handleImgChange = e => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        setImgPreview(event.target.result);
      };
      reader.readAsDataURL(file);

      // 이미지 데이터를 imgArr에 추가하는 부분
      setImgArr(prevImgArr => {
        const newImgArr = [...prevImgArr]; // 기존 배열 복사
        newImgArr[idx] = file; // 새로운 이미지 데이터 추가
        return newImgArr;
      });
    }
  };

  const handleImgDelete = e => {
    e.stopPropagation();
    setImgPreview(null);
    setShowDeleteButton(false);
    setImgArr(prevImgArr => {
      const newImgArr = [...prevImgArr];
      newImgArr[idx] = null;
      return newImgArr;
    });
  };
  return (
    <div className="img">
      <div className="upload" onClick={handleImgUpload}>
        {imgPreview ? (
          <>
            <img
              src={imgPreview}
              alt="미리보기"
              onMouseEnter={() => setShowDeleteButton(true)}
              onMouseLeave={() => setShowDeleteButton(false)}
            ></img>
          </>
        ) : (
          <p> 업로드 </p>
        )}
        <input
          type="file"
          ref={fileInput}
          accept="image/*"
          name="profile_img"
          onChange={handleImgChange}
        ></input>
        {showDeleteButton && (
          <button
            onClick={handleImgDelete}
            onMouseEnter={() => setShowDeleteButton(true)}
            onMouseLeave={() => setShowDeleteButton(false)}
          >
            사진 삭제
          </button>
        )}
      </div>
    </div>
  );
};

export default ImgUpload;
