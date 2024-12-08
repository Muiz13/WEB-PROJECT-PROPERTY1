import React from 'react'
import {Link} from "react-router-dom";


export default function Footer() {
    return (
        <div className='text-light' style={{ background: "#1c2331"}}>
            <div className='container'>
                <div className='row text-light' style={{ padding: "10px", marginTop: "40px" }}>
                    <div className='col-md-6'>
                        <div className="d-flex flex-column">
                            <h6 className="nav-link link-light fs-7" href="#">MOUNT PAKISTAN</h6>
                            <hr />
                            <a className="nav-link link-secondary fs-7">Office# 07, Al Barkat Plaza, First Floor, Punjab Market G-13/4 Islamabad</a>
                            <a className="nav-link link-secondary fs-7">Cell: 0300-5316254</a>
                            <a className="nav-link link-secondary fs-7">Tel: 051-2300970-71</a>
                            <a className="nav-link link-secondary fs-7">Email: mountpakistan@hotmail.com</a>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div>
                            <div className="d-flex flex-column">
                                <h6 className="nav-link link-light fs-7" href="#">ABOUT</h6>
                                <hr />
                                <a className="nav-link link-secondary fs-7" href="/aboutUs">About Us</a>
                                <Link className="nav-link link-secondary fs-7" to="/contact">Contact Us</Link>
                                <a className="nav-link link-secondary fs-7" href="#">Careers</a>
                                <a className="nav-link link-secondary fs-7" href="#">Terms & Conditions</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div>
                            <div className="d-flex flex-column">
                                <h6 className="nav-link link-light fs-7" href="#">MORE INFORMATION</h6>
                                <hr />

                                <Link className="nav-link link-secondary fs-7" to="/properties">All Projects</Link>
                                <Link className="nav-link link-secondary fs-7" to="/properties">All Properties</Link>
                                <a className="nav-link link-secondary fs-7" href="/properties">Properties for Sale</a>
                                <a className="nav-link link-secondary fs-7" href="/properties">Properties for Rent</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center p-2' style={{ background: "#161c27" }}>
                     <span>&#169;<i> 2023 Copyright: MountPakistan.com</i></span>
                </div>


        </div>
    )
}
