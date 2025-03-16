import { useState, useContext } from "react";
import './Login.css';
import Swal from 'sweetalert2';
import { UserContext } from "../store/UserContext"; // Importa UserContext
import { useNavigate } from "react-router-dom"; // Importa useNavigate

const Login = () => {
  const context = useContext(UserContext);
  console.log(context); // Verifica el valor del contexto
  const [users, setUsers] = useState({
    email: '',
    password: ''
  });

  const { setToken, setUser } = context; // Accede a setToken y setUser
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = users;

    if (!email.trim() || !password.trim()) {
      Swal.fire({
        title: "Hey!",
        text: "Todos los campos deben estar llenos",
        icon: "warning"
      });
      return;
    }

    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo salió mal!",
        footer: "La contraseña debe ser minimo de 6 caracteres"
      });
      return;
    }

    console.log(users); // Verifica los datos del formulario
    if (email === 'test@test.com' && password === '123123') {
      setToken(true); // Actualiza el token a true

      setUser({ email, password }); // Actualiza el estado del usuario
      Swal.fire({
        title: "Login exitoso",
        text: "Bienvenido",
        icon: "success"
      });
      navigate('/profile'); // Redirige a /profile
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Credenciales incorrectas"
      });
    }

    setUsers({ email: '', password: '' });
  };

  return (
    <div className="login">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h2 className="text-center">Login</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type='email'
                    name='email'
                    value={users.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type='password'
                    name='password'
                    value={users.password}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="d-grid gap-2">
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;