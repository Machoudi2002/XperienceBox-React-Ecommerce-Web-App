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
    <>
        {
          Product && (
            <ProductDetails id={Product.id} name={Product.name} price={Product.price} imgURL={Product.imgURL} />
          )
        } 
    </>
  )
}

export default ProductPage