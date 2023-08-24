import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImgUpload from "../components/ImgUpload";
import { AdminWrapper } from "../style/AdminAddCss";
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
  const [content, setContent] = useState();
  const [title, setTitle] = useState();
  const [itemName, setItemName] = useState();
  const [price, setPrice] = useState(0);
  const [commaPrice, setCommaPrice] = useState(0);
  const [cate, setCate] = useState();
  const [selectedCateDetail, setSelectedCateDetail] = useState([]);
  const [product, setProduct] = useState();
  const [imgArr, setImgArr] = useState([null, null, null, null]);
  const [showModal, setShowModal] = useState(false);
  let storage = {
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
    setSelectedCateDetail([]);
    const selectedCate = cateList.find(
      item => item.cateId === Number(e.target.value),
    );
    if (selectedCate && selectedCate.list) {
      setSubCateList(selectedCate.list);
    } else {
      setSubCateList([]);
    }
  };
  const handleCheckboxChange = e => {
    const cateDetailId = Number(e.target.value);
    if (e.target.checked) {
      // 체크 박스가 체크되었을 때
      setSelectedCateDetail(prevSelected => [...prevSelected, cateDetailId]);
    } else {
      // 체크 박스가 해제되었을 때
      setSelectedCateDetail(prevSelected =>
        prevSelected.filter(id => id !== cateDetailId),
      );
    }
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
      cateDetail: selectedCateDetail,
    };
    const result = imgArr.filter(item => item !== null);
    const imgResult = await imgAdd(product, result);
    const itemResult = await itemAdd(data);
    navigate("/admin");
  };
  const adminStorage = () => {
    const storedStorage = localStorage.getItem("adminStorage");
    const parsedStorage = JSON.parse(storedStorage);
    console.log("파스한 스토레이지", parsedStorage);
    return parsedStorage;
  };
  const handleGoClick = () => {
    setShowModal(false);
    fetchCate();
  };
  const handleDelClick = async () => {
    localStorage.removeItem("adminStorage");
    deleteProduct(product);
    fetchProductId();
    fetchCate();
    setTitle("");
    setItemName("");
    setPrice(0);
    setCommaPrice(0)
    setCate("");
    setSelectedCateDetail([]);
    setContent("");
    setShowModal(false)
  };

  useLayoutEffect(() => {
    storage = adminStorage();
    console.log("레이아웃 스토레이지", storage);
  }, []);

  useEffect(() => {
    if (storage && storage.product) {
      setShowModal(true);
      setProduct(storage.product);
      setTitle(storage.title);
      setItemName(storage.itemName);
      setPrice(storage.price);
      setCommaPrice(storage.price?.toLocaleString());
      setCate(storage.cate);
      setSelectedCateDetail(storage.selectedCateDetail);
      setContent(storage.content);
      productRef.current = storage.product;
      fetchCate();
    } else {
      fetchProductId();
      fetchCate();
    }
  }, []);
  useEffect(() => {
    // storage 값이 변경될 때마다 값을 로컬스토리지에 저장
    localStorage.setItem("adminStorage", JSON.stringify(storage));
    console.log(storage);
  }, [storage]); // storage 값이 변경될 때만 이펙트 실행
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
  // const elements = [];
  //   for (let i = 0; i < 4; i++) {
  //     elements.push(<ImgUpload key={i} imgArr={imgArr} setImgArr={setImgArr} idx={i} />);
  //   }
  return (
    <AdminWrapper>
      <div className="titleArea">
        <div className="uploadContainer">
          {/* {elements} */}
          {imgArr.map((item, idx) => (
            <ImgUpload
              key={idx}
              imgArr={imgArr}
              setImgArr={setImgArr}
              idx={idx}
            />
          ))}
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
              <option key={idx} value={item.cateId} selected={cate == idx}>
                {item.cateName}
              </option>
            ))}
          </select>
          {subCateList.map((item, idx) => (
            <React.Fragment key={idx}>
              <input
                type="checkbox"
                value={item.cateDetailId}
                id={`checkbox-${item.cateDetailId}`}
                onChange={e => handleCheckboxChange(e)}
                checked={selectedCateDetail.includes(item.cateDetailId)}
              />
              <label htmlFor={`checkbox-${item.cateDetailId}`}>
                {item.cateName}
              </label>
            </React.Fragment>
          ))}
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
      {showModal ? (
        <div className="modalWrap">
          <div className="modalBody">
            <span>이어서 작성 하시겠습니까 ?</span>
            <div className="modalButton">
              <div className="goButton" onClick={handleGoClick}>
                이어쓰기
              </div>
              <div className="delButton" onClick={handleDelClick}>
                삭제
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </AdminWrapper>
  );
};

export default AdminAddItem;
