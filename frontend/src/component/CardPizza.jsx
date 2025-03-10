import { Link } from 'react-router-dom';
import './CardPizza.css';
import { useState, useContext, useCallback } from 'react';
import { CartContext } from '../store/CartContext';

const cardStyle = {
  width: "30%"
};

const verMasText = "Ver Más ";
const anadirText = "Añadir ";

const CardPizza = ({ id, name, price, ingredients, img, description }) => {
  const [mostrarInfo, setMostrarInfo] = useState(false);
  const { addItem } = useContext(CartContext);

  const handleVerMas = () => {
    setMostrarInfo(!mostrarInfo);
  };

  const agregarAlCarrito = useCallback(() => {
    addItem({ id, name, price, ingredients, img, description });
  }, [id, name, price, ingredients, img, description, addItem]);

  return (
    <div className="card mb-4" style={cardStyle}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item text-center" style={{ fontSize: '1.2rem' }}>Ingredientes:</li>
        <li className="list-group-item" style={{ fontSize: '0.9rem', listStyle: 'none' }}>
          <ul>
            {ingredients.map((elemento) => (
              <li key={elemento}>-{elemento}</li>
            ))}
          </ul>
          <div className={`info-oculta ${mostrarInfo ? 'mostrar' : ''}`}>{description} </div>
        </li>
        <li className="list-group-item text-center" style={{ fontSize: '1.5rem' }}><strong>Precio: ${price}</strong></li>
      </ul>
      <div className="card-body d-flex justify-content-between align-items-center">
      <Link to={`/pizza/${id}`} className="btn btn-light border-dark" onClick={handleVerMas}>{verMasText}</Link> {/* Enlace con el ID de la pizza */}
      <button className="btn btn-dark" onClick={agregarAlCarrito}>{anadirText}</button>
      </div>
    </div>
  );
};

export default CardPizza;