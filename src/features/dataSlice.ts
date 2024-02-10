import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ArticleType, DataState } from "../utils/types";

const initialState: DataState = {
  article: [],
};

export const dataSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    getData: (state) => {
      state;
    },
    setData: (state, action) => {
      state.article = action.payload;
    },
    addArticles: (state, { payload }: { payload: ArticleType[] }) => {
      state.article = [...state.article, ...payload];
    },
    addData: (state, { payload }: { payload: ArticleType }) => {
      state.article = [...state.article, payload];
    },
    deleteData: (state, action: PayloadAction<string>) => {
      state.article = state.article.filter(
        (item) => item.source.id !== action.payload
      );
    },
    pinData: (state, { payload }) => {
      const user = state.article.findIndex(
        (item) => +item.source.id === +payload.id
      );
      if (user === 0) {
        const [entity] = state.article.splice(user, 1);
        state.article.push(entity);
      } else {
        const [entity] = state.article.splice(user, 1);
        console.log(entity);
        state.article.unshift(entity);
      }
    },
  },
});

export const { getData, addArticles, deleteData, setData, addData, pinData } =
  dataSlice.actions;

export default dataSlice.reducer;
