import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Login.module.css";

const Login = () => {
  const [error, setError] = useState({});
  const [data, setData] = useState({
    username: "",
    password: "",

    isAllOk: false,
  });

  const clickHandler = (event) => {
    if (event.target.type === "email") {
      setData({
        ...data,
        username: event.target.value,
      });
    } else {
      setData({
        ...data,
        password: event.target.value,
      });
    }
  };

  return (
    <div className={styles.loginMain}>
      <div className={styles.loginContainer}>
        <div>
          <h1>Login</h1>
        </div>
        <div>
          <input
            type="email"
            placeholder="please enter your email"
            value={data.username}
            onChange={clickHandler}
          />
          {error.name && <span>{error.name}</span>}
        </div>
        <div>
          <input
            type="password"
            placeholder="please enter your password"
            value={data.password}
            onChange={clickHandler}
          />
          {error.password && <span>{error.password}</span>}
        </div>
        <div className={styles.loginContainerButtons}>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign UP</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
