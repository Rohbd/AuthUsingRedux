import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, selectAuthState } from "../Redux/authSlice";

const Login = () => {
  const { isAuthenticated, user } = useSelector(selectAuthState);
  const dispatch = useDispatch();

  const [data, setData] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleFormData = () => {
    const user = { userName: "test@gmail.com", password: "Rohit123@" };
    dispatch(login(user));
  };
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h1>Login Form</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <span>Email</span>
          <input
            onChange={handleChange}
            type="text"
            name="userName"
            placeholder="User Name"
          />
        </div>
        <div>
          <span>Password</span>
          <input
            onChange={handleChange}
            type="text"
            name="password"
            placeholder="Password"
          />
        </div>
      </div>
      <button onClick={handleFormData}>Log IN</button>
      {isAuthenticated && <h2>Loggedin</h2>}
    </div>
  );
};
export default Login;
