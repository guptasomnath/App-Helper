import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const sidebarslice = createSlice({
  name: "Sidebar Slice",
  initialState: false,
  reducers: {
    setSidebarVisibility: (_, action: PayloadAction<boolean>) =>
      action.payload,
  },
});

export default sidebarslice.reducer;
export const { setSidebarVisibility } = sidebarslice.actions;
