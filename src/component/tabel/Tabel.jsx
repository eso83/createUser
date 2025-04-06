import { useContext } from "react";
import { appContext } from "../../context/AppContext";
import "./tabelStyle.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";

const Tabel = () => {
  const {
    userList,
    handleDelete,
    handleEdit,
    editedId,
    setEditedId,
    editedUser,
    setEditedUser,
  } = useContext(appContext);
  return (
    <>
      <h1>UsersList</h1>
      {userList.length == 0 ? (
        "user not exist"
      ) : (
        <TableContainer className="tabel" component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Gender</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userList.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.phoneNumber}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.gender}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ marginLeft: "10px" }}
                      onClick={() => handleEdit(user)}
                    >
                      <Link
                        style={{ textDecoration: "none", color: "inherit" }}
                        to="/EditeUser"
                      >
                        Edite
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default Tabel;
