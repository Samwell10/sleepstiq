import { FaStar } from "react-icons/fa";
import "./Card.css"
const TestimonialCard = ({message, name, rate}) => {
    return ( 
        <div className="testimonial-card">
            <p className="testimonial-text">{message}</p>
            <h3 className="testimonial-author">{name}</h3>
            <div className="rating">
                {Array.from({ length: rate }, (_, i) => (
                    <FaStar/>
                ))}
            </div>

        </div>
    );
}
 
export default TestimonialCard;