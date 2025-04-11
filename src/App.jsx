import Input from "./component/input/Input";
import Talbel from "./component/tabel/Tabel";
import Edite from "./component/Edite/Edite";
import LogIn from "./component/logIn/LogIn";
import AppContext from "./context/AppContext";
import { appContext } from "./context/AppContext";
import PrivateRoute from "./routes/PrivateRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
function App() {
  const { authenticated } = useContext(appContext);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/LogIn" element={<LogIn />} />
          <Route
            path="/"
            element={
              <PrivateRoute isAuthenticated={authenticated}>
                <Input />
              </PrivateRoute>
            }
          />
          <Route path="/Tabel" element={<Talbel />} />
          <Route path="/EditeUser" element={<Edite />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
