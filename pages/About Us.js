import React from 'react'
import { Link } from "react-router-dom";
import mountpakistan from '../images/mountainpakistan.jpg'


export default function AboutUs() {
    React.useEffect(() => {
        document.title = "About Us"
    }, [])
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
                        <h1>About Us</h1>
                    </div>
                    <div>
                        <div className="d-flex flex-row justify-content-center">
                            <Link className="nav-link link-light fs-5" to="/">Home</Link>
                            <Link className="nav-link link-light fs-5" to="/aboutUs">About Us</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-5'>
                <h1>About Us</h1><hr />
                <p className='text-justify'>Welcome to Mount Pakistan, your one-stop-shop for all your real estate needs in Pakistan. As a reputable real estate agency, we pride ourselves on providing our clients with the highest level of service and expertise in the industry. <hr/>

                    Our company is registered with various organizations, including the Chamber of Commerce Islamabad, Housing Foundation CDA, Excise & Taxation, FBR, Small Chamber of Commerce, Islamabad Estate Agent Association (IEAA), and the Federation of Pakistan Chambers of Commerce and Industry (FPCCI). This demonstrates our commitment to maintaining high standards and upholding best practices in our operations.<hr/>

                    At Mount Pakistan, we offer a range of services, including property advising, buying and selling, and construction projects. We specialize in government tenders and have a track record of delivering successful projects.<hr/>

                    Our team of experienced professionals is dedicated to ensuring our clients receive personalized attention and guidance throughout the process. Whether you are looking to buy, sell, or invest in real estate, we are here to help you achieve your goals.<hr/>

                    We strive to build lasting relationships with our clients, based on trust, transparency, and integrity. We take pride in our work and are passionate about delivering results that exceed our clients' expectations.<hr/>

                    Thank you for considering Mount Pakistan as your real estate partner. We look forward to working with you and helping you achieve your real estate objectives.<hr/></p>
            </div>
        </div>
    )
}
