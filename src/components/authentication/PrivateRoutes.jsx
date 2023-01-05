import { useEffect } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ token }) => {
  const url = useLocation().pathname;
  return token ? <Outlet /> : <Navigate to={`/login?url=${url}`} />;
};

export default PrivateRoutes;
