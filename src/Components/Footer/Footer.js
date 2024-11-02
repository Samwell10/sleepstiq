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
                    <div className="footer-company-nav">
                        <p className="nav-head">COMPANY</p>
                        <p className="nav-body">About</p>
                        <p className="nav-body">Blog</p>
                        <p className="nav-body">Contact</p>
                        <p className="nav-body">Jobs</p>
                    </div>
                    <div className="footer-company-details">
                        <p className="nav-head">CONTACT</p>
                        <p className="nav-body">Phone</p>
                        <p className="nav-body-2">+234 708 507 3128</p>
                        <p className="nav-body">Address</p>
                        <p className="nav-body-2">16, Ogindipe Close, Upston  Close</p>
                    </div>

                </div>
                <div className="footer-about">
                    <p className="nav-head">CONSUMER ADVISORY</p>
                    <p className="about-text">
                    These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. This product should be used only as directed on the label. All trademarks and copyrights are property of their respective owners and not affiliated with nor do they endorse this product. Results may vary.
                    </p>
                    <p className="about-text">By using our website or product, you agree to follow our <span>terms of service.</span></p>
                </div>
                <div className="footer-contact">
                    <p className="nav-head">GET IN TOUCH</p>
                    <p className="nav-body">Feel free to get in touch with us vai email</p>
                    <p className="nav-email">hello@sleepstiq.com</p>               
                </div>
            </div>
        </div>
    );
}
 
export default Footer;