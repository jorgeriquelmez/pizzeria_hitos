import { useState } from 'react';
import './Register.css';
import Swal from 'sweetalert2'

const Register = () => {
    const [users, setUsers] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password, confirmPassword } = users;

        if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
            // alert('Por favor, todos los campos deben estar llenos');
            Swal.fire({
                title: "Hey!",
                text: "Todos los campos deben estar llenos",
                icon: "warning"
              });
            return; 
        }

        if (password.length < 6) { 
            // alert('La contraseña debe tener al menos 6 caracteres');
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Algo salió mal!",
                footer: "La contraseña debe ser minimo de 6 caracteres"
              });
            return; 
        }

        if (password !== confirmPassword) {
            // alert('Las contraseñas no coinciden');
            Swal.fire({
                title: "Hey!",
                text: "Las contraseñas no coinciden",
                icon: "warning"
              });
            return; 
        }

        // alert ('Registro exitoso')
        Swal.fire({
           title: "Login exitoso",
           text: "Bienvenido",
           icon: "success"
         });
        setUsers({email:'', password:'', confirmPassword:''})
        // Aquí iría la lógica para enviar los datos al servidor
    };

    return (
        <div className="register">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h2 className="text-center">Register</h2>
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
                                <div className="mb-3">
                                    <label htmlFor="confirmPassword" className="form-label">Repeat Password</label> 
                                    <input
                                        type='password'
                                        name='confirmPassword'  
                                        value={users.confirmPassword}
                                        onChange={handleChange}
                                        className="form-control"
                                        placeholder="Confirm your password"
                                    />
                                </div>
                                <div className="d-grid gap-2">
                                    <button 
                                    type="submit" 
                                    className="btn btn-primary"
                                    // disabled={!users.email || !users.password || !users.confirmPassword}
                                    >
                                        Create Register
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;