import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn() {
  const auth = getAuth();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = state;

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        alert("Success");
      })
      .catch((err) => {
        alert(err?.message);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <h1>Sign In</h1>
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

        <div className="clearfix">
          <button type="submit">Sign In</button>
        </div>
      </div>
    </form>
  );
}
