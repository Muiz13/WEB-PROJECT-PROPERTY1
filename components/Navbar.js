import logo from '../images/website_logo.jpg'
import {Link} from "react-router-dom";
import Services from '../services/Service'


function Navbar() {
    const handleLogout=(event)=>{
        event.preventDefault();
        if(window.confirm("Do you want to log out?")){
            Services.logoutAdmin()
        }
    }
    return (
        <div>
            <nav className="d-flex flex-row justify-content-between">
                <div className='mx-4'>
                <Link  to="/"><img src={logo} width='60px' /></Link>
                    
                </div>
                <div className="d-flex flex-row justify-content-end my-auto">
                <Link className="nav-link link-secondary fs-6" to="/"></Link>
                    <Link className="nav-link link-secondary fs-6" to="/houses">Homes</Link>
                    <Link className="nav-link link-secondary fs-6" to="/plots">Plots</Link>
                    <Link className="nav-link link-secondary fs-6" to="/projects">Projects</Link>   
                    <Link className="nav-link link-secondary fs-6" to="/supplies">Supplies</Link>
                    <Link className="nav-link link-secondary fs-6" to="/maps">Maps</Link>
                    <Link className="nav-link link-secondary fs-6" to="/update-password">Change Password</Link>
                    <Link className="nav-link link-secondary fs-6" to="" onClick={handleLogout}>Logout</Link>
                    
                </div>
            </nav>
            <div className='text-center bg-dark' style={{ height: '10px' }}></div>

        </div>
    );
}

export default Navbar;