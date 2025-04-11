import { TextField, Button } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { appContext } from "../../context/AppContext";
import "./logInStyle.css";

const LogIn = () => {
  const { logInOnChange, userLog, setAthenticated, athenticated } =
    useContext(appContext);
  const Navigate = useNavigate();
  const handleLogIn = () => {
    if (userLog.userName === "admin" && userLog.passWord === "admin") {
      setAthenticated(true);
      Navigate("/");
    } else {
      setAthenticated(false);
      alert("useName or passWord is incorrect");
    }
  };
  return (
    <>
      <div className="container">
        <h1>LogIn</h1>
        <TextField
          id="standard-basic"
          label="userName"
          variant="standard"
          name="userName"
          onChange={logInOnChange}
        />
        <TextField
          id="standard-basic"
          label="PassWord"
          variant="standard"
          name="passWord"
          onChange={logInOnChange}
        />
        <Button onClick={handleLogIn} variant="contained">
          LogIn
        </Button>
      </div>
    </>
  );
};
export default LogIn;
