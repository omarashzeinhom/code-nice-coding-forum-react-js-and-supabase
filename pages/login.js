import React from "react";
import { Nav, Header, NeoDriver, LoginForm } from "./components/index";

const Login = () => {
  return (
    <div>
      <Header />
      <Nav />
      <NeoDriver/>
      <LoginForm />
    </div>
  );
};

export default Login;
