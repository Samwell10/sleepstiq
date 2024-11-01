import "./Navbar.css"
import logo from "../../Assets/logo.png"
const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="logo">
                <img src={logo}></img>
            </div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Shop</li>
                    <li>FAQs</li>
                </ul>
            </nav>
        </div>
    );
}
 
export default Navbar;