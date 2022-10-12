import React from "react";

const LoginForm = () => {
    const [password, setPassword] = React.useState([]);

    const[email , setEmail] = React.useState([]);




  return (
    <form encType="multipart/form-data">
      <h1>Login</h1>
      <input name="cx_email" placeholder="Email" />
      <input name="cx_password" placeholder="Email" />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
