import { useParams } from "react-router-dom";
import ProductDetails from "../Components/other/ProductDetails";
import { productInfo } from "../Components/other/ProductList";

type Params = {
  productName: string;
}

const ProductPage = () => {
  const { productName } = useParams<Params>();
  const Product = productInfo.find(item => item.name === productName)
  return (
    <div>
        {
          Product ? (
            <ProductDetails 
              id={Product.id} 
              name={Product.name} 
              price={Product.price} 
              stock={Product.stock}
              imgURL={Product.imgURL} 
              description={Product.description} 
            />
          ) : <div>Product not found</div>
        } 
    </div>
  )
}

export default ProductPage