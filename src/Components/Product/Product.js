import ProductCard from "../Card/ProductCard";
import "./Product.css"
const Product = () => {
    return ( 
        <div className="product">
            <h2 className="header-text product-header-text">Product Reviews</h2>
            <div className="products">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    );
}
 
export default Product;