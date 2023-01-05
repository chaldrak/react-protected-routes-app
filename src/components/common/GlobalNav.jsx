import React from "react";
import { NavLink } from "react-router-dom";
import UserAuth from "./UserAuth";

const GlobalNav = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <NavLink to="/" className="btn-ghost btn text-xl normal-case">
          Edonadô
        </NavLink>
      </div>
      <div className="flex-none">
        <UserAuth />
      </div>
    </div>
  );
};

export default GlobalNav;
