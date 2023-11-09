import { FormEvent, useState } from "react";
import { useShoppingCart } from "../../Context/ShoppingCartContext";
import "./SCSS/ProductDetails.scss"


type ProductTypes = {
    id: number;
    name: string;
    price: number;
    imgURL: string;
}

const ProductDetails = (props : ProductTypes) => {
    
    const [quantity, setQuantity] = useState(1);
    const { addProductQuantity } = useShoppingCart();

    if (quantity < 0) {
        setQuantity(0);
    }


    const handleSubmit = (e : FormEvent) => {
        e.preventDefault();
        addProductQuantity(props.id, quantity);
    }

  return (
    <>
        <div className="container productDetails">
            <div className="img-area">
                <img src={props.imgURL} alt={props.name} />
            </div>
            <div className="text-area">
                <h1>{props.name}</h1>
                <span>{props.price}$</span>
                <form onSubmit={handleSubmit}>
                    <div className="controllQuantity">
                        <input type="button" value="+" onClick={() => setQuantity(quantity + 1)} />
                        <input
                            className="quantityField"
                            type="number"
                            min={1}
                            max={100}
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                        />
                        <input type="button" value="-" onClick={() => setQuantity(quantity - 1)} />
                    </div>
                    <input type="submit" value="Add To Cart" />
                </form>
            </div>
        </div>
    </>
  )
}

export default ProductDetails