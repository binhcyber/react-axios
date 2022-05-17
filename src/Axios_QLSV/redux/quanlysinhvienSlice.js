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
export const xoasinhvienAction = createAsyncThunk(
  "qlsv/xoasinhvienAction",
  async (id) => {
    const result = await QLSVAXIOS.xoasinhvien(id);
    console.log(result);
    return result.data;
  }
);
export const themsinhvienAction = createAsyncThunk(
  "qlsv/themsinhvienAction",
  async (data) => {
    const result = await QLSVAXIOS.themsinhvien(data);
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
    builder.addCase(themsinhvienAction.fulfilled, (state, action) => {
      state.dssv.push(action.payload);
    });
    builder.addCase(quanlysinhvienAction.fulfilled, (state, action) => {
      state.dssv = action.payload;
    });
    builder.addCase(xoasinhvienAction.fulfilled, (state, action) => {
      console.log(state);
      console.log(action);
      const xoaDSSV = state.dssv.filter((sv) => {
        return sv.id !== action.payload.id;
      });
      state.dssv = xoaDSSV;
    });
  },
});
// Action creators are generated for each case reducer function
export const { layDanhSachSinhVien } = quanlysinhvienSlice.actions;
export default quanlysinhvienSlice.reducer;
