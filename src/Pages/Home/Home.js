import "./Home.css"
import vape from "../../Assets/VAPE.png"
import sleeper from "../../Assets/sleeping.jpeg"
import Navbar from "../../Components/Navbar/Navbar";
import google from "../../Assets/google.png"
import forbes from "../../Assets/forbes.png"
import bloomberg from "../../Assets/bloomberg.png"
import sleepReview from "../../Assets/sleepreview.png"
import influencive from "../../Assets/industry.png"
import Customer from "../../Components/Customer/Customer";
import Product from "../../Components/Product/Product";
import Footer from "../../Components/Footer/Footer";
const Home = () => {
    return ( 
        <div className="home">
            <div className="header home-header">
                <Navbar/>
                <div className="header-content">
                    <p>We're here to help you</p>
                    <h1>Relax & Rest</h1>
                    <p>With the aid of our Melatonin Sleepstiq, we can assure you that you can<br></br> get quality sleep.</p>
                    <button>Visit Shop</button>
                </div>
                <div className="sponsors">
                    <div className="google">
                        <img src={google}></img>
                    </div>
                    <div className="forbes">
                        <img src={forbes}></img>
                    </div>
                    <div className="bloomberg">
                        <img src={bloomberg}></img>
                    </div>
                    <div className="sleep-review">
                        <img src={sleepReview}></img>
                    </div>
                    <div className="influencive">
                        <img src={influencive}></img>
                    </div>
                </div>
            </div>
            <Customer/>
            <div className="shop-now">
                <div className="shop-now-image">
                    <img src={vape}></img>
                    <div className="shop-now-image-details">
                        <p>😊 Promotes calm and relaxation.</p>
                        <p>💤 Inhalation allows for a rapid effect.</p>
                        <p>✅ 100% drug-free, plant-based ingredients.</p>
                        <p>‍⚕️ 3rd-party lab tested.</p>
                    </div>
                </div>
                <div className="shop-now-details">
                    <h2 className="header-text">Shop Now</h2>
                    <p className="subtext show-now-subtext">
                        Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile. A few breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and lull you to bed.
                    </p>
                    <button>Visit Shop</button>
                </div>
            </div>
            <div className="mission">
                <div className="mission-text">
                    <h2 className="header-text">Our Mission</h2>
                    <p className="subtext show-now-subtext">We started Sleepstiq with 1 simple goal: to be your best friend at bedtime. We, just like you, deal with stress, unease, and trouble sleeping from a number of silly things like school, work, screens, numbers, and people. That's why we created products that aim to - </p>
                    <div>
                        <p className="subtext show-now-subtext">✓ Promote Calm</p>
                        <p className="subtext">✓ Support Sleep </p>
                        <p className="subtext">✓ Reduce Stress </p>
                        <p className="subtext">✓ Aid Relaxation</p>
                    </div>
                </div>
                <div className="mission-image">
                    <img src={sleeper}></img>
                </div>
            </div>
            <div className="visit">
                <h2 className="header-text visit-header-text">Visit Our Shop</h2>
                <p className="subtext visit-subtext">Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile. A few breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and lull you to bed.</p>
                <button>Visit Shop</button>
            </div>
           <Product/>
           <Footer/>
        </div>
    );
}
 
export default Home;