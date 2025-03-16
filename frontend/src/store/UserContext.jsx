import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true);

  const handleSetTokenFalse = () => {
    setToken(false); // Cambiamos el nombre de la función y actualizamos a false
  };

  const [user, setUser] = useState({
    email: 'test@test.com',
    password: '123123',
  });

  return (
    <UserContext.Provider value={{ token, handleSetTokenFalse, user }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;