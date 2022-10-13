import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../Redux/Action";
import "./Form.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getuserid = localStorage.getItem("username");
  useEffect(() => {
    if (getuserid) {
      navigate("/admin");
    } else {
      navigate("/");
    }
  }, [getuserid]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
    if (localStorage.getItem("username")) {
      navigate("/admin");
    }
  };

  return (
    <>
      <div>
        <div className="heading">
          <h1>Admin Portal</h1>
        </div>
        <div
          className="d-flex flex-column  mt-5  align-items-center "
          style={{ width: "100%", height: "100vh" }}
        >
          <div
            className=" cardbox p-2"
            style={{ width: "25rem", height: "auto" }}
          >
            <div className="alert alert-info ">
              <h3 className="text-center">Login Form</h3>
            </div>
            <form onSubmit={submitHandler}>
              <div className="form-field m-2 mt-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="form-field m-2 mt-2">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div>
                <div className="form-field m-2 mt-2">
                  <button type="submit" className="btn btn-lg btn-block mt-2">
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
