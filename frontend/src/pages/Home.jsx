import './Home.css';
import CardPizza from "../component/CardPizza";
import Header from "../component/Header";
import { useContext } from 'react';
import { HomeContext } from '../store/HomeContext';

const Home = () => {
  const { pizzas } = useContext(HomeContext);

  return (
    <>
      <Header />
      <div className="pizzas">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            id={pizza.id} // Asegurar que id se pase como prop
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            description={pizza.desc}
          />
        ))}
      </div>
    </>
  );
};

export default Home;