import React, { useState } from 'react';
import axios from 'axios';
import Services from '../services/Service'


function UpdatePassword() {
    if (!Services.isAuthenticated()) {
        window.location = "./"
    }

    const [data, setData] = useState({
        oldPassword: '',
        newUsername: '',
        newPassword: '',
        
    });

    React.useEffect(() => {
        document.title = "Admin Change Password"
    }, [])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    console.log(data)
    const handleSubmit = (e) => {
        e.preventDefault();
        let formData= new FormData(document.getElementById("formID"))        
        Services.updatePassword(formData)
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Admin Change Password</h2>
                            <form id='formID' onSubmit={handleSubmit}  enctype="multipart/form-data">
                            <div className="mb-3">
                                    <label htmlFor="oldPassword" className="form-label">Old Password:</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="oldPassword"
                                        name="oldPassword"
                                        value={data.oldPassword}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>


                                <div className="mb-3">
                                    <label htmlFor="newUsername" className="form-label">New Username:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="newUsername"
                                        name="newUsername"
                                        value={data.newUsername}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="newPassword" className="form-label">New Password:</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="newPassword"
                                        name="newPassword"
                                        value={data.newPassword}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className=''>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary">Update</button>
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

export default UpdatePassword;
