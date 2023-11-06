import { useShoppingCart } from "../../Context/ShoppingCartContext";
import CartIcon from "../assets/icons/cart.png"
import { useNavigate } from "react-router-dom";

interface ProductCard {
    id: number;
    name: string;
    price: number;
    imgURL: string;
    Link: string;
}

const ProductCard = (props : ProductCard) => {
  const { addProductQuantity } = useShoppingCart()
  
  let navigate = useNavigate()

  const addToCart = () => {
    addProductQuantity(props.id, 1);
  }
  
  
  return (
    <>
    <div className="product-card" data-id={props.id} onClick={() => navigate(`Products/${props.Link}`)}>
        <div className="product-img" >
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