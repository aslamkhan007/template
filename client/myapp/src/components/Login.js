import React from "react";
import { NavLink } from "react-router-dom";
import loginpic from "../images/logo.png";
import { useState } from "react";

export function Login() {
  const [userLogin, setLogin] = useState({ email: "", password: "" });
  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    console.log(e.target.value);

    setLogin({ ...userLogin, [name]: value });
  };
  const handlesubmit = async(e) => {
      const {email,password} = userLogin;
    e.preventDefault();
    alert("gg");

    const response = await fetch("http://localhost:3030/authentication",{
        method:"post",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify({
            email,
            password,
            "strategy":"local"
        })

    });
     const data = await response.json();
     console.log(data)
  };
  return (
    <div class="sufee-login d-flex align-content-center flex-wrap  bg-dark">
      <div class="container">
        <div class="login-content">
          <div class="login-logo">
            <a href="index.html">
              <img class="align-content" src={loginpic} alt="in" />
            </a>
          </div>
          <div class="login-form">
            <form method ="post">
              <div class="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  value={userLogin.email}
                  onChange={handleChange}
                  name="email"
                  class="form-control"
                  placeholder="Email"
                />
              </div>
              <div class="form-group">
                <label>Password</label>
                <input
                  type="password"
                  value={userLogin.password}
                  onChange={handleChange}
                  name="password"
                  class="form-control"
                  placeholder="Password"
                />
              </div>
              <div class="checkbox">
                <label>
                  <input type="checkbox" /> Remember Me
                </label>
                <label class="pull-right">
                  <a href="#">Forgotten Password?</a>
                </label>
              </div>
              <button
                type="submit"
                onClick={handlesubmit}
                class="btn btn-success btn-flat m-b-30 m-t-30"
              >
                Sign in
              </button>
              <div class="social-login-content">
                <div class="social-button">
                  <button
                    type="button"
                    class="btn social facebook btn-flat btn-addon mb-3"
                  >
                    <i class="ti-facebook"></i>Sign in with facebook
                  </button>
                  <button
                    type="button"
                    class="btn social twitter btn-flat btn-addon mt-2"
                  >
                    <i class="ti-twitter"></i>Sign in with twitter
                  </button>
                </div>
              </div>
              <div class="register-link m-t-15 text-center">
                <p>
                  Don't have account ?{" "}
                  <NavLink to="/register"> Sign Up Here</NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
