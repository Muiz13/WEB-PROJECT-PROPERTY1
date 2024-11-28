import React from 'react'
import propertyServices from '../../services/Service'


export default function AddPlotFormModel(props) {
    let initialForm={
        title:"",
        size:"",
        propertyType:"",
        link:"",
        price:"",
        description:"",
        scheme:"",
        sector:"",
        city:"",
        length:"",
        width:"",
        propertyTypeRentSale:"",
        plotNo:"",
    }

    let [form, setForm] = React.useState({})
    
    React.useEffect(()=>{
        if(props.update){
            setForm(props.plot)
        }
        else{
            setForm(initialForm)
        }
    },[props.update])

    const handleChange = (e) => {
        const { name, value, type } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData(document.getElementById("formID"))
        formData.append('category', 'plot')
        if(props.update){
            propertyServices.updateProperty(props.plot._id,formData,props.setPlots)
        }
        else{
            propertyServices.addProperty(formData,props.setPlots)
        }
        e.target.reset()
        resetForm()
        return false
    }
    const handleClosing=()=>{
        props.setUpdate(false)
        resetForm()
    }
    const bottomMarginStyle = {
        marginBottom: "5px"
    }
    const resetForm=()=>{
        setForm(initialForm)
    }
    return (
        <div>
            <div className="modal fade" id="plotFormModel" tabindex="-1" aria-labelledby="plotFormModelLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title text-center" id="plotFormModelLabel">{props.update?"Update": "Add"} Plot</h3>
                            <button type="button" className="btn-close" onClick={handleClosing} data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">


                            <div className='d-flex justify-content-center'>
                                <form className='' onSubmit={handleSubmit} id="formID" enctype="multipart/form-data">
                                    <div className=''>

                                        <h4 className='text-center text-light bg-primary  py-2'>Plot Information</h4>
                                        <div className="form-group py-2">
                                            <label style={bottomMarginStyle}>Title  </label>
                                            <input type="text" className="form-control" onChange={handleChange} name="title" placeholder="Title" value={form.title} required />
                                        </div>

                                        <div className="form-group">
                                            <label style={bottomMarginStyle}>Dimensions  </label>
                                            <div className="form-group py-2 d-flex justify-content-between">
                                                <input type="number" className="form-control" onChange={handleChange} name="length" placeholder="Length" value={form.length} required />
                                                <input type="number" className="form-control" onChange={handleChange} name="width" placeholder="Width" value={form.width} required />
                                            </div>
                                        </div>

                                        <div className="form-group py-2">
                                            <label style={bottomMarginStyle}>Plot Size  </label>
                                            <input type="number" className="form-control" onChange={handleChange} name="size" placeholder="Marla" value={form.size} required />
                                        </div>


                                        <div className='py-2'>
                                            <label style={bottomMarginStyle}>Property Type</label>
                                            <div>
                                                <select className="custom-select" name='propertyType' onChange={handleChange} value={form.propertyType}>
                                                    <option selected>-- Select --</option>
                                                    <option value="commercial">Commercial</option>
                                                    <option value="residential">Residential</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className='py-2'>
                                            <label style={bottomMarginStyle}>Property Type</label>
                                            <div className='d-flex justify-content-start'>
                                                <div className="form-check px-4" >
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
                                                <input type="text" className="form-control" onChange={handleChange} name="link" placeholder="Location Link" value={form.link}/>
                                            </div>
                                        </div>

                                        <div className="form-group py-2">
                                            <label style={bottomMarginStyle}>Price (PKR)  </label>
                                            <input type="text" className="form-control" onChange={handleChange} name="price" placeholder="Price" value={form.price} required />
                                        </div>

                                        <div className="custom-file py-1">
                                            <input type="file" className="custom-file-input" id="file" name="file" multiple />
                                            <label className="custom-file-label" for="file">Choose file</label>
                                        </div>
                                    </div>
                                    <div className="form-group py-2">
                                        <label style={bottomMarginStyle}>Description  </label>
                                        <textarea className="form-control" onChange={handleChange} name="description" placeholder="Description" rows="3" value={form.description} ></textarea>
                                    </div>

                                    <div>
                                        <h4 className='text-center text-light bg-dark my-3 py-2'>Plot Address</h4>

                                        <div className="form-group py-2 d-flex justify-content-between">
                                            <input type="text" className="form-control" onChange={handleChange} name="plotNo" placeholder="Plot No" value={form.plotNo} />
                                        </div>


                                        <div className="form-group py-2 d-flex justify-content-between">
                                            <input type="text" className="form-control" onChange={handleChange} name="scheme" placeholder="Scheme" required value={form.scheme} />
                                        </div>

                                        <div className="form-group py-2">
                                            <input type="text" className="form-control" onChange={handleChange} name="city" placeholder="City" value={form.city} required />
                                        </div>


                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <button type='button' className='btn btn-secondary' onClick={resetForm}>Reset</button>
                                        <button type='submit' className='btn btn-primary'>{props.update?"Update":"Save"}</button>
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
