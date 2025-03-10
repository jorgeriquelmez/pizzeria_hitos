import { createContext, useState, useEffect } from 'react';

export const HomeContext = createContext();

const HomeProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);

  const obtenerPizzas = async () => {
    const res = await fetch('http://localhost:5000/api/pizzas');
    const data = await res.json();
    setPizzas(data);
  };

  useEffect(() => {
    obtenerPizzas();
  }, []);

  return (
    <HomeContext.Provider value={{ pizzas, obtenerPizzas }}>
      {children}
    </HomeContext.Provider>
  );
};

export default HomeProvider;