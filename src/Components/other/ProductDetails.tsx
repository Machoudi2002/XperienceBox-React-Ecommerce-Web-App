import { FormEvent, useState, useEffect} from "react";
import { useShoppingCart } from "../../Context/ShoppingCartContext";
import "./SCSS/ProductDetails.scss"


type ProductTypes = {
    id: number;
    name: string;
    price: number;
    stock: number;
    description: string;
    imgURL: string;
}

const ProductDetails = (props : ProductTypes) => {
    
    const [quantity, setQuantity] = useState(1);
    const [errorMessage, setErrorMessage] = useState("")
    const { addProductQuantity, getProductQuantity } = useShoppingCart();
    

    const stockCalcul = props.stock - getProductQuantity(props.id);

    const handleQuantityChange = (newQuantity: number) => {
        if (newQuantity < 2) {
          setQuantity(1);
          setErrorMessage("You hit the minimum Quantity");
        } else if (newQuantity >= stockCalcul) {
          setQuantity(stockCalcul);
          setErrorMessage("You hit the maximum Quantity");
        } else {
          setQuantity(newQuantity);
          setErrorMessage("");
        }
      };


    const handleSubmit = (e : FormEvent) => {
        e.preventDefault();
        addProductQuantity(props.id, quantity);
    }

    useEffect(() => {
        (stockCalcul === 0) ? setErrorMessage("out of stock") : null
    }, [])

  return (
    <>
        <div className="container productDetails">
            <div className="img-area">
                <img src={props.imgURL} alt={props.name} />
            </div>
            <div className="text-area">
                <h1>{props.name}</h1>
                <p>{props.description}</p>
                <span>{props.price}$</span>
                <span className="stock">stock : {stockCalcul}</span>
                <form onSubmit={handleSubmit}>
                    <div className="controllQuantity">
                        <input type="button" value="+" onClick={() => handleQuantityChange(quantity + 1)} disabled={(stockCalcul === 0)} />
                        <input
                            className="quantityField"
                            type="number"
                            min={1}
                            max={stockCalcul}
                            value={(stockCalcul === 0) ? 0 : quantity}
                            onChange={(e) => handleQuantityChange(Number(e.target.value))}
                        />
                        <input type="button" value="-" onClick={() => handleQuantityChange(quantity - 1)} disabled={(stockCalcul === 0)} />
                        <p className="errorMessage">
                            {(quantity === 1 || quantity === stockCalcul) ? errorMessage : (stockCalcul === 0) && "out of stock"}
                        </p>

                    </div>
                    <input type="submit" value="Add To Cart" disabled={(stockCalcul === 0)} /> 
                    
                </form>
            </div>
        </div>
    </>
  )
}

export default ProductDetails