import { useContext } from 'react';
import './Cart.css';
import Swal from 'sweetalert2';
import { CartContext } from '../store/CartContext';
import { UserContext } from '../store/UserContext';
import axios from 'axios';

const Cart = () => {
    const { items, handleSumar, handleRestar, total, clearCart } = useContext(CartContext);
    const { token } = useContext(UserContext);

    const handleSubmit = async (e) => {
        if (e) {
            e.preventDefault();
        }
        try {
            const URL = 'http://localhost:5000/api/checkouts';
            const headers = {
                Authorization: `Bearer ${token}`
            };
            console.log('Headers:', headers);
            console.log('Token:', token);
            const respcheckout = await axios.post(URL, {}, { headers });
            const checkoutData = respcheckout.data;
            console.log('Respuesta del Backend:', checkoutData);

            Swal.fire({
                title: "Pago Exitoso",
                text: "Su pedido ha sido procesado correctamente.",
                icon: "success"
            }).then(() => {
                clearCart();
                // Redirigir a la página de confirmación (si es necesario)
            });
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Error al procesar el pago"
            });
        }
    };

    const pagar = () => {
        if (total > 0) {
            handleSubmit();
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
                        .filter((item) => item.contador > 0)
                        .map((item, index) => (
                            <tr key={item.id}>
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