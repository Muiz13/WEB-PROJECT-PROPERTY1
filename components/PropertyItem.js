import React from 'react'
import { Link } from "react-router-dom";
import addCommas from "./Commas"

export default function PropertyItem(props) {

    const { category } = props
    const openProperty=()=>{
        window.location="/properties/" + props._id + "#top"
    }
    const body = () => {
        let comp = ''

        if (category == "project") {
            comp =
                <div >
                    <h5 className="card-title">{props.title}</h5>
                    <pre className="card-text">
                        {props.scheme + ", " + props.city} <br />
                    </pre>
                    {/* <Link to={"/properties/" + props._id + "#top"} className="btn btn-primary"  >More Information</Link> */}
                </div>
        } else {
            comp =
                <div>
                    <h5 className="card-title">{props.title}</h5>
                    <pre className="card-text">
                        <b>Size </b>{props.size} Marla {props.category}<br />
                        <b>Price </b>{addCommas(props.price)} PKR<br />
                        {props.scheme + ", " + props.city} <br />
                    </pre>
                </div>

        }

        return comp
    }
    return (
        <div className="card my-3 rounded mx-1 py-2" style={{ width: "18rem" ,cursor:"pointer"}}  onClick={openProperty} >
            <div
                style={{
                    display: 'flex',
                    position: 'absolute',
                    justifyContent: 'flex-end',
                    right: 0
                }}>
                <span className="badge rounded-pill bg-danger">{props.propertyTypeRentSale}</span>
            </div>
            <div className='d-flex justify-content-center'>
                <div >
                    <img src={props.file[0]} className="card-img-top" alt="..." style={{ height: "200px", width: "100%" }} />
                </div>
            </div>

            <div className="card-body">
                {body()}

            </div>

        </div>
    )
}
