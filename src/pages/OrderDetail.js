import { faEquals, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { cartIn, getOrderEnd } from "../api/client";
import CartItemModal from "../components/CartItemModal";
import { OrderDetailWrap } from "../style/OrderDetailCss";

import ReviewModal from "../components/ReviewModal";
import { postReview } from "../api/mainFatch";

const OrderDetail = () => {
  const [orderList, setOrderList] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [reviewModal, setReviewModal] = useState(false);
  const [selectProdNm, setSelectProdNm] = useState(0);
  const [text, setText] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  // 결제내역 불러오기
  const orderEndData = async () => {
    const result = await getOrderEnd(state?.orderCode);
    setOrderList(result.list);
    setUserInfo(result.user);
  };

  useEffect(() => {
    orderEndData();
  }, []);

  // 장바구니 담기
  const handleInCart = async _item => {
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
  };

  // 모달창 장바구니 이동버튼
  const handleCartShow = () => {
    setShowModal(false);
    navigate(`/cart`);
  };

  // 주문금액 합산
  const priceSum = orderList?.reduce((item, idx) => {
    const totalPrice = idx.price * idx.count;
    return item + totalPrice;
  }, 0);

  // 총 결제금액 합산
  const totalPriceSum = orderList?.reduce((item, idx) => {
    const totalPriceSum = idx.totalPrice;
    return item + totalPriceSum;
  }, 0);

  // 리뷰 모달 오픈
  const handleReviewOpen = (productId) => {
    setReviewModal(true);
    setSelectProdNm(productId)
  };

  // 리뷰 전송
  const handleClickReview = async item => {
    const data = {
      productId: item,
      ctnt: text,
    };
    await postReview(data);
    setReviewModal(false);
  };
  return (
    <OrderDetailWrap>
      <div className="container">
        <h2>결제내역</h2>
        <h3>{orderList[0]?.createdAt}</h3>
        <div className="order-prodwrap">
          <h3>주문상품</h3>
          <hr />
          {orderList.map(item => (
            <div key={item.productId} className="order-prodtext">
              <div className="order-imgbox">
                <img
                  src={`http://192.168.0.144:5001/img/product/${item.productId}/${item.thumbnail}`}
                  alt={item.title}
                />
              </div>
              <div className="order-textwrap">
                <p>{item.productName}</p>
                <p>{(item.price * parseInt(item.count)).toLocaleString()}</p>
                <p>{item.count}</p>
                <div className="order-prodbtn">
                  <button onClick={() => handleInCart(item)}>
                    장바구니 담기
                  </button>
                  <button onClick={() => handleReviewOpen(item.productId)}>리뷰 작성</button>
                </div>
                {showModal === true ? (
                  <CartItemModal
                    setShowModal={setShowModal}
                    handleCartShow={handleCartShow}
                  />
                ) : null}
                {reviewModal === true ? (
                  <ReviewModal
                    handleClickReview={handleClickReview}
                    setReviewModal={setReviewModal}
                    selectProdNm={selectProdNm}
                    text={text}
                    setText={setText}
                  />
                ) : null}
              </div>
            </div>
          ))}
        </div>
        <div className="order-userinfo">
          <h3>배송 정보</h3>
          <hr />
          <div className="order-infowrap">
            <div className="info-data">
              <p>받는분</p>
              <div>{userInfo.reciever}</div>
            </div>
            <div className="info-data">
              <p>주소</p>
              <div>
                {userInfo.address}
                {userInfo.addressDetail}
              </div>
            </div>
            <div className="info-data">
              <p>휴대폰</p>
              <div>{userInfo.phoneNm}</div>
            </div>
            <div className="info-data">
              <p>메세지</p>
              <div>{userInfo.request}</div>
            </div>
          </div>
        </div>
        <div className="order-price">
          <h3>주문 금액 정보</h3>
          <hr />
          <div className="order-pricewrap">
            <div className="price-data">
              <p>주문금액</p>
              <span>{priceSum.toLocaleString()}원</span>
            </div>
            <div>
              <i>
                <FontAwesomeIcon icon={faMinus} />
              </i>
            </div>
            <div className="price-data">
              <p>할인금액</p>
              <span>{userInfo.usepoint?.toLocaleString()}원</span>
            </div>
            <div>
              <i>
                <FontAwesomeIcon icon={faEquals} />
              </i>
            </div>
            <div className="price-data">
              <p>총 결제금액</p>
              <span>{(priceSum - userInfo.usepoint).toLocaleString()}원</span>
            </div>
          </div>
        </div>
      </div>
    </OrderDetailWrap>
  );
};

export default OrderDetail;
