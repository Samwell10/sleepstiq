import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import "./Faq.css"
import { GoChevronDown, GoChevronUp } from "react-icons/go";
const Accordion = ({question, answer}) => {
    const [show, setShow] = useState(false)
    return ( 
        <div className="accordion">
            <div className="accordion-content-question">
                <p className={show ? "question question-show" : "question"} onClick={() => setShow(!show)}>{question}</p>
                {/* <div onClick={() => setShow(!show)}>
                    {
                        show ? <GoChevronUp /> : <GoChevronDown />
                    }
                </div> */}
            </div>
            {
                show && 
                <div className="accordion-content-answer accordion-content-question">
                    <p className="answer">{answer}</p>
                </div>
            }
        </div>
    );
}
 
export default Accordion;