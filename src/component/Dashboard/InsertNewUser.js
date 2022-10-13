import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { adduser } from "../../Redux/Action";
import "../../component/Form.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const InsertNewUser = () => {
  const navigate = useNavigate();
  const getuserid = localStorage.getItem("username");
  useEffect(() => {
    if (getuserid) {
      navigate("/admin/insertnewuser");
    } else {
      navigate("/");
    }
  }, [getuserid]);
  const [userdata, setuserdata] = useState({
    firstname: "",
    lastname: "",
    username: "",
    address: "",
    gender: "",
    password: "",
    status: "inactive",
  });

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(adduser(userdata));
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )
    navigate("/");
  };
  return (
    <>
      <div
        className="d-flex flex-column  mt-5  align-items-center "
        style={{ width: "100%", height: "100vh" }}
      >
        <div
          className=" cardbox p-2"
          style={{ width: "35rem", height: "auto" }}
        >
          <div className="alert alert-info ">
            <h3 className="text-center">Insert New User</h3>
          </div>
          <form onSubmit={submitHandler}>
            <div className="form-field m-2 mt-2">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                value={userdata.firstname}
                onChange={(e) => {
                  setuserdata({ ...userdata, firstname: e.target.value });
                }}
                required
              />
            </div>
            <div className="form-field m-2 mt-2">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                value={userdata.lastname}
                onChange={(e) => {
                  setuserdata({ ...userdata, lastname: e.target.value });
                }}
                required
              />
            </div>
            <div className="form-field m-2 mt-2">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={userdata.username}
                onChange={(e) => {
                  setuserdata({ ...userdata, username: e.target.value });
                }}
                required
              />
            </div>
            <div className="form-field m-2 mt-2">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={userdata.password}
                onChange={(e) => {
                  setuserdata({ ...userdata, password: e.target.value });
                }}
                required
              />
            </div>
            <div className="form-field m-2 mt-2">
              <input
                type="text"
                className="form-control"
                placeholder="Address"
                value={userdata.address}
                onChange={(e) => {
                  setuserdata({ ...userdata, address: e.target.value });
                }}
                required
              />
            </div>
            <div className=" gender-input ">
              <label className=" m-3">Male</label>
              <input
                type="radio"
                value="male"
                name="gender"
                onChange={(e) => {
                  setuserdata({ ...userdata, gender: e.target.value });
                }}
              />
              <label className="m-3">Female</label>
              <input
                type="radio"
                value="female"
                name="gender"
                onChange={(e) => {
                  setuserdata({ ...userdata, gender: e.target.value });
                }}
              />
            </div>

            <div className="select-status">
              <select
                style={{ width: "100%", height: "3rem" }}
                onChange={(e) =>
                  setuserdata({ ...userdata, status: e.target.value })
                }
              >
                <option value="">Select Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <div className="form-field m-2 mt-2">
              <button type="submit" className="btn btn-lg btn-block mt-2">
                Add New User
              </button>
            </div>
          </form>
          <div></div>
        </div>
      </div>
    </>
  );
};
