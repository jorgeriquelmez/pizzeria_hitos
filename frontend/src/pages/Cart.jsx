import { useContext } from 'react';
import './Cart.css';
import Swal from 'sweetalert2';
import { CartContext } from '../store/CartContext';
import { UserContext } from '../store/UserContext';

const Cart = () => {
  const { items, handleSumar, handleRestar, total } = useContext(CartContext);
  const {  token } = useContext(UserContext)

  const pagar = () => {
    if (total > 0) {
      Swal.fire({
        title: "Solicitud exitosa",
        text: "Estamos procesando su pedido",
        icon: "success"
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "No hay productos en el carrito",
        icon: "error"
      });
    }
  };

  return (
    <div className="containerCart">
      <h2>Detalles del pedido:</h2>
      <table>
        <thead>
          <tr>
            <th className='picture'></th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {items && items
            .filter((item) => item.contador > 0) // Filtrar ítems con contador > 0
            .map((item, index) => (
              <tr key={item.id}> {/* Usar item.id como clave */}
                <td><img src={item.img} alt="imagen pizza" /></td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <button onClick={() => handleRestar(index)}>-</button>
                  <span>{item.contador}</span>
                  <button onClick={() => handleSumar(index)}>+</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="totalCart">
        Total: ${total}
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={pagar}
        disabled={!token}
      >
        Pagar
      </button>
    </div>
  );
};

export default Cart;