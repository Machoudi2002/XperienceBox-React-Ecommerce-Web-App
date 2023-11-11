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
    const { addProductQuantity, minusProductQuantity, removeFromCart, getProductQuantity} = useShoppingCart();

    const item = productInfo.find(item => item.id === id)
    if (item == null) return null
    const stockCalcul =  item.stock - getProductQuantity(item.id);


  return (
    <>
        <div className="itemCard">
            <div className="itemInfo">
                <Link to={`/Products/${item.name}`} className="img-back">
                    <img src={item.imgURL} alt={item.name} />
                </Link>
                <div className="text-area">
                    <h3>{item.name}</h3>
                    <p>total = {item.price * quantity}$</p>

                    <div className="controllQuantity">
                        <button onClick={() => minusProductQuantity(item.id)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => addProductQuantity(item.id, 1)} disabled={(stockCalcul === 0)}>+</button>
                        <button className='trash' onClick={() => removeFromCart(item.id)}>
                            <FontAwesomeIcon className="remove" icon={faTrash} />
                            Remove
                        </button>
                    </div>
                </div>

            </div>
                  
        </div>
    </>
  )
}

export default CartItem