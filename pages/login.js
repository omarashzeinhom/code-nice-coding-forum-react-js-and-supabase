import React from "react";
import {Nav , Header , } from "./components/index";
const Login = () => {
  return (
    <div>
      <Nav/>
      <h1>Login</h1>
      <form encType="multipart/form-data">
        <input name="cx_email" placeholder="Email" />
        <input name="cx_password" placeholder="Email" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
