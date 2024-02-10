import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../features/dataSlice";
import userSlice from "../features/userSlice";
import pinSlice from "../features/pinSlice";

export const store = configureStore({
  reducer: {
    dataStore: dataSlice,
    currentUser: userSlice,
    currentPin: pinSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
