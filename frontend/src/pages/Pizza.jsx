import './Pizza.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Importa useParams

const Pizza = () => {
  const { pizzaId } = useParams(); // Obtiene el pizzaId de la ruta
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const obtenerPizza = async () => {
      const res = await fetch(`http://localhost:5000/api/pizzas/${pizzaId}`); // Usa pizzaId en la URL
      const data = await res.json();
      setPizza(data);
    };
    obtenerPizza();
  }, [pizzaId]); // Agrega pizzaId como dependencia

  return (
    <div className="container1">
      <div className="row1">
        <div className="col1-md-12">
          {pizza ? (
            <div className="card1">
              <img className="card1-img-top" src={pizza.img} alt={pizza.name} />
              <div className="card1-body">
                <h5 className="card1-title">{pizza.name}</h5>
                <p className="card1-text">{pizza.desc}</p>
                <ul className="list-group list-group-flush">
                  {pizza.ingredients.map((ingredient, index) => (
                    <li className='espacio' key={index}>{ingredient}</li>
                  ))}
                </ul>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="font-weight-bold"><strong>${pizza.price}</strong></span>
                  <button className="btn btn-primary">Añadir</button>
                </div>
              </div>
            </div>
          ) : (
            <p>Cargando información de la pizza...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pizza;