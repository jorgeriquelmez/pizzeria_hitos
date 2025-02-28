import { Link } from 'react-router-dom';
import './CardPizza.css'
import { useState } from 'react';

const cardStyle = {
  width: "30%" 
};

const verMasText = "Ver Más 👀";
const anadirText = "Añadir 🛒";

const CardPizza = ({ name, price, ingredients, img, description }) => {
  const [mostrarInfo, setMostrarInfo] = useState(false);

  const handleVerMas = () => {
    setMostrarInfo(!mostrarInfo);
  };

  return (
    <div className="card mb-4" style={cardStyle}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item text-center" style={{ fontSize: '1.2rem' }}>Ingredientes:</li> 
        <li className="list-group-item" style={{ fontSize: '0.9rem', listStyle: 'none' }}>🍕 
        {ingredients.map((elemento) => (
        <li key={elemento}>-{elemento}</li>
        ))} 
          <div className={`info-oculta ${mostrarInfo ? 'mostrar' : ''}`}>{description} </div>  
        </li>
        <li className="list-group-item text-center" style={{ fontSize: '1.5rem' }}><strong>Precio: ${price}</strong></li> 
      </ul>
      <div className="card-body d-flex justify-content-between align-items-center">
        <Link to="/pizza/p001" className="btn btn-light border-dark">{verMasText}</Link> 
        <a href="#" className="btn btn-dark">{anadirText}</a> 
      </div>
    </div>
  );
};

export default CardPizza;