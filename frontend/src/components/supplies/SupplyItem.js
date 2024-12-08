import React from 'react'

export default function SupplyItem(props) {
  const update = () => {
    props.setSupply({ ...props })
    props.setUpdate(true)
  }
  const deleteSupply = () => {
    if (window.confirm("You cannot undo this deletion.Do you wish to delete this Supply?")) {
      props.deleteSupply(props._id)
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
          <img src={props.file} className="card-img-bottom" alt="..." style={{ width: "100%", height: "150px" }} />
        </div>
        <div className='d-flex justify-content-end my-4'>
          <button className='btn btn-danger btn-sm' onClick={deleteSupply}>Delete</button>
          <button className='btn btn-primary btn-sm' onClick={update} data-bs-toggle="modal" data-bs-target="#supplyFormModel">Update</button>
        </div>
      </div>
    </div>
  )
}
