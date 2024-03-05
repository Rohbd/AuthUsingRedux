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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <span>Email</span>
          <input
            style={{ width: "300px", height: "30px", marginTop: "10px" }}
            onChange={handleChange}
            type="text"
            name="userName"
            placeholder="User Name"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <span>Password</span>
          <input
            style={{ width: "300px", height: "30px", marginTop: "10px" }}
            onChange={handleChange}
            type="text"
            name="password"
            placeholder="Password"
          />
        </div>
      </div>
      <button
        style={{
          width: "80px",
          height: "25px",
          backgroundColor: "green",
        }}
        onClick={handleFormData}
      >
        Log IN
      </button>
      {isAuthenticated && <h2>Loggedin</h2>}
    </div>
  );
};
export default Login;
