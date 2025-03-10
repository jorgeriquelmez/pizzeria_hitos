import { createContext, useState, useEffect, useCallback } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const handleSumar = (index) => {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, contador: item.contador + 1 } : item
      )
    );
  };

  const handleRestar = (index) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.map((item, i) =>
        i === index && item.contador > 0
          ? { ...item, contador: item.contador - 1 }
          : item
      );
      return updatedItems.filter((item) => item.contador > 0);
    });
  };

  const calculadoraTotal = (cart) => {
    return cart.reduce((total, producto) => {
      return total + producto.price * producto.contador;
    }, 0);
  };

  const actualizarTotal = useCallback(() => {
    setTotal(calculadoraTotal(items));
  }, [items]);

  const addItem = (item) => {
    const existingItemIndex = items.findIndex((i) => i.id === item.id);

    if (existingItemIndex > -1) {
      const updatedItems = [...items];
      updatedItems[existingItemIndex].contador++;
      setItems(updatedItems);
    } else {
      setItems([...items, { ...item, contador: 1 }]);
    }
    actualizarTotal();
  };

  useEffect(() => {
    actualizarTotal();
  }, [actualizarTotal]);

  return (
    <CartContext.Provider value={{ items, setItems, handleSumar, handleRestar, total, actualizarTotal, addItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;