import React, { useState, useMemo,useRef } from "react";
import { AdminWrapper } from "../style/Admin";
import ImgUpload from "../components/ImgUpload";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AdminAddItem = () => {
  const quillRef = useRef();
  const [content, setContent] = useState("");
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
      <div>
        <div className="uploadContainer">
          <ImgUpload />
          <ImgUpload />
          <ImgUpload />
          <ImgUpload />
        </div>
        <div>title,price,cate</div>
      </div>
      <div style={{ margin: "50px" }}>
        <button onClick={() => console.log(content)}>Value</button>
        <ReactQuill
          style={{ width: "600px", height: "600px" }}
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
