import { useContext } from "react";
import { appContext } from "../../context/AppContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import {
  TextField,
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

import "./inputStyle.css";
const Input = () => {
  const Navigate = useNavigate();
  const { user, inputOnChange, addUser, setAthenticated } =
    useContext(appContext);
  return (
    <>
      <div className="addContainer">
        <h1>AddUser</h1>

        <TextField
          sx={{ margin: "10px" }}
          id="outlined-basic"
          label="userName"
          variant="standard"
          value={user.name}
          name="name"
          onChange={inputOnChange}
        />
        <TextField
          sx={{ margin: "10px" }}
          id="outlined-basic"
          label="phoneNumber"
          variant="standard"
          value={user.phoneNumber}
          name="phoneNumber"
          onChange={inputOnChange}
        />
        <TextField
          sx={{ margin: "10px" }}
          id="outlined-basic"
          label="email"
          variant="standard"
          value={user.email}
          name="email"
          onChange={inputOnChange}
        />

        <RadioGroup
          sx={{ margin: "10px" }}
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="gender"
          onChange={inputOnChange}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
        <Button startIcon={<AddIcon />} onClick={addUser} variant="contained">
          Add user
        </Button>
      </div>
      <Button
        startIcon={<LogoutIcon />}
        onClick={() => {
          setAthenticated(false);
          Navigate("/LogIn");
        }}
      >
        LogOut
      </Button>
      <Button
        startIcon={<PersonIcon />}
        onClick={() => {
          Navigate("/Tabel");
        }}
      >
        shoow User
      </Button>
    </>
  );
};
export default Input;
