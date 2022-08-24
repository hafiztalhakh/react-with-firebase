import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import classes from "./index.module.css";

export default function SignUp() {
  const auth = getAuth();
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = state;

    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          console.log(res);
          alert("Success");
        })
        .catch((err) => {
          alert(err?.message);
        });
    } else {
      alert("Password does not match");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes?.container}>
        <h1>Sign Up</h1>
        <hr />
        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          required
          value={state?.email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
        />
        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
          value={state?.password}
          onChange={(e) => setState({ ...state, password: e.target.value })}
        />
        <label htmlFor="psw-repeat">
          <b>Confirm Password</b>
        </label>
        <input
          type="password"
          placeholder="Confirm Your Password"
          name="psw-repeat"
          required
          value={state?.confirmPassword}
          onChange={(e) =>
            setState({ ...state, confirmPassword: e.target.value })
          }
        />
        <div className="clearfix">
          <button type="submit" className={classes.signupbtn}>
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
}
