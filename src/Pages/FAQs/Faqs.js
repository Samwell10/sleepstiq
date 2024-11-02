import { IoSearch } from "react-icons/io5";
import { motion } from "framer-motion";
import Navbar from "../../Components/Navbar/Navbar";
import "./Faqs.css";
import Faq from "../../Components/Faq/Faq";
import Footer from "../../Components/Footer/Footer";
const FAQs = () => {
    return ( 
        <div className="faq">
            <div className="header faq-header">
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
                        How can we assist?
                    </motion.h1>
                    <motion.div 
                    initial={{ y: -25, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 1, delay: 1}}
                    className="faq-search">
                        <IoSearch/>
                        <input
                            type="text"
                            placeholder="Search FAQs here"
                        ></input>
                    </motion.div>
                </div>
            </div>
            <div className="faq-body">
                <Faq/>
                {/* <div className="faq-nav">

                </div>
                <div className="faq-body-inner"></div> */}
            </div>
            <Footer/>
        </div>
    );
}
 
export default FAQs;