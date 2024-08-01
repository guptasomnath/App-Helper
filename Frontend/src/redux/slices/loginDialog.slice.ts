import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const loginDialogSlice = createSlice({
  name: "Login Dialog Slice",
  initialState: false,
  reducers: {
    setLoginDialogVisibility: (_, action: PayloadAction<boolean>) =>
      action.payload,
  },
});

export default loginDialogSlice.reducer;
export const { setLoginDialogVisibility } = loginDialogSlice.actions;
