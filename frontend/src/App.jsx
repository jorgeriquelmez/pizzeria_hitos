import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Navbar, Footer, NotFound, Profile} from './component/index'
import {Home, Register, Login, Cart, Pizza} from './pages/'
import   CartProvider  from './store/CartContext';
import   HomeProvider  from './store/HomeContext';
import UserProvider from './store/UserContext';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <HomeProvider>
            <UserProvider>
            <Navbar/> 
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/register' element={<Register />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/cart' element={<Cart />}></Route>
              <Route path='/pizza/:pizzaId' element={<Pizza />}></Route>
              <Route path='/profile' element={<Profile />}></Route>
              <Route path='*' element={<NotFound />}></Route>
            </Routes>
            <Footer />
          </UserProvider> 
          </HomeProvider>
        </CartProvider>
       
      </BrowserRouter>
    </>
  );
};

export default App;