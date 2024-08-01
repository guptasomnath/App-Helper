import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const selectCat = createSlice({
  name: "Select Category Slice",
  initialState: "All Files",
  reducers: {
    setSelectCatName: (_, action: PayloadAction<string>) => action.payload,
  },
});

export default selectCat.reducer;
export const { setSelectCatName } = selectCat.actions;
