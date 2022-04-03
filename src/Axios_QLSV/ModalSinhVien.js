import React, { Component } from "react";
import { QLSVAXIOS } from "./sinhvienService";
import {
  capnhatsvAction,
  themsvAction,
} from "./redux/action/quanlysinhvienAction";
import { connect } from "react-redux";

class ModalSinhVien extends Component {
  state = {
    sinhvien: {
      id: "",
      name: "",
      email: "",
      phone: "",
    },
  };
  componentDidMount() {}
  handleCapNhat = (id, _data) => {
    QLSVAXIOS.capnhatsinhvien(id, _data)
      .then((res) => {
        this.props.capnhatSV(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleThemSV = (sv) => {
    QLSVAXIOS.themsinhvien(sv)
      .then((res) => {
        this.props.themsv(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleChange = (e) => {
    let { value, name } = e.target;
    this.setState(
      {
        sinhvien: { ...this.state.sinhvien, [name]: value },
      },
      () => {
        console.log(this.state.sinhvien);
      }
    );
  };
  UNSAFE_componentWillReceiveProps(newProps) {
    let editsv = newProps.editSV;
    console.log(editsv);
    this.setState(
      {
        sinhvien: editsv,
      },
      () => {
        console.log(this.state.sinhvien);
      }
    );
  }

  render() {
    return (
      <div>
        <div>
          {/* Button trigger modal */}
          <button
            type="button"
            className="btn btn-primary btn-lg"
            data-toggle="modal"
            data-target="#modelId"
            onClick={() => {
              this.setState({
                sinhvien: {
                  id: "",
                  name: "",
                  email: "",
                  phone: "",
                },
              });
            }}
          >
            THÊM SINH VIÊN
          </button>
          {/* Modal */}
          <div
            className="modal fade"
            id="modelId"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="modelTitleId"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Modal title</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="container-fluid">
                    <div className="form-group">
                      <label htmlFor="id">id</label>
                      {this.props.disabled ? (
                        <input
                          disabled
                          value={this.state.sinhvien.id}
                          type="text"
                          className="form-control"
                          name="id"
                          id="id"
                          aria-describedby="helpId"
                          onChange={(e) => {
                            this.handleChange(e);
                          }}
                        />
                      ) : (
                        <input
                          value={this.state.sinhvien.id}
                          type="text"
                          className="form-control"
                          name="id"
                          id="id"
                          aria-describedby="helpId"
                          onChange={(e) => {
                            this.handleChange(e);
                          }}
                        />
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">name</label>
                      <input
                        value={this.state.sinhvien.name}
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        aria-describedby="helpId"
                        onChange={(e) => {
                          this.handleChange(e);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">email</label>
                      <input
                        value={this.state.sinhvien.email}
                        type="text"
                        className="form-control"
                        name="email"
                        id="email"
                        aria-describedby="helpId"
                        onChange={(e) => {
                          this.handleChange(e);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">phone</label>
                      <input
                        value={this.state.sinhvien.phone}
                        type="text"
                        className="form-control"
                        name="phone"
                        id="phone"
                        aria-describedby="helpId"
                        onChange={(e) => {
                          this.handleChange(e);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  {this.props.disabled ? (
                    <button
                      data-dismiss="modal"
                      aria-label="Close"
                      onClick={() => {
                        this.handleCapNhat(
                          this.state.sinhvien.id,
                          this.state.sinhvien
                        );
                      }}
                      type="button"
                      className="btn btn-warning"
                    >
                      Cập Nhật
                    </button>
                  ) : (
                    <button
                      data-dismiss="modal"
                      aria-label="Close"
                      disabled
                      onClick={() => {
                        this.handleCapNhat(
                          this.state.sinhvien.id,
                          this.state.sinhvien
                        );
                      }}
                      type="button"
                      className="btn btn-warning"
                    >
                      Cập Nhật
                    </button>
                  )}
                  {this.props.disabled ? (
                    <button
                      data-dismiss="modal"
                      aria-label="Close"
                      disabled
                      onClick={() => {
                        this.handleThemSV(this.state.sinhvien);
                      }}
                      type="button"
                      className="btn btn-primary"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      data-dismiss="modal"
                      aria-label="Close"
                      onClick={() => {
                        this.handleThemSV(this.state.sinhvien);
                      }}
                      type="button"
                      className="btn btn-primary"
                    >
                      Save
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
let mapDispathToProps = (dispatch) => {
  return {
    themsv: (sinhvien) => {
      dispatch(themsvAction(sinhvien));
    },
    capnhatSV: (sinhviencapnhat) => {
      dispatch(capnhatsvAction(sinhviencapnhat));
    },
  };
};
let mapStateToProps = (state) => {
  return {
    editSV: state.quanlysinhvienReducer.editSV,
    disabled: state.quanlysinhvienReducer.disabled,
  };
};

export default connect(mapStateToProps, mapDispathToProps)(ModalSinhVien);
