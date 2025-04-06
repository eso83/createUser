import Input from "./component/input/Input";
import Talbel from "./component/tabel/Tabel";
import Edite from "./component/Edite/Edite";
import LogIn from "./component/logIn/LogIn";
import AppContext from "./context/AppContext";
import { appContext } from "./context/AppContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/AddUser" element={<Input />} />

          <Route path="/Tabel" element={<Talbel />} />
          <Route path="/EditeUser" element={<Edite />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
