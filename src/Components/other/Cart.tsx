import { useShoppingCart } from "../../Context/ShoppingCartContext";

import blueFlame from "../assets/Products_Images/BlueFlame.webp"
import choesKnights from "../assets/Products_Images/ChoesKnight.webp"
import bloodDragon from "../assets/Products_Images/BloodDragon.webp"
import cyberPlague from "../assets/Products_Images/CyberPlague.webp"

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



            </div>
        </div>
    </>
  )
}

export default Cart