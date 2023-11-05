import { useShoppingCart } from "../../Context/ShoppingCartContext";
import CartItem from "./CartItem";
import blueFlame from "../assets/Products_Images/BlueFlame.webp"
import choesKnights from "../assets/Products_Images/ChoesKnight.webp"
import bloodDragon from "../assets/Products_Images/BloodDragon.webp"
import cyberPlague from "../assets/Products_Images/CyberPlague.webp"
import "./SCSS/Cart.scss"

const productInfo = [
    {
        id: 1,
        name: "BlueFlame",
        price: 189,
        imgURL: blueFlame
    },
    {
        id: 2,
        name: "ChoesKnight",
        price: 129,
        imgURL: choesKnights
    },    
    {
        id: 3,
        name: "BloodDragon",
        price: 299,
        imgURL: bloodDragon
    },    
    {
        id: 4,
        name: "CyberPlague",
        price: 99,
        imgURL: cyberPlague
    },
]

const Cart = () => {
    const { cartItems } = useShoppingCart();
    
  return (
    <>
        <div className="container spacing">
            <div className="shoppingCart">
                <h1>My Cart</h1>
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
                        <h2>Total : {cartItems.reduce((total, cartItem) => {
                            const item = productInfo.find(item => item.id === cartItem.id)
                            return total + (item?.price || 0) * cartItem.quantity
                        }, 0)}$

                        </h2>
                    </div>
                    
                </div>

            </div>
        </div>
    </>
  )
}

export default Cart