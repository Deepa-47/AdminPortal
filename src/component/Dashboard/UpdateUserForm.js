import { React, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateuser } from "../../Redux/Action";
import { useNavigate } from "react-router-dom";
import "../../component/Form.css";
import Swal from "sweetalert2";
export const UpdateUserForm = () => {
  const location = useLocation();
  const data = location.state;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userdata, setuserdata] = useState({
    firstname: data.firstname,
    lastname: data.lastname,
    username: data.username,
    address: data.address,
    gender: data.gender,
    password: data.password,
    status: data.status,
  });

  const getuserid = localStorage.getItem("username");

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(updateuser(location.state.id, userdata));
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )
    navigate("/admin");
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
            <h3 className="text-center">Update User</h3>
          </div>
          <form onSubmit={updateHandler}>
            <div className="form-field m-2 mt-2">
              <input
                type="text"
                className="form-control"
                id="first_name"
                placeholder="Enter Name"
                value={userdata.firstname}
                onChange={(e) => {
                  setuserdata({ ...userdata, firstname: e.target.value });
                }}
              />
            </div>
            <div className="form-field m-2 mt-2">
              <input
                type="text"
                className="form-control"
                id="last_name"
                placeholder="Enter Last Name"
                value={userdata.lastname}
                onChange={(e) => {
                  setuserdata({ ...userdata, lastname: e.target.value });
                }}
              />
            </div>
            <div className="form-field m-2 mt-2">
              <input
                type="text"
                className="form-control"
                id="user_name"
                placeholder="Enter UserName"
                value={userdata.username}
                onChange={(e) => {
                  setuserdata({ ...userdata, username: e.target.value });
                }}
              />
            </div>
            <div className="form-field m-2 mt-2">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={userdata.password}
                onChange={(e) => {
                  setuserdata({ ...userdata, password: e.target.value });
                }}
              />
            </div>
            <div className="form-field m-2 mt-2">
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Enter Address"
                value={userdata.address}
                onChange={(e) => {
                  setuserdata({ ...userdata, address: e.target.value });
                }}
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
              <button
                type="submit"
                className="btn btn-lg btn-block mt-2"
                style={{ width: "100%" }}
              >
                Update
              </button>
            </div>
          </form>
          <div></div>
        </div>
      </div>
    </>
  );
};
