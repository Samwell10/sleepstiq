import "./Navbar.css"
import logo from "../../Assets/logo.png"
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
const Navbar = () => {
    const [navshow, setnavshow] = useState(false)
    
    const handleNav = () => {
        setnavshow(!navshow)
    }
    return ( 
        <div className="navbar">
            <div className="logo">
                <img src={logo}></img>
            </div>
            <div className={navshow ? "navbar-nav-mobile":"navbar-nav"}>
                <div className="mobile-nav-header">
                    <div className="logo">
                        <img src={logo}></img>
                    </div>
                    <div className="nav-close" onClick={handleNav}>
                        <FaTimes/>
                    </div>
                </div>
                <nav>
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/about"><li>About</li></Link>
                        <li>Shop</li>
                        <Link to="/FAQs"><li>FAQs</li></Link>
                    </ul>
                </nav>
            </div>
            <div className="nav-hambuger" onClick={handleNav}>
                <FaBars/>
            </div>
        </div>
    );
}
 
export default Navbar;