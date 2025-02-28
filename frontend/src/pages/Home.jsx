// import Header from "./component/Header"
import { useState, useEffect } from 'react';
import './Home.css'
import CardPizza from "../component/CardPizza";
import Header from "../component/Header";
// import {pizzas} from '../../data/pizzas.js'


const Home = () => {

  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const obtenerPizzas = async () => {
      const res = await fetch('http://localhost:5000/api/pizzas')
      const data = await res.json()
      setPizzas(data)
    }
    obtenerPizzas()
  }, []);

  
  return (
    <>
    <Header/>
    <div className="pizzas">
      {pizzas.map((pizza) => (
        <CardPizza
          key={pizza.id}
          name={pizza.name}
          price={pizza.price}
          ingredients={pizza.ingredients}
          img={pizza.img}
          description={pizza.desc}
          />
       )) }
    </div>
    </>
  );
};

export default Home;