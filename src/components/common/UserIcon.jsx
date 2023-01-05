import React from "react";
import { NavLink } from "react-router-dom";

function UserIcon() {
  return (
    <div className="dropdown-end dropdown">
      <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
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
          <NavLink to="/login">Logout</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default UserIcon;
