import blueFlame from "../assets/Products_Images/BlueFlame.webp"
import choesKnights from "../assets/Products_Images/ChoesKnight.webp"
import bloodDragon from "../assets/Products_Images/BloodDragon.webp"
import cyberPlague from "../assets/Products_Images/CyberPlague.webp"
import "./SCSS/CartItem.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useShoppingCart } from "../../Context/ShoppingCartContext"

type CartItemProps = {
    id: number,
    quantity: number,
}

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


const CartItem = ({id, quantity} : CartItemProps) => {
    const { addProductQuantity, minusProductQuantity, removeFromCart} = useShoppingCart();


    const item = productInfo.find(item => item.id === id)
    if (item == null) return null
  return (
    <>
        <div className="itemCard">
            <div className="img-back">
                <img src={item.imgURL} alt={item.name} />
            </div>
            <div className="item-info">
                <div className="text-area">
                    <h2>{item.name}</h2>
                    <p>{item.price}$ { quantity > 1 && (<span> x{quantity}</span>)}</p>
                </div>
                <div className="selectQuantity">
                    <button onClick={() => minusProductQuantity(item.id)}>-</button>
                    <button onClick={() => addProductQuantity(item.id)}>+</button>
                    <button onClick={() => removeFromCart(item.id)} className="remove"><FontAwesomeIcon icon={faTrash} /></button>
                </div>
            </div>

        </div>
    </>
  )
}

export default CartItem