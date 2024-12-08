import React from 'react'
import SuppliesComponent from "../components/Supplies"
import {Link} from "react-router-dom";
import Services from '../Services/Services'
import mountpakistan from '../images/mountainpakistan.jpg'



export default function Supplies() {
    const [supplies,setSupplies]=React.useState([])
    React.useEffect(()=>{
        document.title="Supplies"
        Services.getAllSupplies(setSupplies)
    },[])
    const styles = {
        marginTop: '10px',
        padding: '30px',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage: `url(${mountpakistan})`
    }
    const styleOpacity = {
        opacity: "0.8"
    }
    return (
        <div>
            <div className="d-flex justify-content-center text-center bg-dark text-light" style={styles}>
                <div className="d-flex flex-column">
                    <div>
                        <h1>Supplies</h1>
                    </div>
                    <div>
                        <div className="d-flex flex-row justify-content-center">
                            <Link className="nav-link link-light fs-5" to="/">Home</Link>
                            <Link className="nav-link link-light fs-5" to="/supplies">Supplies</Link>
                        </div>
                    </div>
                </div>
            </div>
            <SuppliesComponent supplies={supplies}/>            
        </div>
    )
}
