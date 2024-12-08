import React from 'react'
import Services from '../../services/Service'

export default function AddMapFormModel(props) {
    const URL = "http://localhost:3005/maps"

    let [form, setForm] = React.useState({})
    let initialForm = {
        title: "",
        link: "",
        description: "",
        file: ""
    }
    React.useEffect(() => {
        if (props.update) {
            console.log("UPDATE form", props.map)
            setForm(props.map)
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
            Services.updateMap(props.map._id,formData, props.setMaps)
        }
        else {
            Services.addMap(formData, props.setMaps)
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
            <div className="modal fade" id="mapFormModel" tabIndex="-1" aria-labelledby="mapFormModelLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title text-center" id="mapFormModelLabel">{props.update ? "Update" : "Add"} Map</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClosing}></button>
                        </div>
                        <div className="modal-body">

                            <div className='d-flex justify-content-center'>
                                <form className='' onSubmit={handleSubmit} id="formID" enctype="multipart/form-data">
                                    <div className=''>
                                        <h4 className='text-center text-light bg-primary  py-2'>Map Information</h4>
                                        <div className="form-group py-2">
                                            <label style={bottomMarginStyle}>Map Title  </label>
                                            <input type="text" className="form-control" onChange={handleChange} name="title" placeholder="Map Title" value={form.title} required />
                                        </div>

                                        <div className="form-group py-2">
                                            <label style={bottomMarginStyle}>Coordinates  </label>
                                            <input className="form-control" onChange={handleChange} name="link" placeholder="Location Link" value={form.link}></input>
                                        </div>
                                        <div className="form-group py-2">
                                            <label style={bottomMarginStyle}>Description  </label>
                                            <textarea className="form-control" onChange={handleChange} name="description" placeholder="Description" rows="3" value={form.description}></textarea>
                                        </div>

                                        <div className="input-group mb-3">
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



































// import React from 'react'
// import Services from '../../services/Service'

// export default function AddMapFormModel(props) {
//     const URL="http://localhost:3005/maps"

//     let [form, setForm] = React.useState({})
//     let initialForm={
//         title:"",
//         link:"",
//         description:""
//     }
//     React.useEffect(()=>{
//         if(props.update){
//             console.log("UPDATE form",props.map)
//             setForm(props.map)
//         }
//         else{
//             resetForm()
//         }
//     },[props.update])

//     const handleChange = (e) => {
//         const { name, value, type } = e.target
//         setForm({
//             ...form,
//             [name]: value
//         })
//     }
//     console.log(form)

//     const handleSubmit=(e)=>{
//         e.preventDefault()
//         const data={
//             ...form,
//         }
//         console.log(data)
//         if(props.update){
//             Services.updateMap(data,props.setMaps)
//         }
//         else{
//             Services.addMap(data,props.setMaps)
//         }
//         e.target.reset()
//         resetForm()
//         return false
//     }
//     const resetForm=()=>{
//         setForm(initialForm)
//     }
//     const handleClosing=()=>{
//         props.setUpdate(false)
//         console.log(document.getElementById("formID"))
//         document.getElementById("formID").reset()
//     }
//     const bottomMarginStyle = {
//         marginBottom: "5px"
//     }
//     return (
//         <div>
//             <div className="modal fade" id="mapFormModel" tabIndex="-1" aria-labelledby="mapFormModelLabel" aria-hidden="true">
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h3 className="modal-title text-center" id="mapFormModelLabel">{props.update?"Update":"Add"} Map</h3>
//                             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClosing}></button>
//                         </div>
//                         <div className="modal-body">

//                             <div className='d-flex justify-content-center'>
//                                 <form className='' onSubmit={handleSubmit} id="formID" action={URL} encType="multipart/form-data" method="post">
//                                     <div className=''>
//                                         <h4 className='text-center text-light bg-dark  py-2'>Map Information</h4>
//                                         <div className="form-group py-2">
//                                             <label style={bottomMarginStyle}>Map Title  </label>
//                                             <input type="text" className="form-control" onChange={handleChange} name="title" placeholder="Map Title" value={form.title} required />
//                                         </div>

//                                         <div className="form-group py-2">
//                                             <label style={bottomMarginStyle}>Coordinates  </label>
//                                             <input className="form-control" onChange={handleChange} name="link" placeholder="Location Link"  required value={form.link}></input>
//                                         </div>
//                                         <div className="form-group py-2">
//                                             <label style={bottomMarginStyle}>Description  </label>
//                                             <textarea className="form-control" onChange={handleChange} name="description" placeholder="Description" rows="3" required value={form.description}></textarea>
//                                         </div>

//                                         <div className="input-group mb-3">
//                                             <div className="input-group-prepend">
//                                                 <span className="input-group-text">Upload</span>
//                                             </div>
//                                             <div className="custom-file py-1">
//                                                 <input type="file" className="custom-file-input" id="file" name="file" />
//                                                     <label className="custom-file-label" for="file">Choose file</label>
//                                             </div>
//                                         </div>

//                                     </div>

//                                     <div className='d-flex justify-content-end'>
//                                         <button type='button' className='btn btn-secondary' onClick={resetForm}>Reset</button>
//                                         <button type='submit' className='btn btn-primary'>{props.update ? "Update": "Save"}</button>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
