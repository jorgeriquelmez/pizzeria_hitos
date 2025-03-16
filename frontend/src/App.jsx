import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Navbar, Footer, NotFound, Profile} from './component/index'
import {Home, Register, Login, Cart, Pizza} from './pages/'
import   CartProvider  from './store/CartContext';
import   HomeProvider  from './store/HomeContext';
import UserProvider from './store/UserContext';
import ProtectedRoute from './component/ProtectedRoute';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <HomeProvider>
            <UserProvider>
                <Navbar/> 
                <Routes>
                  <Route path='/' element={<Home />}/>
                  <Route path='/register' element={<Register />}/>
                  <Route path='/login' element={<Login />}/>
                  <Route path='/cart' element={<Cart />}/>
                  <Route path='/pizza/:pizzaId' element={<Pizza />}/>
                  <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>}/>
                  <Route path='*' element={<NotFound />}/>
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