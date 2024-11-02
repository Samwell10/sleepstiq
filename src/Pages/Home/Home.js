import "./Home.css"
import { motion } from "framer-motion";
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
import ImageComponent from "../../Components/ImageComponent";
const Home = () => {
    return ( 
        <div className="home">
            <div className="header home-header">
                <Navbar/>
                <div className="header-content">
                    <motion.p
                     initial={{ y: -100, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     transition={{ type: "spring", duration: 1, delay: 0.3 }}
                    >
                        We're here to help you
                    </motion.p>
                    <motion.h1
                     initial={{ y: -50, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     transition={{ type: "spring", duration: 1, delay: 0.7 }}
                    >
                        Relax & Rest
                    </motion.h1>
                    <motion.p
                        initial={{ y: -25, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 0.9 }}
                    >
                        With the aid of our Melatonin Sleepstiq, we can assure you that you can<br></br> get quality sleep.
                    </motion.p>
                    <motion.button
                      initial={{opacity: 0 }}
                      whileInView={{opacity: 1 }}
                      transition={{ type: "spring", duration: 1, delay: 1 }}
                    >
                        Visit Shop
                    </motion.button>
                </div>
                <motion.div 
                    initial={{ x:0, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 1.2, delay: 1.2 }}
                    className="sponsors"
                >
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
                </motion.div>
            </div>
            <Customer/>
            <div className="shop-now">
                <div className="shop-now-image">
                    <ImageComponent
                        src={vape}
                        hash="LBHn1%{1%BCV01BiM-#IIVJ5%3Vg"
                    />
                    {/* <img src={vape}></img> */}
                    <motion.div 
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 0.7}}
                        className="shop-now-image-details"
                    >
                        <p>😊 Promotes calm and relaxation.</p>
                        <p>💤 Inhalation allows for a rapid effect.</p>
                        <p>✅ 100% drug-free, plant-based ingredients.</p>
                        <p>‍⚕️ 3rd-party lab tested.</p>
                    </motion.div>
                </div>
                <div className="shop-now-details">
                    <motion.h2 
                        className="header-text"
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 0.3 }}
                    >
                        Shop Now
                    </motion.h2>
                    <motion.p 
                        className="subtext show-now-subtext"
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 0.7}}
                    >
                        Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile. A few breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and lull you to bed.
                    </motion.p>
                    <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ type: "spring", duration: 1, delay: 1 }}
                    >
                        Visit Shop
                    </motion.button>
                </div>
            </div>
            <div className="mission">
                <div className="mission-text">
                <motion.h2 
                        className="header-text"
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 0.3 }}
                    >
                        Our Mission
                    </motion.h2>
                    <motion.p 
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 0.7 }}
                        className="subtext show-now-subtext"
                    >
                        We started Sleepstiq with 1 simple goal: to be your best friend at bedtime. We, just like you, deal with stress, unease, and trouble sleeping from a number of silly things like school, work, screens, numbers, and people. That's why we created products that aim to - 
                    </motion.p>
                    <div>
                        <motion.p
                            initial={{ y: -25, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: "spring", duration: 1, delay: 1 }}
                            className="subtext show-now-subtext"
                        >
                            ✓ Promote Calm
                        </motion.p>
                        <motion.p 
                            initial={{ y: -20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: "spring", duration: 1, delay: 1.3 }}
                            className="subtext"
                        >
                            ✓ Support Sleep 
                        </motion.p>
                        <motion.p 
                            initial={{ y: -20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: "spring", duration: 1, delay: 1.6 }}
                            className="subtext"
                        >
                            ✓ Reduce Stress
                        </motion.p>
                        <motion.p 
                            initial={{ y: -20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: "spring", duration: 1, delay: 1.9 }}
                            className="subtext"
                        >
                            ✓ Aid Relaxation
                        </motion.p>
                    </div>
                </div>
                <div className="mission-image">
                    <ImageComponent
                        src={sleeper}
                        hash="LBHn1%{1%BCV01BiM-#IIVJ5%3Vg"
                    />
                </div>
            </div>
            <div className="visit">
                <motion.h2 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 1, delay: 0.4 }}
                    className="header-text visit-header-text"
                >Visit Our Shop</motion.h2>
                <motion.p 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 1, delay: 0.9 }}
                className="subtext visit-subtext">Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile. A few breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and lull you to bed.</motion.p>
                <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ type: "spring", duration: 1, delay: 1 }}
                >
                    Visit Shop
                </motion.button>
            </div>
           <Product/>
           <Footer/>
        </div>
    );
}
 
export default Home;