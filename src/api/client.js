import axios from "axios";
import { getCookie, removeCookie } from "./cookie";

export const instance = axios.create({
  // baseURL: "http://localhost:3000",
  // timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터
instance.interceptors.request.use(
  async config => {
    const accessToken =
      sessionStorage.getItem("accessToken") ||
      localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`; // 헤더에 토큰을 추가합니다.
    }
    return config;
  },
  error => {
    // 요청 오류 처리
    return Promise.reject(error);
  },
);

instance.interceptors.response.use();

// 예제: 이름이 "user"인 쿠키 값을 읽어와서 출력합니다.
// const userName = getCookie("user");
// console.log("사용자 이름:", userName);

// 로그인
export const fetchLogin = async (id, pw) => {
  try {
    const res = await instance.post(`/api/user/sign-in`, {
      uid: id,
      upw: pw,
    });
    console.log("넘어온 데이터 : ", res.data);
    const result = await res.data;
    // const refreshCookie = getCookie("refresh_token");
    // console.log("refreshCookie :", refreshCookie);
    sessionStorage.setItem("accessToken", result.accessToken);
    // sessionStorage.setItem("refreshToken", refreshCookie);
    // sessionStorage.setItem("refreshToken", result.refreshToken);
    // sessionStorage.setItem("refreshToken", refreshCookie);
    // sessionStorage.setItem("isFirshLogin", "true");
    checkTime();
    return result;
  } catch (error) {
    console.log(error);
  }
};

// 카카오 로그인
// 로그인
export const kakaoLogin = async _token => {
  try {
    sessionStorage.setItem("accessToken", _token);
    checkTime();
  } catch (error) {
    console.log(error);
  }
};

let isRefreshToken = false;

// 일정한 시간 체크를 진행함
const checkTime = () => {
  console.log("로그인 이후 일정 시간이 지나면 새로운 인증 코드 요청");
  // if (!isRefreshToken) {
  setTimeout(() => {
    getRefreshToken();
    // isRefreshToken = true;
  }, 3000000);
  // }
};

export const getRefreshToken = async () => {
  // if (!accessToken) {
  try {
    const res = await instance.get(`/api/user/refresh`);
    const result = res.data;
    console.log("토큰재발급됐당!", result);
    sessionStorage.setItem("accessToken", result.accessToken);
    checkTime();
    // const refreshCookie = getCookie("refresh_token");
    // console.log("refreshCookie :", refreshCookie);
    // sessionStorage.setItem("refreshToken", result.refreshToken);
    // sessionStorage.setItem("refreshToken", refreshCookie);
  } catch (err) {
    console.log(err);
  }
  // }
};

// 로그아웃 post
export const postLogout = async () => {
  console.log("==================== 로그아웃");
  try {
    const res = await instance.get(`/api/user/sign-out`);
    console.log("로그아웃");
    // removeCookie("accessToken");
    // removeCookie("refreshToken");
    removeCookie("refresh_token");
    sessionStorage?.removeItem("accessToken");
    localStorage?.removeItem("accessToken");
    // sessionStorage.removeItem("refreshToken");
    const result = await res.data;
    console.log("로그아웃 성공값", result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

// 유저정보 get
export const getUser = async _iuser => {
  try {
    const res = await instance.get(`/api/mypage/profile`);
    console.log("로그인 res는??", res);
    const result = {
      iuser: res.iuser,
      // email: res.data.email,
      uid: res.data.uid,
      unm: res.data.unm,
      mobileNb: res.data.mobileNb,
      zipcode: res.data.zipcode,
      address: res.data.address,
      addressDetail: res.data.addressDetail,
      nickNm: res.data.nickNm,
      point: res.data.point,
      birthday: res.data.birthday,
    };

    const refreshCookie = await getCookie("refresh_token");
    console.log("refreshCookie :", refreshCookie);

    return result;
  } catch (err) {
    console.log(err);
  }
};

// 아이 정보 get
export const getChild = async _childInfo => {
  try {
    const res = await instance.get(`/api/baby`);
    console.log("로그인 child res는??", res);
    // const result = {
    //   iuser: res.data.iuser,
    //   childBirth: res.data.childBirth,
    //   prefer: res.data.prefer,
    //   allergyId: res.data.allergyId,
    // };
    // console.log("===== 로그인 child res resultresult ?", result);
    // const refreshCookie = await getCookie("refresh_token");
    // console.log("refreshCookie :", refreshCookie);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// 주문내역 get
export const getOrderList = async _date => {
  try {
    const res = await instance.get(`/api/mypage/orderlist?month=${_date}`);
    const result = res.data;
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
    return [
      {
        orderId: 5,
        createdAt: "2023-08-04",
        thumbnail: "main1.pic",
        name: "닭고기파스타",
        price: 5000,
        shipment: "상품 준비중",
      },
      {
        orderId: 4,
        createdAt: "2023-08-02",
        thumbnail: "porridge.png",
        name: "고구마미음 외1개",
        price: 3300,
        shipment: "상품 준비중",
      },
      {
        orderId: 3,
        createdAt: "2023-07-26",
        thumbnail: "main5.png",
        name: "봉골레파스타",
        price: 40000,
        shipment: "상품 준비중",
      },
    ];
  }
};

// 유저정보 수정 patch
export const fetchUserInfo = async _data => {
  console.log(_data);
  try {
    const res = await instance.patch(`/api/mypage/profile`, _data);
    const result = res.data;
    console.log("유저 패치 진행 : ", result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

// 회원 탈퇴
export const deleteUser = async () => {
  try {
    const res = await instance.delete("/api/mypage/profile");
    const result = res.data;
    // removeCookie("refreshToken");
    sessionStorage.removeItem("accessToken");
    removeCookie("refresh_Token");
    return result;
  } catch (err) {
    console.log(err);
  }
};

// 장바구니 get
export const getCart = async () => {
  try {
    const res = await instance.get("/api/orderbasket");
    const result = res.data;
    console.log("장바구니 겟겟겟겟", result);
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
    ];
  }
};

// 장바구니 업카운트 patch
export const upPatch = async _cartId => {
  try {
    const res = await instance.put(`/api/orderbasket`, {
      cartId: _cartId,
      check: 1,
    });
    const result = res.data;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// 장바구니 다운카운트 patch
export const downPatch = async _cartId => {
  try {
    const res = await instance.put(`/api/orderbasket`, {
      cartId: _cartId,
      check: 0,
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
    const res = await instance.delete(`/api/orderbasket/${_cartId}`);
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
export const getOrderEnd = async _orderCode => {
  try {
    const res = await instance.get(`/api/mypage/orderlist/${_orderCode}`);
    const result = res.data;
    console.log("오더리스트에 담기는 값", result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

// 주문 post
export const orderPost = async _item => {
  try {
    const res = await instance.post("/api/buy/order", _item);
    const result = res.data;
    console.log("오더 포스트 보내는 값", result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

// 최근검색어 데이터 get
export const recentKeyword = async () => {
  try {
    const res = await instance.get("/api/search/recent");
    const result = res.data;
    return result;
  } catch (err) {
    console.log(err);
  }
};

// 최근검색어 delete
export const recentDelete = async item => {
  try {
    const res = await instance.delete(`/api/search/recent/${item}`);
  } catch (err) {
    console.log(err);
  }
};

// 인기검색어 데이터 get
export const popularKeyword = async () => {
  try {
    const res = await instance.get("/api/search/popular");
    const result = res.data;
    return result;
  } catch (err) {
    console.log(err);
  }
};

// 카카오페이 post
export const kakaoPay = async item => {
  try {
    const res = await instance.post("/api/kakaoPay", item);
    const result = res.data;
    return result;
  } catch (err) {
    console.log(err);
  }
};
