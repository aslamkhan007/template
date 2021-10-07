import { useState } from "react";
import React from "react";
import {} from "@material-ui/core";
import { NavLink } from "react-router-dom";

export function Register() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  let name, value;
  const handleChange = (e) => {
    // console.log(e.target.value);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   alert("hello");

  //   const response = await fetch("", {
  //     method: "Post",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name,
  //       // email,
  //       // password,
  //     }),
  //   });

  //   const data = await response.json();
  //   console.log(data);
  // };

  
  const handleSubmit = async (e) => {
    const { name,email, password } = user;
    alert("it works!");
    e.preventDefault();

    const respone = await fetch("http://localhost:3030/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    });

    const data = await respone.json();

    console.log(data);
  };

  return (
    <div className="sufee-login d-flex align-content-center flex-wrap bg-dark">
      <div className="container">
        <div className="login-content">
          <div className="login-logo">
            <a href="index.html">
              <img className="align-content" src="images/logo.png" alt="" />
            </a>
          </div>
          <div className="login-form">
            <form>
              <div className="form-group">
                <label>User Name</label>
                <input
                  type="text"
                  value={user.name}
                  onChange={handleChange}
                  name="name"
                  className="form-control"
                  placeholder="User Name"
                />
              </div>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  value={user.email}
                  onChange={handleChange}
                  name="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  value={user.password}
                  onChange={handleChange}
                  name="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> Agree the terms and policy
                </label>
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="btn btn-primary btn-flat m-b-30 m-t-30"
              >
                Register
              </button>
              <div className="social-login-content">
                <div className="social-button">
                  <button
                    type="button"
                    className="btn social facebook btn-flat btn-addon mb-3"
                  >
                    <i className="ti-facebook"></i>Register with facebook
                  </button>
                  <button
                    type="button"
                    className="btn social twitter btn-flat btn-addon mt-2"
                  >
                    <i className="ti-twitter"></i>Register with twitter
                  </button>
                </div>
              </div>
              <div className="register-link m-t-15 text-center">
                <p>
                  Already have account ? <NavLink to="/login"> Sign in</NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
