import React from 'react'
import mountpakistan from '../../image resources/mountpakistan.jpg'

export default function Header() {

    const styles = {
        marginTop: '10px',
        padding: '20px',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage: `url(${mountpakistan})`
    }
    return (
        <div>
            <div className="d-flex justify-content-center text-center bg-dark text-light" style={styles}>
                <div className="d-flex flex-column">
                    <div>
                        <h1 style={{color:"gold"}}>Add New Property</h1>
                    </div>
                    <div>
                        <div className="d-flex flex-row justify-content-center">
                            <button className="btn  btn-outline-warning fs-4"data-bs-toggle="modal" data-bs-target="#projectFormModel" >Project</button>
                            <button className="btn btn-outline-warning fs-4" data-bs-toggle="modal" data-bs-target="#plotFormModel">Plot</button>
                            <button className="btn btn-outline-warning fs-4" data-bs-toggle="modal" data-bs-target="#houseFormModel">House</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
