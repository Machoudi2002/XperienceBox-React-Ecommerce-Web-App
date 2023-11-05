import { useShoppingCart } from "../../Context/ShoppingCartContext";

import CartItem from "./CartItem";

const Cart = () => {
    const { cartItems } = useShoppingCart();
    
  return (
    <>
        <div className="container spacing">
            <div className="shoppingCart">
                <h1>My Cart</h1>
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
        </div>
    </>
  )
}

export default Cart