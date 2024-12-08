import React from 'react'
import MapsComponent from "../components/maps/Maps"
import { Link } from "react-router-dom";
import Services from '../services/Service'

export default function Maps() {
    if(!Services.isAuthenticated()){
        window.location="./login"   
    }
    const [maps, setMaps] = React.useState([])

    React.useEffect(()=>{
        Services.getAllMaps(setMaps)
        document.title="Manage Maps"

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
                            <button className="btn btn-primary btn-sm fs-4 my-2" data-bs-toggle="modal" data-bs-target="#mapFormModel">New Map</button>
                        </div>
                    </div>
                </div>
            </div>
            <MapsComponent maps={maps} setMaps={setMaps}/>
        </div>
    )
}
