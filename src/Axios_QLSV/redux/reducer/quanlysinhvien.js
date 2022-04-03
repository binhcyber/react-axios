import { act } from "react-dom/test-utils";
import {
  CAP_NHAT_SV,
  LAY_THONG_TINH_SV,
  SUA_SV,
  THEM_SV,
  XOA_SV,
} from "../constant/quanlysinhvienConstants";

const initialState = {
  dssv: [],
  editSV: null,
  disabled: false,
};

export const quanlysinhvienReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAY_THONG_TINH_SV: {
      state.dssv = action.payload;
      return { ...state };
    }
    case THEM_SV: {
      let newDssv = [...state.dssv];
      newDssv.push(action.payload);
      state.dssv = newDssv;
      return { ...state };
    }
    case XOA_SV: {
      let newDssv = [...state.dssv];
      let newArrAfterDelete = newDssv.filter((sv) => sv.id !== action.payload);
      state.dssv = newArrAfterDelete;
      return { ...state };
    }
    case SUA_SV: {
      let sinhvienAction = action.payload;
      state.editSV = sinhvienAction;
      state.disabled = true;
      return { ...state };
    }
    case CAP_NHAT_SV: {
      let newDssv = [...state.dssv];
      let index = newDssv.findIndex((sv) => sv.id === action.payload.id);
      if (index !== -1) {
        newDssv[index] = action.payload;
      }
      state.disabled = false;
      state.dssv = newDssv;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
