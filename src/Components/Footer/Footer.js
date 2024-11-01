import "./Footer.css"
import logo from "../../Assets/white-logo.png"
const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footer-logo">
                <img src={logo}></img>
            </div>
            <div className="footer-body">
                <div className="footer-nav">

                </div>
                <div className="footer-about">

                </div>
                <div className="footer-contact"></div>
            </div>
        </div>
    );
}
 
export default Footer;