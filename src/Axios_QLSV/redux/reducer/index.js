import { combineReducers } from "redux";
import { quanlysinhvienReducer } from "./quanlysinhvien";
import { loadingReducer } from "./loadingReducer";
export const rootReducer = combineReducers({
  quanlysinhvienReducer,
  loadingReducer,
});
