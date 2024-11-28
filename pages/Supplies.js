import React from 'react'
import SuppliesComponent from "../components/supplies/Supplies"
import { Link } from "react-router-dom";
import Services from '../services/Service'

export default function Supplies() {
    if(!Services.isAuthenticated()){
        window.location="./login"   
    }
    const [supplies, setSupplies] = React.useState([])

    React.useEffect(()=>{
        Services.getAllSupplies(setSupplies)
        document.title="Manage Supplies"

    },[])
    const styles = {
        marginTop: '10px',
        padding: '50px',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/new/slides/003.webp")'
    }
    const styleOpacity = {
        opacity: "0.8"
    }
    return (
        <div>
            <div className="d-flex justify-content-center text-center bg-dark text-light" style={styles}>
                <div className="d-flex ">
                    <div>
                        <div className="d-flex flex-row justify-content-center">
                            <button className="btn btn-primary btn-sm fs-4 my-2" data-bs-toggle="modal" data-bs-target="#supplyFormModel">New Supply</button>
                        </div>
                    </div>
                </div>
            </div>
            <SuppliesComponent supplies={supplies} setSupplies={setSupplies}/>
        </div>
    )
}
