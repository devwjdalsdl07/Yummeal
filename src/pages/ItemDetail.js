import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { cartIn } from "../api/client";
import { getProductId } from "../api/mainFatch";
import Review from "../components/Review";
import Slick from "../components/Slick";
import { ItemDetailDiv } from "../style/MainCss";
import { useSelector } from "react-redux";

const ItemDetail = () => {
  const [product, setProduct] = useState({});
  const [itemImage, setItemImage] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const { iuser } = useSelector(state => state.user);

  // uri 에서 값 읽기
  const { pid } = useParams();
  const navigate = useNavigate();

  //상품 상세 페이지 가져오기
  const getProductIdFetch = async () => {
    try {
      const productIdJson = await getProductId(pid);
      setProduct(productIdJson);
      setItemImage(productIdJson.img);
      setTotalPrice(parseInt(productIdJson.price));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProductIdFetch();
    window.scrollTo(0, 0);
  }, [pid]);

  const handleSubImageClick = img => {
    setItemImage([img]);
  };

  const handleplusClick = () => {
    setQuantity(quantity + 1);
    setTotalPrice(totalPrice + parseInt(product?.price));
  };

  const handleMinusClick = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotalPrice(totalPrice - parseInt(product?.price));
    }
  };

  const handleScrollToSection = (sectionId, e) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleShoppingClick = async _item => {
    console.log(_item);
    try {
      const cartItem = {
        productId: _item,
        count: quantity,
      };
      const result = await cartIn(cartItem);
      console.log(result);
      if (iuser) {
        navigate(`/cart`);
      } else {
        navigate(`/login`);
      }
      return result;
    } catch (err) {
      console.error("주문 처리 중 오류 발생:", err);
    }
  };

  return (
    <ItemDetailDiv>
      <div className="content-wrap" id="content-top">
        <div className="goods-wrap">
          <div className="goods-img">
            <img className="item-img" src={itemImage[0]} alt="MainImage" />
            <div className="item-info">
              {itemImage?.map((subImage, index) => (
                <img
                  key={index}
                  src={subImage}
                  alt={`${index + 1}`}
                  onClick={() => handleSubImageClick(subImage)}
                />
              ))}
            </div>
          </div>

          <div>
            <ul className="goods-details">
              <li className="goods-title">{product?.name}</li>
              <li className="goods-info">원산지 : 기본정보 참조</li>
              <li className="goods-price">
                판매가 : {parseInt(product?.price).toLocaleString()}원
              </li>
              <li className="order-title">
                {product?.name}
                <span className="order-button">
                  <button onClick={handleMinusClick}>-</button>
                  <input
                    value={quantity}
                    onChange={e => setQuantity(parseInt(e.target.value) || 0)}
                  />
                  <button onClick={handleplusClick}>+</button>
                </span>
              </li>
              <li className="order-total-price">
                총 합계 금액
                <strong>{totalPrice.toLocaleString()}원</strong>
              </li>
              <li className="shopping-cart">
                <button onClick={() => handleShoppingClick(pid)}>
                  <FontAwesomeIcon icon={faCartArrowDown} />
                  장바구니
                </button>
                <button onClick={handleMinusClick}>바로구매하기</button>
              </li>
            </ul>
          </div>
        </div>
        <Slick />
        <div>
          <ul className="product-tabs">
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
          </ul>

          <div id="detail-section01" className="menu-info">
            <h1>상품 상세정보</h1>
            <div>{product && product.description}</div>
          </div>
          <div id="detail-section02">
            <h1>기본정보</h1>
            <div className="container">
              <div className="item-title">식품의 유형</div>
              <div className="item">상세페이지 참조</div>
              <div className="item-title">생산자 및 소재지</div>
              <div className="item">
                (주)대구 중구 중앙대로 394, 제일빌딩 5층
              </div>
              <div className="item-title">
                제조연월일, 유통기한 또는 품질유지기한
              </div>
              <div className="item">상세페이지 참조</div>
              <div className="item-title">포장단위별 용량(중량), 수량</div>
              <div className="item">상세페이지 참조</div>
              <div className="item-title">원재료명 및 함량</div>
              <div className="item">상세페이지 참조</div>
              <div className="item-title">영양성분</div>
              <div className="item">상세페이지 참조</div>
              <div className="item-title">
                유전자변형식품에 해당하는 경우의 표시
              </div>
              <div className="item">해당없음</div>
              <div className="item-title">
                표시광고사전심의필 유무 및 부작용 발생 가능성
              </div>
              <div className="item">상세페이지 참조</div>
              <div className="item-title">수입식품문구</div>
              <div className="item">해당없음</div>
              <div className="item-title">소비자상담관련 전화번호</div>
              <div className="item">고객센터 053-572-1005</div>
            </div>
            <img src="/img/iteminfo.png" alt="item" />
          </div>
          <div id="detail-section03" className="menu-info">
            <h1>상품리뷰</h1>
            <Review />
          </div>
        </div>
      </div>
    </ItemDetailDiv>
  );
};

export default ItemDetail;
