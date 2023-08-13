import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  iuser: 1,
  email: "test@test.net",
  name: "김빵빵",
  birthday: "2020-07-21",
  mobileNb: "01012345678",
  zipcode: "13477",
  address: "경기도 성남시 판교공원로4길 27",
  addressDetail: "test",
  nickNm: "김옥지",
  point: 0,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    loginReducer: (state, action) => {
      (state.iuser = action.payload.iuser),
        (state.email = action.payload.email),
        (state.name = action.payload.name),
        (state.mobileNb = action.payload.mobileNb),
        (state.zipcode = action.payload.zipcode),
        (state.address = action.payload.address),
        (state.addressDetail = action.payload.addressDetail),
        (state.nickNm = action.payload.nickNm),
        (state.point = action.payload.point),
        (state.birthday = action.payload.birthday);
      // Object.assign(state, action.payload);
    },
    logoutReducer: state => {
      // state = initialState;
      Object.assign(state, initialState);
    },
    userEditReducer: (state, action) => {
      (state.name = action.payload.name),
        (state.email = action.payload.email),
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
export const { loginReducer, logoutReducer, pointReducer, userEditReducer } = userSlice.actions;
