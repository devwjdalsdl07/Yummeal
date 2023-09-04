import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uid: "",
  name: "",
  birthday: "",
  mobileNb: "",
  zipcode: "",
  address: "",
  addressDetail: "",
  nickNm: "",
  point: 0,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    loginReducer: (state, action) => {
      (state.uid = action.payload.uid),
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
export const { loginReducer, logoutReducer, pointReducer, userEditReducer } =
  userSlice.actions;
