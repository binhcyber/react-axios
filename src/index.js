import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./Axios_QLSV/redux/reducer/index";
import quanlysinhvienSlice from "./Axios_QLSV/redux/quanlysinhvienSlice";
const store = configureStore({
  reducer: {
    qlsv: quanlysinhvienSlice,
  },
});
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
