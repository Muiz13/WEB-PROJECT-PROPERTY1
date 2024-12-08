import React from 'react'

export default function PropertyItem(props) {
  const openInOtherTab = () => {
    window.open(props.file, "_blank")
  }

  return (
    <div className="card my-3 rounded mx-1" style={{ width: "18rem", cursor: "pointer" }} >
      <div className="card-body">
        <div onClick={openInOtherTab}>
          <h5 className="card-title text-center">{props.title}</h5>
          <img src={props.file} className="card-img-bottom" alt="..." style={{ width: "100%", height: "150px" }} />
          {props.description ?
            <pre className="card-text my-3">
              <h5>Description</h5><br />
              {props.description}
            </pre>
            : ''}
        </div>
        <div className='d-flex justify-content-end my-4'>
          <a href={props.link} target="_blank"><button className='btn btn-primary btn-sm'>Location</button></a>
        </div>

      </div>
    </div>
  )
}
