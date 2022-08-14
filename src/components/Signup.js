import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//import styles...
import styles from "./Signup.module.css";

//import validator....
import { validator } from "../services/validator";
const Signup = () => {
  const [focusData, setfocusData] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    confirmPassword: false,
    privacyChecked: false,
  });
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    privacyChecked: false,
    allChecked: false,
  });
  const [error, setError] = useState({});

  const changeHandler = (event) => {
    if (event.target.name === "privacyChecked") {
      Object.keys(error).length === 0
        ? setData({
            ...data,
            [event.target.name]: event.target.checked,
            allChecked: true,
          })
        : setData({
            ...data,
            [event.target.name]: event.target.checked,
          });
    } else {
      Object.keys(error).length === 0
        ? setData({
            ...data,
            [event.target.name]: event.target.value,
            allChecked: true,
          })
        : setData({
            ...data,
            [event.target.name]: event.target.value,
          });
    }
  };

  const focusHandler = (event) => {
    setfocusData({
      ...focusData,
      [event.target.name]: true,
    });
  };

  useEffect(() => {
    setError(validator(data));
  }, [data]);
  console.log(data);
  return (
    <div className={styles.mainContainer}>
      <h1>Sign Up</h1>
      <div className={styles.mainContainerfirstLastName}>
        <div>
          <input
            onFocus={focusHandler}
            name="firstName"
            type="text"
            placeholder="First Name"
            onChange={changeHandler}
            value={data.firstName}
          />
          <span>{error && focusData.firstName && error.firstName}</span>
        </div>
        <div className={styles.mainContainerfirstLastName}>
          <input
            onFocus={focusHandler}
            name="lastName"
            type="text"
            placeholder="Last Name"
            onChange={changeHandler}
            value={data.lastName}
          />
          <span>{error && focusData.lastName && error.lastName}</span>
        </div>
      </div>
      <div>
        <input
          onFocus={focusHandler}
          name="email"
          type="email"
          placeholder="Enter your email"
          onChange={changeHandler}
          value={data.email}
        />
        <span>{error && focusData.email && error.email}</span>
      </div>
      <div>
        <input
          onFocus={focusHandler}
          onChange={changeHandler}
          value={data.password}
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        <span>{error && focusData.password && error.password}</span>
      </div>
      <div>
        <input
          onFocus={focusHandler}
          onChange={changeHandler}
          value={data.confirmPassword}
          name="confirmPassword"
          type="password"
          placeholder="Confirm your password"
        />
        <span>
          {error && focusData.confirmPassword && error.confirmPassword}
        </span>
      </div>
      <div className={styles.privacyChecked}>
        <input
          onFocus={focusHandler}
          name="privacyChecked"
          type="checkbox"
          onChange={changeHandler}
          checked={data.privacyChecked}
        />
        <span>Accept our Policy and Terms</span>
        <div>
          <span>
            {error && focusData.privacyChecked && error.privacyChecked}
          </span>
        </div>
      </div>
      <div className={styles.buttons}>
        <button>Sign Up</button>
        <p>
          Already have account?<Link to="/login">click here</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
