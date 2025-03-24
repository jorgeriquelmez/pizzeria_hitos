import  { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    }, [token]);

    const handleSetTokenFalse = () => {
        setToken(false);
    };

    const getProfile = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/auth/me', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setUser(response.data);
        } catch (error) {
            console.error('Error getting profile:', error);
            setUser(null);
        }
    };

    const login = async (email, password) => {
        try {
            const URL = 'http://localhost:5000/api/auth/login';
            const payload = { email, password };
            const response = await axios.post(URL, payload);
            const userData = response.data;

            if (userData && userData.email && userData.token) {
                setToken(userData.token);
                localStorage.setItem('token', userData.token);
                setUser({ email: userData.email, password });
                Swal.fire({
                    title: "Login exitoso",
                    text: `Bienvenido ${userData.email}`,
                    icon: "success"
                });
                navigate('/profile');
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Credenciales incorrectas"
                });
            }
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Error al iniciar sesión"
            });
        }
    };

    const register = async (email, password, confirmPassword) => { // Agrega la función de registro
        if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
            Swal.fire({
                title: 'Hey!',
                text: 'Todos los campos deben estar llenos',
                icon: 'warning',
            });
            return;
        }

        if (password.length < 6) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salió mal!',
                footer: 'La contraseña debe ser mínimo de 6 caracteres',
            });
            return;
        }

        if (password !== confirmPassword) {
            Swal.fire({
                title: 'Hey!',
                text: 'Las contraseñas no coinciden',
                icon: 'warning',
            });
            return;
        }

        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', {
                email,
                password,
            });
            console.log(res)
            Swal.fire({
                title: 'Registro exitoso',
                text: 'Usuario registrado correctamente',
                icon: 'success',
            });
            navigate('/login');
        } catch (error) {
            console.error('Error al registrar', error);
            Swal.fire({
                title: 'Error en el registro',
                text: 'Hubo un problema al registrar el usuario',
                icon: 'error',
            });
        }
    };

    return (
        <UserContext.Provider value={{ token, setToken, handleSetTokenFalse, user, setUser, getProfile, login, register }}> 
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;