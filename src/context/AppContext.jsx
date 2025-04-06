import { useEffect, createContext, useState } from "react";
import { useNavigate, Route } from "react-router-dom";
export const appContext = createContext();
import { v4 as uuidv4 } from "uuid";
const AppContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [userList, setUserList] = useState(() => {
    const savedUser = localStorage.getItem("users");
    return savedUser ? JSON.parse(savedUser) : [];
  });
  const [editingId, setEditingId] = useState(null);
  const [editedUser, setEditedUser] = useState({});
  const [userLog, setUserLog] = useState({});
  const [authenticated, setAthenticated] = useState(() => {
    const authenticated = localStorage.getItem("isLogIn");
    return authenticated ? JSON.parse(authenticated) : false;
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(userList));
    localStorage.setItem("isLogIn", JSON.stringify(authenticated));
  }, [userList, authenticated]);
  const inputOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const logInOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserLog((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = (user) => {
    setEditingId(user.id);
    setEditedUser(user);
    console.log(editingId);
    console.log(editedUser);
  };
  const handleSave = () => {
    setUserList((prevList) =>
      prevList.map((user) => (user.id === editingId ? editedUser : user))
    );
    setEditedUser({ name: "", phoneNumber: "", email: "", gender: "" });
    setEditingId(null);
  };
  const editeOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEditedUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addUser = () => {
    if (
      user.name === "" ||
      user.phoneNumber === "" ||
      user.email === "" ||
      user.gender === ""
    ) {
      alert("fill All!");
    } else {
      const newUser = { ...user, id: uuidv4() };
      setUserList((prev) => [...prev, newUser]);
      setUser({ name: "", phoneNumber: "", email: "", gender: "" });
      console.log(newUser);
      console.log(userList);
    }
  };
  // const handleDelete = (id) => {
  //   const newList = [...userList];
  //   newList.splice(id, 1);
  //   setUserList(newList);
  // };
  const handleDelete = (id) => {
    setUserList((prevList) => prevList.filter((user) => user.id !== id));
  };

  return (
    <appContext.Provider
      value={{
        user,
        setUser,
        inputOnChange,
        addUser,
        userList,
        setUserList,
        handleDelete,
        handleSave,
        handleEdit,
        editeOnChange,
        editingId,
        setEditingId,
        editedUser,
        setEditedUser,
        logInOnChange,
        userLog,
        setAthenticated,
      }}
    >
      {children}
    </appContext.Provider>
  );
};
export default AppContext;
