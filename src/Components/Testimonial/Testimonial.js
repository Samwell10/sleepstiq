import TestimonialCard from "../Card/TestimonialCard";
import { motion } from "framer-motion";
import { Testimonials } from "../data";

const Testimonial = () => {
    return ( 
        <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1, delay: 0.4 }}
            className="customer-review"
        >
            {Testimonials.map((testimony)=>(
                <TestimonialCard
                    message={testimony.text}
                    name={testimony.name}
                    rate={testimony.rate}
                />
            ))}
        </motion.div>
     );
}
 
export default Testimonial;