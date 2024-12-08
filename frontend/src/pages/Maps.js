import React from 'react'
import MapsComponent from "../components/Maps"
import {Link} from "react-router-dom";
import Services from '../Services/Services'



export default function Maps() {
    const [maps,setMaps]=React.useState([])
    React.useEffect(()=>{
        document.title="Maps"
        Services.getAllMaps(setMaps)
    },[])
    const styles = {
        marginTop: '10px',
        padding: '30px',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage: 'url("https://ak8.picdn.net/shutterstock/videos/26532368/thumb/1.jpg")'
    }
    const styleOpacity = {
        opacity: "0.8"
    }
    return (
        <div>
            <div className="d-flex justify-content-center text-center bg-dark text-light" style={styles}>
                <div className="d-flex flex-column">
                    <div>
                        <h1>Maps</h1>
                    </div>
                    <div>
                        <div className="d-flex flex-row justify-content-center">
                            <Link className="nav-link link-light fs-5" to="/">Home</Link>
                            <Link className="nav-link link-light fs-5" to="/maps">Maps</Link>
                        </div>
                    </div>
                </div>
            </div>
            <MapsComponent maps={maps}/>            
        </div>
    )
}
