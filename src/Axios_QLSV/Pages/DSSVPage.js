import React, { Component } from "react";
import { connect } from "react-redux";
import Sinhvien from "../Sinhvien";
import { QLSVAXIOS } from "../sinhvienService";
import { thongtinSVAction } from "../redux/action/quanlysinhvienAction";
import {
  DISPLAY_LOADING,
  HIDE_LOADING,
} from "../redux/constant/loadingConstant";
class DSSVPage extends Component {
  componentDidMount() {
    this.props.displayLoading();
    QLSVAXIOS.laythongtinsinhvien()
      .then((res) => {
        this.props.hideLoading();
        this.props.thongtinsv(res.data);
      })
      .catch((err) => {
        this.props.hideLoading();
        console.log(err);
      });
  }
  render() {
    let { dssv } = this.props;
    return (
      <div>
        <Sinhvien dssv={dssv} />
      </div>
    );
  }
}
let mapDispathToProps = (dispatch) => {
  return {
    thongtinsv: (danhsachsinhvien) => {
      dispatch(thongtinSVAction(danhsachsinhvien));
    },
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
let mapStateToProps = (state) => {
  return {
    dssv: state.quanlysinhvienReducer.dssv,
  };
};
export default connect(mapStateToProps, mapDispathToProps)(DSSVPage);
