import axios from "axios";
import { instance } from "./client";

// 장바구니 get
export const getCart = async () => {
  try {
    const res = await instance.get("/api/orderbasket");
    const result = res.data;
    console.log("장바구니 겟겟겟겟", result)
    return result;
  } catch (error) {
    [
      {
        cartId: 16,
        title: "덮밥",
        name: "연어덮밥",
        count: 20,
        price: 9000,
        thumbnail: "main4.png",
        createdAt: "2023-08-03 17:47:32",
      },
      {
        cartId: 15,
        title: "닭볶음탕",
        name: "닭볶음탕",
        count: 15,
        price: 15000,
        thumbnail: "main3.png",
        createdAt: "2023-08-03 17:47:19",
      },
      {
        cartId: 14,
        title: "과일",
        name: "사과",
        count: 10,
        price: 20000,
        thumbnail: "main2.pic",
        createdAt: "2023-08-03 17:47:14",
      },
      {
        cartId: 13,
        title: "파스타",
        name: "닭고기파스타",
        count: 5,
        price: 0,
        thumbnail: "main1.pic",
        createdAt: "2023-08-03 17:47:09",
      },
      {
        cartId: 4,
        title: "과일",
        name: "사과",
        count: 3,
        price: 20000,
        thumbnail: "main2.pic",
        createdAt: "2023-07-25 09:27:42",
      },
    ];
  }
};

// 장바구니 업카운트 patch
export const upPatch = async (_cartId, _newCount) => {
  try {
    const res = await axios.patch(`/api/orderbasket/plus?cartId=${_cartId}`, {
      count: _newCount,
    });
    const result = res.data;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// 장바구니 다운카운트 patch
export const downPatch = async (_cartId, _newCount) => {
  try {
    const res = await axios.patch(`/api/orderbasket/minus?cartId=${_cartId}`, {
      count: _newCount,
    });
    const result = res.data;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// 장바구니 목록삭제 delete
export const cartDelete = async _cartId => {
  try {
    const res = await axios.delete(`/api/orderbasket?cartId=${_cartId}`);
    const result = res.data;
  } catch (error) {
    console.log(error);
  }
};

// 장바구니 post
export const cartIn = async _item => {
  try {
    const res = await instance.post("/api/orderbasket", _item);
    const result = res.data;
    console.log("장바구니 담기는거 맞아?", result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

// 결제내역 get
export const getOrderEnd = async _orderId => {
  try {
    const res = await axios.get(
      `/api/mypage/orderlist/detail?iuser=1&orderId=${_orderId}`,
    );
    const result = res.data;
    return result;
  } catch (error) {
    console.log(error);
  }
};

// 주문 post
export const orderPost = async _item => {
  try {
    const res = await axios.post("/api/buy/order", _item);
    const result = res.data;
    return result;
  } catch (err) {
    console.log(err);
  }
};

// 검색 결과 get
export const searchResult = async _product => {
  try {
    const res = await axios.get(
      `/api/Search?product=${_product}&page=1&row=16`,
    );
    const result = res.data;
    console.log("검색결과 : ", result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

// 필터 정렬 get
export const filterSort = async _item => {
  try {
    const res = await axios.post(
      // `/api/Search/filter?product=${_product}&page=1&row=30&sorter=${_selectSort}`,
      "/api/Search/filter",
      _item,
    );
    const result = res.data;
    console.log("검색필터결과 : ", result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

// 카테고리 메뉴 get
export const menuCate = async () => {
  try {
    const res = await axios.get("/api/cate/all");
    const result = res.data;
    console.log("카테고리 메뉴 : ", result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

// 메뉴 클릭 시 품목 get
export const CateProdList = async _item => {
  try {
    const res = await axios.post("/api/cate/list", _item);
    const result = res.data;
    console.log("카테고리 가냐? : ", result);
    return result;
  } catch (err) {
    console.log(err);
  }
};
