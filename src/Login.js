import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    // some fancy firebase login shiz
  };
  const register = (e) => {
    e.preventDefault();

    // do some fancy firebase register shiz
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png "
          alt=""
          className="login__logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form action="login__form">
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="login__signInButton"
            onClick={signIn}
            type="submit"
          >
            Sign In
          </button>
        </form>

        <p className="login__legalese">
          By continuing, you agree to AMAZON FAKE CLONE Conditions of Use and
          Privacy Notice. Please see our Privacy Notice, our Cookies Notice and
          our Interest-Based Ads Notice.
        </p>

        <button
          className="login__registerButton"
          onClick={register}
          type="submit"
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
