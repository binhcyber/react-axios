import React, { Component } from "react";
import { QLSVAXIOS } from "../sinhvienService";
export default class ChiTietSV extends Component {
  state = {
    sinhvienChiTiet: {
      id: "",
      name: "",
      email: "",
      phone: "",
    },
  };
  componentDidMount() {
    QLSVAXIOS.layChiTietSinhVien(this.props.match.params.id)
      .then((res) => {
        let datasinhvien = res.data;
        this.setState(
          {
            sinhvienChiTiet: datasinhvien,
          },
          () => {
            console.log(this.state.sinhvienChiTiet);
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <p>Name: {this.state.sinhvienChiTiet.name}</p>
        <p>Email: {this.state.sinhvienChiTiet.email}</p>
        <p>Phone: {this.state.sinhvienChiTiet.phone}</p>
      </div>
    );
  }
}
