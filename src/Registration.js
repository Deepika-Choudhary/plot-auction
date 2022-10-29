import React, { useState, useEffect } from "react";
import Login from "./Login";
import { Link } from "react-router-dom";

const Registration = () => {
  const LOCAL_STORAGE_KEY = "Info";

  const [Info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setInfo(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Info));
  }, [Info]);

  let register = (e) => {
    e.preventDefault();

    if (!Info.name || !Info.email || !Info.password || !Info.phoneNumber) {
      alert("Complete all the fields!!!");
      return;
    }
  };

  return (
    <form onSubmit={register}>
      <div className="main">
        <div className="sub-main">
          <div>
            <div>
              <h1>Register</h1>
              <div>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="fill"
                  value={Info.name}
                  onChange={(e) => setInfo({ ...Info, name: e.target.value })}
                />
              </div>
              <div className="mail-id">
                <input
                  type="email"
                  placeholder="Enter Email-id"
                  className="fill"
                  value={Info.email}
                  onChange={(e) => setInfo({ ...Info, email: e.target.value })}
                />
              </div>
              <div className="mail-id">
                <input
                  type="password"
                  placeholder="Enter New Password"
                  className="fill"
                  value={Info.password}
                  onChange={(e) =>
                    setInfo({ ...Info, password: e.target.value })
                  }
                />
              </div>
              <div className="mail-id">
                <input
                  type="text"
                  placeholder="Enter PhoneNumber"
                  className="fill"
                  value={Info.phoneNumber}
                  onChange={(e) =>
                    setInfo({ ...Info, phoneNumber: e.target.value })
                  }
                />
              </div>

              <div className="login-btn">
                <Link to="/">
                  <button type="submit">Register</button>
                </Link>
              </div>
              <div className="reg-link">
                <p>If Account exist then</p>
                <Link className="link" to="/login">
                  <li>Login!!!</li>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Registration;
