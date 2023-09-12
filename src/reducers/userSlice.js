import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uid: "",
  unm: "",
  birthday: "",
  mobileNb: "",
  zipcode: "",
  address: "",
  addressDetail: "",
  nickNm: "",
  point: 0,
  baby: [],
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    loginReducer: (state, action) => {
      console.log("================ loginReducer");
      console.log(action.payload);
      (state.uid = action.payload.uid),
        (state.unm = action.payload.unm),
        (state.mobileNb = action.payload.mobileNb),
        (state.zipcode = action.payload.zipcode),
        (state.address = action.payload.address),
        (state.addressDetail = action.payload.addressDetail),
        (state.nickNm = action.payload.nickNm),
        (state.point = action.payload.point),
        (state.birthday = action.payload.birthday),
        (state.baby = action.payload.baby);
      // console.log("처음 UserSlice :", state.baby);
      // Object.assign(state, action.payload);
    },
    // 애기가 추가됨
    addBaby: (state, action) => {
      // console.log("================ addBaby");
      state.baby.push(action.payload);
    },
    editBaby: (state, action) => {
      // console.log("================ editBaby");
      // console.log("아이수정 UserSlice :", state.baby);
      // console.log("1 아이 수정 : ", action.payload);
      // console.log(" 2아이 수정 : ", action.payload.baByInfoVo.babyId);
      // console.log(" 2아이 수정 : ", action.payload.baByInfoVo.childBirth);
      // console.log("3 아이 state.user : ", state.user);

      // state.baby = action.payload.selectChild;
      const reBaby = [...state.baby];
      const nowBaby = reBaby.map(item => {
        if (item.baByInfoVo.babyId === action.payload.baByInfoVo.babyId) {
          item.baByInfoVo.childBirth = action.payload.baByInfoVo.childBirth;
        }
        return item;
      });
      // console.log("================ nowBaby", nowBaby);
      state.baby = [...nowBaby];
      // console.log("3 아이 state.baby : ", state.baby);
    },
    updateBaby: (state, action) => {
      // console.log("================ editBaby ");
      // console.log("================ editBaby :", action.payload.nowInfo);
      state.baby = action.payload.nowInfo;
      // console.log("3 아이 state.baby : ", state.baby);
    },
    logoutReducer: state => {
      console.log("================ logoutReducer");
      // state = initialState;
      Object.assign(state, initialState);
    },
    userEditReducer: (state, action) => {
      (state.unm = action.payload.unm),
        (state.mobileNb = action.payload.phoneNumber),
        (state.birthday = action.payload.birthday),
        (state.zipcode = action.payload.zipcode),
        (state.address = action.payload.address),
        (state.addressDetail = action.payload.addressDetail),
        (state.nickNm = action.payload.nickNm);
    },
    pointReducer: (state, action) => {
      state.point = action.payload;
    },
  },
});

export default userSlice;
export const {
  loginReducer,
  logoutReducer,
  pointReducer,
  userEditReducer,
  addBaby,
  editBaby,
  updateBaby,
} = userSlice.actions;
