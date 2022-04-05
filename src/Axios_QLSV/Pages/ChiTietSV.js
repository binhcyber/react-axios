import React, { Component } from "react";
import { connect } from "react-redux";
import { QLSVAXIOS } from "../sinhvienService";
import {
  DISPLAY_LOADING,
  HIDE_LOADING,
} from "../redux/constant/loadingConstant";
class ChiTietSV extends Component {
  state = {
    sinhvienChiTiet: {
      id: "",
      name: "",
      email: "",
      phone: "",
    },
  };
  componentDidMount() {
    this.props.displayLoading();
    QLSVAXIOS.layChiTietSinhVien(this.props.match.params.id)
      .then((res) => {
        this.props.hideLoading();
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
let mapDispathToProps = (dispatch) => {
  return {
    displayLoading: () => {
      dispatch({
        type: DISPLAY_LOADING,
      });
    },
    hideLoading: () => {
      dispatch({
        type: HIDE_LOADING,
      });
    },
  };
};
export default connect(null, mapDispathToProps)(ChiTietSV);
