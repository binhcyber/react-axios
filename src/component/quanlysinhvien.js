import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { quanlysinhvienAction } from "../Axios_QLSV/redux/quanlysinhvienSlice";

export default function Quanlysinhvien() {
  const dispatch = useDispatch();
  const { dssv } = useSelector((state) => {
    return state.qlsv;
  });
  console.log(dssv);
  useEffect(() => {
    dispatch(quanlysinhvienAction());
  }, []);
  return (
    <div className="container">
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}
