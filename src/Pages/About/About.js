import Navbar from "../../Components/Navbar/Navbar";
import "./About.css"
import { motion } from "framer-motion";
import vape from "../../Assets/VAPE.png"
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonial/Testimonial";
import ImageComponent from "../../Components/ImageComponent";
const About = () => {
    return ( 
        <div className="about-us">
            <div className="header about-header">
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
                </div>
            </div>
            <div className="shop-now">
                <div className="shop-now-image">
                    <ImageComponent
                        src={vape}
                        hash="LBHn1%{1%BCV01BiM-#IIVJ5%3Vg"
                    />
                </div>
                <div className="shop-now-details">
                    <motion.h2 
                        className="header-text"
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 0.3 }}
                    >
                        About Product
                    </motion.h2>
                    <motion.p 
                        className="subtext show-now-subtext"
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 0.7}}
                    >
                        Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile. A few breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and lull you to bed.
                    </motion.p>
                    <div className="add-product-details">
                    <motion.p
                            initial={{ y: -25, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: "spring", duration: 1, delay: 1 }}
                            className="subtext"
                        >
                            😊 Promotes calm and relaxation.
                        </motion.p>
                        <motion.p 
                            initial={{ y: -20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: "spring", duration: 1, delay: 1.3 }}
                            className="subtext"
                        >
                            💤 Inhalation allows for a rapid effect.
                        </motion.p>
                        <motion.p 
                            initial={{ y: -20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: "spring", duration: 1, delay: 1.6 }}
                            className="subtext"
                        >
                            ✅ 100% drug-free, plant-based ingredients.
                        </motion.p>
                        <motion.p 
                            initial={{ y: -20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: "spring", duration: 1, delay: 1.9 }}
                            className="subtext"
                        >
                            ‍⚕️ 3rd-party lab tested.
                        </motion.p>
                    </div>
                    <motion.div 
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 1, delay: 1.9 }}
                    className="add-product-quantity">
                        <div className="price">
                            <p className="price-head">Price</p>
                            <p className="price-body">USD 50</p>
                        </div>
                        <div className="unit">
                            <p className="price-head">Unit</p>
                            <input type="number" defaultValue={4}></input>
                        </div>
                    </motion.div>
                    <motion.button
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 1 }}
                    >
                        Buy
                    </motion.button>
                </div>
            </div>
            <Testimonial/>
            <Footer/>
        </div>
    );
}
 
export default About;