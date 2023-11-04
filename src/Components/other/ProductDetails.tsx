import { FormEvent, useState } from "react";

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imgURL: string;
    stock: number;
}

const ProductDetails = (props : Product) => {
    const [quantity, setQuantity] = useState(1);

    const handleSubmit = (e : FormEvent) => {
        e.preventDefault();
    }

  return (
    <>
        <div className="container">
            <div className="img-area">
                <img src={props.imgURL} alt={props.name} />
            </div>
            <div className="text-area">
                <h1>{props.name}</h1>
                <p>{props.description}</p>
                <span>{props.price}</span>
                <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    min={1}
                    max={props.stock}
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                />
                <input type="submit" value="Add To Cart" />
            </form>
            </div>
        </div>
    </>
  )
}

export default ProductDetails