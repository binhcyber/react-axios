import React, { Component } from "react";
import "../../Componet/LoadingPages/LoadingPages.modude.css";
import { connect } from "react-redux";
import ReactLoading from "react-loading";
class LoadingPage extends Component {
  render() {
    if (this.props.isLoading) {
      return (
        <div
          style={{
            position: "fixed",
            backgroundColor: "rgba(255,255,255, 0.7)",
            top: 0,
            right: 0,
            left: 0,
            right: 0,
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ReactLoading
            color="#3a86ff"
            type="bubbles"
            height={"100px"}
            width={"100px"}
          />
        </div>
      );
    } else {
      return <></>;
    }
  }
}
let mapStateToProps = (state) => {
  return {
    isLoading: state.loadingReducer.isLoading,
  };
};
export default connect(mapStateToProps, null)(LoadingPage);
