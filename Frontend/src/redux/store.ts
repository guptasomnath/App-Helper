import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./slices/sidebar.slice";
import selectCatSlice from "./slices/selectCat.slice";
import loginDialogSlice from "./slices/loginDialog.slice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    selectCatName: selectCatSlice,
    loginDialogSlice: loginDialogSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
