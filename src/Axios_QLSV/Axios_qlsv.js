import React, { Component } from "react";
import ModalSinhVien from "./ModalSinhVien";
import DSSVPage from "./Pages/DSSVPage";
export default class Axios_qlsv extends Component {
  render() {
    return (
      <div className="container">
        <h1>Quản lý sinh viên</h1>
        <ModalSinhVien />
        <DSSVPage />
        {/* <ChiTietSV /> */}
      </div>
    );
  }
}
