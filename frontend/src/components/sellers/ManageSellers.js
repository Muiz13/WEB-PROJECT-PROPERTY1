import React, { useState, useEffect } from 'react';
import propertyServices from '../../services/Service';

export default function ManageSellers() {
    const [sellers, setSellers] = useState([]);
    const [currentSeller, setCurrentSeller] = useState(null);
    const [form, setForm] = useState({
        name: '',
        area: '',
        contactInfo: '',
        description: '',
        rating: '',
        propertiesSold: ''
    });
    const [phoneError, setPhoneError] = useState('');
    const [propertiesSoldError, setPropertiesSoldError] = useState('');

    useEffect(() => {
        loadSellers();
    }, []);

    const loadSellers = () => {
        propertyServices.getSellers()
            .then(data => {
                setSellers(data);
            })
            .catch(error => console.error('Error loading sellers:', error));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        if (name === 'contactInfo') {
            // Remove any existing '+92' prefix and any non-digit characters
            let cleanNumber = value.replace(/^\+92/, '').replace(/\D/g, '');
            
            // If the user is trying to enter a number
            if (cleanNumber.length > 0) {
                // Check if the total length (including +92) would exceed 12
                if (cleanNumber.length > 10) { // 10 digits + '+92' = 12 characters
                    setPhoneError('Phone number should not exceed 12 characters (including +92)');
                    // Truncate the number to maintain valid length
                    cleanNumber = cleanNumber.slice(0, 10);
                } else {
                    setPhoneError('');
                }
                
                // Format with +92 prefix
                setForm(prevForm => ({
                    ...prevForm,
                    [name]: `+92${cleanNumber}`
                }));
            } else {
                // If the field is empty, just set it empty
                setForm(prevForm => ({
                    ...prevForm,
                    [name]: ''
                }));
                setPhoneError('');
            }
        } else if (name === 'propertiesSold') {
            // Convert to number and validate
            const numValue = parseInt(value);
            if (numValue < 0) {
                setPropertiesSoldError('Properties sold cannot be negative');
                // Don't update the form with negative value
                return;
            } else {
                setPropertiesSoldError('');
                setForm(prevForm => ({
                    ...prevForm,
                    [name]: value
                }));
            }
        } else {
            // Handle other fields normally
            setForm(prevForm => ({
                ...prevForm,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentSeller) {
            // Update existing seller
            propertyServices.updateSeller(currentSeller._id, form)
                .then(() => {
                    loadSellers();
                    resetForm();
                });
        } else {
            // Add new seller
            propertyServices.addSeller(form)
                .then(() => {
                    loadSellers();
                    resetForm();
                });
        }
    };

    const resetForm = () => {
        setForm({
            name: '',
            area: '',
            contactInfo: '',
            description: '',
            rating: '',
            propertiesSold: ''
        });
        setCurrentSeller(null);
    };

    const editSeller = (seller) => {
        setCurrentSeller(seller);
        setForm({
            name: seller.name,
            area: seller.area,
            contactInfo: seller.contactInfo,
            description: seller.description,
            rating: seller.rating,
            propertiesSold: seller.propertiesSold
        });
    };

    const deleteSeller = (sellerId) => {
        if (window.confirm('Are you sure you want to delete this seller?')) {
            propertyServices.deleteSeller(sellerId)
                .then(() => {
                    loadSellers();
                });
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">{currentSeller ? 'Update Seller' : 'Add New Seller'}</h2>
            
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Area</label>
                        <input
                            type="text"
                            className="form-control"
                            name="area"
                            value={form.area}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Contact Info</label>
                        <input
                            type="text"
                            className={`form-control ${phoneError ? 'is-invalid' : ''}`}
                            name="contactInfo"
                            value={form.contactInfo}
                            onChange={handleChange}
                            placeholder="+92XXXXXXXXXX"
                            required
                        />
                        {phoneError ? (
                            <div className="invalid-feedback">
                                {phoneError}
                            </div>
                        ) : (
                            <small className="text-muted">Number will automatically start with +92</small>
                        )}
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Rating</label>
                        <input
                            type="number"
                            className="form-control"
                            name="rating"
                            value={form.rating}
                            onChange={handleChange}
                            min="0"
                            max="5"
                            step="0.1"
                        />
                    </div>
                </div>

                <div className="mb-3">
                    <label className="form-label">Properties Sold</label>
                    <input
                        type="number"
                        className={`form-control ${propertiesSoldError ? 'is-invalid' : ''}`}
                        name="propertiesSold"
                        value={form.propertiesSold}
                        onChange={handleChange}
                        min="0"
                        onKeyDown={(e) => {
                            if (e.key === '-') {
                                e.preventDefault();
                            }
                        }}
                        required
                    />
                    {propertiesSoldError && (
                        <div className="invalid-feedback">
                            {propertiesSoldError}
                        </div>
                    )}
                </div>

                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        rows="3"
                    ></textarea>
                </div>

                <div className="mb-3">
                    <button type="submit" className="btn btn-primary me-2">
                        {currentSeller ? 'Update Seller' : 'Add Seller'}
                    </button>
                    {currentSeller && (
                        <button type="button" className="btn btn-secondary" onClick={resetForm}>
                            Cancel Edit
                        </button>
                    )}
                </div>
            </form>

            <h3>Sellers List</h3>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Area</th>
                            <th>Contact</th>
                            <th>Rating</th>
                            <th>Properties Sold</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sellers.map(seller => (
                            <tr key={seller._id}>
                                <td>{seller.name}</td>
                                <td>{seller.area}</td>
                                <td>{seller.contactInfo}</td>
                                <td>{seller.rating}</td>
                                <td>{seller.propertiesSold}</td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-primary me-2"
                                        onClick={() => editSeller(seller)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => deleteSeller(seller._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
} 