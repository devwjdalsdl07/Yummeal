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
      // Object.assign(state, action.payload);
    },
    // 애기가 추가됨
    addBaby: (state, action) => {
      state.baby.push(action.payload);
    },
    editBaby: (state, action) => {
      state.baby = action.payload.selectChild;
    },
    logoutReducer: state => {
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
} = userSlice.actions;
