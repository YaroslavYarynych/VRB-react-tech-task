import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

interface User {
  id: number;
  author: string;
  password: string;
}

export interface DataState {
  value: User[];
}
const currUser = localStorage.getItem("currentUser");

let initialUser = currUser ? JSON.parse(currUser) : [];

const initialState: DataState = {
  value: initialUser,
};

export const userSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.value = [...state.value, ...action.payload];
    },
    deleteUser: (state) => {
      state.value.pop();
    },
  },
});

export const { setUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
