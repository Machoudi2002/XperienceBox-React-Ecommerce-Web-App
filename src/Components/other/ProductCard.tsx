import { useShoppingCart } from "../../Context/ShoppingCartContext";
import CartIcon from "../assets/icons/cart.png"

interface ProductCard {
    id: number;
    name: string;
    price: number;
    imgURL: string;
}

const ProductCard = (props : ProductCard) => {
  const { getProductQuantity , addProductQuantity } = useShoppingCart()
  const quantity = getProductQuantity(props.id)

  const addToCart = () => {
    addProductQuantity(props.id);
    console.log(`${props.name} = ${quantity}`);
  }
  
  
  return (
    <>
    <div className="product-card" data-id={props.id}>
        <div className="product-img">
            <img src={props.imgURL} alt={props.name} width="100%" />
            <div className="content">
              <img onClick={addToCart} src={CartIcon} alt="cart" />
            </div>
        </div>
        <h2>{props.name}</h2>
        <span>{props.price}$</span>
    </div>
    </>
  )
}

export default ProductCard