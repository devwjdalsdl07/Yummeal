import React, { useEffect, useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImgUpload from "../components/ImgUpload";
import { AdminWrapper } from "../style/AdminCss";
import {
  deleteProduct,
  getCate,
  getProductId,
  imgAdd,
  itemAdd,
  postImage,
} from "../api/adminAddAxios";
import { useNavigate } from "react-router-dom";

const AdminAddItem = () => {
  const navigate = useNavigate();
  const quillRef = useRef();
  const [cateList, setCateList] = useState([]);
  const [subCateList, setSubCateList] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState(0);
  const [commaPrice, setCommaPrice] = useState(0);
  const [cate, setCate] = useState();
  const [selectedCateDetail, setSelectedCateDetail] = useState();
  const [product, setProduct] = useState();
  const [imgArr, setImgArr] = useState([]);
  const storage = {
    product,
    title,
    itemName,
    price,
    cate,
    selectedCateDetail,
    content,
  };
  const productRef = useRef(product);
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
    const selectedCate = cateList.find(
      item => item.cateId === Number(e.target.value),
    );
    if (selectedCate && selectedCate.list) {
      setSubCateList(selectedCate.list);
    } else {
      setSubCateList([]);
    }
  };
  const handleSubCateChange = e => {
    const selectedCateDetailId = e.target.value;
    const selectedSubCate = subCateList.find(
      item => item.cateDetailId === Number(selectedCateDetailId),
    );
    setSelectedCateDetail([selectedSubCate]);
  };
  const handleCancleClick = () => {
    deleteProduct(product);
    localStorage.removeItem("adminStorage");
    navigate("/admin");
  };
  const imgUpload = async (_product, _file) => {
    const result = await postImage(_product, _file);
    return result;
  };
  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.addEventListener("change", async () => {
      const editor = quillRef.current.getEditor();
      const file = input.files[0];
      const range = editor.getSelection(true);
      try {
        const img = await imgUpload(productRef.current, file);
        console.log("받아오는 값", img);
        editor.insertEmbed(range.index, "image", img);
        editor.setSelection(range.index + 1);
      } catch (error) {
        console.log(error);
      }
    });
  };

  useEffect(() => {
    console.log(storage);
  }, [storage]);
  // useEffect(() => {
  //   // storage 값이 변경될 때마다 값을 로컬스토리지에 저장
  //   localStorage.setItem("adminStorage", JSON.stringify(storage));
  // }, [storage]); // storage 값이 변경될 때만 이펙트 실행
  const fetchProductId = async () => {
    const result = await getProductId();
    setProduct(result);
    productRef.current = result;
  };
  const fetchCate = async () => {
    const result = await getCate();
    setCateList(result);
  };
  const handleOkCliclk = async () => {
    console.log(imgArr);
    const data = {
      productId: product,
      title: title,
      name: itemName,
      price: price,
      quantity: 0,
      description: content,
      saleVolume: 0,
      allergy: 0,
      category: cate,
      cateDetail: selectedCateDetail.cateDetailId,
    };
    console.log("넘기는 데이터", data);
    const imgResult = await imgAdd(product, imgArr);
    const itemResult = await itemAdd(data);
    navigate("/admin");
  };
  useEffect(() => {
    // const storedStorage = localStorage.getItem("adminStorage");
    // const parsedStorage = JSON.parse(storedStorage);
    // console.log(parsedStorage);
    // if (!parsedStorage.product === null) {
    //   console.log("안비어있습니다.");
    //   setProduct(parsedStorage.product);
    //   setTitle(parsedStorage.title);
    //   setPrice(parsedStorage.price);
    //   setCommaPrice(parsedStorage.price?.toLocaleString());
    //   setCate(parsedStorage.cate);
    //   setSelectedCateDetail(parsedStorage.selectedCateDetail);
    //   setContent(parsedStorage.content);
    // }
    // if (parsedStorage.product === null) {
    //   console.log("비었습니다.");
    // }
    fetchProductId();
    fetchCate();
  }, []);
  useEffect(() => {
    console.log(imgArr);
  }, [imgArr]);
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
          image: imageHandler,
        },
      },
    };
  }, []);
  return (
    <AdminWrapper>
      <div className="titleArea">
        <div className="uploadContainer">
          <ImgUpload imgArr={imgArr} setImgArr={setImgArr} />
          <ImgUpload imgArr={imgArr} setImgArr={setImgArr} />
          <ImgUpload imgArr={imgArr} setImgArr={setImgArr} />
          <ImgUpload imgArr={imgArr} setImgArr={setImgArr} />
        </div>
        <div>
          <input
            type="text"
            value={title}
            placeholder="타이틀"
            onChange={e => handleTitleChange(e)}
          ></input>
          <input
            type="text"
            value={itemName}
            placeholder="네임"
            onChange={e => setItemName(e.target.value)}
          />
          <input
            type="text"
            value={commaPrice}
            placeholder="가격"
            onChange={e => handlePriceChange(e)}
          ></input>
          <p>원</p>
          <select onChange={handleCateChange}>
            <option value="">단계</option>
            {cateList.map((item, idx) => (
              <option key={idx} value={item.cateId}>
                {item.cateName}
              </option>
            ))}
          </select>
          <select onChange={e => handleSubCateChange(e)}>
            <option value="">카테고리</option>
            {subCateList.map((subCate, idx) => (
              <option key={idx} value={subCate.cateDetailId}>
                {subCate.cateName}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="editorWrapper">
        <button onClick={() => console.log(content)}>Value</button>
        <ReactQuill
          style={{ width: "800px", height: "500px" }}
          placeholder="상세정보"
          theme="snow"
          ref={quillRef}
          value={content}
          onChange={setContent}
          modules={modules}
        />
      </div>
      <div>
        <button onClick={handleOkCliclk}>확인</button>
        <button onClick={handleCancleClick}>취소</button>
      </div>
    </AdminWrapper>
  );
};

export default AdminAddItem;
