import { FormEvent, useState } from "react";

interface Product {
    id: number;
    name: string;
    price: number;
    // Add other properties specific to your product
}

interface AddToCartFunctionality {
    stock: number;
    Cart: Product[]; // Assuming Product is an object type
    Product: {};
    setCart: (cart: Product[]) => void; // Function to set the cart
}

const AddToCart = (props: AddToCartFunctionality) => {
    const [quantity, setQuantity] = useState(1);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        // Create a new copy of the Cart array with the new Product
        const updatedCart = [...props.Cart, props.Product];

        // Set the updated cart as the new state using the setCart function
        props.setCart(updatedCart);

        // Optionally, you can reset the quantity input field
        setQuantity(1);
    }

    return (
        <>
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
        </>
    )
}

export default AddToCart;
