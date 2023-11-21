import { productInfo } from "./ProductList"

type Item = {
    id: number,
    quantity: number;
}


const CheckoutItem = ({id, quantity} : Item) => {

    const item = productInfo.find(item => item.id === id)
    if (item == null) return null

  return (
        <div className="item">
            <img src={item.imgURL} alt={item.name} />
            <div className="nameprice">
                <p>{item.name} <span>x{quantity}</span></p>
                <span className="totalPrice">{item.price * quantity}$</span>
            </div>
        </div>

  )
}

export default CheckoutItem