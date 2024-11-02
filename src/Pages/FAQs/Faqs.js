import { IoSearch } from "react-icons/io5";
import Navbar from "../../Components/Navbar/Navbar";
import "./Faqs.css";
const FAQs = () => {
    return ( 
        <div className="faq">
            <div className="header faq-header">
                <Navbar/>
                <div className="header-content">
                    <p>We're here to help you</p>
                    <h1>How can we assist?</h1>
                    <div className="faq-search">
                        <IoSearch/>
                        <input
                            type="text"
                            placeholder="Search FAQs here"
                        ></input>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default FAQs;