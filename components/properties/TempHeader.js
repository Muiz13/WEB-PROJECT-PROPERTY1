import React from 'react'

export default function TempHeader(props) {

    const styles = {
        marginTop: '10px',
        padding: '50px',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage: `url(${props.image})`
    }
    return (
        <div>
            <div className="d-flex justify-content-center text-center bg-dark text-light" style={styles}>
                <div className="d-flex flex-column">
                    <div>
                        <div className="d-flex flex-row justify-content-center">
                            <button className="btn btn-outline-warning fs-4" data-bs-toggle="modal" data-bs-target={props.targetID}>New {props.propertyType}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
