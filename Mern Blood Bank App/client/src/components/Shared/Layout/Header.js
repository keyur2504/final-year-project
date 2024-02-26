import React from "react";
import { MdBloodtype } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  //logout handler

  const handleLogout = () => {
    localStorage.clear();
    alert("Logut Successfully");
    navigate("/login");
  };
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-brand">
            <MdBloodtype color="red" /> Blood Bank App
          </div>
          <ul className="navbar-nav flex-row">
            <li className="nav-item mx-3">
              <p className="nav-link mt-2">
                <FaUserCircle /> Welcome{" "}
                {user?.name || user?.hospitalName || user?.organisationName}{" "}
                &nbsp;
                <span class="badge badge-secondary">{user?.role}</span>
              </p>
            </li>
            <li className="nav-item mx-3">
              <button className="btn btn-danger mt-2" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
