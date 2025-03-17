import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(() => {
    const storedToken = localStorage.getItem("token");
    return storedToken === "true" || storedToken === null ? true : false;
  });

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  const handleSetTokenFalse = () => {
    setToken(false);
    localStorage.removeItem("token");
    navigate("/login");
  };

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  return (
    <UserContext.Provider
      value={{ token, setToken, handleSetTokenFalse, user, setUser, navigate }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;