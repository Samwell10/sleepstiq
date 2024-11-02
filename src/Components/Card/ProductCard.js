import { FaStar } from "react-icons/fa";
import pen from "../../Assets/stick1.png"
const ProductCard = ({Image, text, name, rate}) => {
    return ( 
        <div className="product-card">
            <img src={Image}></img>
            <div className="product-details">
                <p className="subtext product-details-subtext">{text}</p>
                <p className="product-name">{name}</p>
                <div className="rating">
                {Array.from({ length: rate }, (_, i) => (
                    <FaStar/>
                ))}
            </div>
            </div>
        </div>
    );
}
 
export default ProductCard;