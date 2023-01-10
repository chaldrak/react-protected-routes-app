import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const localUser = localStorage.getItem("user");
  const data = localUser ? JSON.parse(localUser) : {};
  const [auth, setAuth] = useState(data);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
