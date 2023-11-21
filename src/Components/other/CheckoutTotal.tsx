import { productInfo } from "./ProductList"
import CheckoutItem from "./CheckoutItem"
import { useShoppingCart } from "../../Context/ShoppingCartContext";
import "./SCSS/Checkout.scss"

const CheckoutTotal = () => {
    const { cartItems } = useShoppingCart();

  return (
    <div className="totalItems">
        <span>Pay</span>
        <h2>
            {cartItems.reduce((total, cartItem) => {
                const item = productInfo.find(item => item.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity}
            , 0)}$
        </h2>
        { cartItems.length > 0 && cartItems.map((item) => (
                <CheckoutItem key={item.id} {...item}/> 
            ))
        }
    </div>
  )
}

export default CheckoutTotal