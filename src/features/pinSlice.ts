import { createSlice } from "@reduxjs/toolkit";
import { PinState } from "../utils/types";

const initialState: PinState = {
  pin: [],
};

export const pinSlice = createSlice({
  name: "pin",
  initialState,
  reducers: {
    setPin: (state, action) => {
      state.pin.push(action.payload);
    },
    deletePin: (state) => {
      state.pin.pop();
    },
  },
});

export const { setPin, deletePin } = pinSlice.actions;

export default pinSlice.reducer;
