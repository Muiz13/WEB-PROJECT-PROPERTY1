import React from 'react'
import propertyServices from '../../services/Service'

export default function AddHouseFormModel(props) {
    let [form, setForm] = React.useState({})
    let [sellers, setSellers] = React.useState([])
    let initialForm = {
        title: "",
        size: "",
        propertyType: "",
        link: "",
        price: "",
        description: "",
        scheme: "",
        sector: "",
        city: "",
        length: "",
        width: "",
        propertyTypeRentSale: "",
        noBedrooms: "",
        houseNo: "",
        streetNo: "",
        propertySubType:"",
        seller: ""
    }
    const handleChange = (e) => {
        const { name, value, type } = e.target;
        
        // Handle numeric fields
        if (type === 'number') {
            // If value is negative or not a number, don't update
            if (value < 0 || isNaN(value)) {
                return;
            }
        }

        setForm({
            ...form,
            [name]: value
        });
    };
    console.log(form)
    React.useEffect(() => {
        if (props.update) {
            setForm(props.house)
        }
        else {
            resetForm()
        }
    }, [props.update])

    React.useEffect(() => {
        console.log("Fetching sellers...");
        propertyServices.getSellers()
            .then(sellersData => {
                console.log("Raw sellers data received:", sellersData);
                setSellers(sellersData);
                console.log("Sellers state updated:", sellersData);
            })
            .catch(error => {
                console.error('Error fetching sellers:', error);
            });
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData(document.getElementById("formID"))
        formData.append('category', 'house')
        if (props.update) {
            propertyServices.updateProperty(props.house._id,formData, props.setHouses)
        }
        else {
            propertyServices.addProperty(formData, props.setHouses)
        }
        e.target.reset()
        resetForm()
        return false
    }
    
    const bottomMarginStyle = {
        marginBottom: "5px"
    }
    const handleClosing = () => {
        props.setUpdate(false)
        resetForm()
    }
    const resetForm = () => {
        setForm(initialForm)
    }
    return (
        <div>
            <div className="modal fade" id="houseFormModel" tabindex="-1" aria-labelledby="houseFormModelLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title text-center" id="houseFormModelLabel">{props.update ? "Update" : "Add"} Home</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={handleClosing} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">


                            <div className='d-flex justify-content-center'>
                                <form className='' onSubmit={handleSubmit} id="formID" enctype="multipart/form-data">
                                    <div className=''>
                                        <h4 className='text-center text-light bg-primary  py-2'>Home Information</h4>
                                        <div className="form-group py-2">
                                            <label style={bottomMarginStyle}>Title  </label>
                                            <input type="text" className="form-control" onChange={handleChange} name="title" placeholder="Title" value={form.title} required />
                                        </div>

                                        <div className="form-group">
                                            <label style={bottomMarginStyle}>Dimensions  </label>
                                            <div className="form-group py-2 d-flex justify-content-between">
                                                <input 
                                                    type="number" 
                                                    className="form-control" 
                                                    onChange={handleChange} 
                                                    name="length" 
                                                    placeholder="Length" 
                                                    value={form.length} 
                                                    min="0"
                                                    onKeyDown={(e) => {
                                                        if (e.key === '-' || e.key === 'e') {
                                                            e.preventDefault();
                                                        }
                                                    }}
                                                    required 
                                                />
                                                <input 
                                                    type="number" 
                                                    className="form-control" 
                                                    onChange={handleChange} 
                                                    name="width" 
                                                    placeholder="Width" 
                                                    value={form.width} 
                                                    min="0"
                                                    onKeyDown={(e) => {
                                                        if (e.key === '-' || e.key === 'e') {
                                                            e.preventDefault();
                                                        }
                                                    }}
                                                    required 
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group py-2">
                                            <label style={bottomMarginStyle}>Bedrooms  </label>
                                            <input type="number" className="form-control" onChange={handleChange} name="noBedrooms" placeholder="Number of Bedrooms" value={form.noBedrooms} />
                                        </div>


                                        <div className="form-group py-2">
                                            <label style={bottomMarginStyle}>Home Size  </label>
                                            <input type="number" className="form-control" onChange={handleChange} name="size" placeholder="Marla" value={form.size} required />
                                        </div>

                                        <div className='py-2 '>
                                            <label style={bottomMarginStyle}>Property Type</label>
                                            <div className=''>
                                                <select className="custom-select" name='propertyType' onChange={handleChange} value={form.propertyType}>
                                                    <option selected>-- Property Type--</option>
                                                    <option value="commercial">Commercial</option>
                                                    <option value="residential">Residential</option>
                                                </select>
                                                {
                                                    form.propertyType && form.propertyType.length > 0 ?
                                                        form.propertyType == "commercial" ?
                                                            <select className="custom-select" name='propertySubType' onChange={handleChange} value={form.propertySubType}>
                                                                <option selected>-- Commercial Type--</option>
                                                                <option value="office">Office</option>
                                                                <option value="shop">Shop</option>
                                                            </select>
                                                            :
                                                            <select className="custom-select" name='propertySubType' onChange={handleChange} value={form.propertySubType}>
                                                                <option selected>-- Residential Type--</option>
                                                                <option value="apartment">Apartment</option>
                                                                <option value="house">Home</option>
                                                            </select>
                                                        : ''

                                                }


                                            </div>
                                        </div>



                                        <div className='py-2'>
                                            <label style={bottomMarginStyle}>Property Type</label>
                                            <div className='d-flex justify-content-start'>
                                                <div className="form-check px-4">
                                                    <input className="form-check-input" type="radio" name="propertyTypeRentSale" id="rent" onChange={handleChange} value="rent" required />
                                                    <label className="form-check-label" for="rent">
                                                        For Rent
                                                    </label>
                                                </div>
                                                <div className="form-check px-4">
                                                    <input className="form-check-input" type="radio" name="propertyTypeRentSale" id="sale" onChange={handleChange} value="sale" required />
                                                    <label className="form-check-label" for="sale">
                                                        For Sale
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group py-2">
                                            <label style={bottomMarginStyle}>Coordinates  </label>
                                            <div className="form-group py-2 d-flex justify-content-between">
                                                <input type="text" className="form-control" onChange={handleChange} name="link" placeholder="Location Link" value={form.link} />
                                            </div>
                                        </div>

                                        <div className="form-group py-2">
                                            <label style={bottomMarginStyle}>Price (PKR)  </label>
                                            <input type="text" className="form-control" onChange={handleChange} name="price" placeholder="Price" value={form.price} required />
                                        </div>

                                        <div className="form-group py-2">
                                            <label style={bottomMarginStyle}>Description  </label>
                                            <textarea className="form-control" onChange={handleChange} name="description" placeholder="Description" rows="5" value={form.description} ></textarea>
                                        </div>

                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">Upload</span>
                                            </div>
                                            <div className="custom-file py-1">
                                                <input type="file" className="custom-file-input" id="file" name="file" onChange={handleChange} multiple />
                                                <label className="custom-file-label" for="file">Choose file</label>
                                            </div>
                                        </div>

                                    </div>

                                    <div>
                                        <h4 className='text-center text-light bg-dark my-3 py-2'>House Address</h4>

                                        <div className="form-group py-2 d-flex justify-content-between">
                                            <input type="text" className="form-control" onChange={handleChange} name="houseNo" placeholder="House No" value={form.houseNo} />
                                            <input type="text" className="form-control" onChange={handleChange} name="streetNo" placeholder="Street No" value={form.streetNo} />
                                        </div>


                                        <div className="form-group py-2 d-flex justify-content-between">
                                            <input type="text" className="form-control" onChange={handleChange} name="scheme" placeholder="Scheme" value={form.scheme} required/>
                                        </div>

                                        <div className="form-group py-2">
                                            <input type="text" className="form-control" onChange={handleChange} name="city" placeholder="City" value={form.city} required />
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className='text-center text-light bg-dark my-3 py-2'>Seller Information</h4>
                                        
                                        <div className="form-group py-2">
                                            <label style={bottomMarginStyle}>Select Seller</label>
                                            {console.log("Rendering sellers dropdown with:", sellers)}
                                            <select 
                                                className="form-control" 
                                                name="seller" 
                                                onChange={handleChange}
                                                value={form.seller}
                                                required
                                            >
                                                <option value="">-- Select Seller --</option>
                                                {sellers && sellers.map(seller => (
                                                    <option key={seller._id} value={seller._id}>
                                                        {seller.name} - {seller.area} ({seller.contactInfo})
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className='d-flex justify-content-end'>
                                        <button type='button' className='btn btn-secondary' onClick={resetForm}>Reset</button>
                                        <button type='submit' className='btn btn-primary'>{props.update ? "Update" : "Save"} </button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
