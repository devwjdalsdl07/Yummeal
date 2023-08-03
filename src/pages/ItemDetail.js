import React, { useState } from "react";
// import { Link } from "react-router-dom";

const ItemDetail = () => {
  const subImages = [
    { img: "http://fpoimg.com/150x150" },
    { img: "http://fpoimg.com/100x100" },
    { img: "http://fpoimg.com/200x200" },
    { img: "http://fpoimg.com/300x300" },
  ];
  const [mainImage, setMainImage] = useState(subImages[0]);

  const handleSubImageClick = image => {
    setMainImage(image);
  };

  const handleScrollToSection = (sectionId, e) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className="constent-wrap"
      style={{
        position: "relative",
        margin: "0 auto",
        width: "100%",
        height: "100%",
        padding: "100px 0",
        background: "#f9f6f1",
      }}
    >
      <div
        className="info"
        style={{
          margin: "0 auto",
          marginTop: "50px",
          width: "1440px",
          maxWidth: "1400px",
          height: "100%",
          minHeight: "700px",
        }}
      >
        <div style={{ paddingLeft: "20px" }}>
          <img
            src={mainImage.img}
            alt="Main Image"
            style={{ width: "450px", height: "450px", margin: "50px 0" }}
          />
          <div style={{ display: "flex", gap: "15px" }}>
            {subImages.map((subImage, index) => (
              <img
                key={index}
                src={subImage.img}
                alt={`Sub Image ${index + 1}`}
                onClick={() => handleSubImageClick(subImage)}
                style={{ width: "100px", height: "100px" }}
              />
            ))}
          </div>
        </div>
        <div>
          <ul>
            <li>[1단계]</li>
            <li>한우 사과 묽은 죽</li>
            <li>원산지 : 상품정보 참조</li>
            <li>판매가 : 4,800 원</li>
            <li>판매가 : 4,800 원 </li>
            <li>총 합계 금액</li>
          </ul>
        </div>
<div className="">

</div>
        <div className="product-tabs">
          <ul
            className="section"
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "20px",
              padding: "2% 20% 2% 20%",
              borderTop: "1px solid #313133",
              borderBottom: "1px solid #e7e7e7",
            }}
          >
            <li>
              <a
                href="#detail-section01"
                onClick={e => handleScrollToSection("detail-section01", e)}
              >
                <span>상품 상세정보</span>
              </a>
            </li>
            <li>
              <a
                href="#detail-section02"
                onClick={e => handleScrollToSection("detail-section02", e)}
              >
                <span>기본정보</span>
              </a>
            </li>
            <li>
              <a
                href="#detail-section03"
                onClick={e => handleScrollToSection("detail-section03", e)}
              >
                <span>상품리뷰</span>
              </a>
            </li>
            <li>
              <a
                href="#detail-section04"
                onClick={e => handleScrollToSection("detail-section04", e)}
              >
                <span>상품문의</span>
              </a>
            </li>
          </ul>

          <div
            id="detail-section01"
            style={{
              height: "500px",
              display: "block",
            }}
          >
            <h1>상품 상세정보</h1>
          </div>
          <div
            id="detail-section02"
            style={{ height: "500px", display: "block" }}
          >
            <h1>기본정보</h1>
          </div>
          <div
            id="detail-section03"
            style={{ height: "500px", display: "block" }}
          >
            <h1>상품리뷰</h1>
          </div>
          <div id="detail-section04" style={{ height: "500px" }}>
            <h1>상품문의</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
