import ProductCard from "../Card/ProductCard";
import { productReview } from "../data";
import "./Product.css"
const Product = () => {
    return ( 
        <div className="product">
            <h2 className="header-text product-header-text">Product Reviews</h2>
            <div className="products">
                {productReview.map((data)=>(
                    <ProductCard
                        Image={data.Image}
                        name={data.name}
                        text={data.text}
                        rate={data.rate}
                    />
                ))}
            </div>
        </div>
    );
}
 
export default Product;