import { useShoppingCart } from "../../Context/ShoppingCartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faEye } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import { productInfo } from "./ProductList";


interface ProductCard {
    id: number;
    name: string;
    price: number;
    imgURL: string;
    Link: string;
}

const ProductCard = (props : ProductCard) => {
  let navigate = useNavigate();
  const { addProductQuantity, getProductQuantity } = useShoppingCart();

  const item = productInfo.find(item => item.id === props.id)
  if (item == null) return null
  const availableStock =  item.stock - getProductQuantity(item.id);



  const addToCart = () => {
    if (availableStock === 0) {
      addProductQuantity(props.id, 0);
    } else {
      addProductQuantity(props.id, 1);
    }
  }
  
  
  return (
    <>
    <div className="product-card" data-id={props.id} >
        <div className="product-img" >
            <img src={props.imgURL} alt={props.name} width="100%" />
            <div className="content">
              <abbr title="Add To Basket"><FontAwesomeIcon className="icon" icon={faBasketShopping} onClick={addToCart}/></abbr>
              <abbr title="Show Product"><FontAwesomeIcon className="icon" icon={faEye} onClick={() => navigate(`Products/${props.Link}`)} /></abbr>
            </div>
        </div>
        <div className="name-price">
          <h2>{props.name}</h2>
          <span>{props.price}$</span>
        </div>
    </div>
    </>
  )
}

export default ProductCard