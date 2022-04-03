import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Axios_qlsv from "./Axios_QLSV/Axios_qlsv";
import DSSVPage from "./Axios_QLSV/Pages/DSSVPage";
import HomePages from "./Axios_QLSV/Pages/HomePages";
import { Switch } from "react-router-dom";
import NavSinhVien from "./Axios_QLSV/Componet/NavSinhVien";
import ChiTietSV from "./Axios_QLSV/Pages/ChiTietSV";

function App() {
  return (
    <BrowserRouter>
      <NavSinhVien />
      <Switch>
        <Route path={"/home"} component={HomePages} />
        <Route path={"/dssv"} component={Axios_qlsv} />
        <Route path={"/detail/:id"} component={ChiTietSV} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
