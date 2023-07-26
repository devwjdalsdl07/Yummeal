import React, { useEffect, useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImgUpload from "../components/ImgUpload";
import { AdminWrapper } from "../style/AdminCss";

const AdminAddItem = () => {
  // 카테고리 더미데이터
  const exCateValue = [
    { value: 1, cate: "하하" },
    { value: 2, cate: "호호" },
    { value: 3, cate: "힝힝" },
  ];
  const quillRef = useRef();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [commaPrice, setCommaPrice] = useState();
  const [cate, setCate] = useState("");
  const handleTitleChange = e => {
    setTitle(e.target.value);
  };
  const handlePriceChange = e => {
    const value = e.target.value;
    const removedCommaValue = Number(value.replaceAll(/[^0-9]/g, ""));
    setCommaPrice(removedCommaValue.toLocaleString());
    setPrice(removedCommaValue);
  };
  const handleCateChange = e => {
    setCate(e.target.value);
  };
  
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike"],
          ["blockquote"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ color: [] }, { background: [] }],
          [{ align: [] }, "link", "image"],
        ],
        handlers: {
          // image: imageHandler,
        },
      },
    };
  }, []);
  return (
    <AdminWrapper>
      <div className="titleArea">
        <div className="uploadContainer">
          <ImgUpload />
          <ImgUpload />
          <ImgUpload />
          <ImgUpload />
        </div>
        <div>
          <input
            type="text"
            value={title}
            onChange={e => handleTitleChange(e)}
          ></input>
          <input
            type="text"
            value={commaPrice}
            onChange={e => handlePriceChange(e)}
          ></input><p>원</p>
          <select onChange={handleCateChange}>
            <option value="">카테고리</option>
            {exCateValue.map((item, idx) => (
              <option key={idx} value={item.value}>
                {item.cate}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="editorWrapper">
        <button onClick={() => console.log(content)}>Value</button>
        <ReactQuill
          style={{ width: "800px", height: "2000px" }}
          placeholder="Quill Content"
          theme="snow"
          ref={quillRef}
          value={content}
          onChange={setContent}
          modules={modules}
        />
      </div>
    </AdminWrapper>
  );
};

export default AdminAddItem;
