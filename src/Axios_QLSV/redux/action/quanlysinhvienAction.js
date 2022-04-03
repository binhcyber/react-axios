import {
  CAP_NHAT_SV,
  LAY_THONG_TINH_SV,
  SUA_SV,
  THEM_SV,
  XOA_SV,
} from "../constant/quanlysinhvienConstants";
export const thongtinSVAction = (dssv) => ({
  type: LAY_THONG_TINH_SV,
  payload: dssv,
});
export const themsvAction = (sinhvien) => ({
  type: THEM_SV,
  payload: sinhvien,
});
export const xoasvAction = (id) => ({
  type: XOA_SV,
  payload: id,
});
export const suasvAction = (sinhvienedit) => ({
  type: SUA_SV,
  payload: sinhvienedit,
});
export const capnhatsvAction = (sinhviencapnhat) => ({
  type: CAP_NHAT_SV,
  payload: sinhviencapnhat,
});
