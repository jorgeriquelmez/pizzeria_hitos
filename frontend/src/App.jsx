import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Navbar, Footer, NotFound, Profile} from './component/index'
import {Home, Register, Login, Cart, Pizza} from './pages/'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/> 
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/pizza/p001' element={<Pizza />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;