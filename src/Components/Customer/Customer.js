import "./Customer.css"
import { motion } from "framer-motion";
import { IoMdArrowDropright } from "react-icons/io";
import { CustomerTestimonials, Testimonials } from "../data";
import profile from "../../Assets/person.png"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import TestimonialCard from "../Card/TestimonialCard";
import Testimonial from "../Testimonial/Testimonial";
const Customer = () => {
    return ( 
        <div className="customer-outer">
            <div className="customer">
                <div className="customer-left">
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 0.4 }}
                        className="preamble preamble-customer"
                    >
                        Our Amazing Story
                    </motion.p>
                    <motion.h2 
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 0.8 }}
                        className="header-text header-text-customer"
                    >
                        10k+Happy Customers
                    </motion.h2>
                    <motion.p 
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 1.4 }}
                        className="subtext subtext-customer"
                    >
                            There’s no secret sauce, no wizard behind the curtain. What makes Aerolab tick is an interdisciplinary team with a framework that fosters candid collaboration.
                    </motion.p>
                    <motion.div 
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 1, delay: 1.8 }}
                    className="customer-nav">
                        <IoMdArrowDropright />
                        <p>More know About us</p>
                    </motion.div>
                </div>
                <motion.div 
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 1, delay: 0.4 }}
                className="customer-right">
                    <Swiper
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation={false}
                        pagination={false}
                        scrollbar={false}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {CustomerTestimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="customer-card">
                                    <p className="customer-text">{testimonial.text}</p>
                                    <div className="customer-author">
                                        <img src={testimonial.imageUrl} alt={testimonial.name} className="author-image" />
                                        <div className="customer-info">
                                        <h4 className="customer-name">{testimonial.name}</h4>
                                        <p className="customer-title">{testimonial.title}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
           <Testimonial/>
        </div>
    );
}
 
export default Customer;