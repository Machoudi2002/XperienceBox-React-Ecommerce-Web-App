import { useShoppingCart } from "../../Context/ShoppingCartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faEye } from '@fortawesome/free-solid-svg-icons'
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
    <div className="product-card" data-id={props.id} >
        <div className="product-img" >
            <img src={props.imgURL} alt={props.name} width="100%" />
            <div className="content">
              <FontAwesomeIcon className="icon" icon={faCartPlus} onClick={addToCart}/>
              <FontAwesomeIcon className="icon" icon={faEye} onClick={() => navigate(`Products/${props.Link}`)} />
            </div>
        </div>
        <div>
          <h2>{props.name}</h2>
          <span>{props.price}$</span>
        </div>
    </div>
    </>
  )
}

export default ProductCard