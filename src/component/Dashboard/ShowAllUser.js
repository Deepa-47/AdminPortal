import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteuser } from "../../Redux/Action";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../../component/Form.css";
export const ShowAllUser = () => {
  const dispatch = useDispatch();
  const [searchData, setSearchData] = useState("");

  const getuserid = localStorage.getItem("username");
  useEffect(() => {
    if (getuserid) {
      navigate("/admin");
    } else {
      navigate("/");
    }
  }, [getuserid]);
  const [status, setStatus] = useState("");
  const [gender, setgender] = useState("");
  const data = useSelector((state) => state.UserReducer.data);

  const navigate = useNavigate();

  const update = (updatedata) => {
    navigate("/admin/updateuser", { state: updatedata });
  };
  return (
    <>
      <div className="row">
        <div className="col-md-1">
          <h5 className="filter">Filter</h5>
        </div>
        <div class="form-outline search-container col-md-5 d-flex">
          <input
            type="search"
            id="form1"
            className="form-control"
            placeholder="search by name & username"
            value={searchData}
            onChange={(e) => {
              setSearchData(e.target.value);
            }}
          />
        </div>

        <div className="col-md-3">
          <select
            className="custom-select "
            style={{ width: "220px", height: "2.5rem" }}
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          >
            <option value="">Select Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div className=" col-md-3">
          <select
            className="custom-select"
            style={{ width: "220px", height: "2.5rem" }}
            onChange={(e) => {
              setgender(e.target.value);
            }}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>

      <table className="table table-stripped">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Address</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((data) => {
              if (searchData === "") {
                return data;
              } else if (
                data.firstname.toLowerCase().match(searchData.toLowerCase()) ||
                data.username.toLowerCase().match(searchData.toLowerCase())
              ) {
                return data;
              }
            })
            .filter((data) => {
              if (data.status.toLowerCase() === status.toLowerCase()) {
                return data;
              } else if (status == "") {
                return data;
              }
            })
            .filter((data) => {
              if (data.gender.toLowerCase() === gender.toLowerCase()) {
                return data;
              } else if (gender == "") {
                return data;
              }
            })
            .map((data) => {
              return (
                <tr>
                  <td>{data.firstname}</td>
                  <td>{data.lastname}</td>
                  <td>{data.username}</td>
                  <td>{data.address}</td>
                  <td>{data.gender}</td>
                  <td>{data.status}</td>
                  <td>
                    <button onClick={() => update(data)}>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                  </td>
                  <td>
                    <button onClick={() => {
                        Swal.fire({
                            title: "Are you sure?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, delete it!",
                          }).then((result) => {
                            if (result.isConfirmed) {
                                dispatch(deleteuser(data.id))
                              Swal.fire("Deleted!", "Your file has been deleted.", "success");
                            }
                          });
                    }}>
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};
