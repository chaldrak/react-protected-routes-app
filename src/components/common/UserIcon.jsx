import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function UserIcon() {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/", { replace: true });
    setAuth({});
  };
  const localUser = localStorage.getItem("user");
  const token = localUser ? JSON.parse(localUser).token : "";
  const user = token ? JSON.parse(atob(token.split(".")[1])) : {};
  console.log(user);
  return (
    <div className="dropdown-end dropdown">
      <div className="flex items-center space-x-3">
        <strong>{user.user_name}</strong>
        <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
          <div className="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" />
          </div>
        </label>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
      >
        <li>
          <NavLink to="/dashboard" className="justify-between">
            Dashboard
            <span className="badge">New</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings">Settings</NavLink>
        </li>
        <li>
          <button onClick={logout}>Logout</button>
        </li>
      </ul>
    </div>
  );
}

export default UserIcon;
