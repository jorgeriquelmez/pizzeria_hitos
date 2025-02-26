import './Pizza.css'
import { useState, useEffect } from 'react';

const Pizza = () => {
    const [tarjetas, setTarjeta] = useState(null); 

    useEffect(() => {
        const obtenerTarjeta = async () => {
            const res = await fetch('http://localhost:5000/api/pizzas/p001');
            const data = await res.json();
            setTarjeta(data);
        };
        obtenerTarjeta();
    }, []);

    return (
        <div className="container1">
            <div className="row1">
                <div className="col1-md-12">
                    {tarjetas ? ( 
                        <div className="card1">
                            <img className="card1-img-top" src={tarjetas.img} alt={tarjetas.name} />
                            <div className="card1-body">
                                <h5 className="card1-title">{tarjetas.name}</h5>
                                <p className="card1-text">{tarjetas.desc}</p>
                                <ul className="list-group list-group-flush">
                                {tarjetas.ingredients.map((ingredient, index) => (
                                    <li className='espacio' key={index}>{ingredient}</li>
                                ))}
                                </ul>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <span className="font-weight-bold"><strong>${tarjetas.price}</strong></span>
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
 
