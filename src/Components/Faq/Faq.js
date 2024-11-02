import "./Faq.css"
import { useEffect, useState } from "react";
import {data} from "./general"
import Accordion from "./Accodion";

const Faq = () => {
    const [active, setActive] = useState(0)
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    const filteredData = active === 0 
        ? data 
        : data.filter(item => item.section.includes(active));
   
    return ( 
        <div className="faq-outer">
            <div className="faq">
                <div className="faq-content">
                    <div className="faq-content-left">
                        <div className="faq-nav-sub">
                            <p className={active === 0 ? "active-nav": ""} onClick={()=>{setActive(0)}}>Sleepstiq Product</p>
                            <p className={active === 1 ? "active-nav": ""} onClick={()=>{setActive(1)}}>Order</p>
                            <p className={active === 2 ? "active-nav": ""} onClick={()=>{setActive(2)}}>Melantonin</p>

                        </div>
                    </div>
                    <div className="faq-content-right">
                        {filteredData.length > 0 ? (
                            filteredData.map((general) => {
                                const { id } = general;
                                return <Accordion key={id} {...general} />;
                            })
                        ) : (
                            <p>No FAQs available for this category.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Faq;