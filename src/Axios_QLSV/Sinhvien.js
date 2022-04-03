import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { xoasvAction, suasvAction } from "./redux/action/quanlysinhvienAction";
import { QLSVAXIOS } from "./sinhvienService";

class Sinhvien extends Component {
  renderTable = () => {
    return this.props.dssv.map((sv) => {
      return (
        <tr key={sv.id}>
          <td>{sv.id}</td>
          <td>{sv.name}</td>
          <td>{sv.email}</td>
          <td>{sv.phone}</td>
          <td>
            <button
              data-toggle="modal"
              data-target="#modelId"
              onClick={() => {
                QLSVAXIOS.layChiTietSinhVien(sv.id)
                  .then((res) => {
                    console.log(res.data);
                    this.props.suaSV(res.data);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
              className="btn btn-warning mr-2"
            >
              SỬA
            </button>
            <button
              onClick={() => {
                QLSVAXIOS.xoasinhvien(sv.id)
                  .then((res) => {
                    // console.log(res.data);
                    this.props.xoaSV(res.data.id);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
              className="btn btn-danger"
            >
              XÓA
            </button>
            <button className="btn btn-success ml-2 ">
              <NavLink to={`/detail/${sv.id}`}>XEM CHI TIẾT</NavLink>
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>THAO TÁC</th>
          </tr>
        </thead>
        <tbody>{this.renderTable()}</tbody>
      </table>
    );
  }
}
let mapDispathToProps = (dispatch) => {
  return {
    xoaSV: (id) => {
      dispatch(xoasvAction(id));
    },
    suaSV: (sinhvienedit) => {
      dispatch(suasvAction(sinhvienedit));
    },
  };
};
export default connect(null, mapDispathToProps)(Sinhvien);
