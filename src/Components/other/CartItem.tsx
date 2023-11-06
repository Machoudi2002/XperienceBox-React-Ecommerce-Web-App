import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useShoppingCart } from "../../Context/ShoppingCartContext"
import { Link } from 'react-router-dom'
import { productInfo } from './ProductList'
import "./SCSS/CartItem.scss"


type CartItemProps = {
    id: number,
    quantity: number,
}



const CartItem = ({id, quantity} : CartItemProps) => {
    const { addProductQuantity, minusProductQuantity, removeFromCart} = useShoppingCart();


    const item = productInfo.find(item => item.id === id)
    if (item == null) return null
  return (
    <>
        <div className="itemCard">
            <Link to={`/Products/${item.name}`} className="img-back">
                <img src={item.imgURL} alt={item.name} />
            </Link>
            <div className="item-info">
                <div className="text-area">
                    <h3>{item.name}</h3>
                    <p>{item.price}$ { quantity > 1 && (<span> x{quantity}</span>)}</p>
                </div>
                <div className="selectQuantity">
                    <button onClick={() => minusProductQuantity(item.id)}>-</button>
                    <button onClick={() => addProductQuantity(item.id, 1)}>+</button>
                    <button onClick={() => removeFromCart(item.id)} className="remove"><FontAwesomeIcon icon={faTrash} /></button>
                </div>
            </div>

        </div>
    </>
  )
}

export default CartItem