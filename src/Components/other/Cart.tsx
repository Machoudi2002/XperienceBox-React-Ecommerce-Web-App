import { Link } from "react-router-dom";
import { useShoppingCart } from "../../Context/ShoppingCartContext";
import CartItem from "./CartItem";
import { productInfo } from "./ProductList";
import "./SCSS/Cart.scss"

const Cart = () => {
    const { cartItems } = useShoppingCart();
    
  return (
    <>
            <div className="shoppingCart pageName">
                <h1>My Cart</h1>
                <hr />
                <div className="cart-body" >
                    <div className="cartItems">

                    {
                        cartItems.length > 0 ? (

                            cartItems.map((item) => (
                                <CartItem key={item.id} {...item} />
                            ))
                        ) : 
                        <p style={{marginTop: "20px", fontSize: "15px", fontFamily: 'Sanchez' }}>
                            your cart is empty   
                        </p>
                    }

                    </div>

                    <div className="total">
                        <h2>Summary</h2>
                        <div className="checkout-card">
                            <div className="subtotal">
                                <span>Subtotal</span>
                                <span>
                                    {cartItems.reduce((total, cartItem) => {
                                    const item = productInfo.find(item => item.id === cartItem.id)
                                    return total + (item?.price || 0) * cartItem.quantity}
                                    , 0)}$
                                </span>
                            </div>
                            <p>Shipping & taxes are calculated at checkout</p>
                            <div className="checkoutMethods">
                                <Link to="/Checkout"><button disabled={cartItems.length === 0}>Checkout</button></Link>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
    </>
  )
}

export default Cart