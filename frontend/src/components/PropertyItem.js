import React from 'react'
import addCommas from "./Commas"


export default function PropertyItem(props) {
    let category = props.category
    let targetModel;
    if (category == "plot") {
        targetModel = "#plotFormModel"
    }
    else if (category == "house") {
        targetModel = "#houseFormModel"
    }
    else if (category == "project") {
        targetModel = "#projectFormModel"
    }
    const handleUpdate = () => {
        props.setProperty({ ...props })
        props.setUpdate(true)

    }
    let address;
    if (category == "plot") {
        address = <>Plot No: {props.plotNo} <br /></>
    }
    else if (category == "house") {
        address = <>House No: {props.houseNo} , Street No: {props.streetNo}<br /></>
    }

    const deleteProperty = () => {
        if (window.confirm(`You cannot undo this deletion.Do you wish to delete this ${category}?`)) {
            props.deleteProperty({ ...props })
        }
    }
    const body = () => {
        let comp = '';
        if (category == 'house') {
            comp = <pre className="card-text">
                <b>Dimensions</b><br />Length: {props.length} , Width: {props.width}<br />
                <b>Home Size</b>: {props.size} Marla<br />
                <b>Type</b>: {props.propertyType} - {props.propertySubType}<br />
                {props.noBedrooms ?
                    <><b>Bedrooms: </b>{props.noBedrooms}<br /></>
                    :
                    ""
                }
                <b>For</b>: {props.propertyTypeRentSale == "sale" ? "Sale" : "Rent"} <br />
                <b>Price</b>: {addCommas(props.price)} PKR<br />
                <b>Address</b><br />
                {address}
                Scheme: {props.scheme} <br />
                City: {props.city} <br /><br />
                <b>Description:</b><br />
                {props.description}
            </pre>
        } else if (category == "plot") {
            comp = <pre className="card-text">
                <b>Dimensions</b><br />Length: {props.length} , Width: {props.width}<br />
                <b>Size</b>: {props.size} Marla<br />
                <b>Type</b>: {props.propertyType}<br />
                <b>For</b>: {props.propertyTypeRentSale == "sale" ? "Sale" : "Rent"} <br />
                <b>Price</b>: {addCommas(props.price)} PKR<br />
                <b>Address</b><br />
                {address}
                Scheme: {props.scheme} <br />
                City: {props.city} <br /><br />
                <b>Description:</b><br />
                {props.description}
            </pre>
        } else if (category == "project") {
            comp = <pre className="card-text">
                <b>Size</b>: {props.size} Marla<br />
                <b>Address</b><br />
                Scheme: {props.scheme}<br />
                City: {props.city} <br /><br />
                <b>Description:</b><br />
                {props.description}
            </pre>

        }
        return comp
    }
    const imageStyles = {
        overflowX: "auto",
        whiteSpace: "nowrap",
        display: "flex",
    }

    const images = () => {
        const comp = <div class="" style={imageStyles}>
            <div class="row">
                <div class="col-12">
                    <div class="scrolling-wrapper-flexbox" >
                        {props.file.map(p => <img src={p} class="img-fluid mx-1" style={{ height: "200px", width: "100%" }} />
                        )}
                    </div>
                </div>
            </div>
        </div>
        return comp
    }
    return (
        <div className="card my-3 rounded mx-1" style={{ width: "18rem" }}>
            <div
                style={{
                    display: 'flex',
                    position: 'absolute',
                    justifyContent: 'flex-end',
                    right: 0
                }}>
                {category == "project" ? "" : <span className="badge rounded-pill bg-danger">{props.propertyTypeRentSale == "sale" ? "Sale" : "Rent"}</span>
                }
            </div>
            <div className='d-flex justify-content-center'>
            {/* style={{ height: "200px", width: "100%" }} */}
                <div >
                    {images()}
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                {body()}
                <div className='d-flex justify-content-between'>
                    <a target="_blank" href={props.link} className='btn btn-primary btn-sm'>Location</a>
                    <div className='d-flex justify-content-end'>
                        <button type="button" className="btn btn-danger btn-sm" onClick={deleteProperty} >Delete</button>
                        <button type="button" className="btn btn-primary btn-sm" onClick={handleUpdate} data-bs-toggle="modal" data-bs-target={targetModel} >Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
