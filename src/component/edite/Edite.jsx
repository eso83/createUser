import { useContext } from "react";
import { appContext } from "../../context/AppContext";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const Edite = () => {
  const Navigate = useNavigate();
  const { editeOnChange, editedUser, handleSave } = useContext(appContext);
  return (
    <>
      <div className="addContainer">
        <h1>Edite</h1>

        <TextField
          sx={{ margin: "10px" }}
          id="outlined-basic"
          label="userName"
          variant="standard"
          value={editedUser.name}
          name="name"
          onChange={editeOnChange}
        />
        <TextField
          sx={{ margin: "10px" }}
          id="outlined-basic"
          label="phoneNumber"
          variant="standard"
          value={editedUser.phoneNumber}
          name="phoneNumber"
          onChange={editeOnChange}
        />
        <TextField
          sx={{ margin: "10px" }}
          id="outlined-basic"
          label="email"
          variant="standard"
          value={editedUser.email}
          name="email"
          onChange={editeOnChange}
        />

        <RadioGroup
          sx={{ margin: "10px" }}
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          value={editedUser.gender}
          name="gender"
          onChange={editeOnChange}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
        <Button variant="contained" onClick={handleSave}>
          save
        </Button>
      </div>
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
export default Edite;
