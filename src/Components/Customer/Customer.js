import "./Customer.css"
import { IoMdArrowDropright } from "react-icons/io";
import { CustomerTestimonials, Testimonials } from "../data";
import profile from "../../Assets/person.png"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import TestimonialCard from "../Card/TestimonialCard";
const Customer = () => {
    return ( 
        <div className="customer-outer">
            <div className="customer">
                <div className="customer-left">
                    <p className="preamble preamble-customer">Our Amazing Story</p>
                    <h2 className="header-text header-text-customer">10k+Happy Customers</h2>
                    <p className="subtext subtext-customer">There’s no secret sauce, no wizard behind the curtain. What makes Aerolab tick is an interdisciplinary team with a framework that fosters candid collaboration.</p>
                    <div className="customer-nav">
                        <IoMdArrowDropright />
                        <p>More know About us</p>
                    </div>
                </div>
                <div className="customer-right">
                    <Swiper
                        autoplay={{ delay: 50, disableOnInteraction: false }}
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable:  false}}
                        scrollbar={{ draggable: false }}
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
                </div>
            </div>
            <div className="customer-review">
                {Testimonials.map((testimony)=>(
                    <TestimonialCard
                        message={testimony.text}
                        name={testimony.name}
                        rate={testimony.rate}
                    />
                ))}
            </div>
        </div>
    );
}
 
export default Customer;