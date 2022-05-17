import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  quanlysinhvienAction,
  xoasinhvienAction,
} from "../Axios_QLSV/redux/quanlysinhvienSlice";
import ModelSinhVien from "./ModelSinhVien";

export default function Quanlysinhvien() {
  const dispatch = useDispatch();
  const { dssv } = useSelector((state) => {
    return state.qlsv;
  });
  console.log(dssv);
  useEffect(() => {
    dispatch(quanlysinhvienAction());
  }, []);
  const renderTable = () => {
    return dssv.map((sv) => {
      return (
        <tr key={sv.id}>
          <td>{sv.id}</td>
          <td>{sv.name}</td>
          <td>{sv.email}</td>
          <td>{sv.phone}</td>
          <button
            onClick={() => {
              dispatch(xoasinhvienAction(sv.id));
            }}
            className="bg-danger text-light rounded-right rounded-left rounded-top rounded-bottom border-white"
          >
            XÓA
          </button>
          <button className="bg-warning text-light rounded-right rounded-left rounded-top rounded-bottom border-white">
            SỬA
          </button>
        </tr>
      );
    });
  };
  return (
    <div className="container">
      <div>
        <ModelSinhVien />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
}
