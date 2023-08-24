import axios from "axios";

export const getProductId = async () => {
  try {
    const res = await axios.post("/api/admin/product", {
      ProductId: 0,
    });
    const result = res.data;
    console.log("Product ID 임", result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const getCate = async () => {
  try {
    const res = await axios.get("/api/cate/all");
    const result = res.data;
    return result;
  } catch (err) {
    console.log(err);
    return [
      {
        cateId: 1,
        cateName: "초기",
        list: [
          {
            cateDetailId: 1,
            cateName: "곡물류",
          },
          {
            cateDetailId: 2,
            cateName: "야채류",
          },
        ],
      },
      {
        cateId: 2,
        cateName: "중기",
        list: [
          {
            cateDetailId: 1,
            cateName: "곡물류",
          },
          {
            cateDetailId: 2,
            cateName: "야채류",
          },
          {
            cateDetailId: 3,
            cateName: "고기류",
          },
          {
            cateDetailId: 5,
            cateName: "과일류",
          },
        ],
      },
      {
        cateId: 3,
        cateName: "후기",
        list: [
          {
            cateDetailId: 1,
            cateName: "곡물류",
          },
          {
            cateDetailId: 2,
            cateName: "야채류",
          },
          {
            cateDetailId: 3,
            cateName: "고기류",
          },
          {
            cateDetailId: 4,
            cateName: "해산물류",
          },
          {
            cateDetailId: 5,
            cateName: "과일류",
          },
        ],
      },
      {
        cateId: 4,
        cateName: "완료기",
        list: [
          {
            cateDetailId: 1,
            cateName: "곡물류",
          },
          {
            cateDetailId: 2,
            cateName: "야채류",
          },
          {
            cateDetailId: 3,
            cateName: "고기류",
          },
          {
            cateDetailId: 4,
            cateName: "해산물류",
          },
          {
            cateDetailId: 5,
            cateName: "과일류",
          },
        ],
      },
    ];
  }
};

const config = {
  headers: {
    "Content-Type": "multipart/form-data", // 헤더 설정
  },
};

export const postImage = async (_iproduct, img) => {
  const formData = new FormData();
  console.log("이미지 파일", img);
  formData.append("img", img);
  try {
    console.log("폼데이타", formData);
    const res = await axios.post(
      `/api/admin/product/img?productId=${_iproduct}`,
      formData,
      config,
    );
    const result = res.data.img;
    console.log("이미지업로드 성공", result);
    return result;
  } catch (err) {
    console.log("이미지업로드 에러", err);
  }
};

export const deleteProduct = async _iproduct => {
  try {
    const res = axios.delete(
      `/api/admin/product/productId?productId=${_iproduct}`,
    );
    return res.data;
  } catch (err) {
    console.log(_iproduct);
    console.log(err);
  }
};

export const itemAdd = async _data => {
  try {
    const res = await axios.patch("/api/admin/product/registration", _data);
    return res.data;
  } catch (err) {
    console.log("아이템 등록 실패");
    console.log(err);
  }
};
export const imgAdd = async (_iproduct, imgArr) => {
  const formData = new FormData();
  for (const img of imgArr) {
    formData.append("img", img);
  }
  try {
    const res = await axios.post(
      `/api/admin/product/imglist/thumbnail?productId=${_iproduct}`,
      formData,
      config,
    );
    const result = res.data;
    return result;
  } catch (err) {
    console.log("이미지 등록 실패");
    console.log(err);
  }
};
