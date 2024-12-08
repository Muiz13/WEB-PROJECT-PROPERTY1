import React from 'react'

export default function PropertyItem(props) {
  const update = () => {
    props.setMap({...props})
    props.setUpdate(true)
  }
  const deleteMap=()=>{
    if(window.confirm("You cannot undo this deletion.Do you wish to delete this Map?")){
      props.deleteMap(props._id)
    }
  }
  const openInOtherTab = () => {
    window.open(props.file, "_blank")
  }


  return (
    <div className="card my-3 rounded mx-1" style={{ width: "18rem", cursor: "pointer" }} >
      <div className="card-body">
        <div onClick={openInOtherTab} >
          <h5 className="card-title text-center">{props.title}</h5>
          <img src={props.file} className="card-img-bottom" alt="..." style={{width:"100%" ,height:"150px"}}/>
          <h5 className='my-2 card-text'>Description</h5>
          <pre className="card-text">{props.description}</pre>
        </div>
        <div className='d-flex justify-content-end my-4'>
        <a href={props.link} target="_blank"><button className='btn btn-primary btn-sm'>Location</button></a>                    
         
          <button className='btn btn-danger btn-sm' onClick={deleteMap}>Delete</button>
          <button className='btn btn-primary btn-sm' onClick={update} data-bs-toggle="modal" data-bs-target="#mapFormModel">Update</button>

        </div>
      </div>
    </div>
  )
}
