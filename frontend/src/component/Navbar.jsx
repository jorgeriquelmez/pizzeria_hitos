import './Navbar.css';
// import Cart from './Cart'
import {Link , NavLink, useNavigate} from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../store/CartContext';
import { UserContext } from '../store/UserContext';

const Navbar = () => {
    const validateRoot = ({isActive}) => isActive ? 'menu-active' : 'menu'
    //const total = 25000;
    const { total } = useContext(CartContext)
    //const token = true;
    const { token, handleSetTokenFalse, setUser } = useContext(UserContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        handleSetTokenFalse();
        setUser({ email: '', password: '' });
        navigate('/login');
      };
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/">Pizzería Mamma Mia!</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav flex-grow-1">
                        <li className="nav-item">
                            <NavLink 
                                className={`nav-link ${validateRoot}`} 
                                to="/" 
                                
                            >🍕Home</NavLink>
                            
                        </li>
                        {token ? (
                            <>

                                <li className={`${validateRoot}`}>
                                    <NavLink className="nav-link" to="/profile">🔓Profile</NavLink>
                                </li>
                                <li className={`${validateRoot}`}>
                                    <button className="nav-link" onClick={handleLogout} to='/'>🔒Logout</button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <NavLink 
                                        className={`nav-link ${validateRoot}`} 
                                        to="/login" 
                                        
                                    >
                                        🔐Login
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink 
                                        className={`nav-link ${validateRoot}`}
                                        to="/register" 
                                        
                                    >
                                        🔐Register
                                    </NavLink>
                                </li>
                            </>
                        )}

                        <li className="nav-item ms-auto">
                            <Link 
                                className={`nav-link `} 
                                id='carrito' 
                                to="/cart"
                                
                                >🛒Total:${total.toLocaleString()}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;