import Navbar from "../../Components/Navbar/Navbar";
import "./About.css"
import vape from "../../Assets/VAPE.png"
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonial/Testimonial";
const About = () => {
    return ( 
        <div className="about-us">
            <div className="header about-header">
                <Navbar/>
                <div className="header-content">
                    <p>We're here to help you</p>
                    <h1>Relax & Rest</h1>
                </div>
            </div>
            <div className="shop-now">
                <div className="shop-now-image">
                    <img src={vape}></img>
                </div>
                <div className="shop-now-details">
                    <h2 className="header-text">About Product</h2>
                    <p className="subtext show-now-subtext">
                        Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile. A few breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and lull you to bed.
                    </p>
                    <div className="add-product-details">
                        <p className="subtext">😊 Promotes calm and relaxation.</p>
                        <p className="subtext">💤 Inhalation allows for a rapid effect.</p>
                        <p className="subtext">✅ 100% drug-free, plant-based ingredients.</p>
                        <p className="subtext">‍⚕️ 3rd-party lab tested.</p>
                    </div>
                    <div className="add-product-quantity">
                        <div className="price">
                            <p className="price-head">Price</p>
                            <p className="price-body">USD 50</p>
                        </div>
                        <div className="unit">
                            <p className="price-head">Unit</p>
                            <input type="number" defaultValue={4}></input>
                        </div>
                    </div>
                    <button>Buy</button>
                </div>
            </div>
            <Testimonial/>
            <Footer/>
        </div>
    );
}
 
export default About;