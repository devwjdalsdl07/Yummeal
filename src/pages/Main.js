import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { cartIn, getChild } from "../api/client";
import { getBestProduct } from "../api/mainFatch";
import CartItemModal from "../components/CartItemModal";
import ChildModal from "../components/ChildModal";
import Slick from "../components/Slick";
import { MainDiv } from "../style/MainCss";

const Main = ({ childBirth, tasteValue, selectAllergy }) => {
  const [bestProduct, setBestProduct] = useState([]);
  const [mainImage, setItemImage] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [childShowModal, setChildShowModal] = useState(false);
  const [hasChildInfo, setHasChildInfo] = useState(false);

  const isLoggedIn = sessionStorage.getItem("accessToken") ? true : false;
  // uri 에서 값 읽기
  const { pid } = useParams();

  //제일 많이 팔린 상품 가져오기
  const getBestProductFetch = async () => {
    try {
      const productIdJson = await getBestProduct(pid);
      setBestProduct(productIdJson);
      // setItemImage(productIdJson.map(item => item.thumbnail));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBestProductFetch();
  }, [pid]);

  useEffect(() => {
    const child = async () => {
      if (isLoggedIn) {
        try {
          const childInfo = {
            childBirth: childBirth,
            prefer: tasteValue,
            allegyId: selectAllergy,
          };
          const result = await getChild(childInfo);
          console.log(result);
          if (result) {
            setChildShowModal(false);
          } else {
            setChildShowModal(true);
          }
          return result;
        } catch (err) {
          console.log("처리 중 오류", err);
        }
      } else {
        setChildShowModal(false);
      }
    };
  }, [isLoggedIn, childBirth, tasteValue, selectAllergy]);

  const navigate = useNavigate();

  const handleMoveViewClick = _more_view => {
    navigate(`/productlist`);
  };
  const handleShoppingClick = async _item => {
    if (isLoggedIn) {
      try {
        const cartItem = {
          productId: _item.productId,
          count: 1,
        };
        const result = await cartIn(cartItem);
        setShowModal(true);
        return result;
      } catch (err) {
        console.error("주문 처리 중 오류 발생:", err);
      }
    } else {
      const baskets = JSON.parse(localStorage.getItem("baskets") ?? "[]");
      const existingItemIndex = baskets.findIndex(
        item => item.productId === _item.productId,
      );
      if (existingItemIndex === -1) {
        const item = {
          productId: _item.productId,
          count: 1,
          productName: _item.productName,
          thumbnail: _item.thumbnail,
          price: _item.price,
        };
        baskets.push(item);
      } else {
        baskets[existingItemIndex].count += 1;
      }
      localStorage.setItem("baskets", JSON.stringify(baskets));
      setShowModal(true);
    }
  };
  const handleItemClick = _id => {
    navigate(`/product/${_id}`);
  };

  const handleCartShow = () => {
    setShowModal(false);
    navigate(`/cart`);
  };

  return (
    <MainDiv>
      <div className="wrap">
        <div className="info">
          <Slick />
          <div className=" best-item">
            <h1 className="best-title">요즘, 많이 찾는 상품</h1>
            <button
              type="button"
              className="confirm"
              onClick={() => handleMoveViewClick()}
            >
              더보기
            </button>
          </div>
          <ul className="list-area">
            {bestProduct.list?.map((item, index) => (
              <div key={index}>
                <li className="product-card">
                  <img
                    src={mainImage[index]}
                    alt="상품 이미지"
                    className="product-image"
                  />
                  <span className="product-description">
                    <span
                      className="item-numbering"
                      onClick={() => handleItemClick(item.productId)}
                    />

                    <FontAwesomeIcon
                      icon={faBasketShopping}
                      className="shopping-icon"
                      onClick={() => handleShoppingClick(item)}
                    />
                  </span>
                  {showModal === true ? (
                    <CartItemModal
                      setShowModal={setShowModal}
                      handleCartShow={handleCartShow}
                    />
                  ) : null}
                  <div className="item-info">
                    <h2>{item.name}</h2>
                    <p> 판매가 :{item.price.toLocaleString()}원</p>
                  </div>
                </li>
              </div>
            ))}
          </ul>
        </div>
        {childShowModal === true ? (
          <ChildModal setchildShowModal={setChildShowModal} />
        ) : null}
      </div>
    </MainDiv>
  );
};

export default Main;
