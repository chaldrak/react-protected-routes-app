import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const HomePage = () => {
  const { auth } = useAuth();
  return (
    <div className="flex h-[100vh] items-center justify-center bg-[url('../assets/bg.png')] bg-cover bg-center bg-no-repeat py-10">
      <div className="flex h-24 w-1/2 justify-end rounded-full bg-white shadow-[0_0_10px_black]">
        <div className="flex h-full w-1/3 items-center justify-center rounded-r-full bg-purple-600">
          {auth?.user ? (
            <NavLink
              to="/dashboard"
              className="py-10 px-10 text-3xl text-white"
            >
              Dashboard
            </NavLink>
          ) : (
            <NavLink to="/login" className="py-10 px-10 text-3xl text-white">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
