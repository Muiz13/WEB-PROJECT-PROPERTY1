import React from 'react'
import propertyServices from '../../services/Service'

export default function AddProjectFormModel(props) {

    let [form, setForm] = React.useState({})

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
        projectNo: "",
        projectName: "",

    }

    const handleChange = (e) => {
        const { name, value, type } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }
    React.useEffect(() => {
        if (props.update) {
            setForm(props.project)
        }
        else {
            resetForm()
        }
    }, [props.update])

    const handleSubmit = (e) => {
        e.preventDefault()

        let formData = new FormData(document.getElementById("formID"))
        formData.append('category', 'project')
        if (props.update) {
            propertyServices.updateProperty(props.project._id, formData, props.setProjects)
        }
        else {
            propertyServices.addProperty(formData, props.setProjects)
        }
        e.target.reset()
        resetForm()
        return false
    }
    const handleClosing = () => {
        props.setUpdate(false)
        resetForm()
    }
    const bottomMarginStyle = {
        marginBottom: "5px"
    }
    const resetForm = () => {
        setForm(initialForm)
    }

    return (
        <div>
            <div className="modal fade" id="projectFormModel" tabindex="-1" aria-labelledby="projectFormModelLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title text-center" id="projectFormModelLabel">{props.update ? "Update" : "Add"} Project</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={handleClosing} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='d-flex justify-content-center'>
                                <form className='' onSubmit={handleSubmit} id="formID" enctype="multipart/form-data" >
                                    <div className=''>
                                        <h4 className='text-center text-light bg-primary  py-2'>Project Information</h4>
                                        <div className="form-group py-2">
                                            <label style={bottomMarginStyle}>Title  </label>
                                            <input type="text" className="form-control" onChange={handleChange} name="title" placeholder="Title" value={form.title} required />
                                        </div>



                                        <div className="form-group py-2">
                                            <label style={bottomMarginStyle}>Coordinates  </label>
                                            <div className="form-group py-2 d-flex justify-content-between">
                                                <input type="text" className="form-control" onChange={handleChange} name="link" placeholder="Location Link" value={form.link} />
                                            </div>
                                        </div>

                                        <div className="form-group py-2">
                                            <label style={bottomMarginStyle}>Description  </label>
                                            <textarea className="form-control" onChange={handleChange} name="description" placeholder="Description" rows="3" value={form.description} required></textarea>
                                        </div>

                                        <div className="custom-file py-1">
                                            <input type="file" className="custom-file-input" id="file" name="file" multiple />
                                            <label className="custom-file-label" for="file">Choose file</label>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className='text-center text-light bg-dark my-3 py-2'>Project Address</h4>


                                        <div className="form-group py-2 d-flex justify-content-between">
                                            <input type="text" className="form-control" onChange={handleChange} name="scheme" placeholder="Scheme" value={form.scheme} />
                                        </div>

                                        <div className="form-group py-2">
                                            <input type="text" className="form-control" onChange={handleChange} name="city" placeholder="City" value={form.city} required />
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
