import React, { Component } from "react";
import { connect } from "react-redux";
import Sinhvien from "../Sinhvien";
import { QLSVAXIOS } from "../sinhvienService";
import { thongtinSVAction } from "../redux/action/quanlysinhvienAction";
class DSSVPage extends Component {
  componentDidMount() {
    QLSVAXIOS.laythongtinsinhvien()
      .then((res) => {
        this.props.thongtinsv(res.data);
      })
      .catch((err) => {
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
  };
};
let mapStateToProps = (state) => {
  return {
    dssv: state.quanlysinhvienReducer.dssv,
  };
};
export default connect(mapStateToProps, mapDispathToProps)(DSSVPage);
