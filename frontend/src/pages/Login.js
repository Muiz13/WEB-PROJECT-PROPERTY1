import React, { useState } from 'react';
import axios from 'axios';
import Services from '../services/Service'


function LogIn() {
    if (Services.isAuthenticated()) {
        window.location = "./"
    }

    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });

    React.useEffect(() => {
        document.title = "Admin Login"
    }, [])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Services.loginAdmin(loginData)
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Admin Login</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        name="username"
                                        value={loginData.username}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password:</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        value={loginData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className=''>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary">Login</button>
                                    </div>
                                    
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogIn;
