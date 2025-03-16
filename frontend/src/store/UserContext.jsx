import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true);
  const navigate = useNavigate()

  const handleSetTokenFalse = () => {
    setToken(false);
    navigate('/login');
  };

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  return (
    <UserContext.Provider value={{ token, setToken, handleSetTokenFalse, user, setUser, navigate}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;