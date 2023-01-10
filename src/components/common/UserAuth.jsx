import React from "react";
import useAuth from "../../hooks/useAuth";
import UserIcon from "./UserIcon";
import { NavLink } from "react-router-dom";

const UserAuth = () => {
  const { auth } = useAuth();
  return auth?.token ? (
    <UserIcon />
  ) : (
    <NavLink to="/login" className="btn-primary btn text-xl normal-case">
      Login
    </NavLink>
  );
};

export default UserAuth;
