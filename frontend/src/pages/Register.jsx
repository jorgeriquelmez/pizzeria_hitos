import { useState, useContext } from 'react';
import './Register.css';
import { UserContext } from '../store/UserContext'; 

const Register = () => {
    const [users, setUsers] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const { register } = useContext(UserContext);

    const handleChange = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        register(users.email, users.password, users.confirmPassword); 
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
                                        type="email"
                                        name="email"
                                        value={users.email}
                                        onChange={handleChange}
                                        className="form-control"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={users.password}
                                        onChange={handleChange}
                                        className="form-control"
                                        placeholder="Enter your password"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="confirmPassword" className="form-label">
                                        Repeat Password
                                    </label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={users.confirmPassword}
                                        onChange={handleChange}
                                        className="form-control"
                                        placeholder="Confirm your password"
                                        required
                                    />
                                </div>
                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-primary">
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