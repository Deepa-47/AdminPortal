import React, { useState } from "react";
import "./AdminNavbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const AdminNavbar = () => {
  const [pageContent, setpageContent] = useState(false);
  const [sideBarClass, setSideBarClass] = useState(false);

  const ToggleHandle = () => {
    if (pageContent) setpageContent(false);
    else setpageContent(true);

    if (pageContent) setSideBarClass(false);
    else setSideBarClass(true);
  };
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <>
      <div
        className={
          sideBarClass
            ? "vertical-nav bg-white collapse"
            : "vertical-nav bg-white "
        }
        id="sidebar"
      >
        <div className="py-4 px-3 mb-4 bg-light">
          <div className="media d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="currentColor"
              className="bi bi-person mr-3 rounded-circle img-thumbnail shadow-sm"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
            </svg>

            <div className="media-body">
              {/* <h4 className="m-0">Name</h4>
                        <p className="font-weight-normal text-muted mb-0">Position</p> */}
            </div>
          </div>
        </div>

        <p className="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">
          Dashboard
        </p>

        <ul className="nav flex-column bg-white mb-0">
          <li className="nav-item">
            <Link to="/admin/insertnewuser" className="nav-link text-dark">
              <i className="fa fa-th-large mr-3 text-primary fa-fw"></i>
              Insert New User
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin" className="nav-link text-dark">
              <i className="fa fa-address-card mr-3 text-primary fa-fw"></i>
              Show All User
            </Link>
          </li>
        </ul>
      </div>

      <div
        className="page-content p-5"
        id="content"
        style={{ marginLeft: pageContent ? "0" : "17rem" }}
      >
        <nav id="topnav">
          <div className="navbar navbar-expand-md navbar-light bg-white ">
            <button
              id="sidebarCollapse"
              onClick={ToggleHandle}
              type="button"
              className="btn btn-light bg-white rounded-pill shadow-sm px-4 "
            >
              <i className="fa fa-bars mr-2"></i>
            </button>
            <a className="navbar-brand ml-3 text_appname" href="#">
              <strong style={{ color: "#0000CD", marginLeft: "10px" }}>
                Admin Pannel{" "}
              </strong>
            </a>
            <label
              onClick={logout}
              className="admin-nav"
              style={{
                color: "#004FDB",
                fontSize: "20px",
                fontWeight: "500",
                cursor: "pointer",
              }}
            >
              Logout
            </label>
          </div>
        </nav>
      </div>
    </>
  );
};
