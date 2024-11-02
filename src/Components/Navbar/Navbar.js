import "./Navbar.css"
import logo from "../../Assets/logo.png"
import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="logo">
                <img src={logo}></img>
            </div>
            <nav>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <li>Shop</li>
                    <li>FAQs</li>
                </ul>
            </nav>
        </div>
    );
}
 
export default Navbar;