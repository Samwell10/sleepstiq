import TestimonialCard from "../Card/TestimonialCard";
import { Testimonials } from "../data";

const Testimonial = () => {
    return ( 
        <div className="customer-review">
        {Testimonials.map((testimony)=>(
            <TestimonialCard
                message={testimony.text}
                name={testimony.name}
                rate={testimony.rate}
            />
        ))}
    </div>
     );
}
 
export default Testimonial;