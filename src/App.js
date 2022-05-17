import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Quanlysinhvien from "./component/quanlysinhvien";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} component={Quanlysinhvien} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
