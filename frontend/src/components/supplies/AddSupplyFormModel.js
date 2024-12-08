import React from 'react'
import Services from '../../services/Service'

export default function AddSupplyFormModel(props) {
    

    let [form, setForm] = React.useState({})
    let initialForm = {
        title: "",
        file: ""
    }
    React.useEffect(() => {
        if (props.update) {
            console.log("UPDATE form", props.supply)
            setForm(props.supply)
        }
        else {
            resetForm()
        }
    }, [props.update])

    const handleChange = (e) => {
        const { name, value, type, files } = e.target
        if (type == "file") {
            console.log(files)
            setForm({
                ...form,
                [name]: files
            })

        } else {
            setForm({
                ...form,
                [name]: value
            })

        }
    }
    console.log(form)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Just before sending in function",form)
        const data = {
            ...form,
        }
        let formData= new FormData(document.getElementById("formID"))        
        if (props.update) {
            Services.updateSupply(props.supply._id,formData, props.setSupplies)
        }
        else {
            Services.addSupply(formData, props.setSupplies)
        }
        e.target.reset()
        resetForm()
        return false
    }
    const resetForm = () => {
        setForm(initialForm)
    }
    const handleClosing = () => {
        props.setUpdate(false)
        console.log(document.getElementById("formID"))
        document.getElementById("formID").reset()
    }
    const bottomMarginStyle = {
        marginBottom: "5px"
    }
    return (
        <div>
            <div className="modal fade" id="supplyFormModel" tabIndex="-1" aria-labelledby="supplyFormModelLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title text-center" id="supplyFormModelLabel">{props.update ? "Update" : "Add"} Supply</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClosing}></button>
                        </div>
                        <div className="modal-body">

                            <div className='d-flex justify-content-center'>
                                <form className='' onSubmit={handleSubmit} id="formID" enctype="multipart/form-data">
                                    <div className=''>
                                        <h4 className='text-center text-light bg-primary  py-2'>Supply Information</h4>
                                        <div className="form-group py-2">
                                            <label style={bottomMarginStyle}>Supply Title  </label>
                                            <input type="text" className="form-control" onChange={handleChange} name="title" placeholder="Supply Title" value={form.title} required />
                                        </div>

                                        <div className="input-group mb-3 my-2">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">Upload</span>
                                            </div>
                                            <div className="custom-file py-1">
                                                <input type="file" className="custom-file-input" id="file" accept='image/png; image/jpg' name="file" onChange={handleChange}  />
                                                <label className="custom-file-label" for="file">Choose file</label>
                                            </div>
                                        </div>

                                    </div>

                                    <div className='d-flex justify-content-end'>
                                        <button type='button' className='btn btn-secondary' onClick={resetForm}>Reset</button>
                                        <button type='submit' className='btn btn-primary'>{props.update ? "Update" : "Save"}</button>
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




























