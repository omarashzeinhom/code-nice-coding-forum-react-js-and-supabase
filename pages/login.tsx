import React from "react";
import { Nav, Header, LoginForm } from "./components/index";

const Login = () => {
  return (
    <div>
      <Header />
      <Nav url={undefined} size={undefined} session={undefined} />
      <LoginForm providers={undefined} user={undefined} session={undefined} />
    </div>
  );
};

export default Login;
