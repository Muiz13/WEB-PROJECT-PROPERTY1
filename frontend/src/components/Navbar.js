import logo from '../images/website_logo.jpg'
import {Link} from "react-router-dom";


function Navbar() {
    return (
        <div >
            <nav className="d-flex flex-row justify-content-between"  >
                <div className='mx-4'>
                <Link to="/"><img src={logo} width='60px' /></Link>
                </div>
                <div className="d-flex flex-row justify-content-end my-auto">
                    <Link className="nav-link link-secondary fs-6" to="/">Home</Link>
                    <Link className="nav-link link-secondary fs-6" to="/properties">Properties</Link>
                    <Link className="nav-link link-secondary fs-6" to="/maps">Maps</Link>
                    <Link className="nav-link link-secondary fs-6" to="/supplies">Supplies</Link>
                    <Link className="nav-link link-secondary fs-6" to="/aboutUs">About Us</Link>
                    <Link className="nav-link link-secondary fs-6" to="/contact">Contact Us</Link>
                    <Link className="nav-link link-secondary fs-6" to="/aboutSeller">About Sellers</Link> {/* Added link */}
                </div>
            </nav>
            <div className='text-center bg-dark' style={{ height: '10px' }}></div>

        </div>
    );
}

export default Navbar;