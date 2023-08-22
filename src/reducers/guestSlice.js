import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
  count: 1,
  name: "",
  price: 0,
  productId: 0,
  thumbnail: "",
}];
const guestSlice = createSlice({
  name: "guestSlice",
  initialState,
  reducers: {
    countUp: (state, action) => {},
    countDown: () => {},
    basketPush: () => {},
    basketDelete: () => {},
  },
});

export default guestSlice;

export const { countUp, countDown, basketPush, basketDelete } =
  guestSlice.actions;
