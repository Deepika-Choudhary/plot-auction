import React, { useState } from "react";
// import Login from "./Login";
import Registration from "./Registration";
import { Link } from "react-router-dom";

const Login = () => {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  return (
    <form>
      <div className="main">
        <div className="sub-main">
          <div>
            <div className="imgs">
              <div className="container-image"></div>
            </div>
            <div>
              <h1 className="LHeader">Login</h1>
              <div>
                <input
                  type="email"
                  placeholder="Enter Email-id"
                  className="fill"
                  onChange={(event) => setEmaillog(event.target.value)}
                />
              </div>
              <div className="second-input">
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="fill"
                  onChange={(event) => setPasswordlog(event.target.value)}
                />
              </div>
              <div className="login-btn">
                <Link to="/">
                  <button type="button">Login</button>
                </Link>
              </div>
              <div className="reg-link">
                <Link className="link" to="/registration">
                  <li>Register Now</li>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
