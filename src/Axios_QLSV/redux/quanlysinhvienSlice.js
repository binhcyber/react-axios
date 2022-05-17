import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { QLSVAXIOS } from "../sinhvienService";
export const quanlysinhvienAction = createAsyncThunk(
  "qlsv/quanlysinhvienSlice",
  async () => {
    const result = await QLSVAXIOS.laythongtinsinhvien();
    console.log(result);
    return result.data;
  }
);
const initialState = {
  dssv: [],
};
export const quanlysinhvienSlice = createSlice({
  name: "qlsv",
  initialState,
  reducers: {
    layDanhSachSinhVien: (state, action) => {
      //
    },
  },
  extraReducers: (builder) => {
    builder.addCase(quanlysinhvienAction.fulfilled, (state, action) => {
      state.dssv = action.payload;
    });
  },
});
// Action creators are generated for each case reducer function
export const { layDanhSachSinhVien } = quanlysinhvienSlice.actions;
export default quanlysinhvienSlice.reducer;
