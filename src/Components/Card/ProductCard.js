import { FaStar } from "react-icons/fa";
import pen from "../../Assets/stick1.png"
const ProductCard = () => {
    return ( 
        <div className="product-card">
            <img src={pen}></img>
            <div className="product-details">
                <p className="subtext product-details-subtext">Works great! Just use it and then relax, I fall asleep with no problem every time I use it.</p>
                <p className="product-name">Rachel Dill</p>
                <div className="rating">
                {/* {Array.from({ length: rate }, (_, i) => ( */}
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                {/* ))} */}
            </div>
            </div>
        </div>
    );
}
 
export default ProductCard;